<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Imagen e identidad corporativa
      .row.mb-5
        .col-lg-7(data-aos="fade-right")
          p.mb-3 Aunque ambos términos se asocian y se relacionan con la marca, cada uno define conceptos diferentes. Por una parte, está la <b>identidad corporativa</b>, que se entiende como la identidad de la empresa y la percepción que se tiene de ella misma; por otro lado, está la <b>imagen corporativa</b>, que básicamente define la percepción que el público puede tener sobre una marca.
          .bg--4-claro.p-3.mb-3
            p.mb-0 La <b>imagen corporativa debe reflejar los valores y la filosofía de la compañía</b>, definida por sus elementos tangibles e intangibles, así como el estilo de la comunicación. Se puede decir que es la percepción que tiene el público de la empresa, por eso es importante que se defina con claridad y que sea muy clara al momento de transmitir información a los clientes.
          p Por otro lado, la <b>identidad corporativa hace referencia a los elementos visuales y los recursos que ayudarán a definir la empresa</b>, también abarca elementos como la comunicación corporativa y todo lo relacionado con los valores a proyectar, involucra factores como el buen nombre y, en esencia, el ADN de la marca.
        .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/98.jpg" alt="Adornos flotantes")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .bg--2-claro2.position-relative.p-5.mb-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/39.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 160px ")
        .row.justify-content-end 
          .col-lg-10
            p.h5 En el siguiente video, se podrán identificar elementos relevantes sobre imagen e identidad corporativa.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NfnrwqeWjgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Diseño de marca y <i>branding</i>   
    p.mb-5  El diseño de marca es la representación gráfica de los valores más relevantes de una empresa. Es parte de la cara visible de la empresa al público, está compuesta por factores psicológicos, gráficos, visuales, e intangibles, que son compartidos a los consumidores. 
      br
      br
      |Estos son algunos de los pasos (resumidos) para la construcción de una marca:
    .row.mb-5.justify-content-center
      .col-lg-8
        LineaTiempoD.color-primario
          .row.mb-5(numero="1" titulo="").p-4
            .col-lg-9
              h4 Investigación 
              p.mb-0 La investigación permitirá tener un mayor conocimiento del cliente, público objetivo y herramientas requeridas para la construcción de criterios con los cuales fundamentar la propuesta. Es importante hacer énfasis en el mercado, analizar la competencia por parte de otras marcas del sector, cuáles son las propuestas de valor que ofrecen, los colores que utilizan, las formas que emplean, las tipografías, cómo dinamizan el espacio, qué lenguaje utilizan, cómo son los empaques, qué materiales emplea, cuáles son sus estrategias, entre otros aspectos. 
            .col-lg-3: img(src="@/assets/curso/99.png")
          .row.mb-5(numero="2" titulo="").p-4
            .col-lg-9
              h4 <i>Brief</i>
              p.mb-0 El brief es un factor que se debe tener en cuenta para un buen planteamiento del proyecto. Este informe, que puede realizar de acuerdo con sus propios parámetros, es fundamental, ya que allí están consignados y descritos no solo la información del producto, sino los objetivos y resultados que el cliente espera obtener con el diseño de su marca. 
            .col-lg-3: img(src="@/assets/curso/100.png")
          .row.mb-5(numero="3" titulo="").p-4
            .col-lg-9
              h4 Propuesta de valor
              p.mb-0 Ya con una visión más realista y temporal, se realiza la construcción de los elementos principales que van a destacar la marca, que le darán valor, y que potencializarán y resaltarán sus características. En este paso, pueden resultar elementos que valorizan la marca misma, además de aquellos que ya se conocen. 
            .col-lg-3: img(src="@/assets/curso/101.png")
    p.mb-5 Una vez alcanzada la primera fase de la construcción de la marca, se procede con la definición del nombre.
    .bg-texture.p-2.mb-5
      .imagen-adornos-flotantes(style='width: 100%; height: 100%; position: absolute; top: -20%; left: 0%;')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: ; right: 10% ; top: ; bottom: 2% ; width: 90px ")
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 10% ; right: ; top: 10% ; bottom: ; width: 60px ")
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 15% ; right: ; top: ; bottom: -10% ; width: 60px ")
      .row.align-items-center.justify-content-center.mb-5.px-5
        .col-lg-4: img(src="@/assets/curso/102.svg")
        .col-lg-8
          h4 <i>Naming</i>
          p El <i>naming</i> es el proceso que se lleva a cabo para determinar el mejor nombre para la marca. Es tan importante el naming que se convierte en un activo empresarial, porque el público va a relacionar de primera mano el nombre de la marca con sus atributos, valores y beneficios.
    p.mb-5 Los tipos de naming son: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-azul")
      .row(titulo="Nombre descriptivo").px-5.align-items-center
        .col-md-2
          figure
            img(src='@/assets/curso/103.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El naming descriptivo es aquel que en su marca cita específicamente o describe la actividad comercial principal del producto de la marca. Esta asociación de marca – producto genera gran recordación en el cliente. <b>Por ejemplo</b>, Burger King, pinturas Tito Pabón.
      .row(titulo="Nombres acrónimos").px-5.align-items-center
        .col-md-2
          figure
            img(src='@/assets/curso/104.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Un acrónimo es el término formado por la unión de dos o más palabras; por ejemplo, docudrama, de documental dramático; MERCOSUR, de Mercado Común del Sur; es más práctico decir AFE que Asociación de Futbolistas Españoles; o CAR, que Corporaciones Autónomas Regionales.
      .row(titulo="Nombres abstractos").px-5.align-items-center
        .col-md-2
          figure
            img(src='@/assets/curso/105.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Refiere principalmente al uso de palabras inventadas. Por ejemplo, la palabra Google proviene de la palabra “Googol”, creada por el matemático norteamericano Edward Kasner y cuyo significado es diez elevado a la potencia cien.
      .row(titulo="Nombres sugerentes").px-5.align-items-center
        .col-md-2
          figure
            img(src='@/assets/curso/106.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Estos se construyen a partir de las sensaciones, emociones o experiencias que la marca genera en el consumidor; movilizan al cliente a la selección de dichos productos basados precisamente en la experiencia que les genera. 
    h4.mb-0 Características de un buen naming  
    p.mb-5 Existen diferentes métodos para comprobar si el naming seleccionado es el adecuado o no, considere las siguientes características básicas:
    .row.mb-5.justify-content-center
      .col-lg-10
        img(src="@/assets/curso/107.svg")
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .bg--3-claro2.p-3.mb-3.hover-flip.hover.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/109.svg', alt='Texto que describa la imagen' style='width: 79px;').m-auto
            .col-lg-10
              p.mb-0 <b>Diseño de marca:</b> una vez cubiertos los pasos anteriores, es momento de empezar a crear la marca, la estrategia de comunicación, diseñar y ejecutar las piezas propuestas; todo lo anterior, basado en los estudios previos realizados.
        h4 <i>Branding</i>
        p.mb-3 Se entiende como el proceso de construcción de una marca y todos los aspectos que intervienen.
          br
          |Construir una marca es mucho más que elegir un nombre y diseñar un logotipo, es lograr que sea conocida y recordada en la mente de los consumidores; para ello, es necesario crear un ecosistema completo, donde todo esté interconectado y se generen acciones relacionadas con ese propósito. 
          br
          |El branding comprende experiencias, ideas, sensaciones, colores, y personas; un conjunto de elementos, mayormente intangibles, que tienen que ver más con las emociones y la psicología que con lo externo de las cosas, pero que son capaces de transmitir la propuesta de valor que diferencia a la empresa en el mercado y la hace competitiva. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/108.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Algunos de los más destacados son: 
    .row.mb-5.justify-content-center
      .col-lg-8
        #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 1')
          .carousel-inner
            .row.justify-content-center
              .col-lg-9
                .carousel-item.active.px-4
                  .contenedor-tarjetas.position-relative.py-5
                    .tarjeta-icono.bg--4.position-relative(style='height: 296px; ')
                      .icono.position-absolute(style='width: 100%; top: -10%; left: 0;')
                        img(src='@/assets/curso/110.svg', alt='Texto que describa la imagen' style='width: 400px;' ).m-auto.px-3
                    .tarjeta-contenido.d-flex.align-items-center(style='height: 321px')
                      .tarjeta-contenido__textos.px-3(style="margin-top: 0px;")
                        h5 <i>Branding</i> comercial
                        p Su principal función es la de diferenciar un producto frente a otro de la competencia, basado en sus características principales tangibles y sus valores intangibles. 
                .carousel-item.px-4
                  .contenedor-tarjetas.position-relative.py-5
                    .tarjeta-icono.bg--4.position-relative(style='height: 296px; ')
                      .icono.position-absolute(style='width: 100%; top: -10%; left: 0;')
                        img(src='@/assets/curso/111.svg', alt='Texto que describa la imagen' style='width: 400px;' ).m-auto.px-3
                    .tarjeta-contenido.d-flex.align-items-center(style='height: 321px')
                      .tarjeta-contenido__textos.px-3(style="margin-top: 0px;")
                        h5 <i>Branding</i> personal
                        p Se refiere a personas que son su propia marca, que venden su imagen, formación, conocimiento o experiencias, a un público en específico; pueden ser conferencistas, personas de negocios, o cualquier individuo interesado en gestionar y proyectar su imagen.  
                .carousel-item.px-4
                  .contenedor-tarjetas.position-relative.py-5
                    .tarjeta-icono.bg--4.position-relative(style='height: 296px; ')
                      .icono.position-absolute(style='width: 100%; top: -10%; left: 0;')
                        img(src='@/assets/curso/112.svg', alt='Texto que describa la imagen' style='width: 400px;' ).m-auto.px-3
                    .tarjeta-contenido.d-flex.align-items-center(style='height: 321px')
                      .tarjeta-contenido__textos.px-3(style="margin-top: 0px;")
                        h5 <i>Country branding</i>
                        p Este <i>branding</i> es utilizado por ciudades o países, para vender su propia marca, con ello desean consolidarse a nivel turístico, mostrando las diferencias que los hacen únicos frente a otros lugares similares, resaltando su cultura, paisajes, comida, hospitalidad de su gente, mejores precios, entre otros. 
                        
                .carousel-item.px-4
                  .contenedor-tarjetas.position-relative.py-5
                    .tarjeta-icono.bg--4.position-relative(style='height: 296px; ').mb-5.mb-lg-0
                      .icono.position-absolute(style='width: 100%; top: -22%; left: 0;')
                        img(src='@/assets/curso/113.svg', alt='Texto que describa la imagen' style='width: 350px;' ).m-auto.px-3
                    .tarjeta-contenido.d-flex.align-items-center(style='height: 321px')
                      .tarjeta-contenido__textos.px-3.mt-5(style="margin-top: 0px;")
                        h5 Digital <i>branding</i>
                        p Hace referencia a estrategias de marca que se llevan a cabo concretamente a través de medios digitales; el branding digital es necesario para fomentar relaciones más estrechas y profundas entre las marcas y las personas. Dentro de estos escenarios digitales, existen puntos de contacto, como :
                        .listas.d-flex.flex-wrap.mb-3
                          ul.lista-ul--color
                            li 
                              i.fas.fa-angle-right
                              p.mb-0 <i>Social media</i>
                            li 
                              i.fas.fa-angle-right
                              p.mb-0 <i>Marketing</i> de influencia
                            li 
                              i.fas.fa-angle-right
                              p.mb-0 <i>Marketing</i> de contenidos
                          ul.lista-ul--color.ms-5
                            li 
                              i.fas.fa-angle-right
                              p.mb-0 <i>Marketing</i> de correo
                            li 
                              i.fas.fa-angle-right
                              p.mb-0 Motores de búsqueda
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Manual de identidad corporativa 
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El manual de identidad corporativa es un documento que tiene como objetivo plasmar los lineamientos que tendrá la marca; es decir, debe reunir los elementos visuales y comunicativos que permitan darle identidad a una empresa u organización y que también sirva como producto comunicativo en uso interno. 
          br
          br
          |Pero no es solo la imagen y el texto lo que comunica en una identidad corporativa, también existe una cultura corporativa, que se refleja en el comportamiento, ideología y creencias por parte de los miembros que la conforman, así como también la interacción que establecen con sus clientes; es decir, es una representación de la empresa ante todo el público.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/114.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Un manual de identidad corporativa se compone de los siguientes aspectos: 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.tarjeta--amarilla.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="Introducción").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/115.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Introducción a la marca
                p Se deben comunicar las bases sobre las cuales se va a construir la identidad corporativa, cuáles son sus valores, qué filosofía empresarial tiene. 
            .row(titulo="Logotipo").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/116.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Logotipo
                p Debe incluir las especificaciones referentes al diseño, el espacio entre los elementos, los colores y las escalas permitidas, así como el área de seguridad. También es necesario incluir los usos correctos e incorrectos del logo para evitar posibles errores. 
            .row(titulo="Color").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/117.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Color
                p Cuáles son los tonos permitidos en torno de la marca y cuáles combinaciones son inadmisibles, además de indicar los patrones para materiales impresos, así como el color HEX para aquellos digitales. 
            .row(titulo="Composición").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/118.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Composición
                p Contiene las normas básicas de diseño que reflejan la intención de la marca; ayuda a crear una disposición visual distintiva.
            .row(titulo="Íconos").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/119.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Íconos y otros elementos: 
                p Explica cómo utilizar la biblioteca de íconos que la empresa incluye en impresos o medios digitales; por ejemplo, cómo utilizar el ícono de <b>"descargar”</b>, en cuanto a tamaños y colores. 
            .row(titulo="Imágenes").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/120.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Imágenes
                p Incluye el uso y tratamiento de las fotografías e ilustraciones, así como el tipo de enfoque permitido; por ejemplo, puede que la marca solo utilice imágenes duotono (compuestas solo por dos colores) o fotografías que transmitan diversidad.
            .row(titulo="Tipografía").px-5
              .col-md-4
                figure
                  img(src='@/assets/curso/121.svg', alt='Texto que describa la imagen')
              .col-md-7.mb-4.mb-md-0
                h4 Tipografía
                p Indique cómo utilizar las fuentes de su marca, incluyendo tamaño, espaciado, uso de fondos oscuros y claros, así como combinaciones entre títulos y párrafos de texto; ejemplo, H1, H2, H3 y párrafo.
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Productos editoriales
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Los podemos definir como todos aquellos productos que puedan ser impresos y que tengan como fin llegar a un público determinado; estas obras editoriales corresponden a libros, revistas, folletos, manuales técnicos y didácticos, carteles, y demás productos que requieran impresión y que en su contenido tengan una información concreta para un público específico.
          br
          br
          | Cada producto editorial tiene una manera única de desarrollar su contenido; cuentan con algunos elementos y requerimientos que deben considerarse en la elaboración de las piezas editoriales; aun cuando la estructura puede ser similar, el desarrollo interno de cada uno será diferente.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/122.png" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Los elementos que van a definir el producto gráfico y que debe tener muy en cuenta son: 
    .row.mb-5 
      .col-lg-4(data-aos="fade-right"): img(src="@/assets/curso/123.jpg" )
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color.fw-bold
          li.bg--lista.p-4 
            i.fas.fa-angle-right
            | Cuáles serán los criterios de manejo de la información para la construcción editorial. 
          li.bg--lista.p-4 
            i.fas.fa-angle-right
            | Qué argumento va a desarrollarse en las ilustraciones que realce su contenido. 
          li.bg--lista.p-4 
            i.fas.fa-angle-right
            | Cuáles son los requisitos de maquetación que harán parte del diseño interior de las páginas escritas y visuales del material editorial; sin olvidar las tintas y el proceso de color.
          li.bg--lista.p-4 
            i.fas.fa-angle-right
            | Qué requieren los productos impresos en su elaboración, teniendo en cuenta elementos textuales, gráficos y tipográficos esenciales para generar impacto visual e interés editorial.
          li.bg--lista.p-4 
            i.fas.fa-angle-right
            | Cuál será la organización y distribución de los elementos (maquetación y diagramación).
    p.mb-5 Son tantos los componentes de estilo, forma y estructura que intervienen en los productos impresos que cada editorial ha definido su modelo y estilo propio. No se puede olvidar que la digitalización ha configurado una nueva dinámica en la industria editorial, pues, aunque anteriormente se mencionaron algunos de los aspectos a tomar en consideración al momento de generar un contenido editorial, desde la editorial digital también se cumple con aquellas especificidades, aunque no hay material impreso, la estructura de elaboración será la misma y en igual grado de importancia.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-5.position-relative.hover.hover-flip
          p.text-center.mb-0.mt-3 Una corta reflexión y contextualización del tema sugiere que la digitalización amplía de manera exponencial las posibilidades gráficas, generando una alta circulación a través de medios masivos de comunicación. En el contenido digital, recobra interés lo gráfico, las posibilidades creativas, el nuevo lenguaje del color, las formas, los espacios, siendo elementos que no deben descuidarse.
          .img(style=" position: absolute; top: -15%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/84.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Editoriales
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Hacer referencia a editoriales es establecer que son sociedades empresariales encargadas de publicar y distribuir escritos. Una empresa editorial tiene necesidades particulares y públicos específicos; esta es la base para que cada editorial conserve una línea en su concepto de contenido; esta línea de ejecución, que es intelectual, conceptual y creativa, tiene una postura ideológica y desde ahí se desarrollan las propuestas; es decir, las estructuras comunicativas, el lenguaje, la iconografía, tipografía, imágenes, entre otros, son dados para llegar al mercado, clientes, lectores y consumidores del editorial.
          br
          br
          |Ahora bien, la editorial tiene productos editoriales, esto es, periódicos, revistas, libros, manuales didácticos, revistas corporativas y algunos otros productos derivados del mercado. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/124.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Dentro de los productos derivados de casa editorial, están los siguientes:
    .tarjeta-bg.p-4.mb-5
      .row.mb-5.justify-content-center
        .col-lg-12
          #carouselExampleIndicators1.carousel.slide(data-bs-ride='carousel')
            .carousel-indicators
              button.active(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
              button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='1' aria-label='Slide 2')
              button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='2' aria-label='Slide 3')
              button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='3' aria-label='Slide 4')
              button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='4' aria-label='Slide 1')
            .carousel-inner
              .row.justify-content-center
                .col-lg-12
                  .carousel-item.active.px-3
                    .row.justify-content-center.mx-5.align-items-center
                      .col-lg-7
                        h4 Periódicos
                        p Como su nombre lo indica, es una publicación periódica, es decir, estable y continua; su estructura editorial es noticiosa y narrativa, puede desarrollarse como crónica o reportaje. Incluye la opinión desde sus columnistas, periodistas que a nombre propio asumen una posición acerca de un tema en particular del contexto de interés del periódico; de igual manera, contiene información policial, económica, deportiva, cultural y de entretenimiento. Por lo general, un periódico tiene un amplio espectro de información, de esa manera tiene un público amplio en intereses, edades, y posturas ideológicas y políticas. En el mercado editorial, se encuentran periódicos semanales o quincenales que pueden abordar una sola temática, como la economía, en cuyo caso estarían dirigidos a un solo segmento de público. Se destaca en el periódico las gráficas y el material fotográfico. 
                      .col-lg-4: img(src="@/assets/curso/125.png" alt="Adornos flotantes")
                  .carousel-item.px-3
                    .row.justify-content-center.mx-5.align-items-center
                      .col-lg-7
                        h4 Revista
                        p También es una publicación periódica; se puede decir que los tiempos de elaboración y, por tanto, de circulación son más amplios que en el periódico, es decir, sería quincenal o mensual por su formato y contenido. Su mercado principal es la publicidad, por lo que tendrá dentro de su contenido espacios pactados y pautados que influenciarán en el diseño interior de cada página en la revista. Como el periódico, puede ser variada o de temáticas específicas, siendo las últimas las más frecuentes. La iconografía y la tipografía son altamente relevantes; el aspecto físico de la revista es muy importante, ya que el impacto que debe dar al público debe ser el adecuado según su segmento de contenidos.  Sus textos, en la mayoría, son artículos.
                      .col-lg-4: img(src="@/assets/curso/126.png" alt="Adornos flotantes")
                  .carousel-item.px-3
                    .row.justify-content-center.mx-5.align-items-center
                      .col-lg-7
                        h4 Libro
                        p Es una obra escrita que, en su mayoría y de manera tradicional, se distribuye de manera impresa; sin embargo, hoy en día los libros tienen gran influencia de la era digital. Desde la impresión, el libro es una pieza escrita que tiene una estructura específica, ya asumida por los lectores; puede, en su interior, tener ilustraciones, como imágenes que permitan visualizar algún contenido específico de su narrativa. Para que en su configuración se considere como un libro, debe tener más de 50 páginas por ejemplar, de lo contrario, se asume como un folleto.  Su estructura narrativa debe cumplir con los requerimientos del público, según su género literario; lo anterior debe entenderse como la forma narrativa en que el texto del libro expresa su diálogo con el lector. Entre las obras literarias, se encuentran el cuento, la novela, la fábula, la epopeya, el suspenso y el drama, cada una de ellas tendrá su propio estilo narrativo.  
                      .col-lg-4: img(src="@/assets/curso/127.png" alt="Adornos flotantes")
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.visually-hidden Next
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Productos gráficos 
    p.mb-5 Constituyen la representación visual de una idea o concepto. Hacer referencia a productos gráficos es identificar la necesidad de establecer los requerimientos necesarios para que la pieza de composición editorial se ajuste a las necesidades del cliente, su público y su marca. Para ello, un producto gráfico, en su proceso de desarrollo, debe seguir una continuidad de pasos, para que el producto final cumpla con los requisitos en su composición editorial y composición gráfica.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Infografía
    .row.mb-5.align-items-center
      .col-lg-6(data-aos="fade-right")
        p.mb-3 La infografía hace parte de las piezas publicitarias que sirven como herramientas comunicativas. La mayor característica de una infografía es que utiliza ilustraciones, imágenes, texto, diagramas y tabulaciones, con el fin de entregar al público un mensaje claro y contundente, donde el observador realice una lectura e interpretación de los elementos gráficos como refuerzo del mensaje escrito. 
          br
          br
          b Los elementos de comunicación visual que la infografía presenta generan en el lector interés por el recurso utilizado, que de manera útil y ágil establece una comunicación directa, con facilidad de interpretación y comprensión. 
          br
          br
          |La infografía es un recurso utilizado desde la docencia académica hasta en el área comercial, y su uso es de amplio interés, ya que admite comunicar de manera simple conceptos que pueden llegar a ser complejos; además, permite asimilar fácilmente la información, al tener la posibilidad de observarla de manera inmediata, completa e inadvertida. La utilización de texto, imágenes y tipografía es sumamente efectiva y bien apreciada por los medios gráficos.
      .col-lg-6.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/128.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 La infografía se puede utilizar en proyectos como:
    .row.mb-5.justify-content-center
      .col-lg-3.hover-flip
        img(src="@/assets/curso/129.svg" style="width:238px").hover.m-auto.mb-3
        p.text-center.fw-bold Infografía publicitaria
      .col-lg-3.hover-flip
        img(src="@/assets/curso/130.svg" style="width:238px").hover.m-auto.mb-3
        p.text-center.fw-bold Infografía corporativa
      .col-lg-3.hover-flip
        img(src="@/assets/curso/131.svg" style="width:238px").hover.m-auto.mb-3
        p.text-center.fw-bold Infografía informática
      .col-lg-3.hover-flip
        img(src="@/assets/curso/132.svg" style="width:238px").hover.m-auto.mb-3
        p.text-center.fw-bold Infografía didáctica
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Póster, afiche y cartel
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/133.jpg' alt='AvatarTop' style='width: 123px')
          .tarjeta.bg--3-claro2.hover-bg--4.w-100.h-100.mt-4
            .p-4.text-center
              h4 Poster 
              p Este es un documento que está compuesto principalmente por imágenes, texto y recursos gráficos. Debe ser de gran tamaño y tener una tipografía estéticamente atractiva y de fácil lectura para el transeúnte; los espacios externos son los habituales para esta clase de productos gráficos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/134.jpg' alt='AvatarTop' style='width: 123px')
          .tarjeta.bg--3-claro2.hover-bg--4.w-100.h-100.mt-4
            .p-4.text-center
              h4 Afiche 
              p Su intención comunicativa es la de convencer e invitar al público para adquirir un producto o servicio, o convencer al lector sobre algo determinado; por lo tanto, su texto informativo debe ser corto y contundente, con un diseño equilibrado entre elementos gráficos y el texto, que permitan captar la atención de los usuarios.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/135.jpg' alt='AvatarTop' style='width: 123px')
          .tarjeta.bg--3-claro2.hover-bg--4.w-100.h-100.mt-4
            .p-4.text-center
              h4 Cartel
              p A diferencia de los anteriores documentos gráficos, el cartel tiene como objetivo comunicar ideas, es decir, brindar información a la persona que lo observa; su tamaño no es estrictamente grande, tiene una combinación de imágenes y texto limitados, la información que ofrece debe ser original y básica, para lograr una comunicación efectiva con el público. 
    p.mb-5 En los tres casos anteriores, los documentos gráficos deben ser visualmente atractivos y sugestivos desde la utilización de colores y tipografía, aspecto fundamental para que el contenido temático sea llamativo para el receptor. Además, deben tener un balance, el cual se traduce en los elementos necesarios entre texto, imagen e ilustraciones; de esta manera, es posible lograr que la comunicación que se establece con el público sea efectiva y le permita al observador captar y comprender el punto central de la información. 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Material didáctico     
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El material didáctico, dentro de los productos gráficos, son elementos que coadyuvan en la formación integral de los estudiantes, facilitando los procesos de enseñanza-aprendizaje, tanto en modalidad presencial como en ambientes virtuales.  Los productos gráficos concebidos con propósitos educativos y diseñados correctamente tienen la capacidad de fortalecer los procesos de aprendizaje, ya que estimulan los órganos sensoriales de los aprendices, permitiendo la asimilación de contenidos académicos de manera más clara, fácil y directa. 
          br
          br
          |Por supuesto, es necesario realizar un acercamiento a métodos de aprendizaje que permitan comprender el comportamiento de quien aprende y así buscar la manera de potencializar esas competencias a partir del uso de recursos digitales. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/136.svg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .bg-imagen.p-5.mb-5
      .texto-ab.bg--2-claro2.p-4
        p.mb-0 Respecto al desarrollo gráfico, es necesario profundizar en elementos de ergonomía cognitiva, es decir, comprender cómo un ambiente puede promover ciertos aprendizajes a partir del uso de colores, tipografía, imágenes o fotografías. En este sentido, es importante el trabajo que desarrolla el diseñador, la reflexión frente al lenguaje visual de los contenidos, cuál es el lugar adecuado para la imagen, el color y la tipografía, en la búsqueda de apoyar la comprensión de ideas y conceptos (Leyva, s. f.).
    p.mb-5.mt-5 Estos materiales didácticos pueden tener varias presentaciones: libros, carteles, videos, cartillas, infografías, entre otros. Estos recursos son elaborados a partir de la identificación de la necesidad educativa y definición del público objetivo y sus características: área de conocimiento, nivel educativo, edad, conocimientos previos, capacidades, habilidades y experiencias; información valiosa que servirá de insumo para generar los conceptos gráficos. 
      br
      br
      |Siempre será importante reconocer el contexto de los educandos, su desarrollo, no solo cognitivo, sino también las habilidades tecnológicas que posee y que son requeridas para el manejo efectivo de un material didáctico multimediático. Con toda esta información, lo siguiente es determinar su ejecución, es decir, qué lenguaje narrativo se utilizará en el desarrollo de los contenidos, cómo será su presentación y qué nivel de interactividad deberá tener.
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-5.position-relative.hover.hover-flip
          p.text-center.mb-0.mt-3 Todo material pedagógico es una pieza comunicativa gráfica con unas especificaciones y manejo del lenguaje textual y de imágenes estudiados a fondo, para llevar un mensaje claro, oportuno y de buen entendimiento a la comunidad estudiantil.  
          .img(style=" position: absolute; top: -15%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/84.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    p.mb-5 Se resaltan algunas ventajas del material didáctico:
    .row.mb-5.justify-content-center
      .col-lg-12
        #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
          .carousel-inner
            .row.justify-content-center
              .col-lg-9
                .carousel-item.active.px-4
                  .row.justify-content-center
                    .col-lg-4
                      .tarjeta-hover.tarjeta.bg--4-claro.p-4.hover-flip.hover.h-100(@mouseover="mostrarIndicador= false")
                        .indicador--hover(v-if="mostrarIndicador")
                        img(src="@/assets/curso/138.svg" alt="Adornos flotantes" style="width: 112px").mb-3.m-auto
                        p.text-center.fw-bold Favorece el desarrollo temprano del lenguaje.
                        .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/139.jpg')})`}")
                    .col-lg-4
                      .tarjeta-hover.tarjeta.bg--4-claro.p-4.hover-flip.hover.h-100(@mouseover="mostrarIndicador= false")
                        img(src="@/assets/curso/138.svg" alt="Adornos flotantes" style="width: 112px").mb-3.m-auto
                        p.text-center.fw-bold Promueve habilidades para comprender y utilizar e interpretar símbolos. 
                        .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/140.jpg')})`}")
                    .col-lg-4
                      .tarjeta-hover.tarjeta.bg--4-claro.p-4.hover-flip.hover.h-100(@mouseover="mostrarIndicador= false")
                        img(src="@/assets/curso/138.svg" alt="Adornos flotantes" style="width: 112px").mb-3.m-auto
                        p.text-center.fw-bold Ofrece diferentes estructuras de organización de datos.
                        .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/141.jpg')})`}")
                .carousel-item.px-4
                  .row.justify-content-center
                    .col-lg-4
                      .tarjeta-hover.tarjeta.bg--4-claro.p-4.hover-flip.hover.h-100(@mouseover="mostrarIndicador= false")
                        .indicador--hover(v-if="mostrarIndicador")
                        img(src="@/assets/curso/138.svg" alt="Adornos flotantes" style="width: 112px").mb-3.m-auto
                        p.text-center.fw-bold Permite una mayor capacidad de concentración, evitando el agotamiento mental.
                        .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/142.jpg')})`}")
                    .col-lg-4
                      .tarjeta-hover.tarjeta.bg--4-claro.p-4.hover-flip.hover.h-100(@mouseover="mostrarIndicador= false")
                        img(src="@/assets/curso/138.svg" alt="Adornos flotantes" style="width: 112px").mb-3.m-auto
                        p.text-center.fw-bold Mejora la comprensión y aprehensión de los contenidos, al brindar elementos multimediales.
                        .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/143.jpg')})`}")
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next  
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Síntesis
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.
    .row.mb-5.justify-content-center
      .col-lg-6: img(src="@/assets/curso/144.jpg" alt="Adornos flotantes" style="width: 100%;")

























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

<style lang="sass">
.linea-tiempo-d .tarjeta
  background-color: #ffe2b7
.acordion__activo
  background-color: #b7eef3
.bg--lista
  background-color: #d3f4f8
.bg-imagen
  position: relative
  background-image: url(../assets/curso/137.jpg)
  background-repeat: no
  background-size: cover
  background-position: center
  height: 307px
  @media (max-width: $bp-min-lg)
    height: fit-content
  .texto-ab
    position: absolute
    width: 40%
    right: 10%
    bottom: -10%
    @media (max-width: $bp-min-lg)
      position: relative
      width: 100%
      bottom: 0
</style>
