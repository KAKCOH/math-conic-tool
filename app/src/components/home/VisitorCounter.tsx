import { useEffect, useState } from 'react';

const NAMESPACE = 'artofmath-site';
const KEY = 'visits';
const COUNTED_KEY = 'artofmath-visitor-counted';

async function fetchCount(increment: boolean): Promise<number | null> {
  const action = increment ? 'hit' : 'get';
  try {
    const resp = await fetch(`https://api.countapi.xyz/${action}/${NAMESPACE}/${KEY}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    return data.value as number;
  } catch {
    return null;
  }
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = localStorage.getItem(COUNTED_KEY);

    fetchCount(!alreadyCounted).then(c => {
      if (c != null) {
        setCount(c);
        if (!alreadyCounted) {
          localStorage.setItem(COUNTED_KEY, '1');
        }
      }
    });
  }, []);

  if (count == null) return null;

  return (
    <div className="inline-flex items-center gap-2 text-xs text-text-dim/50">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="font-mono tabular-nums">{count.toLocaleString()}</span>
      <span>位同学来过</span>
    </div>
  );
}
