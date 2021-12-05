<template lang="pug">
.btns
  img(src='@/assets/curso/145.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover" :style="{left:boton.left, top:boton.top}")
      .col-md-12.p-2
        h5.mb-3.font-weight-bold
          | {{ boton.titulo }}
        p.mb-0.text-center(v-html="boton.texto")
    
    

</template>

<script>
export default {
  name: 'BotonesC',
  data: () => ({
    indicador: true,
    hover: null,
    size: '7%',
    botones: [
      {
        pos_x: '46.5%',
        pos_y: '16%',
        left: '50%',
        top: '-200%',
        texto:
          'Depuración de información visual; <b>hecha con el continuo proceso que viene desde la bocetación</b>, donde se irá incluyendo y eliminando información.',
      },
      {
        pos_x: '31%',
        pos_y: '30%',
        left: '-200%',
        top: '-100%',
        texto:
          'Elementos de estilo: <b>grosor y tipos de trazo</b>, llamadas y ampliadores, color y sombreado.',
      },
      {
        pos_x: '62%',
        pos_y: '30%',
        left: '300%',
        top: '-100%',
        texto:
          'Estilización y esquematización de la forma, con el continuo trabajo y la experimentación constante; se estilizarán maneras y formas que serán la impronta y harán la diferencia.',
      },
      {
        pos_x: '31%',
        pos_y: '58%',
        left: '-200%',
        top: '-100%',
        texto:
          'Técnicas y métodos de representación, serán las características, el estilo y las formas como se varían y se crean elementos diferentes, dependiendo de los atributos de cada artista.',
      },
      {
        pos_x: '62%',
        pos_y: '58%',
        left: '300%',
        top: '-100%',
        texto:
          'Utilización de elementos gráficos, siempre esenciales para la creación de elementos.',
      },
      {
        pos_x: '46.5%',
        pos_y: '72%',
        left: '50%',
        top: '100%',
        texto:
          'Utilización de perspectivas, para adaptar y comprender espacialmente al observador y enfocarlo a lo que queremos comunicar.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    left: 200%
    background-color: #b7eef3
    width: 400px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
