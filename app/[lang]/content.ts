// All visible copy lives here. Spanish is the source of truth; English must match its shape.
// TODO(solara): replace every item marked PLACEHOLDER with real data before launch.

export const BOOKING_URL = "https://cal.com/solaranor/descubrimiento"; // PLACEHOLDER
export const EMAIL = "hola@solaranor.com"; // PLACEHOLDER

const es = {
  meta: {
    title: "Solara Nor | Diseño e ingeniería de software a medida",
    description:
      "Estudio de diseño e ingeniería de software. Construimos plataformas SaaS, e-commerce, sistemas de reservas y webs de alto rendimiento.",
  },
  nav: { services: "Servicios", work: "Trabajo", process: "Proceso", faq: "Preguntas", cta: "Reservar llamada" },
  hero: {
    title: "Diseñamos y construimos software que",
    highlight: "dura.",
    body: "Solara Nor es un estudio de diseño e ingeniería. Plataformas SaaS, e-commerce y sistemas de reservas, hechos por un mismo equipo senior de principio a fin.",
    secondary: "Ver trabajo",
  },
  about: {
    label: "El estudio",
    lead: "Nor significa «nuevo» en armenio. Es lo que hacemos cada día: producto nuevo, construido con criterio de ingeniería.",
    // *word* renders as a blue marker highlight
    body: "Diseño, desarrollo y producto en un solo equipo, para que cada decisión pese el *usuario*, el *código* y el *negocio*.",
  },
  services: {
    title: "Lo que construimos.",
    items: [
      { name: "Plataformas SaaS", body: "Producto completo: cuentas, pagos, paneles y APIs. Del MVP a la versión que escala a miles de usuarios." },
      { name: "E-commerce", body: "Tiendas en Shopify o a medida, rápidas, conectadas al inventario y listas para vender a escala." },
      { name: "Sistemas de reservas", body: "Agenda, pagos y recordatorios para clínicas, hoteles y restaurantes, integrados con las herramientas que ya usan." },
      { name: "Webs y landing pages", body: "Sitios de marca y páginas de campaña con carga instantánea, SEO técnico y un gestor de contenidos sencillo." },
      { name: "Integraciones", body: "Conectamos CRM, ERP, pasarelas de pago y APIs de terceros para que los datos fluyan sin trabajo manual." },
    ],
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos recientes",
    // PLACEHOLDER projects: swap names, sectors, scope and images for real case studies.
    items: [
      { name: "Casa Almendro", sector: "Hotel boutique", scope: "Web + motor de reservas directas", image: "almendro" },
      { name: "Nordvik Atelier", sector: "Moda de autor", scope: "E-commerce en Shopify", image: "nordvik" },
      { name: "Clínica Marès", sector: "Medicina estética", scope: "Plataforma de citas y pagos online", image: "mares" },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    body: "Un solo equipo senior de principio a fin. Alcance, plazos y precio cerrados antes de empezar, y una versión en vivo cada semana.",
    steps: [
      { name: "Descubrimiento", body: "Entendemos el negocio, los usuarios y las restricciones técnicas. Salimos con alcance, plazos y precio cerrado." },
      { name: "Diseño de producto", body: "Arquitectura, flujos y diseño visual en un prototipo navegable, validado antes de escribir una línea de código." },
      { name: "Ingeniería", body: "Código tipado, probado y documentado. Revisiones semanales sobre una versión en vivo." },
      { name: "Lanzamiento y evolución", body: "Desplegamos, monitorizamos y medimos. Después seguimos iterando junto a tu equipo." },
    ],
  },
  quote: {
    // PLACEHOLDER testimonial
    body: "Por fin tenemos una web a la altura del hotel. Las reservas directas ya no dependen de las plataformas.",
    name: "Lucía Ferrer",
    role: "Directora, Casa Almendro",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Cuánto cuesta un proyecto?", a: "Cada proyecto es distinto. Tras la llamada de descubrimiento enviamos una propuesta con precio cerrado, sin sorpresas." },
      // PLACEHOLDER timelines and stack: adjust to the real ones.
      { q: "¿Cuánto se tarda?", a: "Una web o landing, de 2 a 4 semanas. Un e-commerce o un sistema de reservas, de 6 a 10. Las plataformas SaaS, según alcance." },
      { q: "¿Con qué tecnologías trabajáis?", a: "TypeScript, React, Next.js y Node en la mayoría de proyectos, y Shopify para e-commerce. Si ya tienes un stack, trabajamos sobre él." },
      { q: "¿Qué pasa después del lanzamiento?", a: "El código, los accesos y la documentación son tuyos. Si quieres, seguimos con un plan mensual de soporte y evolución." },
      { q: "¿Trabajáis con clientes fuera de España?", a: "Sí. Trabajamos en remoto, en español e inglés, con clientes de Europa y América." },
    ],
  },
  cta: {
    title: "Construyamos lo que viene.",
    body: "Una llamada de 30 minutos con las personas que construirían tu proyecto. Sin compromiso.",
  },
  footer: { rights: "Todos los derechos reservados.", nav: "Navegación", contact: "Contacto", top: "Volver arriba" },
};

