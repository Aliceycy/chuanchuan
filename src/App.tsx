/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import TextType from './components/TextType';

export default function App() {
  const [countdown, setCountdown] = useState(5);
  const [showMainTitle, setShowMainTitle] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowMainTitle(true);
    }
  }, [countdown]);

  return (
    <main className="relative w-full min-h-[100dvh] bg-[#660000] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        id="main-bg"
        className="absolute inset-0 z-0 pointer-events-none bg-[length:100%_100%] bg-no-repeat"
        style={{ backgroundImage: 'url("/bgpic.jpg")' }}
      />

      <div id="content-container" className="relative z-10 text-center px-4 w-full">
        <AnimatePresence mode="wait">
          {!showMainTitle ? (
            <motion.div
              key="countdown"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              exit={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-white font-serif text-9xl font-bold drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {countdown > 0 ? countdown : ""}
            </motion.div>
          ) : (
            <motion.div
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="mx-auto max-w-[90vw]"
            >
              <div id="main-title-stack" className="text-white font-serif flex flex-col gap-8 md:gap-12">
                <div className="relative">
                  <TextType 
                    text="《探索与争鸣》" 
                    as="h1" 
                    typingSpeed={120} 
                    initialDelay={200} 
                    loop={false}
                    showCursor={false}
                    className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-[0.3em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                  />
                </div>
                
                <div className="relative">
                  <TextType 
                    text="第七届（2026）全国青年理论创新奖征文正式启动" 
                    as="h2" 
                    typingSpeed={80} 
                    initialDelay={1800} 
                    loop={false}
                    showCursor={false}
                    className="text-xl sm:text-2xl md:text-5xl font-medium tracking-[0.15em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-relaxed"
                  />
                </div>

                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.8 }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                  className="mx-auto w-1/3 h-px bg-gradient-to-r from-transparent via-chinese-gold to-transparent"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative corners */}
      <div id="corner-tl" className="absolute top-10 left-10 w-24 h-24 border-t border-l border-chinese-gold opacity-20" />
      <div id="corner-tr" className="absolute top-10 right-10 w-24 h-24 border-t border-r border-chinese-gold opacity-20" />
      <div id="corner-bl" className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-chinese-gold opacity-20" />
      <div id="corner-br" className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-chinese-gold opacity-20" />
    </main>
  );
}
