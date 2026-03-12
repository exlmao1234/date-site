"use client";
import React from "react";
import { motion } from "framer-motion";

function FloatingDecor() {
  const flowers = [
    { left: "8%", top: "12%", size: "text-3xl", delay: 0 },
    { left: "18%", top: "78%", size: "text-2xl", delay: 0.8 },
    { left: "82%", top: "16%", size: "text-3xl", delay: 0.4 },
    { left: "90%", top: "74%", size: "text-2xl", delay: 1.1 },
    { left: "50%", top: "10%", size: "text-2xl", delay: 0.6 },
    { left: "12%", top: "48%", size: "text-xl", delay: 1.4 },
    { left: "88%", top: "48%", size: "text-xl", delay: 1.7 },
  ];

  const hearts = [
    { left: "28%", top: "18%", delay: 0.2 },
    { left: "72%", top: "24%", delay: 0.9 },
    { left: "32%", top: "72%", delay: 1.2 },
    { left: "68%", top: "80%", delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map((item, i) => (
        <motion.div
          key={`flower-${i}`}
          className={`absolute ${item.size}`}
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
        >
          🌸
        </motion.div>
      ))}

      {hearts.map((item, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300 text-lg"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -10, 0], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: item.delay }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    left: 8 + i * 4.2,
    delay: i * 0.04,
    emoji: i % 3 === 0 ? "❤" : i % 3 === 1 ? "✿" : "✨",
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece, i) => (
        <motion.div
          key={i}
          className="absolute text-xl md:text-2xl"
          style={{ left: `${piece.left}%`, top: "8%" }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{ y: [0, 180, 320], opacity: [0, 1, 1, 0], rotate: [0, 30, -30, 0] }}
          transition={{ duration: 2.8, delay: piece.delay, ease: "easeOut" }}
        >
          {piece.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export default function CuteDateInviteWebsite() {
  const [step, setStep] = React.useState(0);
  const [noClicks, setNoClicks] = React.useState(0);
  const [accepted, setAccepted] = React.useState(false);

  const nextStep = () => setStep((s) => s + 1);

  const handleNo = () => {
    setNoClicks((n) => Math.min(n + 1, 6));
  };

  const yesScale = 1 + noClicks * 0.08;
  const noScale = Math.max(1 - noClicks * 0.12, 0.45);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-pink-100 flex items-center justify-center px-6 py-10 relative overflow-hidden">
      <FloatingDecor />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-full max-w-2xl"
      >
        <div className="rounded-[2rem] border border-rose-100 bg-white/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(244,114,182,0.12)] px-8 py-14 md:px-14 md:py-16 text-center">
          {!accepted ? (
            <>
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-7"
                >
                  <div className="text-4xl">🌸</div>
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">hi baby</h1>
                  <button
                    onClick={nextStep}
                    className="text-base md:text-lg underline underline-offset-4 text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    click here
                  </button>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-7"
                >
                  <div className="text-4xl">💌</div>
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                    i wanna ask you something
                  </h1>
                  <button
                    onClick={nextStep}
                    className="text-base md:text-lg underline underline-offset-4 text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    click here
                  </button>
                </motion.div>
              )}

              {step >= 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="text-4xl">♡</div>
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                    would you like to go on a date with me?
                  </h1>

                  <div className="flex items-center justify-center gap-4 pt-2 flex-wrap">
                    <button
                      onClick={() => setAccepted(true)}
                      className="border border-rose-200 bg-rose-400 text-white px-7 py-3 rounded-full shadow-sm transition-all duration-200 hover:bg-rose-500"
                      style={{ transform: `scale(${yesScale})` }}
                    >
                      yes
                    </button>

                    <button
                      onClick={handleNo}
                      className="border border-gray-200 bg-white text-gray-700 px-7 py-3 rounded-full transition-all duration-200"
                      style={{ transform: `scale(${noScale})` }}
                    >
                      no
                    </button>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 relative"
            >
              <ConfettiBurst />
              <div className="text-5xl">🌷💗✨</div>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                i want you to go out with me friday 7pm
                <br />
                you and me and some sushi yuju
              </h1>
              <div className="mt-6 flex justify-center">
                <div className="rounded-[1.5rem] border border-rose-200 bg-white/80 p-3 shadow-sm">
                  <img
                    src="/bears.jpg"
                    alt="cute bears"
                    className="w-44 md:w-56 rounded-[1.2rem] object-cover"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-start">
                <div className="text-left text-rose-500">
                  <p className="text-lg md:text-xl font-medium">see you friday pretty girl ♡</p>
                  <div className="mt-4 inline-block rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 shadow-sm">
                    <p className="text-base md:text-lg font-semibold">💗 de: Papiringui</p>
                    <p className="text-base md:text-lg font-semibold mt-1">💗 para: Mamiringui</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
