import React from "react";
import { Github, ExternalLink } from "lucide-react";
import {
  FooterContactProps,
  ContactLink,
} from "@/types/footer-component-types";

/**
 * Contact section in the footer with GitHub links
 */
export function FooterContact({ isDark }: FooterContactProps) {
  const contactLinks: ContactLink[] = [
    { href: "https://github.com/iging", username: "iging" },
    { href: "https://github.com/znarf-y", username: "znarf-y" },
  ];

  return (
    <div className="md:col-span-4">
      <h3
        className={`${
          isDark ? "text-gray-200" : "text-gray-800"
        } mb-5 text-sm font-medium tracking-wide`}
      >
        Get In Touch
      </h3>
      <div className="space-y-3.5">
        {contactLinks.map((contact) => (
          <a
            key={contact.username}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center"
          >
            <div
              className={`h-8 w-8 rounded-full ${
                isDark
                  ? "border-white/10 bg-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/20"
                  : "border-purple-200 bg-purple-50 group-hover:border-purple-300 group-hover:bg-purple-100"
              } mr-3 flex items-center justify-center border transition-all duration-200`}
            >
              <Github
                className={`h-3.5 w-3.5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              />
            </div>
            <span
              className={`${
                isDark
                  ? "text-gray-400 group-hover:text-purple-300"
                  : "text-gray-600 group-hover:text-purple-600"
              } flex items-center text-sm transition-colors duration-200`}
            >
              {contact.username}
              <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
            </span>
          </a>
        ))}
        <p
          className={`${
            isDark ? "text-gray-500" : "text-gray-500"
          } pt-1 text-sm leading-relaxed`}
        >
          We'd love to hear your feedback or answer any questions you may have.
        </p>
      </div>
    </div>
  );
}
