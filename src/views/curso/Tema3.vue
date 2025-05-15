<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3.Constitución y Democracia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4
        .col-4.d-none.d-xl-block 
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-gris.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La relación entre constitución y democracia es fundamental para comprender la organización política de los Estados modernos. La <b>constitución</b> establece el marco normativo que regula la vida democrática, definiendo los <b>derechos fundamentales</b>, los principios del sistema político y las reglas para el ejercicio del poder.
          span Por su parte, la <b>democracia</b>, como forma de gobierno, ha evolucionado desde sus orígenes en la Antigua Grecia hasta consolidarse en los sistemas constitucionales contemporáneos.

      #t_3_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.1
          h2 Evolución histórica de la democracia

      p.mb-4 La palabra democracia proviene del griego <i>demos</i> (pueblo) y <i>kratos</i> (poder), es decir, "poder del pueblo". A lo largo de la historia, su forma y contenido han cambiado sustancialmente:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Democracia ateniense (siglo V a.C.)")
              p Sistema de participación directa limitado a hombres libres. Mecanismos clave: la Ekklesia (asamblea ciudadana) y el ostracismo para controlar el poder político.
            .div(titulo="República romana (509–27 a.C.)")
              p Introdujo instituciones representativas como el Senado y las Asambleas Populares. Aunque existían rasgos democráticos, el poder estaba en manos de la aristocracia patricia.
            .div(titulo="Edad Media")
              p La democracia desaparece casi por completo bajo el dominio de monarquías absolutas y la Iglesia. Sin embargo, documentos como la Carta Magna (1215) comienzan a limitar el poder monárquico.
            .div(titulo="Renacimiento e Ilustración")
              p Filósofos como Locke, Montesquieu y Rousseau recuperan la idea de soberanía popular, separación de poderes y contrato social, influenciando futuras revoluciones democráticas.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Revoluciones modernas")
              p - Revolución Gloriosa (1688): consolida el parlamentarismo en Inglaterra. <br>- Revolución Americana (1776): fundó  una república constitucional. <br>- Revolución Francesa (1789): promueve libertad, igualdad y fraternidad como bases del orden democrático.

            .div(titulo="Siglo XIX y abolición de privilegios")
              p Expansión del sufragio masculino, abolición de la esclavitud (EE. UU., 1865; Brasil, 1888), y debilitamiento de monarquías absolutas.
            .div(titulo="Siglo XX y democratización global")
              p Reconocimiento del voto femenino, surgimiento de organismos como la ONU, y luchas por derechos civiles (e.g., Martin Luther King Jr. en EE. UU.) que impulsan la inclusión política y la protección contra la discriminación.

      #t_3_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.2
          h2 Mecanismos de participación ciudadana

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          p.mb-4 La consolidación democrática ha implicado la incorporación de mecanismos que permiten la participación directa o indirecta de la ciudadanía:

          .row.mb-4 
            .col-12.col-xl-8
              SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-38.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Elecciones libres y periódicas
                  p.px-1.text-small.mb-0.text-center Pilar de la democracia representativa. Garantizan alternancia y legitimidad del poder político.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-39.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Referéndum
                  p.px-1.text-small.mb-0.text-center Consulta directa sobre leyes o reformas específicas.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-40.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Plebiscito
                  p.px-1.text-small.mb-0.text-center Consulta sobre decisiones políticas de carácter general, como una nueva constitución.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-41.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Iniciativa popular
                  p.px-1.text-small.mb-0.text-center Permite a la ciudadanía proponer leyes o reformas sin pasar por el Congreso.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-42.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Revocatoria de mandato
                  p.px-1.text-small.mb-0.text-center Posibilita la destitución anticipada de un funcionario elegido.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-43.svg', style='width: 80px')
                  p.text-bold.mb-4.text-center Cabildo abierto
                  p.px-1.text-small.mb-0.text-center Espacio de encuentro entre ciudadanía y gobernantes para debatir asuntos locales.
            .col-4.d-none.d-xl-block(data-aos="zoom-in")
              img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

      #t_3_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.3
          h2 Órganos de control en democracia

      p.mb-4 A continuación, se abordan los principales <b>órganos de control</b> que fortalecen las democracias contemporáneas.

      .row.bg-morado.bg-full-width.p-4.py-xl-0.mb-4
        .col-5.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex
          .my-auto
            p.mb-4.text-white A continuación, se aborda cómo el estado emocional de los estudiantes influye directamente en su capacidad para concentrarse y aprender.
            TarjetaAudio.color-secundario.bg-white.mb-3(
              texto='Teoría del estado.'
              tiempo
              :audio="require('../../assets/componentes/audios/Teoria_del_estado_Podcast_Unidad_III.mp3')"
              @audio-hover='mostrarIndicadorTarjetaAudio = false'
            )

      #t_3_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.4
          h2 Desafíos contemporáneos

      p.mb-4 Después de la Segunda Guerra Mundial, la <b>democracia liberal</b> se consolidó como modelo predominante. No obstante, en la actualidad enfrenta retos como:

      .row.mb-4
        .col-10.col-lg-6.col-xl-4.mx-auto
          .bg-morado.p-4.d-flex(data-aos='fade-up')
            p.m-auto.text-white Polarización política 
        .col-10.col-lg-6.col-xl-4.mx-auto
          .bg-morado-oscuro.p-4.d-flex(data-aos='fade-up')
            p.m-auto.text-white Desinformación
        .col-10.col-lg-6.col-xl-4.mx-auto
          .bg-morado.p-4.d-flex(data-aos='fade-up')
            p.m-auto.text-white Auge de regímenes autoritarios

      p.mb-4 Aun así, sigue siendo el sistema de gobierno más valorado a nivel global, con variantes como la <b>democracia representativa, participativa y deliberativa</b>.

      #t_3_5.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.5
          h2 Democracia

      .row.mb-4
        .col-12.col-xl-8
          .bg-marron.p-4(data-aos='fade-up')
            span La democracia es un sistema basado en la participación ciudadana, el respeto a los derechos humanos y la <b>división de poderes</b>. Desde una perspectiva constitucional, no se limita a elecciones periódicas, sino que requiere garantías institucionales sólidas.
          .bloque-texto-c.bg-marron-oscuro.p-4
            i.fas.fa-quote-left.text-.mb-4
            h3.mb-2 "No hay democracia sin constitución ni constitución sin democracia. La una se nutre de la otra, en un proceso continuo de legitimidad y legalidad que garantiza la estabilidad institucional."
            span.text-small López Sterup (2011)
        .col-4.d-none.d-xl-block(data-aos='fade-up')
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3
          
          p.mb-4 Una <b>constitución democrática</b> no solo define la estructura del poder, sino que incorpora valores esenciales como:
          .row.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Pluralismo
                  p.text-small.px-4.text-center.pb-2 Reconoce y protege la diversidad de ideas, culturas y formas de vida. Promueve el respeto mutuo, la convivencia pacífica y la inclusión de distintas voces en la toma de decisiones.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Igualdad
                  p.text-small.px-4.text-center.pb-2 Garantiza iguales derechos y oportunidades para todos, sin importar origen, género o condición. Combate la exclusión y promueve una sociedad justa y equitativa.
            .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
              div.custom-image-card.rounded-8px
                img.mb-4(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
                div.mb-4
                  p.text-bold.text-center Justicia
                  p.text-small.px-4.text-center.pb-2 Asegura el respeto a los derechos y deberes de las personas. Fomenta la paz, la legitimidad institucional y la resolución pacífica de los conflictos. 

      #t_3_6.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 3.6
          h2 Democracia constitucional: principios fundamentales

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 La democracia constitucional va más allá del acto electoral. Implica un orden político donde el poder se ejerce con límites legales y con garantías sustanciales para los ciudadanos.
          .bloque-texto-c.bg-azul.p-4.mb-4
            i.fas.fa-quote-left.text-.mb-4 
            h3.mb-2 "La democracia constitucional no se limita a la elección de gobernantes, sino que impone límites al poder y garantiza el ejercicio de los derechos fundamentales, creando un equilibrio entre mayorías y minorías."
            span.text-small Según Barzotto (2010)
        .col-4.d-none.d-xl-block(data-aos='fade-up')
          img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
      
      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Soberanía popular")
              p El poder reside en el pueblo, que lo ejerce directa o indirectamente. La Constitución de 1991 lo establece en su Artículo 3.
            .div(titulo="División de poderes")
              p Los poderes Ejecutivo, Legislativo y Judicial actúan de forma autónoma. Ejemplo: la Corte Constitucional puede declarar inconstitucional una ley del Congreso.
            .div(titulo="Garantía de derechos")
              p A través de mecanismos como la acción de tutela (Artículo 86), cualquier ciudadano puede reclamar la protección inmediata de sus derechos fundamentales.
            .div(titulo="Estado de derecho")
              p Todos los ciudadanos y gobernantes están sometidos a la Constitución. Programas sociales como Familias en Acción ejemplifican el deber estatal de garantizar bienestar y equidad.

      .row.bg-gris.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Modelos de Democracia Constitucional
            p.mb-5(data-aos="fade-up") Se invita a leer el documento Modelos de Democracia Constitucional, donde se aborda la evolución y diversidad de formas que ha tomado la democracia constitucional a lo largo del tiempo, adaptándose a contextos políticos, sociales y económicos específicos.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Modelos de Democracia Constitucional.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Modelos de Democracia Constitucional
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61307") Ferrajoli, L. (2012). Dos modelos de constitucionalismo: una conversación. Editorial Trotta, S.A.
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=nPQUAoWU5WA") [Vídeo] CEV (2024). Unidad 1- Constitución y Democracia.
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Derecho Constitucional',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes funciones de la Constitución permite supervisar el ejercicio del poder público?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Función organizativa', esCorrecta: false },
            { id: 'b', texto: 'Función garantista', esCorrecta: false },
            { id: 'c', texto: 'Función de control', esCorrecta: true },
            { id: 'd', texto: 'Función de estabilidad', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué característica define una constitución rígida?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puede modificarse por medio de leyes ordinarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se basa en normas consuetudinarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requiere procedimientos especiales para su reforma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es impuesto sin participación democrática.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué principio de la democracia constitucional establece que el poder reside en el pueblo?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estado de derecho', esCorrecta: false },
            { id: 'b', texto: 'Pluralismo', esCorrecta: false },
            { id: 'c', texto: 'Soberanía popular', esCorrecta: true },
            { id: 'd', texto: 'Separación de poderes', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica distintiva de las constituciones semánticas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Están plenamente vigentes y aplicadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se usan para legitimar el poder en regímenes autoritarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contienen principios que se cumplen parcialmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Surgen de pactos sociales amplios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál fue una innovación de la Constitución Colombiana de 1991 para garantizar los derechos fundamentales?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El fortalecimiento de la figura presidencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La instalación del sistema federal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La creación de la acción de tutela.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación del control constitucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
