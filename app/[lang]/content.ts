// All visible copy lives here. Spanish is the source of truth; English must match its shape.
// TODO(solara): replace every item marked PLACEHOLDER with real data before launch.

export const BOOKING_URL = "https://cal.com/solara/descubrimiento"; // PLACEHOLDER
export const EMAIL = "hola@solara.studio"; // PLACEHOLDER

const es = {
  meta: {
    title: "Solara | Webs a medida para marcas premium",
    description:
      "Diseñamos y desarrollamos landing pages, e-commerce, plataformas de reservas y SaaS para marcas que venden a clientes de alto valor.",
  },
  nav: { services: "Servicios", work: "Trabajo", process: "Proceso", faq: "Preguntas", cta: "Reservar llamada" },
  hero: {
    title: "Webs a medida para marcas que cobran lo que",
    highlight: "valen.",
    body: "Landing pages, e-commerce y plataformas de reservas diseñadas para atraer clientes dispuestos a pagar más.",
    secondary: "Ver trabajo",
    imageAlt: "Escritorio de estudio con un portátil mostrando una web, iluminado por un rayo de sol",
  },
  about: {
    label: "El estudio",
    // *word* renders as a blue marker highlight
    lead: "Solara es un estudio de diseño y desarrollo web para negocios que venden a clientes exigentes.",
    body: "Diseñamos, construimos y mantenemos webs que convierten visitas en *reservas*, *ventas* y *clientes*.",
  },
  services: {
    title: "Todo lo que tu negocio necesita en la web.",
    items: [
      { name: "E-commerce", body: "Tiendas en Shopify o a medida, rápidas y preparadas para vender producto premium." },
      { name: "Reservas y citas", body: "Agenda online, pagos y recordatorios para clínicas, hoteles, restaurantes y estudios." },
      { name: "Landing pages", body: "Una página, un objetivo. Para campañas y lanzamientos donde cada visita cuenta." },
      { name: "SaaS y plataformas", body: "Aplicaciones web con cuentas, pagos y paneles, del MVP a la versión que escala." },
      { name: "Webs corporativas", body: "Sitios de marca con gestor de contenidos para que tu equipo publique sin depender de nadie." },
    ],
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos recientes",
    // PLACEHOLDER projects: swap names, sectors, scope and images for real case studies.
    items: [
      { name: "Casa Almendro", sector: "Hotel boutique", scope: "Web + motor de reservas directas", image: "almendro" },
      { name: "Nordvik Atelier", sector: "Moda de autor", scope: "E-commerce en Shopify", image: "nordvik" },
      { name: "Clínica Marès", sector: "Medicina estética", scope: "Web + citas y pagos online", image: "mares" },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    body: "Un proceso corto y transparente. Sabes qué pasa, cuándo y cuánto cuesta desde el primer día.",
    steps: [
      { name: "Descubrimiento", body: "Una llamada para entender tu negocio, tus clientes y tus objetivos. Salimos con alcance, plazos y precio cerrado." },
      { name: "Estrategia y diseño", body: "Estructura, textos y diseño visual en un prototipo que puedes navegar antes de escribir una línea de código." },
      { name: "Desarrollo", body: "Código a medida, rápido y optimizado para SEO. Revisiones semanales con una versión en vivo." },
      { name: "Lanzamiento y crecimiento", body: "Publicamos, medimos y te formamos. Después, soporte y mejoras continuas si lo necesitas." },
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
      { q: "¿Cuánto cuesta un proyecto?", a: "Cada proyecto es distinto. Tras la llamada de descubrimiento te enviamos una propuesta con precio cerrado, sin sorpresas." },
      // PLACEHOLDER timelines: adjust to your real delivery times.
      { q: "¿Cuánto tiempo se tarda?", a: "Una landing page, de 2 a 4 semanas. Un e-commerce o una web con reservas, de 6 a 10. Las plataformas SaaS dependen del alcance." },
      { q: "¿Podré editar la web yo mismo?", a: "Sí. Conectamos un gestor de contenidos para que cambies textos, imágenes y productos sin tocar código." },
      { q: "¿Qué pasa después del lanzamiento?", a: "Te entregamos todo: código, accesos y formación. Si quieres, seguimos contigo con un plan mensual de soporte y mejoras." },
      { q: "¿Trabajáis con clientes fuera de España?", a: "Sí. Trabajamos en remoto en español e inglés con clientes de Europa y América." },
    ],
  },
  cta: {
    title: "¿Tienes un proyecto en mente?",
    body: "30 minutos, sin compromiso. Hablamos de tu negocio y te decimos cómo lo haríamos.",
  },
  footer: { rights: "Todos los derechos reservados.", nav: "Navegación", contact: "Contacto", top: "Volver arriba" },
};

export type Content = typeof es;

const en: Content = {
  meta: {
    title: "Solara | Custom websites for premium brands",
    description:
      "We design and build landing pages, e-commerce, booking platforms and SaaS for brands that sell to high-value clients.",
  },
  nav: { services: "Services", work: "Work", process: "Process", faq: "FAQ", cta: "Book a call" },
  hero: {
    title: "Custom websites for brands that charge what they're",
    highlight: "worth.",
    body: "Landing pages, e-commerce and booking platforms designed to attract clients willing to pay more.",
    secondary: "See our work",
    imageAlt: "Studio desk with a laptop showing a website, lit by a beam of sunlight",
  },
  about: {
    label: "The studio",
    lead: "Solara is a web design and development studio for businesses that sell to demanding clients.",
    body: "We design, build and maintain websites that turn visits into *bookings*, *sales* and *clients*.",
  },
  services: {
    title: "Everything your business needs online.",
    items: [
      { name: "E-commerce", body: "Shopify or custom stores, fast and built to sell premium products." },
      { name: "Booking and appointments", body: "Online scheduling, payments and reminders for clinics, hotels, restaurants and studios." },
      { name: "Landing pages", body: "One page, one goal. For campaigns and launches where every visit counts." },
      { name: "SaaS and platforms", body: "Web apps with accounts, payments and dashboards, from MVP to the version that scales." },
      { name: "Company websites", body: "Brand sites with a CMS so your team can publish without depending on anyone." },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Recent projects",
    items: [
      { name: "Casa Almendro", sector: "Boutique hotel", scope: "Website + direct booking engine", image: "almendro" },
      { name: "Nordvik Atelier", sector: "Designer fashion", scope: "Shopify e-commerce", image: "nordvik" },
      { name: "Clínica Marès", sector: "Aesthetic medicine", scope: "Website + online appointments and payments", image: "mares" },
    ],
  },
  process: {
    title: "How we work",
    body: "A short, transparent process. You know what happens, when, and what it costs from day one.",
    steps: [
      { name: "Discovery", body: "A call to understand your business, your clients and your goals. We leave with scope, timeline and a fixed price." },
      { name: "Strategy and design", body: "Structure, copy and visual design in a clickable prototype before a single line of code." },
      { name: "Development", body: "Custom code, fast and SEO-ready. Weekly reviews on a live preview." },
      { name: "Launch and growth", body: "We ship, measure and train your team. After that, ongoing support and improvements if you need them." },
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
      { q: "How long does it take?", a: "A landing page, 2 to 4 weeks. An e-commerce or booking site, 6 to 10. SaaS platforms depend on scope." },
      { q: "Can I edit the site myself?", a: "Yes. We connect a CMS so you can change copy, images and products without touching code." },
      { q: "What happens after launch?", a: "You get everything: code, access and training. If you want, we stay on with a monthly support and improvements plan." },
      { q: "Do you work with clients outside Spain?", a: "Yes. We work remotely in Spanish and English with clients across Europe and the Americas." },
    ],
  },
  cta: {
    title: "Have a project in mind?",
    body: "30 minutes, no commitment. We talk about your business and tell you how we'd approach it.",
  },
  footer: { rights: "All rights reserved.", nav: "Navigation", contact: "Contact", top: "Back to top" },
};

export const content = { es, en };
export type Locale = keyof typeof content;
export const locales = Object.keys(content) as Locale[];
export const hasLocale = (l: string): l is Locale => l in content;
