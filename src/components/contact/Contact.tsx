"use client";

import { Mail, Globe, Instagram, Download } from "lucide-react";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full md:px-10 mt-20 pt-20 md:pt-0 md:mt-0 xl:mx-auto flex flex-col items-center">
      <h2 className="text-4xl px-4 text-white text-shadow font-bold mb-4 text-center">
        Let&#39;s Connect
      </h2>

      <div className="flex flex-wrap justify-around max-w-full text-zinc-400 text-xl py-10 px-4">
        <Link
          href="mailto:haswanthkumar278@gmail.com"
          aria-label="Email"
          target="_blank"
          className="hover:-translate-y-3 hover:text-white hover:rotate-12 transition-all duration-200 ease-out p-3"
        >
          <Mail />
        </Link>
        <Link
          href="https://discordapp.com/users/hasvvanth"
          aria-label="Discord"
          target="_blank"
          className="hover:-translate-y-3 hover:rotate-12 transition-all duration-200 ease-out p-3 hover:text-indigo-500"
        >
          <FaDiscord size={26} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/haswanthtamil"
          aria-label="Linkedin"
          target="_blank"
          className="hover:-translate-y-3 hover:rotate-12 transition-all duration-200 ease-out p-3 hover:text-[#0077B5]"
        >
          <FaLinkedin size={26} />
        </Link>
        <Link
          href="https://github.com/HaswanthTamil"
          aria-label="GitHub"
          target="_blank"
          className="hover:-translate-y-3 hover:rotate-12 transition-all duration-200 ease-out p-3 hover:text-[#181717]"
        >
          <FaGithub size={26} />
        </Link>
        <Link
          href="https://instagram.com/haswanthkumar"
          aria-label="Instagram"
          target="_blank"
          className="hover:-translate-y-3 hover:text-pink-500 hover:rotate-12 transition-all duration-200 ease-out p-3"
        >
          <Instagram />
        </Link>
        <Link
          href="https://bytesbrush.in/"
          aria-label="BytesBrush"
          target="_blank"
          className="hover:-translate-y-3 hover:text-green-600 hover:rotate-12 transition-all duration-200 ease-out p-3"
        >
          <Globe />
        </Link>
      </div>

      <div className="text-sm md:text-lg text-zinc-300 w-fit flex flex-col mx-auto gap-4">
        <div className="mx-auto w-fit font-mono text-zinc-400  md:tracking-widest">
          Based in India • Open to remote work
        </div>
      </div>

      <Link
        href="/Haswanth_Resume.pdf"
        download
        className="inline-flex items-center gap-2 px-5 py-2 my-20 mx-auto font-lexend font-semibold tracking-wide text-shadow text-white bg-gray-800/60 border border-gray-700/60 rounded-full hover:translate-x-3 transition shadow-md btn-shine"
      >
        <Download size={18} /> Download Resume
      </Link>
    </div>
  );
};

export default Contact;
