import React from "react";
// If Lucide or Heroicons are not installed, user will need to install them. We'll use lucide-react for this example.
import { Mail, Github, Linkedin, Twitter, Youtube, ArrowUp } from "lucide-react";

const links = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Developer Docs", href: "/docs" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { name: "Twitter/X", href: "https://twitter.com/", icon: Twitter },
  { name: "YouTube", href: "https://youtube.com/", icon: Youtube },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 border-t border-gray-700 mt-12 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Quick Links */}
        <nav aria-label="Quick Links" className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200 hover:text-white focus:outline-none focus:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Contact */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:cyberguard@example.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200 hover:text-white focus:outline-none focus:text-primary"
              >
                <Mail size={18} aria-hidden="true" /> cyberguard@example.com
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <span className="sr-only">Phone:</span>
                <span>+1 (555) 123-4567</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center gap-2">
                <span className="sr-only">Office:</span>
                <span>123 Cyber St, Secure City</span>
              </span>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <div className="flex flex-col items-start">
          <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
          <div className="flex flex-row gap-4">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="opacity-60 hover:opacity-100 hover:scale-110 transition-transform duration-200 text-white"
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom line */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="mb-2 p-2 rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-200"
        >
          <ArrowUp size={18} />
        </button>
        <span className="text-sm text-gray-500 text-center">© 2025 CyberGuard. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 