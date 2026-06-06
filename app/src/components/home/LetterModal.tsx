import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function LetterModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Letter card */}
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-text-dim hover:text-text transition-colors z-10"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="px-8 py-10">
              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl text-text tracking-tight">致你的一封信</h2>
                <div className="mt-3 mx-auto w-12 h-px bg-primary/40" />
              </div>

              {/* Letter body */}
              <div className="prose-readable mx-auto font-body text-[15px] leading-relaxed text-text/85 space-y-5">
                <p>亲爱的同学：</p>
                <p>你好，我是和枼，一名北大的本科在读学生，也是这个网站的搭建者。</p>
                <p>
                  非常感谢你打开这个页面，来到 Art of Math。在开始正式的学习之前，如果可以的话，我想耽误你几分钟时间，听我讲一个故事，和一个愿望。
                </p>
                <p>
                  我的九年义务教育生涯里，一直处于一个劣势竞争的姿态。从郊区的小学进入主城区最好的初中时，我发现即便普通班的孩子，也人均拿着小学奥赛的一等奖。好不容易靠努力挤进了尖子班，初三升高一大家开始备战竞赛时，我才发现，有的同龄人早在小学六年级就已经开始学习高中数学竞赛了，所以他们高一就能顺利拿到金牌、保送清北。当然，这里面也有我天赋不够的原因，最后我竞赛失利，高三只能退回来重新准备高考。
                </p>
                <p>
                  坦白讲，我实在不想体验这种差距带来的憋屈。那时候我就在想，能不能有更好的办法，让更多的学生在受限制的家庭背景和学校环境里，也能有渠道去打破这种由于资源不对等带来的信息差？
                </p>
                <p>
                  这就是 <span className="font-display italic text-primary">Art of Math</span>（artofmath.cn）诞生的原因。我想至少，从我最熟悉的高中数学领域开始努力。
                </p>
                <p>
                  这个网站是<strong className="text-text font-semibold">永久免费且完全开源</strong>的。这里面凝聚了我对高中数学体系化的完整认知，并配上了知识讲义和训练题集。它是我在这几年做数学辅导期间，阅读了非常多的专业文章和大佬的总结过后，倾尽心血做出来的成果。目前，网站暂时只上线了大家最头疼的圆锥曲线和导数板块，但其他的内容其实已经写的差不多了，后续会很快更新上去。
                </p>
                <p>
                  我想向你保证的是，我不会在这个网站里做非常困难、超出高考需要的内容用来秀技；我也绝不会只做基础的部分，而把难点热点藏起来让你付费解锁。
                </p>
                <p>
                  这个网页的使命只有一个，那就是：<strong className="text-text font-semibold">致力于消除高中数学学习的信息差，让更多的学生尽量了解到高中数学的全貌。</strong>我不希望有任何人，因为学校层次和家庭背景的限制，接触不到核心的思维和资料；我不希望大家为了落后在起跑线上，而感到遗憾不平。
                </p>
                <p>
                  网站里包含了我的很多构思。比如，你需要在一轮完整的选题训练里独立做出前两道简单题，才算通过；而一个章节的所有知识点都通关过后，才会解锁更难的进阶章节。当你完整地学完一个板块后，它不仅是你的讲义库、题库，更是一个属于高中数学领域的维基百科。
                </p>
                <p>
                  我只有一个人，没有团队，更不会做营销。所以我真心地希望，如果你觉得它对你有帮助，请把它分享给身边的学生、朋友，让这个网站流转到真正需要它的人手中。
                </p>
                <p>这不仅是让它完成它的使命，也是在帮我完成我的愿望。</p>

                {/* Divider */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-text-dim text-xs">✦</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                <p>
                  目前网站还在持续更新中，如果大家在使用过程中遇到了任何问题、或者发现了内容上的错误，随时欢迎通过私信或反馈渠道和我沟通。
                </p>
                <p>谢谢你愿意花费宝贵的几分钟读完这封信。愿每一个在深夜挑灯夜读的同学，都能在这里找到通往梦想的方向。</p>
                <p>加油，我们在更高处见！</p>

                <div className="pt-4">
                  <p className="font-display text-text/90">和枼</p>
                  <p className="text-sm text-text-dim mt-1">写于北京·北大校园</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
