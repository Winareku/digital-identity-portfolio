# Fase 1: Portafolio de Identidad Digital - Observación y Análisis
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

