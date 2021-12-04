<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Del boceto a la ilustración
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 La ilustración, no dibujo, como se conoce hoy en día, tiene sus orígenes en la prehistoria, pasando por diversos periodos, y se puede definir como la representación a escala de un objeto, cuyo objetivo es la descripción visual de un elemento o proceso; suele ser un componente gráfico que complementa o acentúa los textos.
        .bg--4-claro.p-3.px-5
          p.mb-0 Las ilustraciones son imágenes que producen mensajes, como las pinturas rupestres o las imágenes religiosas, siendo para el observador características que ayudan a la rapidez de su lectura y a la facilidad de su comprensión. 
        p Para el observador es importante poder identificar elementos sin entrenamiento, por lo que se necesita trabajo para conceptualizar las ideas y no perder al usuario en información que puede considerar innecesaria.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/40.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb- La libertad en el estilo del ilustrador se apoyará en su técnica y esta dependerá de características similares que se deben tener en cuenta: 
    .titulo-sexto.color-acento-contenido
      h5 Figura 1 
      span Características


    //todo! PENDIENTE MAQUETAR COMPONENTE BOTONES 
    //todo! PENDIENTE MAQUETAR COMPONENTE BOTONES 
    //todo! PENDIENTE MAQUETAR COMPONENTE BOTONES 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Fases  
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Entendemos que, en todo proceso creativo, no existen unas etapas ni fases definidas para poder conseguir el éxito, porque este se basa en un conjunto de elementos y características que hacen único cada trabajo y cada artista; pero se pueden conseguir elementos que ayudarán a enfocar ideas para no perder tiempo ni recursos.
          br
          br
          |Se conoce el proceso creativo de otros momentos y es una herramienta que permite, a través de pensamientos bien encaminados, conceptualizar ideas para crear finalmente cosas novedosas, de una manera diferente.
          br
          br
          |Todo proceso creativo varía de acuerdo con cada individuo, debido a que sus conocimientos, su forma de pensar y sus asociaciones con los elementos de la vida generan en cada persona un proceso creativo diferente, con un concepto diferente.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/41.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")   
    p.mb-5 A continuación, se conocerán las etapas del proceso creativo en su primera fase: 
    .tarjeta.tarjeta--azul.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Preparación").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/42.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Preparación
            p Se plantea un problema y se recoge toda la información, dando posibilidades para la solución de un problema.
        .row(titulo="Incubación").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/43.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Incubación
            p Interiorización del problema, se revisan y se conectan todas las ideas. Etapa donde se piensa mucho en las estrategias para su solución.
        .row(titulo="Iluminación").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/44.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Iluminación
            p Se produce una chispa y se organizan todas las ideas, ayudando a conseguir la solución más adecuada.
        .row(titulo="Verificación").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/45.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Verificación
            p Se verifica y valida la solución para saber si se desecha o se toma y se perfecciona.
    p.mb-5 Entendida esta primera fase, donde se sabe qué se quiere y cómo se quiere, se avanza a una segunda fase:
    .tarjeta.tarjeta--amarilla.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Conceptualización").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/46.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Conceptualización
            p Para conseguir la ilustración que se propone, se avanza a explorar un poco más, consultando referencias gráficas, las que contribuirán con ideas de diferentes artistas y ampliarán el abanico de posibilidades para la construcción del proyecto.
        .row(titulo="").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/47.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Bocetación
            p El boceto debe ser un bosquejo rápido, que plasme las ideas más importantes y que ayude a visualizar y encaminar un proyecto.
        .row(titulo="Finalización").px-5
          .col-md-4
            figure
              img(src='@/assets/curso/48.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Finalización
            p Donde se hará uso de las técnicas con las que mejor se trabaje y se pueda llegar a una digitalización para su presentación final. Acá se dan los últimos detalles y se dará  conclusión a la obra de arte.
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Clasificación de ilustraciones
    p.mb-5 En el mundo del diseño y la ilustración, es posible encontrar distintos tipos de ilustraciones, pero es necesario clasificarlas en dos grandes secciones o clases: ilustraciones conceptuales e ilustraciones literales. Conozca cada una de ellas.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Ilustraciones conceptuales
    p.mb-5 Son representaciones metafóricas o figuradas de elementos, ideas y escenas, que pueden contener elementos de la realidad o no, pero que en conjunto poseen y transmiten historias y sentimientos que pueden incluir diferentes formas de representación. A continuación, algunos elementos adicionales.   
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/49.jpg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta--amarilla.p-3(x="57%" y="40%" numero="")
        p Es una ilustración o tipo de ilustración que no se ciñe a datos, información o algún argumento literario o referencia que la soporte, sino que se basa en las ideas y conocimientos a considerar por el ilustrador, acerca de los temas de los que pretende ilustrar; en general, representa ideas usuales, dejando volar la imaginación y la creatividad de quien lo lee.
      .tarjeta.tarjeta--amarilla.p-3(x="67%" y="85%" numero="")
        p Podemos referenciar el arte conceptual como una forma de ilustración donde se representan gráficamente conceptos para animación, comics, videojuegos, televisión y cine; estas ilustraciones nacen puramente de la imaginación y creación del ilustrador, donde su conocimiento será el encargado de crear estilos y formas de comunicación distintas y originales. 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Ilustraciones literales
    p.mb-5 Representan verdades pictóricas. Aquí, generalmente, se realiza una descripción exacta de la realidad, incluso, si su narrativa es fantástica o ficticia, se hace énfasis en realizar una escena lo más creíble posible, como el fotorrealismo o el hiperrealismo.
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/50.jpg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta--amarilla.p-3(x="30%" y="47%" numero="")
        p Este tipo de ilustración debe en su mayoría ajustarse a detalles y contenidos, para mantener equilibrios entre ilustradores e intérpretes. Este tipo de ilustración, a diferencia de la ilustración conceptual, es la representación gráfica de un argumento, así como las representaciones de estas sirven para reforzar escenas dentro de una lectura. 
      .tarjeta.tarjeta--amarilla.p-3(x="60%" y="88%" numero="")
        p Dentro de este género, también encontraremos la ilustración infantil, de ciencia ficción, humor gráfico, cómic, animación, etc. Se manifiesta a través de la caricatura, la historieta, los dibujos infantiles y fantásticos, sirve para acompañar textos literarios, dando información sobre estos y creando imágenes alusivas a lo que se narra.
    p.mb-5 Según Luc Dupont, publicista y profesor, “existen al menos nueve tipos de ilustraciones que atraen nuestra atención y venden por encima de la media”, algunas son:
    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span Tipos de ilustraciones 
    .row.justify-content-center.mb-5
      .col-md-8
        figure
          img(src='@/assets/curso/51.svg', alt='Texto que describa la imagen')
    p.mb-5 Para elegir una buena ilustración, que consiga atrapar al público objetivo, se suelen utilizar herramientas que sirven como ayuda al momento de crear una imagen o diseño publicitario:
    figure.mb-5 
      img(src='@/assets/curso/52.svg', alt='Texto que describa la imagen')
    p.mb-5 Independientemente del tipo de ilustración por el que se opte o los estilos que se quieran seguir, se encuentran diferentes técnicas o métodos de ilustración que ayudan a representar de una manera específica una situación o elemento en particular, entre ellas se pueden encontrar:
    SlyderB.mb-5(:datos="datosSlyder")
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Técnicas
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Conocer diferentes técnicas y conceptos de ilustración ayudará a crear y tener ideas y criterios que facilitarán el desenvolvimiento en múltiples campos de acción, como el arte, la literatura, el cine o la publicidad, entre otros. La ilustración o el dibujo ilustrativo es una de las artes visuales que está presente en estas y múltiples aplicaciones más, lo cual, acompañado de una exploración y trabajo constante, abrirá paso en este mundo consumista de buenos y constantes productos.
          br
          br
          |Es así como la ilustración permite expresar la imaginación y las ideas que se forman constantemente, creando estilos únicos. Para definir estas técnicas, se encuentran dos grandes campos: la ilustración digital y la ilustración análoga o tradicional, cada una con sus propias técnicas y sus propias ventajas y desventajas, pero ninguna podría decirse que se puede considerar mejor que la otra, todo queda a la subjetividad y necesidad de cada usuario.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/57.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")   
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Técnicas análogas
    p.mb-5 Este tipo de ilustración es la que se hace sobre un sustrato físico, sea papel, tela, madera, etc., utilizando colores con pigmentos. Es una técnica que se hace de modo manual y en su mayoría de veces individual, y requiere de preparación de sus elementos, como lo serían los lienzos y los elementos con los que se trabajará o se ilustrará.
      br
      |Esta técnica está en estrecha relación con la capacidad, aptitud y destreza de quienes la realizan, así como el nivel de complejidad, de expresión y el uso de las técnicas. A continuación, algunas de sus principales formas:
    SlyderD.mb-5(:datos="datosSlyder2")
    p.mb-5 Este tipo de ilustración es la que se hace sobre un sustrato físico, sea papel, tela, madera, etc., utilizando colores con pigmentos. Es una técnica que se hace de modo manual y en su mayoría de veces individual, y requiere de preparación de sus elementos, como lo serían los lienzos y los elementos con los que se trabajará o se ilustrará.
      br
      |Esta técnica está en estrecha relación con la capacidad, aptitud y destreza de quienes la realizan, así como el nivel de complejidad, de expresión y el uso de las técnicas. A continuación, algunas de sus principales formas:
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Técnicas digitales
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Por otro lado, existen las técnicas digitales de ilustración, y estas dependen del uso de programas de software especializado, que cuentan con herramientas y elementos pertinentes para esta labor, los cuales, avanzando y evolucionando constantemente, han acaparado el mercado de la ilustración y muchos artistas han estado volcándose hacia estas técnicas poco a poco. Actualmente, es posible encontrar diferentes estilos de ilustración digital, los cuales utilizan distintas herramientas y características, así como en las técnicas análogas. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/66.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")   
    p.mb-5 Dentro de las principales técnicas digitales de ilustración, se pueden encontrar las siguientes:
    .row.mb-5.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/67.jpg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Técnica digital en mapa de bits o imágenes rasterizadas.
              p Se basa en la edición de gráficos elaborados con base en puntos o pixeles. El programa más utilizado en esta técnica es el Adobe Photoshop, que permite trabajar con gráficos y retoque fotográfico, al igual que con la configuración de pinceles, estructura de capas y modos de transparencia.
                br
                br
                |Con esta técnica, podemos encontrar a ilustradores que trabajan ilustraciones realistas, siendo una de las técnicas que hoy en día se encuentran más; es una técnica que comienza con un bosquejo o boceto, que luego se pasa al programa digital.
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Técnica digital con vectores
              p Un vector es una imagen creada mediante fórmulas matemáticas, formada por curvas. Esta técnica es muy popular y tiene amplia utilización en los programas Adobe Illustrator y CorelDRAW; se caracteriza por líneas limpias, colores planos y formas simples. Tiene una ventaja, ya que se puede aumentar, disminuir o modificar el tamaño de la imagen, sin que pierda nitidez ni calidad.
                br
                br
                |Es la técnica más utilizada para ilustraciones y diseños rápidos, adaptándose al mundo de hoy con mucha facilidad y más en el mundo de la publicidad y las comunicaciones, dada su facilidad y rapidez al momento de conseguir resultados.
            .col-md-3
              figure
                img(src='@/assets/curso/68.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-3
              figure
                img(src='@/assets/curso/69.jpg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 La técnica del Pixel Art 
              p Esta técnica o estilo de ilustración se empezó a popularizar en los años 80 y 90, con la aparición de los videojuegos que se hacían bajo esta premisa de pixeles, donde aparecieron íconos gráficos que marcaron y se tomaron el protagonismo que, al día de hoy, aún perdura.
                br
                br
                |Básicamente, consiste en realizar ilustraciones sobre retículas uniformes, de tal modo que los pixeles se vean más pronunciados, dando apariencia de elementos retro y vintage. 
          .row
            .col-md-8.mb-4.mb-md-0
              h3 Técnica digital en modelado 3D
              p Un vector es una imagen creada mediante fórmulas matemáticas, formada por curvas. Esta técnica es muy popular y tiene amplia utilización en los programas Adobe Illustrator y CorelDRAW; se caracteriza por líneas limpias, colores planos y formas simples. Tiene una ventaja, ya que se puede aumentar, disminuir o modificar el tamaño de la imagen, sin que pierda nitidez ni calidad.
                br
                br
                |Es la técnica más utilizada para ilustraciones y diseños rápidos, adaptándose al mundo de hoy con mucha facilidad y más en el mundo de la publicidad y las comunicaciones, dada su facilidad y rapidez al momento de conseguir resultados.
            .col-md-3
              figure
                img(src='@/assets/curso/70.jpg', alt='Texto que describa la imagen')
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Técnicas mixtas
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es la combinación de diferentes técnicas, análogas y digitales, mediante el uso de herramientas y softwares o programas, en la realización de una obra. Entre más complicado sea el trabajo por realizar, se requerirán equipos más complejos, como la tableta gráfica con pantalla incorporada, un escáner y un monitor amplio.
          br
          br
          |Lejos de apostarle a un solo material o sustrato, los ilustradores y artistas de hoy apuestan a combinar todas las herramientas al alcance, logrando nuevos estilos y nuevas formas de ver el arte. Así es como se puede decir que las técnicas mixtas consisten en combinar distintas técnicas y materiales en cualquier paso de la ilustración, para conseguir resultados y técnicas distintas, transformándose en sí en una técnica.
          br
          br
          |Hoy en día, la gran técnica y la más usada es fusionar las técnicas análogas con las mixtas, transformando los medios y las técnicas tradicionales, pero sin dejar elementos tan tradicionales como el dibujo a lápiz y la bocetación de las obras.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/71.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")  
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-5.position-relative.hover.hover-flip
          p.text-center.mb-0.mt-3 La intención es no dejar de experimentar y probar las técnicas con las que más se tenga afinidad y conocimiento, para iniciar a ensayar; la verdadera técnica consiste en la práctica y en la diversión de la creación de las ilustraciones, el primer paso es comenzar. 
          .img(style=" position: absolute; top: -15%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/72.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4. Composición y perspectiva
    p.mb-5 La <b>composición es la relación y organización que existe entre los elementos que forman una imagen como un todo y que comunican al espectador en qué orden</b> debe mirar y por qué. Esta relación es lo primero que perciben las personas y lo ideal es que sientan que el conjunto de elementos que forman la imagen es equilibrado, que sus colores son los adecuados, el tamaño es proporcionado y que entienden lo que quiso transmitir el ilustrador.
      br
      br
      |Es importante tener en cuenta algunos elementos que proporcionan equilibrio en la composición de una imagen:
    .row.mb-5.justify-content-center
      .col-lg-3.mb-3
        .tarjeta.bg--1.p-4.hover-flip.hover.h-100.hover-bg--4
          img(src="@/assets/curso/73.svg" alt="Adornos flotantes" style="width: 128px").mb-3
          h4 Espacios negativos
          p No se debe comprender solo lo que está dibujado o puesto en una composición, sino que se debe prestar atención a todo lo que construye, como los fondos o espacios negativos, que podrían simplemente ser espacios vacíos, ayudando a influir en la percepción de lo que se aprecia.
      .col-lg-3.mb-3
        .tarjeta.bg--1.p-4.hover-flip.hover.h-100.hover-bg--4
          img(src="@/assets/curso/73.svg" alt="Adornos flotantes" style="width: 128px").mb-3
          h4 Peso
          p Cada objeto dentro de la ilustración tiene un peso, por eso es necesario equilibrar cada elemento en el área de trabajo. A veces, el ilustrador utiliza los espacios vacíos.
      .col-lg-3.mb-3
        .tarjeta.bg--1.p-4.hover-flip.hover.h-100.hover-bg--4
          img(src="@/assets/curso/73.svg" alt="Adornos flotantes" style="width: 128px").mb-3
          h4 Puntos focales
          p Son aquellos sitios hacia los cuales se dirige nuestra mirada cuando vemos la ilustración. Lo primero que se observa es la figura humana. A veces, el ilustrador aísla a propósito un elemento. Los elementos deben estar aireados, aunque no en espacios vacíos.
      .col-lg-3.mb-3
        .tarjeta.bg--1.p-4.hover-flip.hover.h-100.hover-bg--4
          img(src="@/assets/curso/73.svg" alt="Adornos flotantes" style="width: 128px").mb-3
          h4 Regla de tres
          p Para añadir más dinamismo a las ilustraciones, es preferible colocar elementos en número impar.
    p.mb-5 Y la perspectiva se puede definir como el conjunto de técnicas que permiten trasladar una escena a un plano bidimensional, donde se recrean la profundidad y la posición de los objetos para lograrlo. Tiene elementos generales para calcular la disminución del tamaño de los objetos debido a su distancia o posición.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Perspectiva lineal
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'La ilustración de corte o seccionado',
        texto:
          'Permite al espectador observar un objeto <b>“sólido”</b>, haciendo visibles secciones o características internas, sin descuidar el exterior, dando al observador la posibilidad de ver cómo funcionan las cosas, haciendo cortes o eliminando secciones, proporcionando contrastes sobre fondos y planos. ',
        imagen: require('@/assets/curso/53.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ilustración explosionada o de despiece',
        texto:
          'Es una ilustración que permite al observador hacer una relación de varias piezas o ensamble de varias piezas para la construcción de un objeto completo, separadas a corta distancia, representando la continuación de los elementos.<br><br>Se utiliza para la instrucción o ensamblaje de objetos.  ',
        imagen: require('@/assets/curso/54.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Imagen espectral',
        texto:
          'Esta técnica usa la transparencia y el concepto de capa para la creación de sus ilustraciones, es similar a las técnicas anteriores, ya que la idea es mostrar el interior de algún objeto visto como una capa transparente, mostrando así niveles de profundidad; ',
        imagen: require('@/assets/curso/55.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ampliador de Detalles',
        texto:
          'Es una técnica que se usa para realzar elementos que se extraen de una ilustración, es usada para resaltar información a una mayor escala, como si estuviera una “lupa” encima; ayuda a enfatizar y aclarar información mediante un cuadro alterno.',
        imagen: require('@/assets/curso/56.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Puntillismo',
        texto:
          'Es una técnica que consiste en emplear pequeños toques de color (puntos) entremezclados, que, al ser vistos desde una distancia adecuada, reaccionan y crean imágenes compuestas. Se adecúa a herramientas como rapidógrafos o estilógrafos, los cuales funcionan utilizando tintas con suma precisión. Se utilizan los más gruesos para hacer manchas más fuertes y ocupar más espacio con la tinta, haciendo zonas más oscuras o sombreadas, y las puntas más finas, para hacer espacios con más luz. ',
        imagen: require('@/assets/curso/58.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tizas y pasteles',
        texto:
          'Elaboradas con diferentes minerales y pigmentos secos, se encuentran la sanguina roja, el carboncillo y el yeso, creando con ellos una gran gama de colores marrones y rojos; el blanco, por su parte, acentúa volúmenes y otorga luz; por otro lado, el carboncillo otorga sombras y ayuda a oscurecer espacios.<br>Permite coloraciones saturadas, con calidades aterciopeladas, gracias a sus materiales; se pueden conseguir efectos de difuminado.',
        imagen: require('@/assets/curso/59.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Lápiz',
        texto:
          'Esta técnica es de la más utilizadas, sobre todo al momento de pensar en bocetación. El lápiz se presenta con distintas durezas y en diferentes colores, su calidad depende de la pureza del grafito y de la calidad de la arcilla al momento de la cocción de los colores.<br>Los lápices emplean números para diferenciar el grosor de cada uno y van desde el 9B (Black) hasta el 9H (Hard). Esta técnica es la primera en usarse y aprenderse, por su facilidad y versatilidad; gracias a sus durezas, facilita gran cantidad y variedad de trazos.',
        imagen: require('@/assets/curso/60.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Lápices de color',
        texto:
          'Su principal característica es la facilidad e inmediatez en su forma de trabajo, dado que es lo mismo que un lápiz, anteriormente citado. Su forma es gruesa, suave y satinada, se utiliza para formatos cortos. Dadas su intensidad y capacidad, está diseñado para formatos pequeños, siendo esta una de sus principales desventajas; su calidad en detalle, su permanencia y estabilidad en el tiempo y de sus colores actúan como puntos a favor, al igual que la capacidad de superponer colores, mas no de mezclarlos.<br><br>Se consideran elementos complementarios con otras técnicas como la acuarela, realzando características y detalles más realistas. ',
        imagen: require('@/assets/curso/61.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Rotuladores',
        texto:
          'Es una técnica muy usada por los ilustradores, logrando colores limpios y tonos sólidos, con calidad muy fina, y es una de las técnicas más usadas para la reproducción de medios fotomecánicos. Sus terminaciones son limpias y muy marcadas. Actualmente, ha perdido campo de acción, dado que los programas de diseño simulan a la perfección esta técnica, aunque la mayoría de los profesionales sigue utilizando esta técnica combinada con otras, para encontrar nuevos estilos.<br><br>Se trabaja por superposición de color, desde los más claros hasta los más oscuros, siendo una técnica difícil de perfeccionar.',
        imagen: require('@/assets/curso/62.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Acuarelas',
        texto:
          'Uno de las técnicas más usadas por los ilustradores, dada su funcionalidad y alta calidad de detalle. Permite colorear grandes superficies con acabados de calidad, con tonos que van desde los sólidos hasta los más opacos. Su gran ventaja, al momento de pensar en esta técnica, es la posibilidad de trabajar con otras técnicas y ampliar y mejorar los estilos y los diseños. La posibilidad de diluir colores en agua aumenta o disminuye la intensidad de sus colores, y su fácil secado permite la utilización de otras sustancias para la creación de obras de arte.',
        imagen: require('@/assets/curso/63.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Acrílicos',
        texto:
          'De todas las técnicas análogas, es la más nueva, comenzando a mediados de los años 30, aportando con una cantidad de texturas y efectos que varían dados los sustratos. Es un material que se seca rápido y es una buena alternativa al óleo.<br><br>Sus colores son intensos y vibrantes y se ha extendido su popularidad en ilustradores más recientes, ya que sus efectos permiten combinar diferentes técnicas. ',
        imagen: require('@/assets/curso/64.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Óleos',
        texto:
          'Su riqueza y profundidad no tienen comparación con otra técnica, pero es una técnica con muchos inconvenientes y solo los más diestros se aventuran a ella. Con una representación muy realista, es empleada por profesionales que buscan crear obras artísticas y de gran calidad. Uno de sus inconvenientes es la espera para el secado de cada una de sus capas, pero sin comparación en sus resultados.',
        imagen: require('@/assets/curso/65.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
.tarjeta--azul
  background-color: #dbf6f9
.tarjeta--amarilla
  background-color: #fff9dd
</style>
