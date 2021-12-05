export default {
  global: {
    componenteFormativo: 'Bocetación e ilustración',
    descripcionCurso:
      'La ilustración juega un papel muy importante en el diseño y presenta un alto valor en contenido gráfico y visual. Se caracteriza por su versatilidad de componentes, técnicas, formas, manejo de recursos, entre otros. Por medio de ella, se transmiten mensajes claros y concisos, que llegan al espectador de una manera directa, la cual le permite una comprensión total de cualquier tema. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Del boceto a la ilustración	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición del proyecto	',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Selección de <i>software</i>	',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas y aplicaciones	',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Correcciones y aprobación	',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ilustración	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fases',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de ilustraciones	',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Técnicas	',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Composición y perspectiva	',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Creación de ambientes, personajes y props	',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Imagen e identidad corporativa	',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diseño de marca y <i>branding</i>	',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Productos editoriales	',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Productos gráficos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Capriotti, P. (2009). Branding corporativo. Fundamentos para la gestión estratégica de la identidad corporativa.',
      link: '',
    },
    {
      referencia: 'Colección de Libros de la Empresa.',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Fernández, F. (2012). Imágenes con 1, 2 y 3 puntos de fuga. Dibujando. ',
      link:
        'https://dibujando.net/tutorial/perspectiva/imagenes-con-1-2-y-hasta-3-puntos-de-fuga-32718',
    },
    {
      referencia:
        'García, H. (2017). Ilustración publicitaria. Ilustrando en la escuela de arte. ',
      link:
        'http://ilustrandoenlaescueladearte.blogspot.com/2014/10/ilustracion-publicitaria.html',
    },
    {
      referencia:
        'Menza, A., Sierra, E. y Sánchez, W. (2016). La ilustración: dilucidación y proceso creativo. Revista KEPES, 13(13), p. 265-296.',
      link: 'http://vip.ucaldas.edu.co/kepes/downloads/Revista13_12.pdf',
    },
    {
      referencia:
        'Moreno, J. (2021). ¿Cómo crear un manual de identidad corporativa paso a paso? HubSpot. ',
      link:
        'https://blog.hubspot.es/marketing/branding-e-identidad-corporativa-guias-de-estilo',
    },
    {
      referencia: 'Sosa, A. (2020). Tipos de Branding. Grupo Endor.',
      link: 'https://www.grupoendor.com/tipos-de-branding/',
    },
  ],
  glosario: [
    {
      termino: 'Análoga',
      significado: 'que tiene analogía con algo.',
    },
    {
      termino: '<i>Branding</i>',
      significado:
        'hace referencia al proceso para construir y gestionar una marca, se vincula en forma directa o indirecta al nombre y/o símbolo (logotipo) que la identifican, la hacen única y competitiva.',
    },
    {
      termino: 'Editorial',
      significado:
        'corresponde a un artículo que expresa la opinión sobre un tema determinado, generalmente de interés público, a través de un medio de comunicación como el periódico o la revista',
    },
    {
      termino: 'Exponencial',
      significado:
        'relativo al crecimiento, que se incrementa cada vez más rápido.',
    },
    {
      termino: 'Marca',
      significado:
        'se entiende como una identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: 'Pantone',
      significado:
        '“Es un sistema de identificación de colores de impresión creado por la empresa Pantone”. Izquierdo, T. (2019). Diseño gráfico y web.',
    },
    {
      termino: 'Publicidad',
      significado:
        'es una forma de comunicación con el propósito de presentar, divulgar o promocionar productos o servicios.',
    },
  ],
  complementario: [
    {
      texto:
        'Capriotti, P. (2009). Branding corporativo. Fundamentos para la gestión estratégica de la identidad corporativa. Colección de Libros de la Empresa.',
      tipo: 'PDF',
      descarga: '/downloads/BrandingCorporativo.pdf',
    },
    {
      texto:
        'Notodoanimacion. (2020). Cómo Diseñar Personajes NIVEL DIOS (2 HORAS) Curso de Diseño y Creación de Personajes GRATIS [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QXEoH4AsnUE',
    },
    {
      texto:
        'Barba Batel. (2020). Tutorial básico de luces y sombras en el dibujo artístico [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ma8dsEsOh34',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González. ',
        cargo: 'Instructor Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Eduardo José Velasco',
        cargo: 'Instructor Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisor metodológico y pedagógico',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
