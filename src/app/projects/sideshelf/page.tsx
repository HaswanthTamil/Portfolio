"use client";

import Image from "next/image";
import backgroundImage from "@/assets/bg.png";
import { motion } from "framer-motion";

/* ---------------- Animations ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* ---------------- UI Components ---------------- */

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    variants={fadeUp}
    className="inline-block bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm font-mono mr-2 mb-2 hover:-translate-y-0.5 transition-transform duration-200"
  >
    {children}
  </motion.span>
);

const FeatureCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-4"
  >
    {children}
  </motion.div>
);

/* ---------------- Page ---------------- */

export default function SideShelf() {
  return (
    <>
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="background image"
        className="fixed top-0 left-0 w-screen h-screen object-cover object-left-top -z-50"
      />

      <div className="absolute inset-0 -z-10">
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-45" />
        <div
          className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-black/30 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at 25% 50%, transparent 80px, black 700px)",
            maskImage:
              "radial-gradient(circle at 25% 50%, transparent 80px, black 700px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative min-h-screen text-white px-4 md:px-10 py-20">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Hero */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4">
              SideShelf
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              System-wide Android side tray overlay for clipboard productivity
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              A lightweight productivity layer that provides instant access to
              clipboard history for text and images, accessible from anywhere on
              your Android device.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center"
            >
              <Badge>Kotlin</Badge>
              <Badge>Android SDK</Badge>
              <Badge>WindowManager</Badge>
              <Badge>ClipboardManager</Badge>
            </motion.div>
          </motion.section>

          {/* Overview */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Overview
            </h2>

            <div className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-6 hover:border-gray-600/70 transition-colors duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                SideShelf is a system-wide Android side tray overlay that
                provides fast clipboard access for text and images — accessible
                from anywhere on the device.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                It is designed as a lightweight productivity layer that sits
                above apps and improves copy–paste workflows.
              </p>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Features (Mobile v1)
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              <FeatureCard>Clipboard history for copied text</FeatureCard>
              <FeatureCard>Image clipboard support</FeatureCard>
              <FeatureCard>Delete individual entries</FeatureCard>
              <FeatureCard>Clear all clipboard items</FeatureCard>
              <FeatureCard>System-wide side tray overlay</FeatureCard>
              <FeatureCard>Instant access from any screen</FeatureCard>
            </motion.div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Architecture Overview
            </h2>

            <div className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-6 hover:border-gray-600/70 transition-colors duration-300">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-4 mb-6"
              >
                {[
                  "SYSTEM_ALERT_WINDOW",
                  "ClipboardManager",
                  "WindowManager",
                  "Background Service",
                  "Local persistent storage",
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="font-mono font-bold text-white bg-gray-800/50 p-2 rounded"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-gray-300 text-lg leading-relaxed">
                The overlay service runs as a background process with
                SYSTEM_ALERT_WINDOW permission, allowing it to display above all
                other applications. It monitors clipboard changes via
                ClipboardManager and maintains a persistent local database for
                history storage.
              </p>
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Tech Stack
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap"
            >
              <Badge>Kotlin</Badge>
              <Badge>Android SDK</Badge>
              <Badge>WindowManager API</Badge>
              <Badge>ClipboardManager</Badge>
              <Badge>XML Layouts</Badge>
              <Badge>Background Service Architecture</Badge>
            </motion.div>
          </motion.section>

          {/* Design Goals */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Design Goals
            </h2>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                "System-level utility",
                "Fast & minimal UI",
                "Lightweight",
                "Offline-first",
              ].map((goal) => (
                <motion.li
                  key={goal}
                  variants={fadeUp}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-4" />
                  {goal}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Status */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Status
            </h2>

            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-800/60 border border-gray-700/60 px-4 py-2 rounded-full text-sm font-mono font-bold text-white hover:border-gray-600/70 transition-colors duration-300">
                Mobile version complete (Personal Use)
              </span>

              <span className="bg-gray-800/60 border border-gray-700/60 px-4 py-2 rounded-full text-sm font-mono font-bold text-white hover:border-gray-600/70 transition-colors duration-300">
                Desktop companion planned
              </span>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
