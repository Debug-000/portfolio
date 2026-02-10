"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-900 pt-24 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-white font-black text-2xl tracking-tighter">
              SONI.DEV
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Senior Systems Engineer focused on building resilient,
              high-performance infrastructure and intuitive software interfaces.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 hover:bg-blue-600 rounded-lg text-slate-400 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Navigation
            </h5>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-slate-500 hover:text-cyan-400">
                  System Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-500 hover:text-cyan-400"
                >
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering"
                  className="text-slate-500 hover:text-cyan-400"
                >
                  Tech Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-500 hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Terminal Shortcuts
            </h5>
            <ul className="space-y-4 text-sm font-mono">
              <li>
                <span className="text-cyan-600">projects</span> - list projects
              </li>
              <li>
                <span className="text-cyan-600">open</span> - open case study
              </li>
              <li>
                <span className="text-cyan-600">skills</span> - list skills
              </li>
              <li>
                <span className="text-cyan-600">contact</span> - show contact
                info
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
              Status
            </h5>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-white uppercase">
                  Operational
                </span>
              </div>
              <div className="text-[10px] text-slate-500">
                Last deploy: 2024-05-12 <br />
                Environment: Production <br />
                Latency: 14ms
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Elisjon Portfolio. All rights reserved.
            Built with Go &amp; React.
          </div>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-white">
              Security Policy
            </a>
            <a href="#" className="hover:text-white">
              API Docs
            </a>
            <a href="#" className="hover:text-white">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
