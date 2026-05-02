import React, { useEffect, useState } from 'react';
import {
  Activity,
  AlignJustify,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  X,
  Zap
} from 'lucide-react';

const webProjects = [
  {
    id: 'medicare',
    title: 'MediCare System',
    description:
      'Portal clinico para citas, pacientes e historial medico con foco en rapidez operativa y claridad visual.',
    tags: ['React', 'Dashboard', 'Salud'],
    url: 'https://medi-care-system-web.vercel.app/login',
    accent: 'from-sky-500 to-cyan-400'
  },
  {
    id: 'novobanco',
    title: 'NovoBanco',
    description:
      'Aplicacion bancaria empresarial con acceso seguro, validaciones de negocio y flujos pensados para operaciones criticas.',
    tags: ['Fintech', 'Seguridad', 'Web App'],
    url: 'https://novobank-account-web.vercel.app/',
    accent: 'from-orange-500 to-amber-400'
  },
  {
    id: 'salesorder',
    title: 'Sales Order GP',
    description:
      'Sistema de ventas e inventario para seguimiento de ordenes, trazabilidad comercial y control interno.',
    tags: ['ERP', 'Ventas', 'Gestion'],
    url: 'https://push-order-fe.vercel.app/#/',
    accent: 'from-emerald-500 to-lime-400'
  }
];

const mobileProjects = [
  {
    id: 'medicare-mobile',
    title: 'MediCare Mobile',
    description:
      'Version movil para equipos medicos con acceso agil a citas, pacientes y tareas operativas en campo.',
    tags: ['React Native', 'iOS', 'Android'],
    accent: 'from-sky-500 to-blue-600'
  },
  {
    id: 'novobanco-mobile',
    title: 'NovoBanco App',
    description:
      'Experiencia bancaria movil con autenticacion fuerte, aprobaciones y operaciones sensibles desde el telefono.',
    tags: ['Flutter', 'Fintech', 'Biometria'],
    accent: 'from-orange-500 to-rose-500'
  }
];

const strengths = [
  {
    icon: ShieldCheck,
    title: 'Arquitectura confiable',
    description: 'Construccion orientada a seguridad, mantenibilidad y crecimiento real del producto.'
  },
  {
    icon: Zap,
    title: 'Entrega rapida',
    description: 'Interfaces livianas, tiempos de carga bajos y foco en conversion y usabilidad.'
  },
  {
    icon: Workflow,
    title: 'Flujos claros',
    description: 'Cada pantalla resuelve una tarea concreta con navegacion simple y medible.'
  }
];

const services = [
  {
    icon: Globe,
    title: 'Landing pages y sitios corporativos',
    description: 'Paginas de alto impacto para captar clientes, explicar servicios y cerrar contactos.'
  },
  {
    icon: Layers3,
    title: 'Sistemas web internos',
    description: 'Dashboards, paneles administrativos y herramientas operativas para equipos de negocio.'
  },
  {
    icon: Smartphone,
    title: 'Apps moviles',
    description: 'Aplicaciones para iOS y Android con enfoque en rendimiento, experiencia y continuidad.'
  },
  {
    icon: Database,
    title: 'Integracion fullstack',
    description: 'Frontend, backend, APIs, autenticacion y despliegue listos para produccion.'
  }
];

const architectureBlocks = [
  {
    title: 'Frontend y experiencia de usuario',
    description:
      'Construccion de interfaces corporativas con ReactJS, Tailwind CSS, JavaScript y componentes orientados a flujos de negocio. Experiencia adicional con Angular, PrimeFaces y portales administrativos.'
  },
  {
    title: 'Backend y microservicios',
    description:
      'Diseno de APIs y servicios empresariales con Java, Spring Boot, Java EE y arquitecturas desacopladas. Implementacion de procesos batch, validaciones de negocio, integracion REST y mantenimiento de sistemas criticos.'
  },
  {
    title: 'DevOps, cloud y despliegue',
    description:
      'Automatizacion de pipelines CI/CD con Jenkins, GitLab CI, GitHub Actions y Azure DevOps. Despliegues en AWS, administracion de contenedores con Docker y orquestacion sobre Kubernetes, EKS y OCP.'
  },
  {
    title: 'Datos e integracion empresarial',
    description:
      'Trabajo con Oracle, PostgreSQL, MongoDB y SQL Server, incluyendo tuning, reindexacion, reportes, procedimientos y soporte a integraciones con servicios REST, SOAP, SOA y plataformas legacy.'
  }
];

