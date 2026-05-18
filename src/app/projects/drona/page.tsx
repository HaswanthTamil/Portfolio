"use client";

import Image from "next/image";
import backgroundImage from "@/assets/bg.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

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
    className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-5"
  >
    {children}
  </motion.div>
);

export default function Drona() {
  return (
    <>
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
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4">
              Drona
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Campus digital infrastructure platform for unified institutional
              workflows.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Drona bridges announcements, resource access, communication, and
              campus operations into a centralized role-based platform built for
              institutional scale and long-term extensibility.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center"
            >
              <Badge>Role-based Access</Badge>
              <Badge>Responsive UI</Badge>
              <Badge>Real-time updates</Badge>
              <Badge>Cloud-ready</Badge>
            </motion.div>
          </motion.section>

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
                Drona is a campus-focused digital infrastructure platform
                designed to modernize academic and institutional workflows. It
                unifies announcements, student utilities, internal
                communication, and operational management into one centralized
                platform.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The platform is built with scalability and modularity in mind,
                enabling institutions to evolve without rebuilding the core
                architecture for each new department or integration.
              </p>
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Key Capabilities
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              <FeatureCard>
                Student, faculty, and admin role separation
              </FeatureCard>
              <FeatureCard>
                Centralized announcements and resource delivery
              </FeatureCard>
              <FeatureCard>
                Responsive dashboards for mobile and desktop
              </FeatureCard>
              <FeatureCard>
                Workflow handling with approval and notifications
              </FeatureCard>
              <FeatureCard>
                Modular services for future automation and AI
              </FeatureCard>
              <FeatureCard>Institution-wide operational visibility</FeatureCard>
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Architecture
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
                  "Role-based modules",
                  "API-first backend",
                  "Cloud-ready deployment",
                  "Real-time notifications",
                  "Modular integration layer",
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
                The system prioritizes maintainability with a systems-first
                mindset, using clean separation between user roles and decoupled
                services for announcements, analytics, and resource workflows.
              </p>
            </div>
          </motion.section>

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
              <Badge>Next.js</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Node.js / Express</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Web Sockets</Badge>
              <Badge>Cloud deployment</Badge>
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Future Focus
            </h2>
            <div className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-6 hover:border-gray-600/70 transition-colors duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Drona's roadmap includes AI-driven automation for approvals,
                intelligent notifications, and deeper campus analytics while
                preserving a clean, scalable foundation for future institutional
                services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>AI-assisted workflow orchestration</li>
                <li>Adaptive notifications and personalization</li>
                <li>Multi-campus integration and federation</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
