import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-purple-light">
          What I Do
        </h2>
        <h3 className="mb-16 text-center text-3xl font-bold md:text-4xl">
          <span className="text-gradient-purple">Services</span>
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-glow rounded-xl border border-purple-primary/10 bg-surface p-6"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
