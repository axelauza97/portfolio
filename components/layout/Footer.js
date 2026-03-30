import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-muted">
            Built with Next.js &amp; Tailwind CSS
          </p>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-6 text-sm text-text-muted"
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
