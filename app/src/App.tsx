import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { ChapterPage } from './pages/ChapterPage';
import { NodePage } from './pages/NodePage';
import { WeeklyPage } from './pages/WeeklyPage';

function AmbientParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Large slow shapes */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.62 0.20 250 / 0.04), transparent 70%)',
          top: '10%', left: '-10%',
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.78 0.16 85 / 0.03), transparent 70%)',
          top: '60%', right: '-8%',
        }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.52 0.22 20 / 0.02), transparent 70%)',
          bottom: '5%', left: '30%',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/node/:nodeId" element={<NodePage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/math-conic-tool">
      <div className="min-h-screen bg-surface relative">
        <AmbientParticles />
        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