export type Content = typeof es;

const en: Content = {
  meta: {
    title: "Solara Nor | Custom software design and engineering",
    description:
      "A software design and engineering studio. We build SaaS platforms, e-commerce, booking systems and high-performance websites.",
  },
  nav: { services: "Services", work: "Work", process: "Process", faq: "FAQ", cta: "Book a call" },
  hero: {
    title: "We design and build software that",
    highlight: "lasts.",
    body: "Solara Nor is a design and engineering studio. SaaS platforms, e-commerce and booking systems, built by one senior team from first sketch to production.",
    secondary: "See our work",
  },
  about: {
    label: "The studio",
    lead: "Nor means “new” in Armenian. It's what we do every day: new products, built to engineering standards.",
    body: "Design, engineering and product sit in one team, so every decision weighs the *user*, the *code* and the *business*.",
  },
  services: {
    title: "What we build.",
    items: [
      { name: "SaaS platforms", body: "The full product: accounts, billing, dashboards and APIs. From MVP to the version that scales to thousands of users." },
      { name: "E-commerce", body: "Shopify or custom stores, fast, wired into your inventory and ready to sell at scale." },
      { name: "Booking systems", body: "Scheduling, payments and reminders for clinics, hotels and restaurants, connected to the tools they already use." },
      { name: "Websites and landing pages", body: "Brand sites and campaign pages with instant load times, technical SEO and a simple CMS." },
      { name: "Integrations", body: "We connect CRMs, ERPs, payment gateways and third-party APIs so data moves without manual work." },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Recent projects",
    items: [
      { name: "Casa Almendro", sector: "Boutique hotel", scope: "Website + direct booking engine", image: "almendro" },
      { name: "Nordvik Atelier", sector: "Designer fashion", scope: "Shopify e-commerce", image: "nordvik" },
      { name: "Clínica Marès", sector: "Aesthetic medicine", scope: "Online appointments and payments platform", image: "mares" },
    ],
  },
  process: {
    title: "How we work",
    body: "One senior team from start to finish. Scope, timeline and price fixed before we begin, and a live build every week.",
    steps: [
      { name: "Discovery", body: "We map the business, the users and the technical constraints. We leave with scope, timeline and a fixed price." },
      { name: "Product design", body: "Architecture, flows and visual design in a clickable prototype, validated before a single line of code." },
      { name: "Engineering", body: "Typed, tested, documented code. Weekly reviews on a live build." },
      { name: "Launch and evolution", body: "We deploy, monitor and measure. Then we keep iterating alongside your team." },
    ],
  },
  quote: {
    body: "We finally have a website that matches the hotel. Direct bookings no longer depend on the platforms.",
    name: "Lucía Ferrer",
    role: "Director, Casa Almendro",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "How much does a project cost?", a: "Every project is different. After the discovery call we send a proposal with a fixed price, no surprises." },
      { q: "How long does it take?", a: "A website or landing page, 2 to 4 weeks. An e-commerce or booking system, 6 to 10. SaaS platforms depend on scope." },
      { q: "What technologies do you use?", a: "TypeScript, React, Next.js and Node on most projects, and Shopify for e-commerce. If you already have a stack, we build on it." },
      { q: "What happens after launch?", a: "The code, access and documentation are yours. If you want, we stay on with a monthly support and evolution plan." },
      { q: "Do you work with clients outside Spain?", a: "Yes. We work remotely, in Spanish and English, with clients across Europe and the Americas." },
    ],
  },
  cta: {
    title: "Let's build what's next.",
    body: "A 30-minute call with the people who would build your project. No commitment.",
  },
  footer: { rights: "All rights reserved.", nav: "Navigation", contact: "Contact", top: "Back to top" },
};

export const content = { es, en };
export type Locale = keyof typeof content;
export const locales = Object.keys(content) as Locale[];
export const hasLocale = (l: string): l is Locale => l in content;
