import Link from "next/link";
import { Github, Twitter, Linkedin, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 px-6 md:px-12 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-xs">
          © {new Date().getFullYear()} ClerkAuth. All rights reserved. Built by{" "}
          <Link
            href="https://thedanieldallas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Daniel Dallas
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/DanielDallas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/thedanieldallas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/danieldallasokoye/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://medium.com/@thedanieldallas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors"
            aria-label="Medium"
          >
            <FileText className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
