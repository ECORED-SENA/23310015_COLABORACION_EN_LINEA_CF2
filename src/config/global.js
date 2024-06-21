export default {
  global: {
    componenteFormativo: 'Identidad digital',
    descripcionCurso:
      'El consumo de servicios digitales cada vez es mayor, por lo que se dejan rastros en la red que son importantes gestionar, evitando estar expuesto a riesgos y amenazas. En este componente, se lograrán habilidades para ser un mejor ciudadano digital del siglo XXI, con una mirada ética y responsable de la comunicación con los demás y de la información que se comparte.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identidad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Qué son los perfiles digitales (públicos y privados)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de perfiles digitales ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos de la identidad digital ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos de identidad digital',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Uso y consumo de contenidos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Leyes y tratamiento de datos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Uso ético de la información digital',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas digitales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Identidad digital ',
      referencia:
        'Oficina de Seguridad del Internauta. (2020). <em>Identidad digital. ¿Quiénes somos la red?</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rNmXiYY9iHA  ',
    },
    {
      tema: 'Identidad digital ',
      referencia:
        'Gobierno de la Provincia de Buenos Aires, UNICEF & Faro Digital. (2016). Guía de sensibilización sobre Convivencia Digital. ',
      tipo: 'PDF',
      descarga: '/downloads/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      tema: 'Identidad digital ',
      referencia:
        'Fundación Telefónica. (2013). Identidad Digital: El nuevo usuario en el mundo digital. Editorial Ariel. ',
      tipo: 'PDF',
      descarga: '/downloads/identidad_digital.pdf',
    },
    {
      tema: 'Leyes y tratamiento de datos  ',
      referencia: 'Universidad de Alicante. (2019). <em>Netiqueta.</em> ',
      tipo: 'PDF',
      descarga: '/downloads/CI2_intermedio_2017-18_Netiqueta.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación móvil (<i>app</i>) ',
      significado:
        'programa informático empaquetado para poder ser utilizado en dispositivos móviles. Pueden ser gratuitos o de pago, se descargan de tiendas Android o IOS.',
    },
    {
      termino: '<i>Blog</i>',
      significado:
        'sitio <i>web</i> que recopila información en orden cronológico, tipo diario; puede ser personal o empresarial; se usa para noticias o artículos. ',
    },
    {
      termino: 'Comunidad ',
      significado:
        'grupo de personas que se reúnen para poder compartir información de interés y se comunican de manera síncrona o asíncrona. ',
    },
    {
      termino: 'Firma digital ',
      significado:
        'documento electrónico cifrado para proteger información y verificar la fuente desde donde fue emitida.',
    },
    {
      termino: 'Identidad digital ',
      significado:
        'rasgos que una persona, grupo u organización tiene en medios digitales, generados a partir de su actuar en la red.',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'opiniones, comentarios o calificaciones de una persona o empresa que está presente en Internet.',
    },
    {
      termino: 'Youtuber',
      terminoHtml: '<i>Youtuber</i>',
      significado:
        'llamados también influenciadores digitales, son las personas que suben contenidos a Internet para poder compartirlos en plataformas digitales como YouTube.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ecoprensa. (2016). Redes sociales: los límites de lo público y lo privado. elEconomista América.  ',
      link:
        'https://www.eleconomista.es/telecomunicacion-tecnologia-cl/noticias/7790793/08/16/Redes-sociales-los-limites-de-lo-publico-y-lo-privado.html',
    },
    {
      referencia:
        'Fundación telefónica. (2013). Identidad Digital: El nuevo usuario en el mundo digital. Editorial Ariel. ',
      link:
        'https://www.ufasta.edu.ar/biblioteca/files/2017/02/identidad_digital.pdf',
    },
    {
      referencia: 'Innova School. (s. f.). PLE y PLN Básico. Ébolo.  ',
      link: 'https://ebolo.es/welearning/innovaschool/modulos/ple1/index.html',
    },
    {
      referencia:
        'Martínez, P. (2017). Estudio de Uso y Actitudes de Consumo de Contenidos Digitales. Ministerio de Energía, Turismo y Agenda Digital. ',
      link:
        'https://www.ontsi.es//sites/ontsi/files/Uso%20y%20actitudes%20de%20consumo%20de%20contenidos%20digitales.%20Julio%202017.pdf',
    },
    {
      referencia:
        'Mejia, R. (2016). Construyendo nuestra identidad digital. rubenmejiasite. ',
      link:
        'https://rubenmejiasite.wordpress.com/2016/08/21/construyendo-nuestra-identidad-digital/',
    },
    {
      referencia:
        'ProTalento. (2020). Habilidades digitales en Colombia. ¿El futuro digital es de todos? GAN Colombia. ',
      link:
        'http://www.andi.com.co/Uploads/GAN_HabilidadesDigitales_COL_V8.pdf',
    },
    {
      referencia:
        'Rivera, C. (2014). Identidad digital... ¿ser o no ser? Infotecarios.',
      link:
        'https://www.infotecarios.com/identidad-digital-ser-o-ser/#.Yuph0hHPxPY',
    },
    {
      referencia:
        'Sabater, C. (2014). La vida privada en la sociedad digital. La exposición pública de los jóvenes en Internet. Aposta, (61), p. 1-32. ',
      link: 'https://www.redalyc.org/pdf/4959/495950257001.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2018). Protección de datos personales. Gov.co.  ',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
    {
      referencia: 'Universidad de Alicante. (2019). Netiqueta.  ',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/79601/2/CI2_intermedio_2017-18_Netiqueta.pdf',
    },
    {
      referencia:
        'Universidad Pablo de Olavide. (2020). Gestión de la Identidad Digital.  ',
      link:
        'https://es.scribd.com/document/600527308/Universidad-Pablo-de-Olavide-2020-Gestion-de-la-Identidad-Digital',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Pedro Javier Lozada Villota',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional distrito capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate',
          cargo: 'Diseño web',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollo front-end',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo Lopez ',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
