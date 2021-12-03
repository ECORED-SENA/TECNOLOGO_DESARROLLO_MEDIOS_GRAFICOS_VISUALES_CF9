<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Del boceto a la ilustración
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El boceto es un bosquejo o dibujo previo, generalmente realizado a lápiz, en un medio digital o en papel, donde inicialmente se forman las primeras ideas del diseño en general.  Actualmente, la ilustración es muy utilizada en la publicidad y comercialización de productos y marcas, debido a que es un arma efectiva, que produce resultados económicos, puesto que genera, en quien la observa, recordación, emoción, sensaciones o curiosidad, que finalmente llevan a la persona a comprar. Los estudios han demostrado que las personas ven primero la imagen y la interpretan, antes que leer el texto que usualmente las acompaña.
        .bg--4-claro.p-3.px-5
          p.mb-0 A lo largo de la historia del hombre, se ha utilizado la ilustración, desde las primeras obras rupestres que fueron el inicio incipiente. A continuación, conocerá algunos momentos importantes de la historia de la ilustración. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/0.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")

    //todo! PENDIENTE SOLUCIONAR HOVER PRIMER GLOBO //
    .contenedor-globos.mb-5
      .contenedor-globos__globo.p-4
        h5.text-center Obras rupestres
        .contenedor-globos__globo__img
          img(src="@/assets/curso/1.png")
      .contenedor-globos__globo.p-4
        h5.text-center Edad Media
        .contenedor-globos__globo__img
          img(src="@/assets/curso/2.png")
      .contenedor-globos__globo.p-4
        h5.text-center Imprenta
        .contenedor-globos__globo__img
          img(src="@/assets/curso/3.png")
      .contenedor-globos__globo.p-4
        h5.text-center Diseño digital y tridimensional 
        .contenedor-globos__globo__img
          img(src="@/assets/curso/4.png")
    //todo! PENDIENTE SOLUCIONAR HOVER PRIMER GLOBO //

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Asimismo, el texto y la tipografía que usualmente la acompañan deben tener un hilo conductor, <b>deben contar una historia, complementarse y tener plena armonía.</b> Lo fundamental es que la ilustración atraiga la atención del espectador y transmita un mensaje fácilmente comprensible.
          br
          br
          |La <b>ilustración juega un papel importante en la sociedad y el diseño</b>, potencia un mensaje con mayor rapidez y eficacia que un texto, generalmente, se utiliza en libros, carteles, revistas y medios digitales, empaques, creación de logotipos, marcas, diseño textil, diseño de moda, y va de la mano con artículos decorativos para el hogar; se usa en áreas del mercadeo y la publicidad.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/5.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")  
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Definición del proyecto
    p.mb-5 Consiste en concebir y visualizar la idea de lo que se quiere hacer, imaginando la forma concreta que podrá tener el proyecto y la finalidad de la ilustración. Aquí juega un papel muy importante lo que se pretende comunicar al cliente o usuario, más allá de la imagen. 
    .row.mb-5.justify-content-center
      .col-lg-8
        LineaTiempoD.color-acento-botones
          .row.mb-5(numero="1" titulo="")
            .col-lg-7
              p La imagen o idea se plasma en un dibujo incipiente, esquemático, a veces burdo, que es un esbozo llamado boceto, por medio del cual se pretende iniciar un acercamiento a la realidad, para satisfacer las necesidades del público o del cliente.
            .col-lg-5: img(src="@/assets/curso/6.png")
          .row.mb-5(numero="2" titulo="")
            .col-lg-7
              p  A medida que avanza el proyecto, los bocetos son más elaborados y detallados, permitiendo explorar ideas y formas. El boceto concluye con la ilustración y se debe planear, crear, inventar y elaborar o hacer mediante la utilización del lenguaje y la comunicación visual.
            .col-lg-5: img(src="@/assets/curso/7.png")
          .row.mb-5(numero="3" titulo="")
            .col-lg-7
              p El boceto tiene las siguientes características: tiene que <b>ser a escala, debe ser rápido, representativo en su esencia, preferiblemente debe tener notas</b> que ayuden a recordar elementos que, en el futuro y durante el desarrollo del proyecto, serán aplicados a la ilustración final.
            .col-lg-5: img(src="@/assets/curso/8.png")
          .row.mb-5(numero="4" titulo="")
            .col-lg-7
              p El esquema o boceto incipiente pasa por varias etapas, se detalla y perfecciona hasta llegar a la ilustración, y se utilizan diversos elementos para crear un producto final, <b>tales como color, textura, posición, equilibrio, iluminación, contraste,</b> entre otros.
            .col-lg-5: img(src="@/assets/curso/9.png")
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Selección de <i>software</i>     
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Primero, hay que decir que un software se podría definir como el programa o conjunto de programas que contiene una cantidad de herramientas y elementos que permiten desarrollar diferentes tipos de acciones y tareas dentro de un sistema o ambiente informático.
          br
          br
          |Si bien es cierto que existe diversidad de programas para el manejo y el uso de ilustración digital, Adobe es una de las empresas más importantes, ya que se basa en el trabajo colaborativo de todas sus herramientas, permitiendo interrelacionarlas y tener herramientas especializadas en diversos programas de software de diseño que integran un sinfín de herramientas enfocadas en la ilustración, el video, el arte y la fotografía, entre otros.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/10.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")  
    p.mb-5 La selección del software se realiza a partir de las exigencias requeridas para el proyecto a realizar, también depende de los recursos de que se disponga en cuanto a software. A continuación, se hará un breve análisis de los softwares más utilizados:
    .tarjeta.bg--2-claro2.p-4.mb-5
      #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
    
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 11')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='11' aria-label='Slide 1')
        .carousel-inner
          .row.justify-content-center
            .col-lg-10
              .carousel-item.active.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Adobe
                    p Tiene la capacidad, con su gran gama de productos, de establecerse como una de las marcas más populares entre los diseñadores, ingenieros y demás profesionales que utilizan algún programa del gran paquete que comprende Adobe.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/11.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Illustrator
                    p Uno de los softwares más utilizados en el mundo del diseño cuando se piensa trabajar con vectores, gracias a sus herramientas y su fácil relación con el entorno.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/12.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Photoshop
                    p Uno de los softwares más reconocidos en la ilustración digital, que involucra una cantidad de técnicas y efectos que ayudarán como recursos al momento de pensar en crear, ilustrar o retocar una imagen; trabaja bajo el mapa de bits y se usa en trabajos de retoque de fotografías, edición y animación.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/13.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Clip Studio Paint 
                    p Para los amantes del cómic, no existe una mejor opción que el antes conocido como <b>“Manga Studio”</b> y <b>ahora reconocido como Clip Studio Paint. Es un <i>software</i> para la creación de comics y manga</b>, que incluye herramientas de ilustración y de compilación editorial, lo que ayudará a crear historias completas.
                      br
                      br
                      |Posee herramientas como entintados, tramas, efectos, globos de texto, etc.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/14.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Rebelle 3
                    p <i>Software</i> que posee un sinnúmero de herramientas que emulan la ilustración tradicional, <b>como acuarelas y acrílicos, pasteles y carboncillos que simulan muchos elementos usados tradicionalmente.</b> Es una alternativa muy interesante si se desean replicar texturas y elementos que interactúan muy bien con paletas de colores que asemejan diluirse con aguas y aceites, dando resultados muy satisfactorios.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/15.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 ArtRage 
                    p Es un programa que trabaja sobre “lienzos reales” y mezcla pinturas en tiempo real, lo que consigue efectos con los distintos elementos con los que se utilice, al igual que las tintas y colores que se empleen; se pueden personalizar pinceles y su interfaz es bastante intuitiva.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/16.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Sketchbook Pro
                    p Con una <b>interfaz sencilla y con una biblioteca que cuenta con más de 300 pinceles, aerógrafos, difuminadores, etc.</b>, se convierte en un compañero ideal al momento de pensar en realizar bocetos e ilustraciones de todo tipo. Es una de las <b>opciones más interesantes para crear bocetos simples</b> y su facilidad de crear flips o capas es ideal para crear animaciones. 
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/17.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Krita
                    p Es un <i>software</i> que trabaja solo en Windows, pero con el valor de ser de fuente abierta, es decir, que es gratis, siendo la mejor alternativa al momento de pensar en un software para ilustración y no poder alcanzar un <i>software</i> más elevado, como son los productos Adobe. Programa creado por la comunidad, es ideal si se tiene algo de conocimiento y se quiere un <i>software</i> hecho a la medida y que va mejorando y creciendo constantemente. 
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/18.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Gimp
                    p Es un <i>software</i> que tiene más de 20 años en el mercado y es que es ni más ni menos uno de los <i>softwares</i> gratis más populares, ya que reúne características avanzadas para edición de imágenes o fotos, pintura, diseño, imágenes digitales, etc. Con una interfaz muy similar a la de Adobe, Gimp utiliza herramientas muy precisas para la creación y edición, siendo la alternativa más similar a Photoshop, contando con interfaces y funcionalidades muy parecidas. Permite importar y exportar en varios formatos, al igual que en formato PSD.
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/19.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Inkscape
                    p Es un editor profesional de vectores, es libre y es una muy buena alternativa al momento de trabajar imágenes compuestas por vectores. <b>Posee las mismas posibilidades de Illustrator o CorelDraw</b>, programas hitos para la edición vectorial, permite exportar en múltiples formatos de vectores y de imagen. Como programa de código abierto, está en constante mejora de la comunidad. 
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/20.jpg")
              .carousel-item.px-4
                .row.align-items-center
                  .col-lg-6
                    h5 Procreate
                    p Es la aplicación para iPad más popular, dada que su conectividad con sus accesorios la convierte en el mejor lienzo digital que se puede encontrar en el mercado, debido a su variedad de pinceles, infinidad de colores y la funcionalidad de crear capas para la creación de animaciones. 
                  .col-lg-6
                    .rounded-3.overflow-hidden
                      img(src="@/assets/curso/21.jpg")

        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Técnicas y aplicaciones
    p.mb-5 El boceto es una práctica gráfica para bosquejar ideas y plasmarlas visualmente como parte del proceso creativo. Es una ilustración rápida, sin detalles ni acabados, es una herramienta práctica empleada en muchos medios creativos, incluyendo, obviamente, el diseño, pero también en la arquitectura, diseño industrial y de modas, animación y, naturalmente, arte e ilustración.
      br
      br
      |Algunas características que el boceto tiene y con las que debe cumplir para que su labor sea exitosa incluyen: 
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor(style='height: 380px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/22.svg" style="width: 85px").m-auto.mb-3
              p.text-center Estar acompañados de apuntes o anotaciones. Las ideas tienden a desvanecerse, así que, a pesar de la simpleza del dibujo, es importante tomar nota de los detalles.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/23.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario
          .tarjeta-slide__contenedor(style='height: 380px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/22.svg" style="width: 85px").m-auto.mb-3
              p.text-center Debe ser representativo, eso quiere decir que no es necesario desgastarse en detalles. Se recomienda el uso de formas simples.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/24.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario
          .tarjeta-slide__contenedor(style='height: 380px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/22.svg" style="width: 85px").m-auto.mb-3
              p.text-center Se debe elaborar rápidamente. Si la elaboración del boceto lleva varias horas o días, el concepto de boceto no está claro. Es un ejercicio de algunos minutos y se debe realizar relajadamente.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/25.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario
          .tarjeta-slide__contenedor(style='height: 380px')
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/22.svg" style="width: 85px").m-auto.mb-3
              p.text-center El boceto nunca se trabaja a tamaño final, siempre debe ser una representación a escala del proyecto a realizar.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/26.jpg')})`}")
    p.mb-5 En cuanto a los tipos, estos pueden ser: 
    .row.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/27.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Dibujo espontáneo
            p Se raya aleatoriamente, sin tener nada específico en mente; luego, se “busca” entre las líneas la posible figura a trabajar.
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/28.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Boceto-mini
            p Se ha dicho que un boceto debe estar a escala, sin embargo, en este tipo de bocetos, se hace más pequeño para disminuir los detalles.
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/29.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Boceto quemado
            p Se rellena la forma para evaluar la contra forma, esto permite evaluar la legibilidad y el uso del espacio.
    .row.justify-content-center
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/30.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Boceto de contorno
            p El nombre lo explica: sólo se dibujan los contornos con mínimos detalles. Es ideal para la construcción de escenas grandes.
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/31.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Experimentación de mancha
            p Similar al dibujo espontáneo, pero se utilizan áreas de tinta o alguna aguada y de allí se extraen las ideas.
    p.mb-5 Los principios que rigen la creación de bocetos son los mismos que rigen el dibujo, con la ventaja de que no es indispensable prestar tanta atención al detalle.
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .bg--1.p-4.mb-5.hover-claro.h-100.hover
          figure(style="height: 180px").mb-4
            img(src="@/assets/curso/32.svg" alt="Adornos flotantes" style=" width: 112px").m-auto
          .text-center
            h5 Líneas y trazos
            p Pueden ser rectas o curvas, continuas o discontinuas y de diferente calibre o grosor, según la herramienta empleada o la presión ejercida.
      .col-lg-4.mb-3
        .bg--2.p-4.mb-5.hover-claro.h-100.hover
          figure(style="height: 180px").mb-4
            img(src="@/assets/curso/33.svg" alt="Adornos flotantes" style=" width: 176px").m-auto
          .text-center
            h5 Construcción espacial
            p El uso de líneas horizontales, verticales y diagonales da lugar a la construcción de formas, y la relación de dichas formas da como resultado la generación de relaciones espaciales.
      .col-lg-4.mb-3
        .bg--4.p-4.mb-5.hover-claro.h-100.hover
          figure(style="height: 180px").mb-4
            img(src="@/assets/curso/34.svg" alt="Adornos flotantes" style=" width: 222px").m-auto
          .text-center
            h5 Planos, luz y contorno
            p La bocetación permite, mediante el uso de sombras, simular el efecto de la luz sobre las superficies de las formas dibujadas. La práctica permite influir en la percepción y transmitir la sensación de contorno volumétrico.
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 La pintura, la escultura, la creación de videos, los diseños de modas o la industria de la publicidad utilizan infinidad de hojas y trazos que día a día se empiezan a concretar en ideas y formas que darán sentido y claridad a ideas y proyectos concretos.  
          br
          br
          |La pintura, por ejemplo, utiliza la bocetación a mano alzada, donde fragmenta elementos y compone sobre la marcha, mientras que en diseños como el de modas, se necesitan figuras humanas y posiciones naturales; cada aplicación variará la clase de boceto, entre los que podemos diferenciar tres tipos.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/35.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ") 
    .col-lg-7
      TabsA.color-acento-contenido.mb-5
        .tarjeta.color-acento-contenido--borde.bg--3-claro.p-4.border-3(titulo="Burdo")
          p En este tipo de boceto, <b>se plasma la idea tal y como el diseñador la visualiza en su mente</b>, preferiblemente a mano alzada y sin entrar en detalle. Este boceto es el más simple y el que en un inicio se utiliza para iniciar o arrancar cualquier idea.
        .tarjeta.color-acento-contenido--borde.bg--3-claro.p-4.border-3(titulo="Comprensivo")
          p Es un boceto con una calidad <b>un poco más elevada</b>, ni muy detallado ni muy simple. Este boceto puede incluir herramientas más técnicas para situar elementos como textos e ilustraciones, que apoyarán y darán comprensión.
        .tarjeta.color-acento-contenido--borde.bg--3-claro.p-4.border-3(titulo="Dummy")
          p Es el boceto con mejor calidad e incluye todos los elementos visuales que tendrá la composición final, sugiriendo elementos como los colores. Se recomiendan tipografías, tipo de sustratos, etc.
    p.mb-5 Lo mejor de la bocetación es que es un recurso creativo de bajo costo. Cualquier superficie es válida para rayar, si bien es más recomendable una libreta o cuaderno que permita la conservación y protección del material. Es más importante y valiosa la capacidad de observación, un entorno tranquilo y consumir material gráfico. La creatividad necesita nutrirse para poder crecer y sobresalir.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--4-claro.p-5.position-relative.hover.hover-flip
          p.text-center Por último, no se puede olvidar que, para los procesos de formación, como puede ser la persona más experta o el más principiante, se debería llevar una bitácora o libro de apuntes dedicado a la elaboración de bocetos. Estos apuntes y dibujos rápidos son la diferencia entre un proyecto con bases firmes y la improvisación.
          .img(style=" position: absolute; bottom: -15%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/36.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Correcciones y aprobación
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Debido a los cambios que puede sufrir el proyecto, por depender del producto que se está creando y de la aprobación que satisfaga las expectativas de los clientes, entre otros aspectos, se hace necesario bocetar. El boceto cada vez se hará más detallado y completo, así, se contará con la aprobación del cliente respecto a cada una de las correcciones que se requieran, hasta llegar al producto final.
          br
          br
          |Es claro que a los clientes se les deben presentar periódicamente miniaturas de bocetos, entre más detallado sea el boceto, más fácilmente se obtendrá la aprobación de este. Usualmente, se deben entregar una serie de bocetos en bruto, para que el cliente los revise y proponga sus modificaciones o cambios; posteriormente, se realizarán bocetos más completos, que también deben ser aprobados antes de ser realizados en medio digital. Entonces, el cliente debe estar de acuerdo con el arte antes de continuar con las etapas posteriores. Es importante la aprobación completa por parte del cliente, antes de pasar a la etapa final de ilustración.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/37.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ") 

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    mostrarIndicador: true,
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
