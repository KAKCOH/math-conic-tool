import { useEffect, useRef, useState } from 'react';
import katex from 'katex';

interface Props {
  content: string;
  onComplete?: () => void;
  onStartQuestions: () => void;
  showAutoStart: boolean;
}

function renderLatexInline(text: string): string {
  let html = text;
  // Inline math only — display math ($$...$$) is handled in lectureMarkdown preprocessing
  html = html.replace(/\$(.*?)\$/g, (_, formula) => {
    try {
      return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `<code>${formula}</code>`;
    }
  });
  return html;
}

function renderBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text font-semibold">$1</strong>');
}

function splitTableRow(row: string): string[] {
  const cells: string[] = [];
  let current = '';
  let inMath = false;
  let mathDelim = '';
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (row[i] === '$' && row[i + 1] === '$') {
      if (inMath && mathDelim === '$$') {
        inMath = false;
        mathDelim = '';
        current += '$$';
        i++;
        continue;
      } else if (!inMath) {
        inMath = true;
        mathDelim = '$$';
        current += '$$';
        i++;
        continue;
      }
    }
    if (ch === '$' && !(inMath && mathDelim === '$$')) {
      if (inMath && mathDelim === '$') {
        inMath = false;
        mathDelim = '';
        current += '$';
        continue;
      } else if (!inMath) {
        inMath = true;
        mathDelim = '$';
        current += '$';
        continue;
      }
    }
    if (ch === '|' && !inMath) {
      cells.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  cells.push(current.trim());
  return cells;
}

function renderTable(rows: string[]): string {
  if (rows.length < 2) return '';
  const renderRow = (row: string, tag: 'th' | 'td') => {
    const trimmed = row.replace(/^\|/, '').replace(/\|$/, '');
    const cells = splitTableRow(trimmed)
      .map(c => renderLatexInline(renderBold(c)));
    return `<tr>${cells.map(c => `<${tag}>${c}</${tag}>`).join('')}</tr>`;
  };
  const header = renderRow(rows[0], 'th');
  const body = rows.slice(2).map(r => renderRow(r, 'td')).join('');
  return `<div class="lecture-table-wrap my-4"><table class="lecture-table"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
}

function lectureMarkdown(text: string): string {
  // Pre-process multi-line $$...$$ blocks before line-by-line parsing
  const displayMathBlocks: string[] = [];
  const preprocessed = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, formula) => {
    try {
      const rendered = katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
      displayMathBlocks.push(`<div class="formula-block">${rendered}</div>`);
    } catch {
      displayMathBlocks.push(`<code>$${formula}$$</code>`);
    }
    return `\x00DM${displayMathBlocks.length - 1}\x00`;
  });

  const lines = preprocessed.split('\n');
  const result: string[] = [];
  let tableBuffer: string[] = [];
  let i = 0;
  let sectionIdx = 0;

  const flushTable = () => {
    if (tableBuffer.length > 0) {
      result.push(renderTable(tableBuffer));
      tableBuffer = [];
    }
  };

  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      tableBuffer.push(trimmed);
      i++;
      continue;
    } else {
      flushTable();
    }

    // Image: ![alt](url)
    const imgMatch = trimmed.match(/^!\[(.*)\]\((.+)\)$/);
    if (imgMatch) {
      const altRaw = imgMatch[1] || '';
      const rawSrc = imgMatch[2];
      const src = rawSrc.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + rawSrc : rawSrc;
      // Strip LaTeX markers for clean alt text
      const plainAlt = altRaw.replace(/\$[^$]*\$/g, '').replace(/\s+/g, ' ').trim();
      result.push(
        `<figure class="my-5 text-center">` +
        `<img src="${src}" alt="${plainAlt}" loading="lazy" class="max-w-full h-auto rounded-xl border border-white/10 hover:border-primary/25 transition-all duration-300 cursor-pointer" />` +
        `</figure>`
      );
      i++;
      continue;
    }

    // Empty line
    if (!trimmed) {
      result.push('<div class="h-1"></div>');
      i++;
      continue;
    }

    const rendered = renderBold(renderLatexInline(trimmed));

    if (trimmed.startsWith('## ')) {
      sectionIdx++;
      result.push(`<div class="lecture-section-header mt-10 mb-4 pb-2 border-b border-white/6"><h2 class="text-lg font-bold text-text">${rendered.slice(3)}</h2></div>`);
    } else if (trimmed.startsWith('### ')) {
      result.push(`<div class="lecture-section-header mt-8 mb-2"><h3 class="text-base font-semibold text-text flex items-center gap-2"><span class="w-1 h-4 rounded-full bg-primary/60 inline-block shrink-0"></span>${rendered.slice(4)}</h3></div>`);
    } else if (trimmed.startsWith('> ')) {
      result.push(`<blockquote class="border-l-2 border-primary/30 bg-primary/[0.03] rounded-r-lg pl-3 pr-3 py-1.5 my-2 text-text-muted">${rendered.slice(2)}</blockquote>`);
    } else if (/^[\d一二三四五六七八九十]+[\.\、]/.test(trimmed)) {
      result.push(`<p class="text-text/90 leading-relaxed ml-4 my-1">${rendered}</p>`);
    } else if (trimmed.startsWith('- ')) {
      result.push(`<p class="text-text/90 ml-4 my-0.5 flex gap-2"><span class="text-primary/40 shrink-0">—</span><span>${rendered.slice(2)}</span></p>`);
    } else {
      result.push(`<p class="text-text/90 leading-relaxed my-1.5">${rendered}</p>`);
    }
    i++;
  }

  flushTable();
  let html = result.join('\n');
  html = html.replace(/\x00DM(\d+)\x00/g, (_, idx) => displayMathBlocks[parseInt(idx)] || '');
  return html;
}

export function LectureView({ content, onComplete, onStartQuestions, showAutoStart }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Render markdown
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = lectureMarkdown(content);
    }
  }, [content]);

  // IntersectionObserver: scroll-triggered fade-in
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(
      'p, figure, .lecture-table-wrap, blockquote, .formula-block, .lecture-section-header'
    );
    elements.forEach(el => el.classList.add('lecture-reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [content]);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrolled = -Math.min(0, rect.top);
      const total = el.scrollHeight - viewH + rect.height;
      if (total > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (scrolled / total) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  return (
    <div className="space-y-4">
      {/* Reading progress bar */}
      <div className="progress-track sticky top-0 z-20 h-0.5 -mx-1">
        <div
          className="h-full rounded-full transition-all duration-150"
          style={{
            width: `${scrollPercent}%`,
            background: 'linear-gradient(90deg, oklch(0.62 0.20 250), oklch(0.74 0.12 250))',
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="p-6 rounded-xl bg-surface-card border border-white/10 text-sm leading-relaxed overflow-x-auto prose-readable mx-auto"
      />

      <div className="flex gap-3">
        {showAutoStart && onComplete && (
          <button
            onClick={onComplete}
            className="flex-1 py-3 rounded-xl bg-primary/80 hover:bg-primary text-white font-medium transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-primary/10"
          >
            阅读完毕，开始做题
          </button>
        )}
        {!showAutoStart && (
          <button
            onClick={onStartQuestions}
            className="flex-1 py-3 rounded-xl bg-primary/80 hover:bg-primary text-white font-medium transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-primary/10"
          >
            开始做题
          </button>
        )}
      </div>
    </div>
  );
}
