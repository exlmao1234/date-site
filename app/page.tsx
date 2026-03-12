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

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: "0%" }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 300, opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.05 }}
        >
          💗
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
    const duration = 3200;
    const interval = 40;

    const timer = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const nextStep = () => setStep((s) => s + 1);

  const handleNo = () => {
    setNoClicks((n) => Math.min(n + 1, 6));

    setNoPosition({
      x: Math.random() * 300 - 150,
      y: Math.random() * 200 - 100,
    });
  };

  const yesScale = 1 + noClicks * 0.1;
  const noScale = Math.max(1 - noClicks * 0.15, 0.4);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="text-center w-64">
          <div className="text-4xl mb-4">💗</div>

          <p className="text-xl font-semibold text-pink-600">
            for Mamiringui only...
          </p>

          <div className="w-full bg-pink-200 rounded-full h-3 mt-6 overflow-hidden">
            <div
              className="bg-pink-500 h-3"
              style={{ width: `${progress}%` }}
            ></div>
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

                  <h1 className="text-3xl font-semibold">hi baby</h1>

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

                  <h1 className="text-3xl font-semibold">
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
                <div className="space-y-8 relative">
                  <div className="text-4xl">♡</div>

                  <h1 className="text-3xl font-semibold">
                    would you like to go on a date with me?
                  </h1>

                  <div className="flex justify-center gap-6 pt-2 relative h-16">

                    <motion.button
                      onClick={() => setAccepted(true)}
                      style={{ scale: yesScale }}
                      className="bg-rose-400 text-white px-7 py-3 rounded-full"
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
                      className="bg-white border px-7 py-3 rounded-full absolute"
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

              <h1 className="text-3xl font-semibold">
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
                  <p className="text-lg font-semibold">💗 de: Papiringui</p>
                  <p className="text-lg font-semibold">💗 para: Mamiringui</p>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}