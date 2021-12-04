<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Del boceto a la ilustración
      .row.mb-5
        .col-lg-7(data-aos="fade-right")
          p.mb-3 Aunque ambos términos se asocian y se relacionan con la marca, cada uno define conceptos diferentes. Por una parte, está la <b>identidad corporativa</b>, que se entiende como la identidad de la empresa y la percepción que se tiene de ella misma; por otro lado, está la <b>imagen corporativa</b>, que básicamente define la percepción que el público puede tener sobre una marca.
          .bg--4-claro.p-3.px-5
            p.mb-0 La <b>imagen corporativa debe reflejar los valores y la filosofía de la compañía</b>, definida por sus elementos tangibles e intangibles, así como el estilo de la comunicación. Se puede decir que es la percepción que tiene el público de la empresa, por eso es importante que se defina con claridad y que sea muy clara al momento de transmitir información a los clientes.
          p Por otro lado, la <b>identidad corporativa hace referencia a los elementos visuales y los recursos que ayudarán a definir la empresa</b>, también abarca elementos como la comunicación corporativa y todo lo relacionado con los valores a proyectar, involucra factores como el buen nombre y, en esencia, el ADN de la marca.
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/0.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .bg--2-claro2.position-relative.p-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/39.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 160px ")
        .row.justify-content-end 
          .col-lg-10
            p.h5 En el siguiente video, se podrán identificar elementos relevantes sobre imagen e identidad corporativa.
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
