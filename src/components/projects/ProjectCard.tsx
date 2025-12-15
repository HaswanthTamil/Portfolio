"use client";

import Link from "next/link";
import React from "react";

export default function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div className="py-6 border-b border-gray-800">
        <div className="max-w-[80%] mx-auto">
          <div className="md:flex md:items-start md:justify-between md:gap-6">
            <h3 className="text-xl text-white font-poppins font-bold md:w-1/3">
              {title}
            </h3>
            <p className="text-sm text-gray-300 mt-2 md:mt-0 md:w-2/3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
