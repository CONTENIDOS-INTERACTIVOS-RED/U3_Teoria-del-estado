<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El Estado según Hobbes, Rousseau, Maquiavelo, Montesquieu, Marx, Locke y Kelsen'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-up")
        .mb-4.d-flex.align-items-start.bg-gris.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-4.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 El pensamiento político ha evolucionado a lo largo de la historia, proporcionando diversas interpretaciones sobre la función y naturaleza del Estado. Cada teoría ha surgido en un contexto histórico específico y ha respondido a problemáticas particulares de su época y, el estudio de estas permite comprender cómo se ha construido la organización política actual. Analizar las ideas de estos pensadores es fundamental para identificar los cimientos sobre los cuales se sustentan los sistemas de gobierno y las formas en las que se ejerce el poder.
        span Por ejemplo, Hobbes, en un contexto de guerras civiles, justificó la necesidad de un Estado fuerte que garantizara la seguridad de los ciudadanos mediante un poder absoluto. Rousseau, en contraste, planteó que la soberanía debía residir en el pueblo y que el Estado debía actuar en función de la voluntad general. Maquiavelo, por su parte, fue uno de los primeros en describir la política como un ejercicio de poder basado en la estrategia y no en la moral, estableciendo principios que siguen vigentes en la política contemporánea. Montesquieu propuso la división de poderes como un mecanismo para evitar el abuso de autoridad, idea que influyó en la construcción de los sistemas democráticos modernos.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-marron.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Marx analizó el Estado desde una perspectiva económica, viéndolo como un instrumento de dominación de clase que debía ser superado para alcanzar una sociedad sin desigualdades. Locke defendió la existencia de un gobierno limitado cuya principal función fuera garantizar los derechos naturales de los ciudadanos, mientras que Kelsen desarrolló la teoría pura del derecho, estableciendo al Estado como un sistema normativo que encuentra su validez en una norma fundamental.

    p.mb-4(data-aos="fade-up") Cada una de estas visiones ha aportado elementos clave para la comprensión del derecho y la administración del poder. Estudiarlas no solo permite comprender el pasado, sino que también facilita el análisis de las estructuras estatales actuales y las tensiones políticas contemporáneas.
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 1.1	Thomas Hobbes: El Estado como garantía del orden.

    p.mb-4(data-aos="fade-up") Thomas Hobbes (1588-1679) es uno de los filósofos políticos más influyentes en la teoría del Estado. En su obra Leviatán (1651), desarrolla una visión del Estado basada en la necesidad de un poder absoluto para garantizar el orden y la seguridad social.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Estado de naturaleza
              p Situación donde los seres humanos viven en un conflicto constante, definido por Hobbes como una lucha de todos contra todos (bellum omnium contra omnes), caracterizada por una vida "solitaria, pobre, desagradable, brutal y corta".
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Contrato social
              p Acuerdo mediante el cual los individuos renuncian a sus derechos y libertades individuales en favor de un soberano absoluto. Este pacto ocurre exclusivamente entre ciudadanos, no con el gobernante directamente.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Leviatán
              p Nombre dado al Estado fuerte resultante del contrato social, que posee el monopolio del uso legítimo de la fuerza y cuya autoridad es incuestionable, asegurando así la paz social.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Justificación racional
              p Hobbes argumenta que la obediencia al soberano absoluto es racional y conveniente, pues asegura estabilidad social sin depender de justificaciones morales o religiosas.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Libertad según Hobbes
              p La libertad radica en la obediencia al soberano, no en la resistencia. Esta obediencia garantiza la supervivencia colectiva y evita el regreso al estado de naturaleza.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Críticas al modelo
              p Su propuesta es considerada autoritaria, al carecer de mecanismos que controlen el poder absoluto del soberano.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Influencia en el pensamiento político
              p A pesar de sus críticas, el planteamiento de Hobbes influyó profundamente en el desarrollo del pensamiento político moderno, especialmente en debates sobre soberanía, absolutismo y la estabilidad social.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 1.2	Jean-Jacques Rousseau: El contrato social y la soberanía popular.

    p.mb-4(data-aos="fade-up") Jean-Jacques Rousseau (1712-1778) plantea, en su obra El contrato social (1762), una visión del Estado completamente distinta a la de Hobbes. Sostiene que la soberanía debe residir en el pueblo y que el Estado debe actuar de acuerdo con la voluntad general.
    .row.mb-4
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Estado de naturaleza según Rousseau")(data-aos="fade-up")
            p Rousseau sostiene que los seres humanos nacen libres e iguales en el estado natural, pero la vida en sociedad genera desigualdad.
          .div(titulo="Contrato social")(data-aos="fade-up")
            p Propone que los individuos cedan sus derechos individuales a la comunidad en conjunto, buscando superar las desigualdades mediante un acuerdo colectivo.
          .div(titulo="Voluntad general")(data-aos="fade-up")
            p Surge del contrato social y representa el bien común, no siendo simplemente la suma de voluntades individuales. Es esta voluntad colectiva la que orienta las acciones del Estado.
          .div(titulo="Democracia directa")(data-aos="fade-up")
            p Rousseau rechaza el poder absoluto de un solo gobernante y promueve la participación activa de todos los ciudadanos en las decisiones públicas, oponiéndose a leyes arbitrarias y defendiendo que estas se basen en la voluntad general.

    .row.mb-4
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Soberanía inalienable e indivisible")(data-aos="fade-up")
            p Rousseau establece que la soberanía reside en el pueblo y es imposible transferirla a un gobernante o institución, diferenciándose así de pensadores como Locke, partidarios de gobiernos representativos.
          .div(titulo="Aplicabilidad y crítica")(data-aos="fade-up")
            p Aunque la democracia directa propuesta por Rousseau resulta difícil de implementar en Estados con grandes poblaciones, su pensamiento ha influido significativamente en las democracias modernas y en la defensa de los derechos ciudadanos.
          .div(titulo="Uso polémico de la voluntad general")(data-aos="fade-up")
            p El concepto de voluntad general ha tenido diversas interpretaciones; en ocasiones, se ha utilizado para justificar regímenes autoritarios que dicen actuar en nombre del pueblo sin facilitar su participación real. A pesar de estas interpretaciones, Rousseau continúa siendo una referencia central en los estudios sobre soberanía popular y el Estado.
            p
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 1.3	Nicolás Maquiavelo: El Estado como instrumento del poder.

    p.mb-4(data-aos="fade-up") Nicolás Maquiavelo (1469-1527) es considerado el padre del pensamiento político moderno. En El Príncipe (1513), presenta una visión del poder que rompe con la tradición filosófica anterior, alejándose de principios morales para centrarse en la realidad del ejercicio político.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Objetivo del gobernante 
              p Para Maquiavelo, el objetivo primordial de un gobernante no es seguir principios morales, sino mantener y fortalecer el Estado mediante decisiones pragmáticas que combinen astucia y fuerza cuando la situación lo exija.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Pragmatismo político
              p Su enfoque enfatiza la acción política efectiva por encima de la virtud moral. Aunque no escrita textualmente por él, se le atribuye la frase "el fin justifica los medios".
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Metáfora del león y el zorro
              p Propone que un líder debe ser fuerte como un león y astuto como un zorro, adaptándose estratégicamente a distintas circunstancias para conservar el poder, inspirado por la realidad política italiana de conflictos y fragmentación de su época.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Liderazgo fuerte y estabilidad
              p Su propuesta no busca promover la tiranía, sino responder a la necesidad de un liderazgo firme y estratégico, capaz de garantizar la estabilidad interna y proteger al Estado frente a amenazas externas.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Realismo político
              p Su pensamiento realista separa claramente la política de la moral y la religión, aportando significativamente al nacimiento de la ciencia política.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Interpretaciones variadas
              p Aunque algunos interpretan a Maquiavelo como defensor del autoritarismo, otros destacan su contribución en mostrar que la política opera bajo reglas propias, independientes de criterios éticos tradicionales.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Influencia contemporánea
              p El pensamiento de Maquiavelo continúa vigente en teorías modernas sobre liderazgo, diplomacia y estrategia política, marcando profundamente la comprensión actual del ejercicio del poder.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 1.4	Montesquieu: La separación de poderes.

    p.mb-4 Montesquieu, en su obra El espíritu de las leyes, formula una de las propuestas más influyentes en la teoría política moderna: la separación de poderes como garantía de la libertad y freno al abuso de autoridad.
    .row.mb-4
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="División de poderes")(data-aos="fade-up")
            p Montesquieu propone dividir el Estado en tres ramas independientes (legislativa, ejecutiva y judicial) para proteger la libertad individual y evitar que el poder se concentre excesivamente.
          .div(titulo="Frenos y contrapesos")(data-aos="fade-up")
            p Sostiene que quienes ejercen el poder tienden naturalmente al abuso, por lo que resulta imprescindible establecer límites institucionales claros mediante mecanismos de control y equilibrio entre los poderes.
          .div(titulo="Contextualización de las leyes")(data-aos="fade-up")
            p Introduce un enfoque flexible y relativista, destacando que las leyes deben adecuarse a factores específicos como el clima, la religión, las costumbres y la economía de cada nación.
          .div(titulo="Tipos de gobierno")(data-aos="fade-up")
            p Montesquieu distingue tres tipos de gobierno: republicano (fundamentado en la virtud cívica), monárquico (basado en leyes y tradiciones), y despótico (caracterizado por el control mediante el temor).
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Análisis crítico")(data-aos="fade-up")
            p Sus tipologías permiten un análisis crítico de los diferentes regímenes políticos de su época, facilitando la definición de principios clave para la construcción de Estados modernos.
          .div(titulo="Redefinición del Estado")(data-aos="fade-up")
            p Su enfoque redefine la concepción del Estado al priorizar el diseño institucional y la organización equilibrada del poder, enfatizando que la estructura interna del Estado condiciona su funcionamiento.
          .div(titulo="Influencia práctica")(data-aos="fade-up")
            p La obra de Montesquieu ha tenido una influencia directa en la creación de constituciones democráticas modernas, especialmente por su defensa del principio de la separación de poderes como garantía esencial de la libertad y el control político.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.5
        h2 1.5	Karl Marx: El Estado como instrumento de dominación

    p.mb-4(data-aos="fade-up") Karl Marx ofrece una crítica estructural del Estado desde una perspectiva materialista e histórica. En su visión, el Estado no es un ente neutral, sino una superestructura que reproduce y perpetúa las relaciones de poder de las clases dominantes.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Estado como herramienta de clase
              p Marx define el Estado moderno como una herramienta de opresión al servicio de la clase dominante (la burguesía), que controla los medios de producción.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Relación Estado-economía
              p La estructura del Estado está determinada por la etapa económica: en el feudalismo favorece a los señores feudales; en el capitalismo, protege los intereses de los burgueses propietarios.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Represión y legislación
              p En el capitalismo, el Estado legisla para proteger a los propietarios de los medios de producción y utiliza mecanismos legales y coercitivos para reprimir a la clase trabajadora.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Dictadura del proletariado
              p Marx propone una etapa transitoria en la cual el proletariado asume el poder político (la dictadura del proletariado) para desmantelar la propiedad privada de los medios de producción y transformar radicalmente la sociedad.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Desaparición del Estado
              p El objetivo último de Marx es la desaparición del Estado. En una sociedad comunista, sin clases sociales, no habría necesidad de una institución que administre intereses particulares, sino una administración colectiva de bienes comunes.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Estado y desigualdad
              p Según Marx, el Estado refleja y sostiene las desigualdades estructurales, actuando en beneficio de los intereses económicos de la clase dominante.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Influencia contemporánea
              p Su análisis del Estado continúa siendo fundamental para entender las relaciones actuales entre poder, economía y dominación, especialmente en contextos de desigualdad social y conflictos económicos.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    #t_1_6.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.6
        h2 John Locke: El gobierno limitado y los derechos naturales.

    p.mb-4 John Locke elabora una teoría del Estado basada en la protección de los derechos naturales: la vida, la libertad y la propiedad. Su obra Dos tratados sobre el gobierno formula una alternativa liberal al absolutismo.

    .row.mb-4
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Estado de naturaleza")(data-aos="fade-up")
            p Según Locke, los individuos viven en libertad e igualdad, pero sin garantías frente a posibles abusos; por ello, deciden formar una comunidad política mediante un contrato social.
          .div(titulo="Contrato social")(data-aos="fade-up")
            p Acuerdo mediante el cual los ciudadanos delegan el poder en un gobierno que se compromete a respetar sus derechos naturales. Si el gobierno incumple, el pueblo tiene derecho a resistir y sustituirlo.
          .div(titulo="Límites al poder político")(data-aos="fade-up")
            p Locke rechaza el poder absoluto y defiende un Estado limitado por el consentimiento ciudadano y la ley natural, diferenciándose claramente del modelo absolutista propuesto por Hobbes.
          .div(titulo="Influencia histórica")(data-aos="fade-up")
            p El pensamiento de Locke inspiró movimientos revolucionarios y tuvo gran impacto en constituciones democráticas modernas, especialmente en la Constitución de los Estados Unidos.
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Propiedad privada")(data-aos="fade-up")
            p Locke considera la propiedad privada un derecho natural derivado del trabajo individual, cuyo respeto y protección constituyen una de las principales funciones del Estado.
          .div(titulo="Límites a la acumulación")(data-aos="fade-up")
            p Aunque la acumulación de riqueza es legítima, Locke establece que esta no debe perjudicar a otros ni alterar el equilibrio social, reconociendo así la necesidad de límites para evitar desigualdades extremas.
          .div(titulo="Equilibrio derechos-colectividad")(data-aos="fade-up")
            p Locke plantea un equilibrio entre derechos individuales y necesidades colectivas, limitando el poder político y sentando las bases del liberalismo clásico y de los regímenes constitucionales actuales.

    #t_1_7.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.7
        h2 Hans Kelsen: El Estado como orden normativo.
    
    p.mb-4 Hans Kelsen propone una concepción del Estado centrada en el derecho, alejándose de enfoques ideológicos, sociológicos o filosóficos tradicionales. Su obra Teoría pura del derecho constituye uno de los aportes más importantes a la ciencia jurídica del siglo XX.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Relación Estado-Derecho
              p Para Kelsen, Estado y derecho son inseparables: el Estado no existe sin el derecho, y este constituye la base esencial del Estado.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Teoría pura del derecho
              p Su propuesta elimina elementos subjetivos, morales o políticos del análisis jurídico, buscando establecer una ciencia normativa estricta y rigurosa, conocida como "teoría pura del derecho".
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-68.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Pirámide normativa
              p Aporta el concepto de pirámide normativa, una estructura jerárquica donde todas las normas jurídicas obtienen validez de una norma fundamental o Grundnorm, asegurando coherencia y legitimidad en el sistema jurídico.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-69.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Estado como sistema dinámico
              p Kelsen considera al Estado un sistema dinámico capaz de adaptarse y evolucionar mediante la creación, modificación o derogación de normas, siempre respetando su estructura jerárquica.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-70.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Neutralidad ideológica
              p Al excluir dimensiones morales o ideológicas, su teoría puede aplicarse a cualquier régimen político (democrático, autoritario o transicional), centrándose exclusivamente en la validez formal de las normas.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-71.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-xl-8.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Influencia constitucional
              p Su enfoque ha influido profundamente en el constitucionalismo contemporáneo, especialmente en aspectos relacionados con la jerarquía normativa, los tribunales constitucionales y la supremacía del derecho en los Estados modernos.
            .d-none.d-xl-block.col-md-6.col-lg-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-72.png', alt='Texto que describa la imagen')

    .row.bg-gris.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Teorías del Estado
          p.mb-5(data-aos="fade-up") Se invita cordialmente a leer el documento Teorías del Estado , donde se presenta un recorrido por las principales concepciones sobre el origen, estructura y finalidad del Estado formuladas por pensadores como Hobbes, Rousseau, Maquiavelo, Montesquieu, Marx, Locke y Kelsen.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Teoria del estado.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teorías del Estado
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.studocu.com/es-ar/document/universidad-nacional-de-rosario/historia-politica-argentina/tres-enfoques-sobre-el-concepto-de-estado/60680395") Aldo, Ernesto. Tres enfoques sobre el concepto de Estado.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/E96Evy-CIEI?si=dH6ACaiiTNqRkVTE") [Vídeo] El rincón de Foucault (2020, 10 de mayo) Estado, sociedad y derecho.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
