# Fase 1: Análisis
## 1. Perfiles de Referencia y Tabla Comparativa
1. **Miella Selene** (`miella`): Estilo Sysadmin/DevOps con enfoque estético, tipografías personalizadas e insignias dinámicas.
2. **Ashutosh Saxena** (`Xx-Ashutosh-xX`): Entusiasta de Machine Learning, con animaciones de texto, iconos detallados y estadísticas de actividad.
3. **Ingrid** (`innng`): Back-end & Platform Engineer, perfil minimalista con tipografía tipada interactiva y un diseño limpio y directo.

### Tabla Comparativa de Perfiles

| Criterio | Miella Selene | Xx-Ashutosh-xX | Ingrid (`innng`) |
| --- | --- | --- | --- |
| **Presentación** | Banner animado, saludo centrado, música/estado en vivo e iconos tiernos/cyberpunk. | Saludo en japonés, GIF arriba y rol directo (ML/AI). | Texto tipo máquina de escribir, rol rápido y mascota/avatar flotante. |
| **Estructura** | Títulos centrados, bloques de texto y cosas flotando. | Secciones claras, separadores y muchos visuales. | Todo compacto con `<pre>`, texto preformateado y metadatos limpios. |
| **Habilidades** | Badges de Shields.io con colores propios. | Iconos propios en el repo (Python, Java, Bash, GCP…). | Sin badges; lista lenguajes, DevOps y arquitectura en texto. |
| **Proyectos** | Links a webs personales y widgets externos (LastFM, Discord/Lanyard). | Repos propios + tarjetas de stats de GitHub. | Código e infraestructura propia, respaldado por su actividad. |
| **Contacto** | Web personal, música y plataformas externas, bien visibles. | Gmail y LinkedIn directos con iconos. | Insignias discretas a redes técnicas y juegos/comunidad (`osu!`, `enka.network`). |
| **Accesibilidad / Móvil** | Mucho recurso externo e imágenes pesadas; contraste variable en oscuro. | GIFs grandes y varias imágenes que pueden ralentizar en móvil. | Muy legible en móvil: texto estructurado y pocas imágenes pesadas. |

## 2. Análisis de Repositorios Destacados Propios

| Criterio | PoliBaldeo | Peakr | NeoVim-Simulator |
| --- | --- | --- | --- |
| **Descripción y Enlaces** | Extensión open source para estudiantes de la ESPOL; links a Chrome y Firefox, banner y topics de extensiones. | Extensión para torneos musicales 1v1 con sistema Elo. | Simulador web de Neovim para practicar. |
| **Documentación (README)** | README muy completo: propósito, features, instalación, arquitectura y licencias. | README claro: requisitos, clonar/cargar, features y Ko-fi. | README ligero, centrado en ejecución web y práctica. |
| **Licencia y .gitignore** | Licencia MIT y `.gitignore` robusto para builds y archivos locales. | Desarrollo claro, `.gitignore` para temporales y nota de derechos reservados. | Web estática con manejo de `CNAME`; sin mucho más. |
| **Historial de Commits** | Commits limpios y semánticos; evolución multi-navegador. | Commits constantes por hitos funcionales y Ko-fi. | Commits incrementales por features y ajustes de dominio. |
| **Buenas Prácticas** | Build y release automatizados con Python; entornos separados por navegador. | Multi-plataforma con background y manifiestos separados; automatización en Python. | UI y lógica de modos bien separadas por archivos. |
| **Estructura de Carpetas** | Modular: `src/`, `scripts/`, `manifests/`, docs y `assets/`. | `src/` con subcarpetas, `scripts/` y `assets/`. | `css/` y `js/` por componentes, más `index.html`. |

## 3. Requisitos del Perfil Propio
### Requisitos Funcionales
1. **Presentación Personal Inmediata**: Dejar claro desde el inicio el rol principal (ej. *Software Engineer / Extension & Backend Developer*).
2. **Sección de Proyectos Destacados**: Mostrar fijos los proyectos clave (*PoliBaldeo*, *Peakr*, *NeoVim-Simulator*), cada uno con link, descripción corta, topics y demo o instrucciones.
3. **Panel de Habilidades Técnicas**: Sección visual con lenguajes, frameworks, control de versiones y SO usando badges o iconos limpios.
4. **Canales de Contacto Accesibles**: Links directos y funcionales a correo, LinkedIn y plataformas de comunidad/colaboración.
### Requisitos No Funcionales
1. **Legibilidad y Diseño Responsivo**: Que se lea bien en escritorio y móvil, sin desbordes ni elementos gráficos pesados.
2. **Accesibilidad Visual**: Buen contraste (mejor dark mode limpio) y texto alternativo en banners o imágenes clave.
3. **Mantenibilidad y Estructura**: READMEs ordenados, commits semánticos y código fuente bien separado.
## 4. Auditoría y Gaps (Faltantes) Identificados en Repositorios Propios
* **PoliBaldeo**: Ya está bastante maduro; solo falta mejorar las capturas en la cabecera del README para llamar la atención rápido.
* **Peakr**: Tiene build en Python y soporte multi-navegador, pero le falta un `LICENSE` explícito como el de PoliBaldeo.
* **NeoVim-Simulator**: No tiene un `README.md` detallado en la raíz; falta explicar uso online, atajos y arquitectura de modos. Documentarlo es prioridad.

---

