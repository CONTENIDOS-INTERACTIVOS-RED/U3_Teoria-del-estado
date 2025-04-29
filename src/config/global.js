export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'La Constitución',
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
        titulo: 'Concepto de Constitución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funciones de la Constitución',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La Constitución en Colombia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de Constitución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Según su forma: constituciones escritas y no escritas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Según su rigidez: constituciones rígidas y flexibles',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Según su origen: constituciones otorgadas, pactadas e impuestas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Según su contenido: constituciones normativas, nominales y semánticas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'La Constitución Colombiana de 1991',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Constitución y Democracia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Evolución histórica de la democracia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Mecanismos de participación ciudadana',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Órganos de control en democracia',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Desafíos contemporáneos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Democracia',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Democracia constitucional: principios fundamentales',
            hash: 't_3_6',
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
        'García Cuadrado, A. (2013). Derecho, Estado y constitución: el estatuto científico y otros temas fundamentales de derecho constitucional. ECU.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62284',
    },
    {
      referencia:
        'Contipelli, E. (2015). Teoría de la Constitución y bases de la institucionalidad. RIL editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67457',
    },
    {
      referencia:
        'Arrubla Sánchez, R. (2017). Teoría constitucional. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/server/api/core/bitstreams/8df5a748-4e6c-454a-9f2e-6f0168a4223a/content',
    },
    {
      referencia:
        'Scarciglia, R. (2011). Introducción al derecho constitucional comparado. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63089',
    },
    {
      referencia:
        'López Sterup, H. (2011). Manual de constitución y democracia. Universidad de los Andes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69375',
    },
    {
      referencia:
        'Barzotto, L. F. (2010). El guardián de la constitución: elementos para una epistemología de la democracia. Díkaion, 19 (2), 427-446. D - Universidad de La Sabana.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5619',
    },
  ],
  glosario: [
    {
      termino: 'Asamblea constituyente',
      significado:
        'Órgano representativo encargado de redactar o reformar una Constitución. Su función principal es definir el marco normativo de un Estado.',
    },
    {
      termino: 'Carta magna',
      significado:
        'Documento fundamental que establece los principios y normas básicas de un sistema jurídico y político en un país.',
    },
    {
      termino: 'Constitución',
      significado:
        'Conjunto de normas supremas que regulan la organización del Estado, los derechos fundamentales y la estructura del poder público.',
    },
    {
      termino: 'Control constitucional',
      significado:
        'Mecanismo mediante el cual se verifica la conformidad de las leyes y actos gubernamentales con la Constitución.',
    },
    {
      termino: 'Democracia',
      significado:
        'Sistema político en el que los ciudadanos participan en la toma de decisiones, ya sea de manera directa o a través de representantes elegidos.',
    },
    {
      termino: 'Derechos fundamentales',
      significado:
        'Conjunto de garantías inherentes a todas las personas, protegidos por la Constitución y los tratados internacionales.',
    },
    {
      termino: 'Estado de derecho',
      significado:
        'Principio según el cual todas las personas, incluidos los gobernantes, están sujetas a la ley y deben respetar la Constitución.',
    },
    {
      termino: 'Garantías constitucionales',
      significado:
        'Instrumentos jurídicos previstos en la Constitución para asegurar el respeto y cumplimiento de los derechos fundamentales.',
    },
    {
      termino: 'Mecanismos de participación ciudadana',
      significado:
        'Herramientas mediante las cuales la población puede intervenir en la gestión pública, como el referendo, la consulta popular y el plebiscito.',
    },
    {
      termino: 'Monarquía constitucional',
      significado:
        'Sistema político en el que un monarca ejerce funciones simbólicas dentro del marco de una Constitución que regula el poder del gobierno.',
    },
    {
      termino: 'Poder constituyente',
      significado:
        'Autoridad encargada de elaborar, modificar o reformar una Constitución, expresando la voluntad soberana de la nación.',
    },
    {
      termino: 'Principio de separación de poderes',
      significado:
        'Organización del Estado en ramas independientes (Ejecutivo, Legislativo y Judicial) para evitar la concentración de poder y garantizar el equilibrio institucional.',
    },
    {
      termino: 'Supremacía constitucional',
      significado:
        'Principio según el cual la Constitución es la norma jurídica suprema, por lo que todas las leyes y actos del Estado deben estar en conformidad con ella.',
    },
  ],
}
