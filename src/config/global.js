export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'El concepto de estado,  sus orígenes, elementos, fundamentos y funciones',
  },
  menuPrincipal: {
    menu: [
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
        titulo:
          'El Estado según Hobbes, Rousseau, Maquiavelo, Montesquieu, Marx, Locke y Kelsen',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Thomas Hobbes: El Estado como garantía del orden',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Jean-Jacques Rousseau: El contrato social y la soberanía popular',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Nicolás Maquiavelo: El Estado como instrumento del poder',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Montesquieu: La separación de poderes.',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Karl Marx: El Estado como instrumento de dominación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'John Locke: El gobierno limitado y los derechos naturales.',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Hans Kelsen: El Estado como orden normativo',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elementos del Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La población: Base Humana',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El Territorio: Límites físicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La Soberanía: Autoridad Suprema',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El Poder Político: La capacidad de gobernar',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamento jurídico y legal del Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evolución del fundamento jurídico del estado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principios normativos del estado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La Constitución: Base del fundamento jurídico del Estado',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'El Estado de Derecho: garantía de igualdad y justicia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Robles Vázquez, J. & Cruz Gayosso, M. (2014). Teoría general del estado. IURE Editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40192',
    },
    {
      referencia:
        'Bobbio, N. (1989). Estado, gobierno y sociedad. Fondo de Cultura Económica.',
      link:
        'https://ia601609.us.archive.org/25/items/bobbio-thomas-hobbes/Bobbio%20-%20Estado_text.pdf',
    },
    {
      referencia:
        'Aguilar Balderas, L. (2015). Teoría general del Estado. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/3939',
    },
    {
      referencia:
        'Travis Arias Purón, R. (2015). Derecho 1. Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39483',
    },
    {
      referencia:
        'Cassagne, J. C. (2016). Los grandes principios del Derecho Público (Constitucional y Administrativo). Editorial Reus.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/100489',
    },
    {
      referencia:
        'Kelsen, H. (2009). El método y los conceptos fundamentales de la teoría pura del derecho. Editorial Reus.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46359',
    },
  ],
  glosario: [
    {
      termino: 'Bioética',
      significado:
        'disciplina que estudia las implicaciones éticas, sociales y legales de los avances biológicos y médicos, buscando garantizar que las decisiones en estos campos respeten la dignidad humana, los derechos fundamentales y la justicia social.',
    },
    {
      termino: '<em>Design Thinking</em>',
      significado:
        'método de diseño centrado en el usuario que se basa en la comprensión de las necesidades y expectativas de los clientes, para crear soluciones innovadoras y efectivas.',
    },
  ],
}