# Fase 2: Planificación y Diseño
## 1. Estructura del Perfil (`README.md`)
1. **Presentación**: Banner y saludo inicial.
2. **Sobre mí**: Rol técnico corto (Extension & Backend Developer).
3. **Habilidades y tecnologías**: Panel visual con badges de lenguajes y herramientas.
4. **Proyectos destacados**: Fichas directas a *PoliBaldeo*, *Peakr* y *NeoVim-Simulator*.
5. **Contacto**: Links a correo y perfil profesional.
## 2. Estrategia de Commits (Commits Convencionales)
* `docs: define estructura y estrategia de contenido para el perfil`
* `feat: agrega sección de presentación y sobre mí en README principal`
* `feat: incorpora panel de habilidades y tecnologías con insignias`
* `feat: añade fichas de proyectos destacados (PoliBaldeo, Peakr, NeoVim)`
* `fix: corrige enlaces de contacto y asegura validación de formato en README`

## 3. Diseño del Contenido por Sección

| Sección | Información a Incluir | Información a Evitar | Elementos Visuales / Formato | Enlaces Externos | Optimización de Lectura Rápida |
| --- | --- | --- | --- | --- | --- |
| **Presentación** | Saludo y rol principal. | Textos largos o densos. | Banner central (`.png` / `.gif`) y texto estilizado. | Ninguno. | Impacto rápido en los primeros segundos. |
| **Sobre mí** | Enfoque profesional: extensiones y herramientas web. | Datos personales irrelevantes o contacto mezclado. | Viñetas cortas. | Ninguno. | Lectura vertical rápida. |
| **Habilidades** | Lenguajes (JavaScript, Python), herramientas (Git, Linux) y tecnologías clave. | Listas largas de cosas obsoletas o no dominadas. | Badges (`shields.io`) e iconos por categoría. | Documentación oficial (opcional). | Agrupación clara por categorías. |
| **Proyectos** | Resumen de los 3 proyectos clave con links directos. | Explicar código línea por línea. | Tarjetas o tablas compactas. | GitHub, tiendas de extensiones y demos. | Títulos claros y viñetas de funciones clave. |
| **Contacto** | Correo principal y LinkedIn. | Redes personales sin relación técnica. | Badges o botones de contacto. | `mailto:` y URL de LinkedIn. | Iconos reconocibles al instante. |

## 4. Fichas de Proyectos Destacados
### Ficha 1: PoliBaldeo
* **Nombre**: PoliBaldeo
* **Problema o necesidad que resuelve**: Facilita la matrícula de estudiantes de la ESPOL: captura la oferta y organiza horarios sin conflictos.
* **Tecnologías utilizadas**: JavaScript (Vanilla JS), Manifest V3, Python para builds y CSS (Material 3 Dark).
* **Funcionalidades principales**:
* Captura de oferta académica y botón split para teóricos/prácticos.
* Planner semanal con detección de conflictos y exámenes.
* Exportación a `.poli`, iCalendar (`.ics`) y PNG.
* **Enlace al repositorio**: [GitHub - PoliBaldeo](https://github.com/Winareku/PoliBaldeo)
* **Enlace a demostración**: [Chrome Web Store](https://chromewebstore.google.com/detail/polpjnkemhjlmadehenohmpjgnmjonpb?utm_source=item-share-cb) / [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/polibaldeo/)
### Ficha 2: Peakr
* **Nombre**: Peakr
* **Problema o necesidad que resuelve**: Organiza torneos musicales 1v1 en el navegador y rankea canciones con sistema Elo.
* **Tecnologías utilizadas**: JavaScript, HTML/CSS, Python para releases y APIs de Deezer.
* **Funcionalidades principales**:
* Duelos 1v1 y top dinámico por Elo.
* Importar/exportar datos en JSON.
* Soporte multi-navegador para barras laterales y sidepanels.
* **Enlace al repositorio**: [GitHub - Peakr](https://www.google.com/search?q=https://github.com/Winareku/Peakr)
* **Enlace a demostración**: Código fuente para instalación local en modo desarrollador.
### Ficha 3: NeoVim-Simulator
* **Nombre**: NeoVim-Simulator
* **Problema o necesidad que resuelve**: Entorno web para aprender y practicar comandos y modos de Neovim sin configuración local.
* **Tecnologías utilizadas**: HTML5, CSS modular y JavaScript modular (estados, comandos Ex, modos Normal, Insert y Visual).
* **Funcionalidades principales**:
* Emulación de modos Normal, Insert y Visual, más comandos Ex.
* Syntax Highlight en tiempo real.
* Interfaz responsiva con teclado físico y virtual.
* **Enlace al repositorio**: [GitHub - NeoVim-Simulator](https://www.google.com/search?q=https://github.com/Winareku/NeoVim-Simulator)
* **Enlace a demostración**: Despliegue estático web vinculado al repositorio.

---

# Fase 3: Implementación
1. Configuración del Repositorio Especial
- Se creó el repo público especial con el nombre exacto de usuario (Winareku/Winareku).
- Se dejó el README.md principal como carta de presentación pública del perfil.
2. Construcción Incremental (Commits Convencionales)
- docs: define estructura y estrategia de contenido para el perfil (estructura inicial de presentación y sobre mí).
- feat: incorpora panel de habilidades y tecnologías con insignias (lenguajes y herramientas con badges).
- feat: añade fichas de proyectos destacados (PoliBaldeo, Peakr, NeoVim) (los tres proyectos clave con descripciones y enlaces).
- fix: corrige enlaces de contacto y asegura validación de formato en README (contacto final y revisión de sintaxis Markdown pura).
