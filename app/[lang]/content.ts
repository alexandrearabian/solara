// All visible copy lives here. Spanish is the source of truth; English must match its shape.
// TODO(solara): replace every item marked PLACEHOLDER with real data before launch.

export const BOOKING_URL = "https://cal.com/solaranor/descubrimiento"; // PLACEHOLDER
export const EMAIL = "hola@solaranor.com"; // PLACEHOLDER

const es = {
  meta: {
    title: "Solara Nor | Diseño e ingeniería de software a medida",
    description: "Estudio de diseño e ingeniería. Construimos plataformas, tiendas, sistemas de reservas y webs.",
  },
  nav: { services: "Servicios", work: "Trabajo", process: "Proceso", faq: "Preguntas", cta: "Reservar llamada" },
  hero: {
    title: "Diseñamos y construimos software que",
    highlight: "dura.",
    body: "Un estudio pequeño. El mismo equipo diseña y programa tu producto, de la primera llamada a producción.",
    secondary: "Ver trabajo",
  },
  about: {
    label: "El estudio",
    lead: "Nor significa «nuevo» en armenio. Cada encargo sale hecho a medida, con criterio de ingeniería.",
    // *word* renders as a blue marker highlight
    body: "Diseño y código los lleva el mismo equipo. Una pantalla nueva tiene que servirle a quien la *usa* y a quien *paga*.",
  },
  services: {
    title: "Lo que construimos.",
    items: [
      {
        name: "Plataformas SaaS",
        body: "Cuentas, cobros, panel y API. Empezamos por el MVP y seguimos cuando entran usuarios.",
      },
      { name: "E-commerce", body: "Tiendas en Shopify o hechas a medida, conectadas a tu inventario." },
      {
        name: "Sistemas de reservas",
        body: "Agenda, cobro y recordatorios para clínicas, hoteles y restaurantes, unidos a las herramientas que ya usan.",
      },
      {
        name: "Webs y landing pages",
        body: "Sitios de marca y páginas de campaña. Tu equipo los edita desde un gestor simple.",
      },
      {
        name: "Integraciones",
        body: "Conectamos CRM, ERP, pasarelas y APIs, para que nadie copie datos a mano.",
      },
    ],
  },
  work: {
    title: "Proyectos recientes",
    external: "Se abre en otra pestaña",
    items: [
      {
        name: "Tadrón Teatro",
        href: "https://www.tadronteatro.com.ar/",
        body: "Una sala en Palermo, Buenos Aires. Cartelera de la semana, cursos e historia del teatro.",
        image: "/work/tadron.jpg",
      },
      {
        name: "Mar D Jabones",
        href: "https://www.mardjabones.com.ar/",
        body: "Catálogo de jabones y resinas hechos a mano. Los pedidos se cierran por Instagram.",
        image: "/work/mard.jpg",
      },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    body: "Un equipo senior, de la primera llamada al lanzamiento. Precio y plazos cerrados antes de programar. Cada semana hay una versión para revisar.",
    steps: [
      {
        name: "Descubrimiento",
        body: "Miramos el negocio, quién lo usa y qué no se puede romper. Sales con alcance, plazos y un precio cerrado.",
      },
      {
        name: "Diseño de producto",
        body: "Flujos y diseño en un prototipo que se puede clicar. Lo validamos antes de programar.",
      },
      { name: "Ingeniería", body: "Código en TypeScript, con tests. Cada semana revisamos la versión que está en vivo." },
      {
        name: "Lanzamiento y evolución",
        body: "Publicamos, miramos errores y números. Si quieres, seguimos después del lanzamiento.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Depende del proyecto. Después de la llamada te mandamos un precio cerrado.",
      },
      // PLACEHOLDER timelines: adjust to the real ones.
      {
        q: "¿Cuánto se tarda?",
        a: "Una web, entre 2 y 4 semanas. Una tienda o un sistema de reservas, entre 6 y 10. Una plataforma, según lo que incluya.",
      },
      {
        q: "¿Con qué tecnologías trabajáis?",
        a: "TypeScript, React, Next.js y Node. Shopify cuando la tienda lo pide. Si ya tienes un stack, trabajamos sobre ese.",
      },
      {
        q: "¿Qué pasa después del lanzamiento?",
        a: "El código, los accesos y la documentación quedan en tu cuenta. Hay un plan mensual si quieres que sigamos.",
      },
      {
        q: "¿Trabajáis con clientes fuera de España?",
        a: "Sí. Trabajamos en remoto, en español y en inglés.",
      },
    ],
  },
  cta: {
    title: "Cuéntanos el proyecto.",
    body: "30 minutos con quien lo construiría. Si no encaja, te lo decimos en esa llamada.",
  },
  footer: { rights: "Todos los derechos reservados.", nav: "Navegación", contact: "Contacto", top: "Volver arriba" },
};

export type Content = typeof es;

const en: Content = {
  meta: {
    title: "Solara Nor | Custom software design and engineering",
    description: "A design and engineering studio. We build platforms, stores, booking systems and websites.",
  },
  nav: { services: "Services", work: "Work", process: "Process", faq: "FAQ", cta: "Book a call" },
  hero: {
    title: "We design and build software that",
    highlight: "lasts.",
    body: "A small studio. The same team designs and builds your product, from the first call to production.",
    secondary: "See the work",
  },
  about: {
    label: "The studio",
    lead: "Nor means “new” in Armenian. Each project is custom, and we engineer it that way.",
    body: "The same team handles design and code. A new screen has to work for the person who *uses* it and the person who *pays*.",
  },
  services: {
    title: "What we build.",
    items: [
      {
        name: "SaaS platforms",
        body: "Accounts, billing, a dashboard and an API. We start with the MVP and keep going once users arrive.",
      },
      { name: "E-commerce", body: "Shopify or a custom store, connected to your inventory." },
      {
        name: "Booking systems",
        body: "Scheduling, payment and reminders for clinics, hotels and restaurants, tied to the tools they already use.",
      },
      {
        name: "Websites and landing pages",
        body: "Brand sites and campaign pages. Your team edits them from a simple CMS.",
      },
      {
        name: "Integrations",
        body: "We connect CRMs, ERPs, payment gateways and APIs, so nobody copies data between them by hand.",
      },
    ],
  },
  work: {
    title: "Recent projects",
    external: "Opens in a new tab",
    items: [
      {
        name: "Tadrón Teatro",
        href: "https://www.tadronteatro.com.ar/",
        body: "A theatre in Palermo, Buenos Aires. This week's bill, the courses, and the history of the room.",
        image: "/work/tadron.jpg",
      },
      {
        name: "Mar D Jabones",
        href: "https://www.mardjabones.com.ar/",
        body: "A catalog of handmade soaps and resins. Orders close on Instagram.",
        image: "/work/mard.jpg",
      },
    ],
  },
  process: {
    title: "How we work",
    body: "One senior team, from the first call to launch. Price and dates are fixed before we write code. Every week there is a build to review.",
    steps: [
      {
        name: "Discovery",
        body: "We look at the business, who uses it, and what must not break. You leave with scope, dates and a fixed price.",
      },
      {
        name: "Product design",
        body: "Flows and visuals in a prototype you can click. We sign off before any code.",
      },
      { name: "Engineering", body: "TypeScript, with tests. Each week we review the build that is live." },
      {
        name: "Launch and evolution",
        body: "We ship, then watch errors and numbers. If you want, we stay on after launch.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does a project cost?",
        a: "It depends on the project. After the call we send a fixed price.",
      },
      {
        q: "How long does it take?",
        a: "A website, 2 to 4 weeks. A store or a booking system, 6 to 10. A platform depends on what it includes.",
      },
      {
        q: "What technologies do you use?",
        a: "TypeScript, React, Next.js and Node. Shopify when the store calls for it. If you already have a stack, we build on that.",
      },
      {
        q: "What happens after launch?",
        a: "The code, access and documentation stay in your account. There is a monthly plan if you want us to stay.",
      },
      {
        q: "Do you work with clients outside Spain?",
        a: "Yes. We work remotely, in Spanish and in English.",
      },
    ],
  },
  cta: {
    title: "Tell us about the project.",
    body: "30 minutes with the person who would build it. If it is a bad fit, we say so on that call.",
  },
  footer: { rights: "All rights reserved.", nav: "Navigation", contact: "Contact", top: "Back to top" },
};

export const content = { es, en };
export type Locale = keyof typeof content;
export const locales = Object.keys(content) as Locale[];
export const hasLocale = (l: string): l is Locale => l in content;
