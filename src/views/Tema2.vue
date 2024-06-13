<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Herramientas digitales
    .contenedor.bg--4-claro.p-5.mb-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__3: img(src='@/assets/curso/76.svg', alt='Texto que describa la imagen' style='width: 295px')
      .row.justify-content-end
        .col-lg-9
          .texto
            p.h1.fw-normal Estamos a punto de finalizar este componente formativo y, para complementar la #[b identidad digital], es fundamental conocer las herramientas digitales, las cuales se presentan en el siguiente video.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cmJDv36nogY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .contenedor.bg--4-claro.p-5.mb-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__9: img(src='@/assets/curso/77.svg', alt='Texto que describa la imagen' style='width: 180px')
      .row.justify-content-between 
        .col-lg-4
          p.h2.fw-normal Ahora, has terminado este proceso de formación y, con los conocimientos adquiridos, podrás saber las implicaciones que tiene tu identidad digital,
        .col-lg-5
          p.h2.fw-normal las ventajas, riesgos y amenazas a las cuales podrías estar expuesto de acuerdo con la utilización que le des a la información que manejas en la red. 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
