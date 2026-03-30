import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <SectionHeading
        title="Get In Touch"
        subtitle="Open to frontend-heavy product work, full stack roles, and consulting engagements."
      />

      <div className="glass-card mx-auto max-w-3xl p-8 text-center">
        <p className="mx-auto mb-4 max-w-2xl text-base text-text-secondary">
          If you are hiring for a team that needs polished interfaces,
          dependable backend delivery, and someone comfortable moving from
          product ideas to production releases, I would be glad to talk.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-text-muted">
          The fastest way to reach me is by email. I usually reply with
          availability, relevant work examples, and next steps for the project
          or role.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:axelauza97@hotmail.com"
            className="inline-block rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-purple/25"
          >
            Email Axel
          </a>
          <a
            href="https://www.linkedin.com/in/axelauza/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/20 px-8 py-4 text-lg font-medium text-text-primary transition-all hover:border-white/40 hover:bg-white/5"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
