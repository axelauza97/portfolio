import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/40">
      <div className="section-container py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-text-primary">
              Built by Axel Auza
            </p>
            <p className="text-sm text-text-secondary">
              Full Stack Developer focused on React, Django, and cloud-backed
              product engineering.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-4 text-sm text-text-secondary"
          >
            <a
              href="https://github.com/axelauza97"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/axelauza/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-cyan transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:axelauza97@hotmail.com"
              className="hover:text-accent-cyan transition-colors"
            >
              Email
            </a>
            <Link href="/privacy" className="hover:text-accent-cyan transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
