<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Tipos de Constitución'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.bg-marron.p-4.pb-xl-0
        .col-12.col-xl-10
          p.my-auto El concepto de Constitución es <b>dinámico</b>: evoluciona según las transformaciones históricas, políticas y sociales. Como señala <b>Arrubla Sánchez (2017)</b>, <i>“El concepto de Constitución no es estático, sino que responde a los cambios políticos y sociales de cada época”</i> (p. 45). Esta naturaleza mutable explica por qué existen distintos tipos de constituciones, cada una adaptada a contextos particulares.
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 Según su forma: constituciones escritas y no escritas

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Constituciones escritas
                p.px-1.text-small.mb-0.text-center Codificadas en un único documento. Se consolidaron desde el siglo XVIII, destacando la Constitución de EE. UU. (1787). Su estructura clara facilita la interpretación y aplicación jurídica.
            .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Constituciones no escritas
                p.px-1.text-small.mb-0.text-center Basadas en la costumbre, precedentes judiciales y diversos documentos históricos. Ejemplo paradigmático: Reino Unido (Carta Magna de 1215, Bill of Rights de 1689). Aunque carecen de sistematicidad, pueden ofrecer gran estabilidad institucional.

      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 Según su rigidez: constituciones rígidas y flexibles

      p.mb-4 Este criterio considera la facilidad o dificultad para reformar la Constitución, lo que refleja el equilibrio entre estabilidad institucional y capacidad de adaptación política.

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Constituciones rígidas', :icon="require('@/assets/curso/unidad/img-24.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Constituciones rígidas
              p(data-aos='fade-up') Requieren procedimientos complejos para su reforma (mayorías cualificadas, referendos). Buscan proteger el orden constitucional. Ejemplo: EE. UU., donde una enmienda necesita aprobación por dos tercios del Congreso y ratificación por tres cuartas partes de los estados.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Constituciones flexibles', :icon="require('@/assets/curso/unidad/img-24.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Constituciones flexibles
              p(data-aos='fade-up') Pueden modificarse mediante los mismos procedimientos legislativos que las leyes ordinarias. Favorecen la adaptación, pero pueden generar inestabilidad. Ejemplo: Reino Unido, donde el Parlamento puede modificar principios constitucionales por ley común.

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 Según su origen: constituciones otorgadas, pactadas e impuestas

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 Esta clasificación se basa en el proceso de elaboración y en el grado de participación ciudadana, factores determinantes en su legitimidad democrática.

          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Constituciones otorgadas
                  p.text-small.px-4.text-center.pb-2 Impuestas unilateralmente por una autoridad (e.g., monarca), sin intervención del pueblo. Se presentan como concesión. Ejemplo: Carta Constitucional francesa de 1814, otorgada por Luis XVIII.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Constituciones pactadas
                  p.text-small.px-4.text-center.pb-2 Resultado de acuerdos entre diversos sectores políticos. Generan mayor aceptación y legitimidad social. Ejemplo: Constitución española de 1837, fruto de un pacto entre la monarquía y las Cortes.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Constituciones impuestas
                  p.text-small.px-4.text-center.pb-2 Elaboradas sin participación ciudadana, típicamente durante regímenes autoritarios. Su legitimidad es cuestionada, aunque se sometan a referendos. Ejemplo: Constitución chilena de 1980, redactada bajo la dictadura de Pinochet.

      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Según su contenido: constituciones normativas, nominales y semánticas

      p.mb-4 Este enfoque considera si la Constitución realmente se aplica y cumple con lo que establece, más allá de su redacción formal.

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Constituciones normativas")
              p Se aplican plenamente, regulan eficazmente el poder y garantizan derechos. Ejemplo: Constitución alemana de 1949, clave en la consolidación democrática y la estabilidad del país.
            .div(titulo="Constituciones nominales")
              p Recogen derechos y principios en el texto, pero su cumplimiento es limitado por debilidades institucionales o falta de voluntad política. Ejemplo: Constitución venezolana de 1999, con una amplia carta de derechos poco respetada en la práctica.
            .div(titulo="Constituciones semánticas")
              p Utilizadas por regímenes autoritarios como herramienta de legitimación sin respeto real a sus principios. Ejemplo: Constitución soviética de 1936, que proclamaba libertades mientras concentraba el poder en el Partido Comunista.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

      .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-31.svg', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white Como advierte <b>Scarciglia (2011)</b>: <i>“La efectividad de una Constitución no depende solo de su texto, sino de las condiciones políticas y sociales que permiten su aplicación”</i> (p. 56).

      #t_2_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.5
          h2 La Constitución Colombiana de 1991

      p.mb-4 La Constitución Política de Colombia de 1991 es un ejemplo representativo de una carta política moderna y democrática. Puede analizarse desde las distintas clasificaciones anteriores:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-32.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='36%' y='70%' numero='+')
          .h5.mb-2 Forma
          p <b>Escrita:</b> Recogida en un documento sistemático que facilita su interpretación jurídica.
        .tarjeta.bg-white.p-4(x='45.5%' y='70%' numero='+')
          .h5.mb-2 Origen
          p <b>Pactada:</b> Producto del consenso entre partidos, movimientos sociales y ciudadanía, impulsado por la Séptima Papeleta en 1990.
        .tarjeta.bg-white.p-4(x='55%' y='70%' numero='+')
          .h5.mb-2 Rigidez
          p <b>Rígida:</b> Su reforma exige procedimientos especiales (artículo 375), como actos legislativos aprobados en dos periodos o mecanismos como referendo o Asamblea Constituyente.
        .tarjeta.bg-white.p-4(x='64%' y='70%' numero='+')
          .h5.mb-2 Contenido
          p <b>Normativa:</b> Se aplica efectivamente, regula el poder del Estado y garantiza derechos fundamentales. La creación de la acción de tutela ha sido uno de sus logros más relevantes.

      .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-33.png', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0 Esta Constitución representó un <b>hito democrático</b> en la historia del país. Incorporó valores como el <b>pluralismo</b>, la <b>descentralización</b>, la <b>participación ciudadana</b> y el <b>reconocimiento de la diversidad étnica y cultural</b>, consolidando el modelo de <b>Estado social de derecho</b>.

      p.mb-4 <b>Tabla 1.</b>  Tipos de constitución, ventajas y desventajas.

      .tabla-a.mb-5
        table
          thead
            tr
              th.bg-morado.text-white.text-center Tipo de Constitución
              th.bg-morado.text-white.text-center Características
              th.bg-morado.text-white.text-center Ventajas
              th.bg-morado.text-white.text-center Desventajas
              th.bg-morado.text-white.text-center País Ejemplo
          tbody
            tr
              td.text-bold Escrita
              td Se encuentra contenida en un documento formal. Es sistemática y organizada.
              td Mayor claridad y estabilidad. Facilita su interpretación y aplicación.
              td Puede volverse rígida si el proceso de reforma es complejo.
              td Brasil (Constitución de 1988)
            tr
              td.text-bold No Escrita
              td Basada en normas, costumbres y jurisprudencia. No está codificada en un solo documento.
              td Se adapta con mayor facilidad a los cambios políticos y sociales.
              td Falta de certeza jurídica, ya que su interpretación depende de la costumbre.
              td Nueva Zelanda
            tr
              td.text-bold Rígida
              td Su modificación requiere procedimientos especiales (reformas por mayoría calificada, referéndum, etc.).
              td Proporciona estabilidad y protege principios fundamentales.
              td Puede dificultar la adaptación a cambios sociales o políticos.
              td Chile (Constitución de 1980, reformada en 2005)
            tr
              td.text-bold Flexible
              td Se puede modificar mediante procesos legislativos ordinarios.
              td Permite adaptarse con rapidez a nuevas realidades.
              td Puede generar inestabilidad si se cambia con demasiada frecuencia.
              td Dinamarca
            tr
              td.text-bold Otorgada
              td Impuesta unilateralmente por un gobernante o poder central.
              td Permite una transición rápida hacia una organización política.
              td Falta de legitimidad democrática y posible rechazo social.
              td Tailandia (Constitución de 2017, redactada por la junta militar)
            tr
              td.text-bold Pactada
              td Resultado de un acuerdo entre diferentes actores políticos o sociales.
              td Mayor legitimidad y aceptación social.
              td Puede generar conflictos si los acuerdos no son claros o equitativos.
              td España (Constitución de 1978)
            tr
              td.text-bold Impuesta
              td Surge tras una situación de fuerza, como una revolución o intervención militar.
              td Puede responder rápidamente a crisis o cambios drásticos.
              td Alto riesgo de falta de legitimidad y resistencia social.
              td Turquía (Constitución de 1982, tras el golpe de Estado de 1980)
            tr
              td.text-bold Normativa (según Loewenstein)
              td Se aplica efectivamente y regula la realidad política.
              td Garantiza el cumplimiento de derechos y principios democráticos.
              td Puede volverse rígida si no permite adecuaciones a la sociedad.
              td Canadá
            tr
              td.text-bold Nominal (según Loewenstein)
              td Existen formalmente, pero no se cumplen en la práctica.
              td Puede ser el primer paso hacia una futura aplicación efectiva.
              td Genera desconfianza en el sistema legal si no se respeta.
              td Rusia (Constitución de 1993, con limitaciones en su aplicación efectiva)
            tr
              td.text-bold Semántica (según Loewenstein)
              td Se usa para justificar regímenes autoritarios sin garantizar derechos.
              td Puede estabilizar a corto plazo un sistema de gobierno.
              td Suelen servir para mantener el poder en una élite gobernante.
              td Corea del Norte

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/7512") Meléndez, F. (2006). Instrumentos internacionales sobre derechos humanos aplicables a la administración de justicia: estudio constitucional comparado. Editorial Miguel Ángel Porrúa.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=ffv3dQCmR_U&t=296s") [Vídeo] Universidad Continental. (2021). Las constituciones rígidas y flexibles.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p 
      
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
