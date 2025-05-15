<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto de constitución'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0
        img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-gris.p-4(data-aos="fade-up")
        p.mb-0 La Constitución es el instrumento jurídico y político fundamental de un Estado, pues define su organización, distribuye el poder y establece los derechos y deberes de los ciudadanos. Su importancia radica en que fija los <b>principios rectores de una nación</b>, garantizando la estabilidad institucional y proporcionando un marco normativo para la convivencia y el ejercicio del poder.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4 Desde un punto de vista etimológico, el término constitución proviene del latín constitutio, que hacía referencia a un conjunto de disposiciones o decretos establecidos por una autoridad. Con el tiempo, el concepto ha evolucionado: de ser normas impuestas por monarcas o líderes militares, pasó a concebirse como un pacto social que consagra la soberanía del pueblo. Los enfoques sobre la Constitución son: 

        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Formal
                p.text-small.px-4.text-center.pb-2 Se refiere al texto escrito que contiene las normas fundamentales de un país.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Material
                p.text-small.px-4.text-center.pb-2 Abarca no solo el texto, sino también los principios y valores que sustentan el sistema político.

    .d-flex.align-items-start.bg-morado.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 100px' src='@/assets/curso/unidad/img-7.png', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Según García Cuadrado (2013), <i>"La Constitución no solo debe entenderse como un texto jurídico, sino como un conjunto de principios fundamentales que determinan el funcionamiento del Estado y la relación entre los ciudadanos y el poder"</i> (p. 45). Esto resalta su papel como base de la convivencia política y social.

    h2 Orígenes históricos

    p.mb-4 Aunque el concepto actual de Constitución es moderno, muchas civilizaciones antiguas desarrollaron sistemas normativos con funciones similares:

    .row.bg-amarillo.p-4.py-xl-0.mb-4
      .col-12.col-xl-8.d-flex
        .my-auto.py-xl-4
          p.mb-0 ●	Antigua Grecia. En Atenas, Clístenes instauró (siglo VI a.C.) una forma de gobierno basada en la participación ciudadana.<br><br>●	Roma. La República Romana organizó el poder en magistraturas, Senado y asambleas populares.<br><br>●	Edad Media. Documentos como la Carta Magna (1215) comenzaron a limitar el poder del monarca en favor de ciertos derechos ciudadanos.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-2.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-10
        h2 Constitucionalismo moderno
        span Las revoluciones liberales del siglo XVIII marcaron un hito con la <b>Constitución de Estados Unidos (1787)</b> y la <b>Constitución francesa (1791)</b>, que introdujeron los principios de <b>soberanía popular</b> y <b>separación de poderes</b>. Estas Constituciones influyeron en los modelos posteriores en América Latina y Europa. Como señala Contipelli (2015), <i>"Las Constituciones modernas no solo buscan organizar el poder, sino también limitarlo y garantizar los derechos de los ciudadanos, asegurando su protección frente a posibles abusos estatales"</i> (p. 78).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Funciones de la Constitución 

    p.mb-4 Las Constituciones cumplen múltiples funciones esenciales para el buen funcionamiento del Estado:

    .row.mb-4
      .col-10.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-marron-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-10.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Función organizativa
            span Define la estructura estatal y la competencia de cada órgano.
      .col-10.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-marron-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-11.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Función legitimadora
            span Otorga legalidad al ejercicio del poder dentro del marco democrático.
      .col-10.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-marron-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-12.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Función garantista
            span Protege los derechos fundamentales, limitando al poder público.
      .col-10.col-md-6.col-xl-4.mb-4
        .d-flex.align-items-start.bg-marron-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-13.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Función de estabilidad 
            span Asegura continuidad institucional y previsibilidad jurídica.
      .col-10.col-md-8.mb-xl-4.mx-auto
        .d-flex.align-items-start.bg-marron-oscuro.p-3.h-100(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-14.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-3.text-bold Función de control
            span Facilita la vigilancia ciudadana y el control institucional sobre el poder.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 La Constitución en Colombia

    p.mb-4 La historia constitucional colombiana refleja la evolución política del país, desde modelos centralistas hasta formas más democráticas y descentralizadas.

    .row.mb-4
      .col-12.col-xl-7
        LineaTiempoD.color-secundario
          p(numero='1' titulo='Cundinamarca y Tunja (1811)') Primeras normas autonómicas tras el inicio de la independencia.
          p(numero='2' titulo='Angostura (1819)') Creación de la Gran Colombia; fuerte centralismo bajo la influencia de Bolívar.
          p(numero='3' titulo='Cúcuta (1821)') Unifica la Gran Colombia, organiza el poder en tres ramas; su centralismo genera conflictos.
          p(numero='4' titulo='1832') Sistema republicano con más autonomía provincial tras la disolución de la Gran Colombia.
          p(numero='5' titulo='1843') Visión conservadora: fortalecimiento presidencial y centralismo.
          p(numero='6' titulo='1853') Giro liberal: libertades individuales, abolición de la pena de muerte, libertad de cultos.
          p(numero='7' titulo='Rionegro (1863)') Modelo federal extremo: Estados Unidos de Colombia con alta autonomía regional, pero con inestabilidad política.
          p(numero='8' titulo='1886') Impulsada por Rafael Núñez: centralismo, presidencialismo, catolicismo como religión oficial. Duró más de un siglo.
          p(numero='9' titulo='1991 (actual)') Estado social de derecho, derechos fundamentales, participación ciudadana, diversidad étnica y cultural, descentralización.
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    h2 La Constitución de 1991

    p.mb-4 Surgió en un contexto de crisis social y política con el objetivo de:

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4
          .col-10.col-lg-6.col-xl-4.mx-auto
            .bg-morado.p-4.d-flex(data-aos='fade-up')
              p.m-auto.text-white Fortalecer la democracia.
          .col-10.col-lg-6.col-xl-4.mx-auto
            .bg-morado-oscuro.p-4.d-flex(data-aos='fade-up')
              p.m-auto.text-white Garantizar los derechos fundamentales.
          .col-10.col-lg-6.col-xl-4.mx-auto
            .bg-morado.p-4.d-flex(data-aos='fade-up')
              p.m-auto.text-white Ampliar la participación ciudadana.

        p.mb-4 Un hito importante fue la <i>Séptima Papeleta</i>, impulsada por un movimiento estudiantil durante las elecciones legislativas del 11 de marzo de 1990. Aunque no tenía validez legal, consultaba si los ciudadanos deseaban una Asamblea Constituyente. Cerca de dos millones votaron a favor, lo que llevó al gobierno de César Gaviria a formalizar la convocatoria mediante el Decreto 927 de 1990.

        p.mb-4 Los principales logros de la Constitución de 1991 son:

        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Primero
              p.px-1.text-small.mb-0.text-center Creación de la <b>acción de tutela</b> como mecanismo de protección de derechos.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Segundo
              p.px-1.text-small.mb-0.text-center Reconocimiento de Colombia como <b>Estado social de derecho</b>.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Tercero
              p.px-1.text-small.mb-0.text-center <b>Autonomía</b> de las entidades territoriales.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Cuarto
              p.px-1.text-small.mb-0.text-center Inclusión de la <b>diversidad étnica y cultural</b>.

    .row.bg-gris.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto La Constitución: fundamento de la organización estatal y la garantía de los derechos
          p.mb-5(data-aos="fade-up") Se invita a leer el documento La Constitución: fundamento de la organización estatal y la garantía de los derechos, donde se aborda la función esencial de la Constitución como base del Estado y garantía de los derechos humanos
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_La Constitución.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La Constitución: fundamento de la organización estatal y la garantía de los derechos
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/42494") García Cuadrado, A. (2013). El ordenamiento constitucional: un enfoque histórico y formal de la teoría de la constitución y de las fuentes del derecho. ECU.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=55qUR0frX5w") [Vídeo] EL DERECHO ES PARA TODOS José Francisco Báez Corona (2018). Definición de Constitución y sus partes dogmática y orgánica.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    p


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
