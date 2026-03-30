import SectionHeading from "@/components/common/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <SectionHeading
        title="Get In Touch"
        subtitle="I'm currently open to new opportunities"
      />

      <div className="mx-auto max-w-lg text-center">
        <p className="mb-8 text-text-secondary">
          Whether you have a question, a project idea, or just want to say hi,
          my inbox is always open.
        </p>
        <a
          href="mailto:axelauza97@hotmail.com"
          className="inline-block rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-purple/25"
        >
          Email Axel
        </a>
      </div>
    </section>
  );
}
