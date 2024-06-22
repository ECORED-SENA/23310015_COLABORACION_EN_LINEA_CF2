<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .contenedor.bg--2-claro.p-5.my-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__0: img(src='@/assets/curso/0.png', alt='Texto que describa la imagen' style='width: 400px')
      .row.justify-content-start
        .col-xl-7
          .texto
            p.h1.fw-normal
              b ¿Sabes cómo se puede definir la identidad digital desde la interacción con los demás y su entorno? 
            | Ingresa al siguiente recurso para que conozcas sobre ello.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gjW9tuPpVT4?si=n7i2JAGLEuzHnmHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Para la elaboración de este componente, se abordaron varios autores conocidos en identidad digital, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este recurso sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de las <b>habilidades digitales para la comunicación y colaboración en línea.</b>


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion

.contendor-introduccion
  position: relative
  min-height: 189px
  .contenido
    width: 60%
    position: absolute
    top: 0
    transform: translateY(-30%)
  .contenedor-img
    position: absolute
    bottom: 0
    right: 0
</style>
