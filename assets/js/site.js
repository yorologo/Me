(() => {
  const root = document.documentElement;

  // Stable translation identifiers, independent of visible English text.
  const messages = {
    "copy-skip-to-main-content": {
      "en": "Skip to main content",
      "es": "Saltar al contenido principal"
    },
    "copy-experience": {
      "en": "Experience",
      "es": "Experiencia"
    },
    "copy-skills": {
      "en": "Skills",
      "es": "Habilidades"
    },
    "copy-education": {
      "en": "Education",
      "es": "Educación"
    },
    "copy-contact": {
      "en": "Contact",
      "es": "Contacto"
    },
    "copy-zapopan-jalisco-mexico": {
      "en": "Zapopan, Jalisco, Mexico",
      "es": "Zapopan, Jalisco, México"
    },
    "copy-email": {
      "en": "Email",
      "es": "Correo"
    },
    "copy-call": {
      "en": "Call",
      "es": "Llamar"
    },
    "copy-cv-files": {
      "en": "CV files",
      "es": "Archivos CV"
    },
    "copy-languages": {
      "en": "Languages",
      "es": "Idiomas"
    },
    "copy-about": {
      "en": "About",
      "es": "Sobre mí"
    },
    "copy-senior-infra-engineer": {
      "en": "Senior Infra Engineer",
      "es": "Ingeniero Senior de Infraestructura"
    },
    "copy-sep-2022-present": {
      "en": "Sep 2022 - Present",
      "es": "Sep 2022 - Actualidad"
    },
    "copy-field-tech-senior-representative": {
      "en": "Field Tech Senior Representative",
      "es": "Representante Senior de Tecnología en Campo"
    },
    "copy-supported-senior-field-technology-operations-and-it-inf": {
      "en": "Supported senior field technology operations and IT infrastructure activities for manufacturing-sector clients.",
      "es": "Brindé soporte a operaciones senior de tecnología en campo y actividades de infraestructura de TI para clientes del sector manufacturero."
    },
    "copy-field-service-engineer": {
      "en": "Field Service Engineer",
      "es": "Ingeniero de Servicio en Campo"
    },
    "copy-inspected-installed-and-supported-equipment-and-technol": {
      "en": "Inspected, installed, and supported equipment and technology deployments in field service environments.",
      "es": "Inspeccioné, instalé y di soporte a equipos y despliegues tecnológicos en entornos de servicio en campo."
    },
    "copy-resolved-it-infrastructure-issues-through-on-site-techn": {
      "en": "Resolved IT infrastructure issues through on-site technical support.",
      "es": "Resolví incidencias de infraestructura de TI mediante soporte técnico en sitio."
    },
    "copy-university-of-guadalajara-temporary-contract": {
      "en": "University of Guadalajara · Temporary contract",
      "es": "Universidad de Guadalajara · Contrato temporal"
    },
    "copy-sep-2020-dec-2020": {
      "en": "Sep 2020 - Dec 2020",
      "es": "Sep 2020 - Dic 2020"
    },
    "copy-supported-hardware-software-and-server-maintenance-acti": {
      "en": "Supported hardware, software, and server maintenance activities in an institutional technology environment.",
      "es": "Apoyé actividades de mantenimiento de hardware, software y servidores en un entorno tecnológico institucional."
    },
    "copy-developed-a-java-application-to-classify-edit-encrypt-a": {
      "en": "Developed a Java application to classify, edit, encrypt, and organize thesis documents.",
      "es": "Desarrollé una aplicación en Java para clasificar, editar, cifrar y organizar documentos de tesis."
    },
    "copy-b-s-in-computer-systems-engineering": {
      "en": "B.S. in Computer Systems Engineering",
      "es": "Ingeniería en Sistemas Computacionales"
    },
    "copy-activities-programming-workshop-lead": {
      "en": "Activities: Programming workshop lead.",
      "es": "Actividades: líder de taller de programación."
    },
    "copy-spanish": {
      "en": "Spanish",
      "es": "Español"
    },
    "copy-english": {
      "en": "English",
      "es": "Inglés"
    },
    "copy-native-or-bilingual-proficiency": {
      "en": "Native or bilingual proficiency",
      "es": "Competencia nativa o bilingüe"
    },
    "copy-basic-professional-proficiency": {
      "en": "Basic professional proficiency",
      "es": "Competencia profesional básica"
    },
    "copy-featured-projects": {
      "en": "Featured Projects",
      "es": "Proyectos destacados"
    },
    "copy-view-on-github": {
      "en": "View on GitHub",
      "es": "Ver en GitHub"
    },
    "navProjects": {
      "en": "Projects",
      "es": "Proyectos"
    },
    "heroRole": {
      "en": "Backend Developer · Automation & Infrastructure",
      "es": "Desarrollador backend · Automatización e infraestructura"
    },
    "heroLead": {
      "en": "I build and maintain web applications, automate repetitive data and documentation work, and solve infrastructure problems in enterprise environments. Computer Systems Engineer with 5+ years across software development and IT operations.",
      "es": "Desarrollo y mantengo aplicaciones web, automatizo tareas repetitivas de datos y documentación, y resuelvo problemas de infraestructura en entornos empresariales. Soy ingeniero en Sistemas Computacionales con más de 5 años de experiencia en desarrollo de software y operaciones de TI."
    },
    "aboutNew": {
      "en": "I connect software development with real operational needs. My work ranges from web applications and Python data workflows to troubleshooting infrastructure and supporting technical teams. I focus on understandable solutions, practical validation, and maintenance that does not become another problem.",
      "es": "Conecto el desarrollo de software con necesidades operativas reales. Mi trabajo abarca aplicaciones web y procesos de datos con Python, así como el diagnóstico de infraestructura y el apoyo a equipos técnicos. Priorizo soluciones comprensibles, validación práctica y mantenimiento sencillo."
    },
    "summaryBuild": {
      "en": "What I build",
      "es": "Lo que desarrollo"
    },
    "summaryWeb": {
      "en": "Web applications",
      "es": "Aplicaciones web"
    },
    "summaryImprove": {
      "en": "How I improve",
      "es": "Cómo optimizo"
    },
    "summaryAutomation": {
      "en": "Automation & tooling",
      "es": "Automatización y herramientas"
    },
    "summaryContribute": {
      "en": "Where I contribute",
      "es": "Dónde aporto valor"
    },
    "summaryOperations": {
      "en": "Enterprise operations",
      "es": "Operaciones empresariales"
    },
    "mphasisApps": {
      "en": "Maintain web applications and infrastructure used in enterprise operations, prioritizing reliability and clear troubleshooting.",
      "es": "Mantengo aplicaciones web e infraestructura utilizadas en operaciones empresariales, priorizando la confiabilidad y el diagnóstico claro."
    },
    "mphasisPython": {
      "en": "Built Python-based tooling to compare large datasets and make validation and review workflows repeatable.",
      "es": "Desarrollé herramientas en Python para comparar grandes conjuntos de datos y hacer repetibles los procesos de validación y revisión."
    },
    "nttMarkdown": {
      "en": "Built a JavaScript tool to render Markdown and transfer technical notes into internal documentation workflows.",
      "es": "Desarrollé una herramienta en JavaScript para renderizar Markdown e incorporar notas técnicas a los flujos internos de documentación."
    },
    "mcpProject": {
      "en": "Go-based MCP gateway connecting AI tools with authorized systems through controlled permissions and auditable operations.",
      "es": "Gateway MCP desarrollado en Go que conecta herramientas de IA con sistemas autorizados mediante permisos controlados y operaciones auditables."
    },
    "dealProject": {
      "en": "Local-first tooling that collects and compares delivery-platform prices to support consistent review.",
      "es": "Herramienta local-first que recopila y compara precios de plataformas de entrega para facilitar su revisión."
    },
    "exploreWork": {
      "en": "Explore projects",
      "es": "Explorar proyectos"
    },
    "contactHeading": {
      "en": "Let's work together",
      "es": "Trabajemos juntos"
    },
    "contactLead": {
      "en": "Interested in working together or discussing a role? Email me or explore my professional profiles.",
      "es": "¿Te interesa colaborar o hablar de una oportunidad laboral? Escríbeme por correo o visita mis perfiles profesionales."
    },
    "footerText": {
      "en": "CV and engineering portfolio.",
      "es": "CV y portafolio de ingeniería."
    },
    "dateNtt": {
      "en": "Feb 2022 - Jul 2022",
      "es": "Feb 2022 - Jul 2022"
    },
    "datePissa": {
      "en": "Jun 2021 - Feb 2022",
      "es": "Jun 2021 - Feb 2022"
    },
    "aria-go-to-top-of-josue-esaud-gomez-gonzalez-portfolio": {
      "en": "Go to top of Josué Esaud Gómez González portfolio",
      "es": "Ir al inicio del portafolio de Josué Esaud Gómez González"
    },
    "aria-primary-navigation": {
      "en": "Primary navigation",
      "es": "Navegación principal"
    },
    "aria-contact-links": {
      "en": "Contact links",
      "es": "Enlaces de contacto"
    },
    "aria-send-email-to-josue-esaud-gomez-gonzalez": {
      "en": "Send email to Josué Esaud Gómez González",
      "es": "Enviar correo a Josué Esaud Gómez González"
    },
    "aria-call-josue-esaud-gomez-gonzalez": {
      "en": "Call Josué Esaud Gómez González",
      "es": "Llamar a Josué Esaud Gómez González"
    },
    "aria-open-whatsapp-chat-with-josue-esaud-gomez-gonzalez-in-a": {
      "en": "Open WhatsApp chat with Josué Esaud Gómez González in a new tab",
      "es": "Abrir chat de WhatsApp con Josué Esaud Gómez González en una pestaña nueva"
    },
    "aria-open-josue-esaud-gomez-gonzalez-github-repositories-in-": {
      "en": "Open Josué Esaud Gómez González GitHub repositories in a new tab",
      "es": "Abrir los repositorios de GitHub de Josué Esaud Gómez González en una pestaña nueva"
    },
    "aria-open-josue-esaud-gomez-gonzalez-linkedin-profile-in-a-n": {
      "en": "Open Josué Esaud Gómez González LinkedIn profile in a new tab",
      "es": "Abrir el perfil de LinkedIn de Josué Esaud Gómez González en una pestaña nueva"
    },
    "aria-quick-links": {
      "en": "Quick links",
      "es": "Enlaces rápidos"
    },
    "aria-professional-summary": {
      "en": "Professional summary",
      "es": "Resumen profesional"
    },
    "aria-open-mcp-pi-on-github-in-a-new-tab": {
      "en": "Open MCP-Pi on GitHub in a new tab",
      "es": "Abrir MCP-Pi en GitHub en una pestaña nueva"
    },
    "aria-open-dealhunter-on-github-in-a-new-tab": {
      "en": "Open DealHunter on GitHub in a new tab",
      "es": "Abrir DealHunter en GitHub en una pestaña nueva"
    },
    "aria-primary-actions": {
      "en": "Primary actions",
      "es": "Acciones principales"
    },
    "alt-josue-esaud-gomez-gonzalez-profile-photo": {
      "en": "Josué Esaud Gómez González profile photo",
      "es": "Foto de perfil de Josué Esaud Gómez González"
    },
    "skills-backend": {
      "en": "Backend & APIs",
      "es": "Backend y APIs"
    },
    "skills-ai": {
      "en": "AI & automation",
      "es": "IA y automatización"
    },
    "skills-infra": {
      "en": "Systems & infrastructure",
      "es": "Sistemas e infraestructura"
    },
    "skills-other": {
      "en": "Additional technologies",
      "es": "Tecnologías complementarias"
    },
    "skill-ai-assisted": {
      "en": "AI-assisted development",
      "es": "Desarrollo asistido por IA"
    },
    "skill-api-integration": {
      "en": "API & tool integration",
      "es": "Integración de APIs y herramientas"
    },
    "skill-workflow": {
      "en": "Workflow automation",
      "es": "Automatización de procesos"
    },
    "skill-server-maintenance": {
      "en": "Server maintenance",
      "es": "Mantenimiento de servidores"
    },
    "adfilterProject": {
      "en": "Shell scripts that organize external blocklists for DNS and privacy tools, including a dry-run-first Pi-hole import workflow.",
      "es": "Scripts Shell que organizan listas externas de filtrado para DNS y privacidad, con un flujo de importación a Pi-hole que primero permite simular los cambios."
    },
    "adfilterStatus": {
      "en": "Ongoing project",
      "es": "Proyecto en evolución"
    },
    "aria-open-adfilter-on-github-in-a-new-tab": {
      "en": "Open AdFilter on GitHub in a new tab",
      "es": "Abrir AdFilter en GitHub en una pestaña nueva"
    },
    "skill-rest-api": {
      "en": "REST API development",
      "es": "Desarrollo de APIs REST"
    }
  };

  const metadata = {
    "en": {
      "title": "Josué Esaud Gómez González | Backend Developer & Automation Engineer",
      "description": "Backend developer and automation-focused Computer Systems Engineer in Zapopan, Mexico. Explore web applications, Python tooling, infrastructure, and selected engineering projects.",
      "socialDescription": "Explore backend applications, engineering projects, automation, and enterprise infrastructure work.",
      "twitterDescription": "Explore backend applications, Python automation, infrastructure, and professional projects from an engineer in Zapopan, Mexico.",
      "imageAlt": "Josué Esaud Gómez González profile photo",
      "locale": "en_US"
    },
    "es": {
      "title": "Josué Esaud Gómez González | Desarrollo backend y automatización",
      "description": "Ingeniero en Sistemas Computacionales y desarrollador backend en Zapopan, México. Conoce aplicaciones web, automatizaciones con Python, infraestructura y proyectos de ingeniería.",
      "socialDescription": "Conoce mis aplicaciones backend, proyectos de ingeniería, automatización e infraestructura empresarial.",
      "twitterDescription": "Aplicaciones backend, automatización con Python, infraestructura y proyectos profesionales de un ingeniero en Zapopan, México.",
      "imageAlt": "Foto de perfil de Josué Esaud Gómez González",
      "locale": "es_MX"
    }
  };

  function getPreference(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The page remains functional when storage is unavailable.
    }
  }

  function translateContent(language) {
    for (const element of document.querySelectorAll("[data-i18n]")) {
      const entry = messages[element.getAttribute("data-i18n")];
      if (entry) element.textContent = entry[language];
    }
    for (const [attribute, target] of [["data-i18n-aria", "aria-label"], ["data-i18n-alt", "alt"]]) {
      for (const element of document.querySelectorAll("[" + attribute + "]")) {
        const entry = messages[element.getAttribute(attribute)];
        if (entry) element.setAttribute(target, entry[language]);
      }
    }
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
      element.setAttribute("content", value);
    }
  }

  const savedTheme = getPreference("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.toggle("dark", savedTheme ? savedTheme === "dark" : prefersDark);

  const savedLanguage = getPreference("language");
  const browserLanguage = (navigator.language || "en").toLowerCase();
  let currentLanguage =
    savedLanguage === "es" || savedLanguage === "en"
      ? savedLanguage
      : browserLanguage.startsWith("es")
        ? "es"
        : "en";

  root.lang = currentLanguage;

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const languageToggle = document.getElementById("languageToggle");
    const languageLabel = document.getElementById("languageLabel");
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
      currentYear.textContent = String(new Date().getFullYear());
    }

    function renderTheme(isDark) {
      root.classList.toggle("dark", isDark);

      if (themeIcon) {
        themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
      }

      if (themeToggle) {
        const label =
          currentLanguage === "es"
            ? isDark
              ? "Cambiar a modo claro"
              : "Cambiar a modo oscuro"
            : isDark
              ? "Switch to light mode"
              : "Switch to dark mode";

        themeToggle.setAttribute("aria-label", label);
      }
    }

    function renderLanguage(language) {
      currentLanguage = language;
      root.lang = language;
      translateContent(language);

      const meta = metadata[language];
      document.title = meta.title;
      setMeta('meta[name="description"]', meta.description);
      setMeta('meta[property="og:title"]', meta.title);
      setMeta('meta[property="og:description"]', meta.socialDescription);
      setMeta('meta[property="og:locale"]', meta.locale);
      setMeta('meta[property="og:image:alt"]', meta.imageAlt);
      setMeta('meta[name="twitter:title"]', meta.title);
      setMeta('meta[name="twitter:description"]', meta.twitterDescription);
      setMeta('meta[name="twitter:image:alt"]', meta.imageAlt);

      if (languageLabel) {
        languageLabel.textContent = language === "es" ? "EN" : "ES";
      }

      if (languageToggle) {
        languageToggle.setAttribute(
          "aria-label",
          language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
        );
      }

      renderTheme(root.classList.contains("dark"));
    }

    renderLanguage(currentLanguage);

    if (languageToggle) {
      languageToggle.addEventListener("click", () => {
        const nextLanguage = currentLanguage === "es" ? "en" : "es";
        renderLanguage(nextLanguage);
        savePreference("language", nextLanguage);
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const isDark = !root.classList.contains("dark");
        renderTheme(isDark);
        savePreference("theme", isDark ? "dark" : "light");
      });
    }
  });
})();
