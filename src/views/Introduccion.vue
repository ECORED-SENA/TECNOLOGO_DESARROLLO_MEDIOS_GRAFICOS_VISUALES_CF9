<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El presente componente formativo se enfoca en la bocetación e ilustración como herramientas básicas en los medios gráficos. El boceto es un bosquejo o dibujo previo, generalmente realizado a lápiz en un medio digital o en papel, donde inicialmente se forman las primeras ideas del diseño en general. La ilustración es una creación que se realiza con un fin o propósito, va acompañada generalmente por un texto que resalta el mensaje, ya sea como ejercicio creativo o como medio de comunicación visual de una marca, empresa o proyecto, y busca concebir una idea en particular, haciendo que los espectadores generen recordación, empatía, apropiación, entre otras ideas más. A continuación, conocerá elementos adicionales sobre esta temática.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
import BannerInterno from '@/components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
