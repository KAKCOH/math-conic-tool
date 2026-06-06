import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CornerFold() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Corner fold triangle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-0 right-0 z-50 w-[72px] h-[72px] cursor-pointer group"
        aria-label="关于我"
      >
        {/* Shadow under fold */}
        <div className="absolute top-0 right-0 w-0 h-0
          border-l-[72px] border-l-transparent
          border-t-[72px] border-t-white/[0.04]
          group-hover:border-t-white/[0.08]
          transition-colors duration-300"
        />
        {/* Fold triangle */}
        <div className="absolute top-0 right-0 w-0 h-0
          border-l-[72px] border-l-transparent
          border-t-[72px] border-t-primary/30
          group-hover:border-t-primary/50
          transition-colors duration-300 origin-top-right"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />
        {/* Pulse ring */}
        <div className="absolute top-[6px] right-[6px] w-[60px] h-[60px] rounded-full border border-primary/10 animate-pulse pointer-events-none"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
        />
        {/* "About" hint text along diagonal */}
        <span className="absolute top-[13px] right-[12px] text-[10px] text-primary/70 font-mono tracking-[0.12em] rotate-45 select-none group-hover:text-primary transition-colors">
          ABOUT
        </span>
      </button>

      {/* Overlay + Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Card */}
            <motion.div
              className="relative max-w-sm w-full bg-surface-card border border-white/10 rounded-2xl p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-text-dim hover:text-text transition-colors text-lg leading-none"
              >
                ×
              </button>

              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-5 mx-auto">
                🎓
              </div>

              {/* Bio */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-text">和枼</h3>
                <p className="text-sm text-text-muted mt-3 leading-relaxed">
                  北京大学本科在读
                </p>
                <p className="text-sm text-text-muted mt-1.5 leading-relaxed">
                  三年数学竞赛经历，失利后 7 个月复习高考，698 裸分被北大录取
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.06] my-5" />

              {/* Social */}
              <div className="text-center mb-6 space-y-4">
                <div>
                  <p className="text-xs text-text-dim mb-1.5">抖音</p>
                  <p className="text-sm text-text font-medium">和枼</p>
                  <p className="text-xs text-text-dim mt-0.5">数学辅导咨询</p>
                </div>
                <div>
                  <p className="text-xs text-text-dim mb-1.5">小红书</p>
                  <p className="text-sm text-text font-medium">和枼</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.06] my-5" />

              {/* QR Code placeholder */}
              <div className="text-center">
                <p className="text-xs text-text-dim mb-3">赞助是对我的最大鼓励</p>
                <img
                  src={import.meta.env.BASE_URL.replace(/\/$/, '') + '/收款码.jpg'}
                  alt="收款码"
                  className="w-40 h-40 mx-auto rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
