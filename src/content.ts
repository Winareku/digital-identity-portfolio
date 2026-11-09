export const profile = {
  name: 'Windsor Estrada',
  github: 'Winareku',
  role: 'Estudiante de Ingeniería en Ciencias de la Computación',
  tagline: 'Construyo herramientas web para estudiantes y quiero dedicarme a enseñar informática.',
  photo: 'images/Formal.png',
  photoAlt: 'Retrato de Windsor Estrada',
  about: [
    'Estudio Ingeniería en Ciencias de la Computación en la Escuela Politécnica Superior del Litoral (ESPOL), en Guayaquil.',
    'Mi meta es ser profesor de informática, ya sea en educación básica y media o a nivel universitario. Por eso me gusta crear proyectos que ayudan a otros a aprender o a ahorrar tiempo.',
    'Actualmente curso Desarrollo de Aplicaciones Web y Móviles, donde trabajo con JavaScript, TypeScript y React.',
  ],
  interests: ['Enseñanza de la informática', 'Desarrollo web', 'Extensiones de navegador', 'Herramientas para estudiantes'],
};

export interface Project {
  name: string;
  problem: string;
  tech: string[];
  features: string[];
  repo: string;
  demo?: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    name: 'PoliBaldeo',
    problem: 'Matricularse en ESPOL implica revisar la oferta académica a mano y descubrir los choques de horario tarde.',
    tech: ['JavaScript', 'Extensión de Chrome'],
    features: [
      'Captura la oferta académica desde el portal universitario.',
      'Organiza horarios de forma visual.',
      'Evita conflictos entre materias.',
    ],
    repo: 'https://github.com/Winareku/PoliBaldeo',
    image: 'images/Polibaldeo.png',
    imageAlt: 'Logo de PoliBaldeo',
  },
  {
    name: 'Peakr',
    problem: 'Ordenar una biblioteca musical por gusto personal es difícil cuando hay cientos de canciones.',
    tech: ['JavaScript', 'Extensión de Chrome'],
    features: [
      'Duelos 1v1 entre canciones con puntuación ELO.',
      'Clasificación de favoritas desde un panel lateral.',
      'Interfaz oscura y funcionamiento sin servidores externos.',
    ],
    repo: 'https://github.com/Winareku/Peakr',
    image: 'images/Peakr.png',
    imageAlt: 'Logo de Peakr',
  },
  {
    name: 'NeoVim Simulator',
    problem: 'Aprender los atajos de Neovim da miedo si no tienes dónde practicar sin romper nada.',
    tech: ['TypeScript', 'React', 'MUI'],
    features: [
      'Simulador web interactivo de comandos y atajos.',
      'Práctica directa con el teclado.',
      'Estética clásica Gruvbox.',
    ],
    repo: 'https://github.com/Winareku/NeoVim-Simulator',
    demo: 'https://winareku.github.io/NeoVim-Simulator/',
    image: 'images/NeoVim.png',
    imageAlt: 'Captura del simulador de Neovim con tema Gruvbox',
  },
];

export interface Tech {
  name: string;
  description: string;
  usage: string;
}

export const technologies: Tech[] = [
  { name: 'JavaScript', description: 'Lenguaje base de la web y de las extensiones de Chrome.', usage: 'Lógica de PoliBaldeo y Peakr: captura de datos de la página, manejo del DOM y cálculo de puntuaciones ELO.' },
  { name: 'TypeScript', description: 'JavaScript con tipos estáticos que previene errores antes de ejecutar.', usage: 'Tipado de los datos y de los componentes en NeoVim Simulator y en este portafolio.' },
  { name: 'React', description: 'Librería para construir interfaces a partir de componentes.', usage: 'Interfaz de NeoVim Simulator y de este sitio, con estado para reaccionar a las teclas y a la navegación.' },
  { name: 'MUI', description: 'Librería de componentes basada en Material Design.', usage: 'Botones, tarjetas, etiquetas y tema oscuro turquesa de este portafolio.' },
  { name: 'npm', description: 'Gestor de paquetes y de scripts de Node.js.', usage: 'Instalación de dependencias y ejecución de los comandos de desarrollo y compilación de mis proyectos.' },
];

export const contact = {
  email: 'winareku@gmail.com',
  github: 'https://github.com/Winareku',
  linkedin: 'https://www.linkedin.com/in/windsor-estrada-0469a230a/',
};
