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

export default function LineUp() {
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
              LineUp
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Campus queue and vendor management platform for smarter ordering
              workflows.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              LineUp reduces crowding and streamlines food and service orders
              with remote queueing, real-time status, and operational analytics
              built for educational institutions.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center"
            >
              <Badge>Real-time queue tracking</Badge>
              <Badge>Vendor management</Badge>
              <Badge>Mobile-first</Badge>
              <Badge>Operational analytics</Badge>
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
                LineUp is designed to reduce queues and peak-time congestion
                inside campuses by enabling students to place orders remotely
                and monitor vendor wait times in real time.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The platform connects vendors, campus staff, and students
                through a centralized dashboard with live queue updates and
                order-management workflows.
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
              Key Features
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              <FeatureCard>Live queue status updates</FeatureCard>
              <FeatureCard>Vendor order management</FeatureCard>
              <FeatureCard>Student remote order workflow</FeatureCard>
              <FeatureCard>Analytics for peak hours</FeatureCard>
              <FeatureCard>Reduced physical crowding</FeatureCard>
              <FeatureCard>Scalable campus rollout</FeatureCard>
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
                  "Real-time DB layer",
                  "Order queue service",
                  "Vendor dashboard",
                  "Student mobile experience",
                  "Analytics and reporting",
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
                The platform is built for operational scalability, balancing a
                lightweight student experience with centralized vendor
                management and reporting across campus facilities.
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
              <Badge>RTDB</Badge>
              <Badge>Node.js</Badge>
              <Badge>Realtime analytics</Badge>
              <Badge>Mobile-first UX</Badge>
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-shadow mb-6">
              Long-term Vision
            </h2>
            <div className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-6 hover:border-gray-600/70 transition-colors duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Future growth includes multi-vendor campus rollouts, deeper
                analytics for crowd prediction, and seamless integration with
                campus services to minimize wait times and maximize operational
                efficiency.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Support for multiple vendor locations</li>
                <li>Predictive queue balancing</li>
                <li>Institution-wide deployment dashboards</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