const skillGroups = [
  {
    title: 'Stack principal',
    items: ['Java', 'Spring Boot', 'ReactJS', 'React Native', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Cloud y DevOps',
    items: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible']
  },
  {
    title: 'Bases de datos',
    items: ['Oracle', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Consultas', 'Optimizacion']
  },
  {
    title: 'Capacidades de proyecto',
    items: ['Microservicios', 'APIs REST', 'CI/CD', 'Integraciones', 'Soporte productivo', 'Mentoria tecnica']
  }
];

const contactEmail = 'gustcas_29@hotmail.com';
const contactPhone = '+593987170435';
const whatsappUrl =
  'https://wa.me/593987170435?text=Hola%20Gustavo%2C%20quiero%20solicitar%20un%20presupuesto%20para%20un%20proyecto.';

function BrowserMockup({ accent }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="grid grid-cols-[88px_1fr]">
        <div className="space-y-3 border-r border-white/10 bg-white/5 p-4">
          <div className="h-2 rounded-full bg-white/20" />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div className="mt-5 h-16 rounded-2xl bg-white/10" />
        </div>
        <div className="space-y-4 p-4">
          <div className={`h-24 rounded-[1.5rem] bg-gradient-to-r ${accent} opacity-90`} />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-2xl bg-white/10" />
            <div className="h-16 rounded-2xl bg-white/10" />
          </div>
          <div className="h-20 rounded-[1.5rem] bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function MobileMockup({ accent }) {
  return (
    <div className="mx-auto flex h-64 w-36 rounded-[2rem] border border-white/15 bg-slate-950 p-2 shadow-2xl shadow-black/30">
      <div className="relative flex-1 rounded-[1.5rem] bg-slate-900 p-3">
        <div className="absolute left-1/2 top-0 h-4 w-16 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
        <div className={`mt-5 h-24 rounded-[1.25rem] bg-gradient-to-b ${accent}`} />
        <div className="mt-3 space-y-2">
          <div className="h-3 w-3/4 rounded-full bg-white/15" />
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-white/10" />
          <div className="h-10 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-300 selection:text-slate-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_28%),linear-gradient(180deg,#020617_0%,#020617_100%)]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-slate-950/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-3 text-left"
            aria-label="Ir al inicio"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-300 text-slate-950 shadow-glow">
              <Code2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                Dummytech
              </span>
              <span className="block text-lg font-semibold text-white">Fullstack Studio</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <button onClick={() => scrollToSection('servicios')} className="transition hover:text-white">
              Servicios
            </button>
            <button onClick={() => scrollToSection('arquitectura')} className="transition hover:text-white">
              Arquitectura
            </button>
            <button onClick={() => scrollToSection('skills')} className="transition hover:text-white">
              Skills
            </button>
            <button onClick={() => scrollToSection('proyectos')} className="transition hover:text-white">
              Proyectos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="transition hover:text-white">
              Contacto
            </button>
          </nav>

          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300/40 hover:bg-sky-400/20"
            >
              Hablemos por WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 md:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
              <button onClick={() => scrollToSection('servicios')} className="rounded-2xl bg-white/5 px-4 py-3 text-left">
                Servicios
              </button>
              <button onClick={() => scrollToSection('arquitectura')} className="rounded-2xl bg-white/5 px-4 py-3 text-left">
                Arquitectura
              </button>
              <button onClick={() => scrollToSection('skills')} className="rounded-2xl bg-white/5 px-4 py-3 text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('proyectos')} className="rounded-2xl bg-white/5 px-4 py-3 text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contacto')} className="rounded-2xl bg-white/5 px-4 py-3 text-left">
                Contacto
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Landing page lista para convertir visitas en clientes
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Desarrollo web y movil con enfoque en negocio, rendimiento y despliegue real.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Construyo experiencias digitales profesionales para empresas que necesitan verse solidas, vender mejor y operar con software confiable.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection('proyectos')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Ver proyectos <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Solicitar presupuesto
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">3+</p>
                  <p className="mt-1 text-sm text-slate-400">Proyectos visibles en produccion</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">Web + App</p>
                  <p className="mt-1 text-sm text-slate-400">Cobertura fullstack en un solo flujo</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-white">DevOps</p>
                  <p className="mt-1 text-sm text-slate-400">Implementacion, despliegue y operacion continua</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-orange-400/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <BrowserMockup accent="from-sky-500 via-cyan-400 to-blue-500" />
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                      <BriefcaseBusiness className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Presencia seria</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      La landing no solo debe verse bien. Debe transmitir confianza y justificar el valor de tu servicio.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                      <Activity className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Despliegue simple</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Estructura preparada para publicar en Netlify sin pasos extra ni configuracion innecesaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Servicios"
              title="Soluciones pensadas para negocio, no solo para verse bonitas."
              description="Una landing profesional debe hablar de resultado, confianza y capacidad tecnica. Por eso la estructura separa claramente oferta, evidencia y siguiente paso."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-400/25 hover:bg-slate-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arquitectura" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Arquitectura"
              title="Capacidad tecnica respaldada por experiencia real en desarrollo y operacion."
              description="La arquitectura de trabajo combina frontend, backend, cloud, CI/CD y administracion de plataforma. Esta parte se detallo tomando como base la experiencia reflejada en tu CV."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {architectureBlocks.map((block, index) => (
                <article
                  key={block.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-lg font-semibold text-sky-300">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{block.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Skills"
              title="Tecnologias y fortalezas alineadas a tu perfil senior."
              description="La seccion resume lo que dominas hoy y lo agrupa por funcion para que clientes o reclutadores entiendan tu valor con rapidez."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Portafolio Web"
              title="Proyectos reales con presentacion mas limpia y comercial."
              description="La seccion se reorganizo para que cada proyecto se entienda rapido: que resuelve, en que stack vive y como se ve la interfaz."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {webProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="border-b border-white/10 p-4">
                    <BrowserMockup accent={project.accent} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        Online
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                    >
                      Ver proyecto <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mobile" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Mobile"
              title="Aplicaciones moviles en la misma linea visual del producto."
              description="Aunque todavia no haya enlaces publicos, vale la pena mostrarlas si refuerzan tu perfil fullstack. Por eso los mockups mantienen una linea sobria y consistente."
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {mobileProjects.map((project) => (
                <article
                  key={project.id}
                  className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 md:grid-cols-[220px_1fr]"
                >
                  <div className="flex items-center justify-center border-b border-white/10 bg-white/5 p-8 md:border-b-0 md:border-r">
                    <MobileMockup accent={project.accent} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                      En desarrollo
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500/15 via-white/5 to-orange-500/10 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Contacto</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Hablemos de tu proyecto y definimos alcance, arquitectura y presupuesto.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              Puedes escribirme por correo o abrir directamente WhatsApp con un mensaje listo para solicitar una propuesta.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Correo</p>
                <a href={`mailto:${contactEmail}`} className="mt-3 block text-lg font-semibold text-white">
                  {contactEmail}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Celular</p>
                <a href="tel:+593987170435" className="mt-3 block text-lg font-semibold text-white">
                  {contactPhone}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
              >
                Enviar correo
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-7 py-4 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
              >
                Abrir WhatsApp para solicitar presupuesto
              </a>
              <button
                onClick={() => scrollToSection('inicio')}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Volver arriba
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Dummytech Studio</p>
              <p className="text-sm text-slate-400">Ecuador - Quito</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
