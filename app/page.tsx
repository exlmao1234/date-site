"use client";

import React from "react";
import { motion } from "framer-motion";

function FloatingDecor() {
  const flowers = [
    { left: "8%", top: "12%" },
    { left: "18%", top: "78%" },
    { left: "82%", top: "16%" },
    { left: "90%", top: "74%" },
    { left: "50%", top: "10%" },
    { left: "12%", top: "48%" },
    { left: "88%", top: "48%" },
  ];

  const hearts = [
    { left: "28%", top: "18%" },
    { left: "72%", top: "24%" },
    { left: "32%", top: "72%" },
    { left: "68%", top: "80%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map((item, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute text-3xl"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
        >
          🌸
        </motion.div>
      ))}

      {hearts.map((item, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300 text-lg"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.3 }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 18 }, (_, i) => ({
    left: `${8 + i * 5}%`,
    delay: i * 0.04,
    emoji: i % 3 === 0 ? "💗" : i % 3 === 1 ? "✨" : "🌸",
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: piece.left, top: "0%" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 260, opacity: [0, 1, 0], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 2.2, delay: piece.delay }}
        >
          {piece.emoji}
        </motion.div>
      ))}
    </div>
  );
}

export default function CuteDateInviteWebsite() {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [accepted, setAccepted] = React.useState(false);
  const [noClicks, setNoClicks] = React.useState(0);
  const [noPosition, setNoPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 180);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const nextStep = () => setStep((s) => s + 1);

  const handleNo = () => {
    setNoClicks((n) => Math.min(n + 1, 6));
    setNoPosition({
      x: Math.random() * 220 - 110,
      y: Math.random() * 100 - 50,
    });
  };

  const yesScale = 1 + noClicks * 0.08;
  const noScale = Math.max(1 - noClicks * 0.12, 0.45);

  if (loading) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center px-6">
        <div className="text-center w-72">
          <div className="text-4xl mb-4">💗</div>
          <p className="text-xl font-semibold text-pink-600">
            for Mamiringui only...
          </p>

          <div className="w-full bg-pink-200 rounded-full h-3 mt-6 overflow-hidden">
            <div
              className="bg-pink-500 h-3 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm mt-2 text-pink-500">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-pink-100 flex items-center justify-center px-6 py-10 relative overflow-hidden">
      <FloatingDecor />

      <div className="relative w-full max-w-2xl">
        <div className="rounded-[2rem] border border-rose-100 bg-white/90 shadow-xl px-8 py-14 text-center">
          {!accepted ? (
            <>
              {step === 0 && (
                <div className="space-y-7">
                  <div className="text-4xl">🌸</div>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    hi baby
                  </h1>
                  <button
                    onClick={nextStep}
                    className="text-lg underline text-rose-500"
                  >
                    click here
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-7">
                  <div className="text-4xl">💌</div>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    i wanna ask you something
                  </h1>
                  <button
                    onClick={nextStep}
                    className="text-lg underline text-rose-500"
                  >
                    click here
                  </button>
                </div>
              )}

              {step >= 2 && (
                <div className="space-y-8">
                  <div className="text-4xl text-gray-300">♡</div>

                  <h1 className="text-3xl font-semibold text-gray-900">
                    would you like to go on a date with me?
                  </h1>

                  <div className="relative mx-auto mt-2 h-28 w-full max-w-md">
                    <motion.button
                      onClick={() => setAccepted(true)}
                      style={{ scale: yesScale }}
                      className="absolute left-[calc(50%-110px)] top-1/2 -translate-y-1/2 bg-rose-400 text-white px-8 py-3 rounded-full shadow-md"
                    >
                      yes
                    </motion.button>

                    <motion.button
                      onClick={handleNo}
                      animate={{
                        x: noPosition.x,
                        y: noPosition.y,
                        scale: noScale,
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 14 }}
                      className="absolute left-[calc(50%+25px)] top-1/2 -translate-y-1/2 bg-white border border-rose-300 text-gray-700 px-8 py-3 rounded-full shadow-sm"
                    >
                      no
                    </motion.button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-6 relative">
              <ConfettiBurst />

              <div className="text-5xl">🌷💗✨</div>

              <h1 className="text-3xl font-semibold text-gray-900">
                i want you to go out with me friday 7pm
                <br />
                you and me and some sushi yuju
              </h1>

              <div className="flex justify-center mt-6">
                <div className="bg-white border border-rose-200 p-3 rounded-xl shadow">
                  <img
                    src="/bears.jpg"
                    alt="cute bears"
                    className="w-40 rounded-lg"
                  />
                </div>
              </div>

              <p className="text-rose-500 text-lg">
                see you friday pretty girl ♡
              </p>

              <div className="flex justify-start mt-6">
                <div className="bg-white border border-rose-200 px-4 py-3 rounded-xl shadow text-left">
                  <p className="text-lg font-semibold text-gray-800">
                    💗 de: Papiringui
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    💗 para: Mamiringui
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}