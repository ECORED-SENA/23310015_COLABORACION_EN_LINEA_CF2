<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Identidad digital
    .contenedor.bg--1-claro.p-5.my-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__1: img(src='@/assets/curso/1.png', alt='Texto que describa la imagen' style='width: 196px')
      .row.justify-content-end
        .col-xl-9
          .texto
            p.h1.fw-normal 
              b ¿Conoces cómo impacta tu identidad digital el comportamiento en la red? 

    br
    br
    SlyderB.my-5(:datos="datosSlyder")(data-aos='zoom-in-up')
    #t_1_1.titulo-segundo(data-aos='fade-right')
      h2 1.1 Qué son los perfiles digitales (públicos y privados)
    br
    br
    .my-5
      .contenedor.bg--2-claro-2.p-5.my-5
        .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
        .row.justify-content-start
          .col-xl-8
            .texto
              p.h1.fw-normal
                b ¿Conoces qué son los perfiles digitales y el impacto que estos tienen para tu vida? 

        .contenedor-img__2: img(src='@/assets/curso/8.png', alt='Texto que describa la imagen' style='width: 337px')
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="La presencia digital en el mundo ").p-5
        h4 La presencia en el mundo digital 
        p Tener presencia en el mundo o en la era digital a la cual te enfrentas hoy en día, y, más aún, poder crear valor frente aquello que se te presenta responde a una serie de características propias y sociales, que van desde cómo te comportas en dicho mundo, diciendo quién eres, e igualmente, cómo quieres que te vean, y por último, y más importante aún, cómo te ven. Estos aspectos hacen que se generen modelos y patrones que interfieren en tus rasgos digitales.
      .tarjeta.bg--1-claro.p-4(titulo="Consumo de contenidos digitales").p-5
        h4 Consumo de contenidos digitales
        p El consumo de todos los contenidos que se te presentan con las plataformas digitales, desde redes sociales, buscadores, sitios o portales #[em web, apps] móviles, videoconferencias, entre otras, va generando datos intrínsecos, que hacen dejar huella de tu información y así crear un perfil digital, sin saberlo, de forma inconsciente. Es por ello que es importante que estés consciente de qué se trata y cómo gestionarlo, para evitar riesgos y amenazas.
      .tarjeta.bg--1-claro.p-4(titulo="Transformaciones digitales").p-5
        h4 Transformaciones digitales
        p Las diversas oportunidades que se presentan con las transformaciones digitales son una prioridad en muchos gobiernos; y siendo parte de la sociedad actual, logran que todos los servicios de estas herramientas lleguen a muchas más personas y sean accesibles desde cualquier lugar y momento, lo que supone muchos desafíos, haciendo que personas, empresas, instituciones y el mismo Gobierno deban poseer una identidad digital definida que abra las posibilidades a nuevas oportunidades.
      .tarjeta.bg--1-claro.p-4(titulo="Intimidad de la información").p-5
        h4 Intimidad de la información
        p Los nuevos ciudadanos digitales, o llamados internautas, adquieren nuevos comportamientos sobre la privacidad, ya que se ve afectada, de cierta forma, la intimidad de la información, debido a la tendencia marcada a querer compartir todo, ya sea con tu permiso o no, todos tus datos, con empresas y tus contactos.
    p.mb-5 Y ahora, conoce sobre las dimensiones que se tiene entre lo público y lo privado de los perfiles digitales.
    .row.g-0.justify-content-center.mb-5
      .col-lg-5
        .mb-5
          table.tabla_personalizada
            thead
              tr
                th.bg--3                   
                  img(src='@/assets/curso/9.svg', alt='Texto que describa la imagen' style='width: 105px').m-auto
                  h3.mt-3.mb-0.text-white PÚBLICO
            tbody
              tr
                td Ciudadano, empleado.
              tr
                td Formal, especializado.
              tr
                td Interacción impersonal, masiva.
              tr
                td Impuesta.
              tr
                td Información común y compartida.
              tr
                td Contenido objetivo.
              tr
                td Espacios sociales comunes, empresariales.
                

      .col-lg-5
        .mb-5
          table.tabla_personalizada2
            thead
              tr
                th.bg--4 
                  img(src='@/assets/curso/10.svg', alt='Texto que describa la imagen' style='width: 105px').m-auto
                  h3.mt-3.mb-0 PRIVADO
            tbody
              tr
                td Persona, individuo.
              tr
                td Específico, personal.
              tr
                td Interacción estrecha (amigos, familia, intimidad)
              tr
                td Libre.
              tr
                td Información y comunicación afectiva y confidencial.
              tr
                td Contenido subjetivo.
              tr
                td Espacios cerrados, personales.


    #t_1_2.titulo-segundo(data-aos='fade-right')
      h2 1.2 Tipos de perfiles digitales 
    .contenedor.bg--4-claro.p-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__3: img(src='@/assets/curso/11.svg', alt='Texto que describa la imagen' style='width: 295px')
      .row.justify-content-end
        .col-xl-9
          .texto
            p.h1.fw-normal 
              b ¿Sabías qué la información en la red es conocida de forma personal y directa, haciendo esto una visión de identidad pública? 
            

    .fondo-1
      .row 
        .col-lg-7
          h4 Perfil digital público
          p Se crean para compartir todo tipo de información y están abiertos a todo tipo de personas o usuarios digitales, los cuales pueden ser consultados por cualquier individuo, organización o gobierno, y la configuración de la privacidad depende del gestor de la cuenta, al igual que lo que tú publiques en ellos dependerá de las políticas de seguridad. 

          h4 Perfil digital privado
          p Dentro de los perfiles digitales privados, se puede inferir que son aquellos que se categorizan o sectorizan en comunidades cerradas con fines comunes, ya sean académicos, científicos, personales o sociales; este tipo de perfiles es utilizado para poder llegar a usuarios digitales con características afines y propias, y su contenido digital es dirigido a un grupo de personas que poseen los permisos suficientes para poder observar la información. 

        .col-lg-5
          figure.mb-5(data-aos='zoom-in-up')
            img(src='@/assets/curso/fondo-img-1.svg', alt='')



    p.mb-5 Ahora analiza, 
      b ¿en qué tipo de perfil se encuentran tus fotos, videos, historiales de navegación, huellas de correo electrónico, direcciones, gustos, costumbres, aficiones y hasta fotos íntimas, en plataformas supuestamente cerradas?
      br
      br
      |Teniendo clara la diferencia entre perfil digital público y privado, se debe tener presente que las personas y empresas utilizan diferentes tipos de perfiles digitales, dependiendo de las necesidades que tienen. Por ejemplo:
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-5(data-aos='zoom-in-up')
          img(src='@/assets/curso/13.svg', alt='Diferencias de los perfiles')
    p.mb-5 Hoy en día, todos tienen una identidad digital. Con la aparición de los dispositivos móviles y el uso masivo de los mismos, dejas rastros de información personal en todo momento; por lo tanto, es necesario desarrollar algunas habilidades digitales que debe tener el ciudadano del siglo XXI, las cuales se requieren apropiar con una actitud:
    .row.mb-5.justify-content-center
      .col-lg-6
        .row.justify-content-center.g-5
          .col-lg-3.hover
            figure.figure.d-flex.m-auto
              img(src='@/assets/curso/14.svg').mb-2.m-auto
            h4.text-center Activa
          .col-lg-3.hover
            figure.figure.d-flex.m-auto
              img(src='@/assets/curso/15.svg').mb-2
            h4.text-center Participativa
          .col-lg-3.hover
            figure.figure.d-flex.m-auto
              img(src='@/assets/curso/16.svg').mb-2.m-auto
            h4.text-center Abierta
          .col-lg-3.hover
            figure.figure.d-flex.m-auto
              img(src='@/assets/curso/17.svg').mb-2.m-auto
            h4.text-center Colaborativa
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.bg--3-claro.p-4.mb-4
          .h5 Recuerda:
          p No necesariamente tu identidad en los medios digitales debe de corresponder a tu realidad, pero es consecuente con todas las actividades que realizas tanto en tu vida personal como en la digital.
    //.row.g-0.mb-5
      .col-lg-4(data-aos='fade-right')
    //.bg--1-claro.p-5.mb-4
    p.my-4 Según Georges (2010), en su libro <i>Identités virtuelles: les profils utilisateurs du</i> web 2.0 (Identidades virtuales: los perfiles utilizados en la Web 2.0), presume que una identidad digital está constituida por diferentes tipos de datos, independientemente de si los usuarios tienen o no la intención de publicarlos, lo que da realmente lugar a una clasificación que es la identidad declarada (que se compone de la información que un individuo hace de dominio público), la identidad actuante (son las acciones que se llevan a cabo), y por otra parte la identidad calculada o inferida (determinada por la analítica de datos de lo que se publica); es así como  toda información puede ser utilizada para hacerse una idea de quién es y qué le gusta a un individuo que usa los medios digitales.

      //.col-lg-8(data-aos='fade-left')
        .ps-3
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1. 
      span Identidad digital  
    img.mb-4(src='@/assets/curso/18b.svg', alt='Imagen que representa gráficamente, la identidad cultural.')
    
    p.mb-5 La configuración de la identidad digital de una persona, organización o cualquier participante de las nuevas herramientas digitales de colaboración y participación se cataloga como:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3
        .tarjeta.bg--2-claro.p-4.mb-4.h-100.hover
          img(src='@/assets/curso/19.svg', alt='Texto que describa la imagen' style='width: 67px').mb-3
          .h4 Identidad individual o personal
          p Identidad individual o personal es aquella que tiene variables personales que identifican a una persona, tales como su nombre, sus apellidos, sexo, altura, su número de identificación, sus credenciales bancarias, fecha de nacimiento, entre otras particulares, así como los sitios que frecuentemente visita, como indicador social del tejido de una comunidad.
      .col-lg-3.mb-3
        .tarjeta.bg--2-claro.p-4.mb-4.h-100.hover
          img(src='@/assets/curso/20.svg', alt='Texto que describa la imagen' style='width: 67px').mb-3
          .h4 Comportamiento
          p Se deriva de lo que haces frecuentemente en Internet, tus historiales de navegación, geolocalización, transacciones financieras, compras, ventas, accesos a plataformas, datos de <i>call center</i>, entre otros.
      .col-lg-3.mb-3
        .tarjeta.bg--2-claro.p-4.mb-4.h-100.hover
          img(src='@/assets/curso/21.svg', alt='Texto que describa la imagen' style='width: 67px').mb-3
          .h4 Derivados o calculados
          p Son las variables que se toman para realizar analítica de datos de los rastros digitales que dejas en la red, esto hace que se formen perfiles de tus gustos, pasatiempos o preferencias, tales como tus movimientos en datacrédito, para valorar cómo es tu comportamiento.
      .col-lg-3.mb-3
        .tarjeta.bg--2-claro.p-4.mb-4.h-100.hover
          img(src='@/assets/curso/22.svg', alt='Texto que describa la imagen' style='width: 67px').mb-3
          .h4 Propios
          p Son los que generas cuando interactúas en las diversas plataformas, un #[em like] o me gusta, las suscripciones, las opiniones que dejas en foros o grupos, valoraciones digitales de productos o servicios. Esto brinda un perfil de consumo de servicios que configura tu identidad y puede ser recopilado y analizado para determinar patrones de comportamiento.
    p.mb-5 Por ende, desde este modelo planteado por Fanny Georges, un individuo, una organización o cualquier participante activo de Internet puede tener diferentes identidades con las características propias de su comportamiento.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p La construcción de una identidad puede verse desde las participaciones activas positivas o desacertadas de cómo te comportas en la red, y dichos patrones se verán reflejados en tu reputación y la privacidad de tu información, que, gestionados de manera efectiva, desarrollan habilidades y conciencia del impacto que tiene la información que se publica sobre ti para minimizar en todo lo posible los riesgos y amenazas.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2. 
      span Reputación digital

    figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/23.svg', alt='Imagen que presenta la reputación digital.')

    #t_1_3.titulo-segundo(data-aos='fade-right')
      h2 1.3 Elementos de la identidad digital
    .contenedor.bg--1-claro.p-5.my-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__4: img(src='@/assets/curso/24.svg', alt='Texto que describa la imagen' style='width: 295px')
      .row.justify-content-end
        .col-xl-9
          .texto
            p.h1.fw-normal ¿Sabes que existen muchos elementos con los cuales puedes construir tu identidad digital en las diferentes plataformas comunicativas y colaborativas? 
            .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A2.mp3' type='audio/wav')
                  |  Your browser does not support the audio tag.
    .row.justify-content-end.mb-5
      .col-lg-8
        p.mb-3 Estos elementos son:
        .contenedor-lista-numerada
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 1
            .lista-numerada__texto.ms-2
              p.mb-0 Nombres y apellidos (pueden ser los reales o un seudónimo que te caracteriza).
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 2
            .lista-numerada__texto.ms-2
              p.mb-0 Imagen de perfil (normalmente es una foto o un avatar).
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 3
            .lista-numerada__texto.ms-2
              p.mb-0 Correo electrónico.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 4
            .lista-numerada__texto.ms-2
              p.mb-0 Fotografías, videos, sonidos.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 5
            .lista-numerada__texto.ms-2
              p.mb-0 Datos de contacto.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 6
            .lista-numerada__texto.ms-2
              p.mb-0 Información personal y laboral.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 7 
            .lista-numerada__texto.ms-2
              p.mb-0 Información académica.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 8
            .lista-numerada__texto.ms-2
              p.mb-0 Pasatiempos y aficiones.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 9
            .lista-numerada__texto.ms-2
              p.mb-0 Preferencias políticas, religiosas o sexuales.
          .lista-numerada.d-flex.align-items-center.mb-2
            .lista-numerada__numero.p-4
              h2.text-white.mb-0 10
            .lista-numerada__texto.ms-2
              p.mb-0 Geolocalización. 
    p.mb-5 Igualmente, además de la información que entregas en los medios digitales, ten en cuenta que hay <b>datos inherentes y subjetivos que hacen y forman parte de tu presencia digital en la red</b>, como:
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span a
          | Cuántos contactos tienes y hacen parte de tu red.
        li 
          .lista-ol--cuadro__vineta
            span b
          | Qué tipo de personas son.
        li 
          .lista-ol--cuadro__vineta
            span c
          | Cuál es tu vínculo y cómo interactúas con todos ellos (cómo aportas y qué te aportan).
        li 
          .lista-ol--cuadro__vineta
            span d
          | Hasta un comentario puede ser crucial a la hora de hacer identidad digital.
    p.mb-5 Todo esto debido a que, en la sociedad de la información, todo es valorado positiva o negativamente, independientemente de los roles que ejerzas.
    p A continuación, en la siguiente gráfica, se presentan algunos roles valorados por las empresas y que pueden ser de tu interés y colaboración en el entorno social que te desenvuelves.

    h4(data-aos='fade-right').mb-5 Perfiles digitales para las empresas

    .row.my-3
      .col-lg-4.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/25.svg' alt='AvatarTop')
          .mt-5
            h3.fst-italic Data Science
            p.mb-0 Resuelve problemas a partir del análisis de datos. 
              br
              |Son profesionales con curiosidad y capacidad de análisis.
      .col-lg-4.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/26.svg' alt='AvatarTop')
          .mt-5
            h3 Arquitecto
              br
              |<i>Big Data</i>
            p.mb-0 Gestiona, procesa y almacena datos que se generan en Internet. Son profesionales arquitectos, analistas y desarrolladores. 
      .col-lg-4.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/27.svg' alt='AvatarTop')
          .mt-5
            h3 Especialista en SEO
            p.mb-0 Impulsa sitios (em="", web="")  en Internet y analiza la competencia. Son profesionales que identifican objetivos, mercado nicho y palabras clave.
    .row.my-3
      .col-lg-4.margin-bottom.margin-top
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/28.svg' alt='AvatarTop')
          .mt-5
            h3 Experto en
              br
              |analítica <i>web</i> 
            p.mb-0 Mide, recopila y analiza datos que produce la #[em web]. Son ingenieros, matemáticos y estadísticos con manejo de herramientas #[em web.]
      .col-lg-4.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/29.svg' alt='AvatarTop')
          .mt-5
            h3 Editor de
              br
              |contenidos
            p.mb-0 Documenta y sigue las novedades de su nicho de mercado para generar contenidos. Son profesionales capaces de identificar objetivos, mercado nicho y palabras clave.
      .col-lg-4.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/30.svg' alt='AvatarTop')
          .mt-5
            h3.fst-italic Community manager 
            p.mb-0 Experto en RRSS, conoce la empresa, sus objetivos, clientes y productos. Son profesionales que acercan a la compañía a la sociedad, generando debates y respondiendo a problematizaciones de los clientes.
      .col-lg-12.margin-bottom
        .tarjeta-avatar.borde-1.py-5.px-3.h-100
          .avatar-1
            img(src='@/assets/curso/31.svg' alt='AvatarTop')
          .mt-5
            h3 Director de <i>marketing</i> 
            p.mb-0 Crea campañas de promoción de productos y servicios. Tiene dominio de varios idiomas. Tiene gran conocimiento de todos los medios y canales digitales.
    #t_1_4.titulo-segundo(data-aos='fade-right')
      h2 1.4 Tipos de identidad digital
    
    .contenedor.bg--2-claro-2.p-5.my-5
      .contenedor-img__5: img(src='@/assets/curso/32.svg', alt='Texto que describa la imagen' style='width: 400px')
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .row.justify-content-end
        .col-xl-7
          .texto
            p.h1.fw-normal.mb-5 ¿Sabes por qué es importante conocer los tipos de identidad digital? 
            .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A7.mp3' type='audio/wav')
                  |  Your browser does not support the audio tag.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.p-5.d-flex
            img(src="@/assets/curso/33.svg" style="width: 277px").m-auto
          .bloque-texto-g__texto.p-4
            p.mb-0
              b  Antes de entrar a mirar los tipos de identidad que existen en el mundo digital, es importante que conozcas que las experiencias <i>online</i> de cada uno de los usuarios son diferentes y toman actitudes propias evaluadas desde su comportamiento en la red, desde la hiperactividad en todos sus servicios hasta incluso la ausencia total de participación. Como sabes, las interacciones digitales son cada vez más rápidas e inmersivas, este tipo de comunicaciones se hacen cada vez más masivas, y las conexiones síncronas son más frecuentes y enriquecedoras, porque el estar en tiempo real, no solo en voz sino en audio y video, hace que la experiencia sea mucho más atractiva e incluso adictiva.
    p.mb-5 La identidad digital ofrece muchas más posibilidades para interactuar con más elementos que se parecen a la realidad tangible de interrelacionarse, debido a que puedes saber qué piensan, sienten, hacen o creen las personas con las que te relacionas, y ello contribuye, sin lugar a dudas, a construir y poder configurar tu propia identidad digital e, igualmente, la colectiva, dentro de un grupo social, a pesar de que dicha identidad puede ser inexacta, debido paradójicamente a la gran cantidad de información. Las características de la identidad digital son:
    .row.mb-5.justify-content-center
      .col-lg-10
        #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
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
          .carousel-inner.bg--2-claro-2.py-5
            .carousel-item.active
              .row
                .col-lg-4: img(src='@/assets/curso/34.jpg')
                .col-lg-8
                  h4 Social
                  p Característica de poder interactuar con otra persona o grupo social de personas.

            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/35.jpg')
                .col-lg-8
                  h4 Subjetiva
                  p Cada persona percibe a los demás desde su punto de vista, no existe un patrón concreto. 
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/36.jpg')
                .col-lg-8
                  h4 Referencial
                  p Sirve de referencia para los demás usuarios y su comportamiento en la red.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/37.jpg')
                .col-lg-8
                  h4 Crítica
                  p La información personal es sensible y puede ser manipulada por terceros, lo que implica riesgos para las personas.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/38.jpg')
                .col-lg-8
                  h4 Compuesta
                  p Viene dada por diferentes elementos que pueden ser intrínsecos o procedentes de la sociedad digital.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/39.jpg')
                .col-lg-8
                  h4 Dinámica
                  p Es flexible y cambiante, siempre están apareciendo nuevos componentes.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/40.jpg')
                .col-lg-8
                  h4 Contextual
                  p Depende de los contextos sociales en que se desenvuelven las personas, son los perfiles que realice y comparta con los demás.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/41.jpg')
                .col-lg-8
                  h4 Accesible y ordenada cronológicamente
                  p La información sobre los usuarios se conserva en el tiempo y puede ser consultada de forma permanente. Así esta sea borrada por quien la originó, esta puede permanecer, ya que fue compartida por otros y siempre quedan huellas y rastros digitales.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/42.jpg')
                .col-lg-8
                  h4 Inexacta
                  p La identificación de un perfil siempre tiene errores, además de que no puede pertenecer a la realidad.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/43.jpg')
                .col-lg-8
                  h4 Es indirecta
                  p Todo lo que se publique o publique alguien, generalmente, es por referencias y comentarios.
            .carousel-item
              .row
                .col-lg-4: img(src='@/assets/curso/44.jpg')
                .col-lg-8
                  h4 Es compuesta
                  p La identidad digital se constituye por el conjunto de aportes de la persona y de los demás que están inmersos como contactos, sin la participación o consentimiento de quien publica una información.

          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .contenedor.bg--2-claro-2.p-5.my-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__5: img(src='@/assets/curso/45.svg', alt='Texto que describa la imagen' style='width: 370px')
      .row.justify-content-end
        .col-xl-8
          .texto
            p.h1.fw-normal.mb-5 
              b ¿Sabes que la identidad digital tiene diferentes tipos y que estos posibilitan su integración en los ámbitos profesionales y sociales? 

    TabsD.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Personal o social" :icono="require('@/assets/curso/34.svg')" :icono2="require('@/assets/curso/35.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Personal o social
            p Es la identidad digital que normalmente encuentras en redes sociales o plataformas comunicativas y colaborativas. Se usa para poder compartir información personal con tus amigos o contactos. Puede aplicar para perfiles públicos o privados. Se genera en espacios donde convergen todo tipo de personas, como Facebook, Twitter, Pinterest y otros tipos de redes. Existe para intercambiar información de intereses comunes, desde el ocio hasta información profesional o científica.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/47.svg')
      .py-4.py-md-5(titulo="Legal" :icono="require('@/assets/curso/36.svg')" :icono2="require('@/assets/curso/37.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Legal
            p La identidad legal que tú puedes tener dentro de los medios digitales contiene todo tipo de información con tu comportamiento como ente activo de una sociedad. Contenidos en bases de datos bancarias y transacciones financieras; es la información sensible que registras en plataformas normalmente seguras, dedicadas a registrar tus movimientos digitales importantes. Como ejemplo, se pueden tomar antecedentes disciplinarios, bancarios, fiscales y policiales. Normalmente, son regulados y controlados por entes gubernamentales que, por medio de leyes y normas, protegen tu privacidad e integridad.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/48.jpg')
      .py-4.py-md-5(titulo="Ficticia" :icono="require('@/assets/curso/38.svg')" :icono2="require('@/assets/curso/39.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Ficticia
            p Puede sonar a ilegal o delincuencial, pero no es así. Aunque es la modalidad que usan los <i>hackers</i> y delincuentes informáticos, no es solo propia de estos, también se puede utilizar en contextos culturales y artísticos, bajo seudónimos que protegen la información real. Se comparte información por medio de perfiles que representan de manera onírica o fantástica la realidad de los usuarios que los crean; aunque no se desconoce que es la práctica más frecuente de los ciberdelincuentes.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/49.jpg')
      .py-4.py-md-5(titulo="Organizacional / Empresarial" :icono="require('@/assets/curso/40.svg')" :icono2="require('@/assets/curso/41.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Organizacional / Empresarial
            p Este tipo de perfiles es muy utilizado para promocionar productos y servicios, generando vínculos comerciales con los usuarios. La identidad digital propia de las organizaciones hace que tengan cabida en el mundo digital del día de hoy, está presente en todas las plataformas digitales y su uso está centrado en potenciar la experiencia de usuario y el consumismo digital.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/50.jpg')
      .py-4.py-md-5(titulo="Gubernamental " :icono="require('@/assets/curso/42.svg')" :icono2="require('@/assets/curso/43.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Gubernamental 
            p Las políticas públicas y la inmersión en el mundo digital han transformado las formas de democracia y gobernabilidad. La identidad digital no es ajena a situaciones políticas propias de la transformación digital del siglo XXI, donde los e-Gobiernos ponen a tu disposición múltiples plataformas donde convergen los trámites públicos, tales como servicios al ciudadano, como lo tiene el mismo SENA y las demás entidades públicas.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/51.jpg')
      .py-4.py-md-5(titulo="Real" :icono="require('@/assets/curso/44.svg')" :icono2="require('@/assets/curso/46.svg'  )" )
        .row.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Real
            p Se la asocia a la presencialidad, pero es de las más complejas, ya que es la convergencia de todas las anteriores, que logran realmente la creación, construcción y gestión de tu identidad personal.
          .col-md-6.mb-4.mb-md-0: img(src='@/assets/curso/52.jpg')
    #t_1_5.titulo-segundo(data-aos='fade-right')
      h2 1.5 Uso y consumo de contenidos
    .contenedor.bg--2-claro-2.p-5.my-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__6: img(src='@/assets/curso/53.svg', alt='Texto que describa la imagen' style='width: 240px')
      .row.justify-content-end
        .col-xl-7
          .texto
            p.h1.fw-normal.mb-5 ¿Conoces sobre los usos y el consumo de los contenidos digitales? 
            .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A6.mp3' type='audio/wav')
                  |  Your browser does not support the audio tag.
    p.mb-5 Estos contenidos pueden ser variados, debido a la gran influencia de los medios digitales que encuentras en el mundo virtual y digital. La identidad se puede determinar, de muchas maneras, teniendo en cuenta los contenidos, cómo los consumes y la frecuencia con que lo haces, que son los factores determinantes para analizar tus comportamientos digitales. A continuación, podrás profundizar un poco más sobre el tema.
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Redes sociales")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/54.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Redes sociales
            p El uso de estas plataformas de comunicación y colaboración ha tomado mucho auge en el mundo digital. Es una de las mejores formas para poder tener tu propia identidad digital, ya que puedes crear perfiles y compartir todo tipo de información (fotos, videos, etc.). Muchas plataformas permiten configurar tu privacidad y solo mostrar lo que tú quieras, pero esto no hace que sus datos estén totalmente protegidos, ya que depende de ti cómo compartas y divulgues tus datos ante los demás contactos, y estos pueden hacer lo mismo.
      .py-3.py-md-4(titulo="#[em Blogs]")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/55.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 #[em Blogs]
            p Este contenido es tipo diario o bitácora. Muchos usuarios comparten información cronológica, no solo en el ámbito personal, sino profesional y empresarial. Este consumo de servicios se alterna con otros para poder dar más soporte a tu identidad personal, como un aliado estratégico a la hora de comunicar y compartir información. Su nombre proviene de los barcos navíos que llevaban un registro de lo que aconteció durante la navegación, registrando día a día lo que sucedía. Por esta razón, su estructura funcional radica en fechas, entradas y <i>posts</i>.
      .py-3.py-md-4(titulo="Portales de noticias y sitios <i>web</i>")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/56.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Portales de noticias y sitios <i>web</i>
            p Todos los documentos electrónicos que visitas en la red pueden generar una identidad digital. A través de las suscripciones, entregas datos personales, que pueden ser recuperados para observar tu comportamiento; luego, buscadores como Google o Bing los indexan y te presentan contenido, según tu preferencia, para que lo consumas, desde artículos, productos y servicios, hasta tu música favorita.
      .py-3.py-md-4(titulo="Correo electrónico")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/57.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Correo electrónico
            p Esta forma de comunicarte en línea ha transformado cualquier límite o frontera, y es tal vez lo que usas con más frecuencia y donde más compartes información. Es por ello que frecuentemente recibes mensajes y notificaciones en tu buzón, advirtiendo una promoción o lo que te gusta, ya que los bots, o recopiladores de información, se entregan a proveedores para que te realicen estas alertas; hasta puedes personalizar qué te llega o qué no, incluso cuando el acceso se haga con un usuario y una contraseña, a través de la analítica de datos y la ingeniería social. Con un solo clic y un mensaje, ya tu identidad se empieza a marcar más y más.
      .py-3.py-md-4(titulo="Textos, fotos o videos y repositorios")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/58.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Textos, fotos o videos y repositorios
            p El consumo masivo de información en portales de entretenimiento, ocio y trabajo es impresionante; existen portales de almacenamiento donde puedes recuperar todo tipo de datos, desde gratuitos hasta los llamados #[em premium] o pagos. Los formularios de registro, a través de la solicitud de información que poseen, analizan lo que hayas consignado para sugerirte qué necesitas mientras estás navegando en ellos.
      .py-3.py-md-4(titulo="Videojuegos")
        .row.px-5
          .col-md-5
            figure
              img(src='@/assets/curso/59.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Video juegos
            p Este segmento ha tomado fuerza en los últimos años. Los diferentes sectores socioeconómicos realizan su consumo desde niños hasta adultos; la gran mayoría de plataformas es de pago y la percepción de usuarios cambia en las diferentes esferas del tejido social y cultural.
    p.mb-5 El consumo de contenidos digitales ha sido un pilar del sector económico en todo el mundo, millones y millones de datos están disponibles para todo tipo de usuarios, su frecuencia de consumo va en crecimiento, y está presente en el ámbito laboral, familiar, personal, profesional y empresarial.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.d-flex
            img(src="@/assets/curso/60.svg" style="width: 272px").m-auto
          .bloque-texto-g__texto.p-4
            p.mb-0
              b  Se debe potenciar el uso de dispositivos móviles, convirtiéndolos en tus mejores compañeros de viaje, de trabajo, de cómo te relacionas, de cómo verdaderamente ha cambiado la forma como haces presencia ante los demás, y es así como hoy en día ves más gente sobre una pantalla que teniendo relaciones interpersonales, lo que sin lugar a dudas constituye un fenómeno social imparable.
    #t_1_6.titulo-segundo(data-aos='fade-right')
      h2 1.6 Leyes y tratamiento de datos
    .contenedor.bg--2-claro-2.p-5.mb-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__7: img(src='@/assets/curso/61.svg', alt='Texto que describa la imagen' style='width: 230px')
      .row.justify-content-end
        .col-xl-9
          .texto
            p.h1.fw-normal.mb-5 ¿Sabías que los datos personales se refieren a toda la información que identifique a un individuo o persona?  
    p.my-5 Estos datos hacen referencia a tu número de identificación, dónde naciste, tu edad, sexo, estado civil, qué has estudiado, dónde trabajas, e incluso mucha información sensible que solo te compete a ti, como tus preferencias sexuales, tu personalidad, cómo has estado de salud últimamente, qué religión profesas, entre otra, e innumerables características que hacen tu “YO”. Hay que tener presente que no todos los datos pueden ser compartidos; además, se requiere de tu autorización para que puedan ser utilizados.
    .borders.py-3.mb-5
      .row.mb-5.justify-content-between.align-items-center
        .col-xl-6.mb-5
          .bloque-texto-b.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-4 “El buen nombre es la joya más grande del hombre. Quién me roba la bolsa, me roba una basura; pero el que me hurta mi buen nombre, me arrebata una cosa que no le enriquece y me deja pobre en verdad”.
              br
              br
              p.text-end William Shakespeare
              i.fas.fa-quote-right
        .col-xl-6
          p
            b Cuánta razón tenía Shakespeare cuando escribió esta frase tan célebre y que, en el mundo digital, es tan aplicable. Sin embargo, tú vas entregando todos tus datos personales a cualquiera, sin comprender cuánto daño pueden hacerte. Es por ello que, al crear tu identidad digital, es necesario que la estructures y analices dónde entregas tus datos personales; para ello, debes apropiar conocimientos sobre cada uno de los datos que existen, para que te detengas a pensar con calma la próxima vez que ingreses tu información en la red.
    p.mb-5 Cabe resaltar que la información que entregas es necesaria para que puedas interactuar con los demás, como ser social y perteneciente a una comunidad, es lo que te individualiza como persona frente al resto de la sociedad; esto hace que la información sea necesaria para construir el desarrollo económico de un país y  que “existas”, para poder ejercer tanto tus derechos como tus deberes. Debes, por lo tanto, entender qué tipos de datos existen:
    .row.mb-5
      .col-lg-3.mb-4
        .tarjeta.tarjeta--hover.bg--3.p-4.h-100.hover
          .img--hover
            img(src='@/assets/curso/100.svg', alt='Texto que describa la imagen')
          .contenido
            h4 Dato público
            p Son los que puedes entregar a una persona, organización o entidad, ya sea pública o privada, para poder identificarte, y están enmarcados en la ley bajo la protección de la Constitución Política
      .col-lg-3.mb-4
        .tarjeta.tarjeta--hover.bg--3.p-4.h-100.hover
          .img--hover
            img(src='@/assets/curso/101.svg', alt='Texto que describa la imagen')

          .contenido
            h4 Dato semiprivado
            p Son aquellos que puedes entregar en un grupo de personas y que están destinados con fines sociales, no son íntimos o reservados ni públicos.
      .col-lg-3.mb-4
        .tarjeta.tarjeta--hover.bg--3.p-4.h-100.hover
          .img--hover
            img(src='@/assets/curso/102.svg', alt='Texto que describa la imagen')
          .contenido
            h4 Dato privado
            p Son los datos que solo te pertenecen a ti, y tú decides si entregarlos o no. Son de naturaleza reservada y solo pueden interesar en grupos muy cerrados.
      .col-lg-3.mb-4
        .tarjeta.tarjeta--hover.bg--3.p-4.h-100.hover
          .img--hover
            img(src='@/assets/curso/103.svg', alt='Texto que describa la imagen')
          .contenido
            h4 Dato sensible
            p El de mayor cuidado. Hacen parte de tu personalidad muy íntima, y tu salud mental y psicológica puede verse afectada si son manipulados por terceros con malas intenciones.
    p.mb-5 En Colombia existe la Ley 1581 de 2012, por la cual se rigen todas las disposiciones para la protección de datos personales, se invita a que la revises para que puedas saber cómo el estado te protege y para que no sean vulnerados tus derechos, de igual manera, para que puedas cumplir tus deberes como un buen ciudadano. A veces pensamos que, en Internet, <b>“todo se vale”</b>, pero no, los países han reglado y dictado normas para el buen uso de la información personal y sensible, asimismo, existen normas de comportamiento propias de los medios digitales, como la <b>netiqueta</b>.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.d-flex
            img(src="@/assets/curso/62.svg" style="width: 272px").m-auto
          .bloque-texto-g__texto.p-4
            p.mb-0
              b La netiqueta son las normas de comportamiento en Internet. Todo acto de comunicación debe tener sus normas, hacen parte de la “buena educación” que debes tener cuando interactúas con un individuo o un grupo de personas en la red, sobre todo, de forma escrita, la cual puede ser entendida, interpretada o malinterpretada, ya que la oralidad tiene ciertas características que permiten vislumbrar mejor los procesos comunicativos. Debes tener en cuenta que las palabras son la mejor arma del ser humano, y aquí aprenderás cuáles son las normas para poder comunicarte en todo medio digital.
    .contenedor.bg--4-claro.p-5.mb-5
      .avatar: img(src='@/assets/curso/avatar1.svg', alt='Texto que describa la imagen' style='width: 582px')
      .contenedor-img__8: img(src='@/assets/curso/63.svg', alt='Texto que describa la imagen' style='width: 293px')
      .row.justify-content-end
        .col-xl-9
          .texto
            p.h1.fw-normal.mb-5 ¿Sabías que para comunicarte de manera adecuada en la red debes seguir las siguientes reglas?
            .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A5.mp3' type='audio/wav')
                  |  Your browser does not support the audio tag.
    h3(data-aos='fade-right') Netiqueta comportamiento en la web
    .tarjeta.bg--3-claro-2.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row(titulo="1")
          .col-md-4
            figure
              img(src='@/assets/curso/64.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Ten cuidado con lo que escribes, puedes herir los sentimientos de la persona que lea tu comentario o publicación. Recuerda que del otro lado de la pantalla hay otra persona.
        .row(titulo="2")
          .col-md-4
            figure
              img(src='@/assets/curso/65.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p La vida digital es muy parecida a tu vida real, tu buena educación depende de cómo te comportas en la vida real.
        .row(titulo="3")
          .col-md-4
            figure
              img(src='@/assets/curso/66.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Evita al máximo escribir con mayúsculas sostenidas. En el mundo digital, se entiende como gritos o enojo, además, su lectura es más difícil.
        .row(titulo="4")
          .col-md-4
            figure
              img(src='@/assets/curso/67.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Respeta el tiempo y el ancho de banda de otras personas.
        .row(titulo="5")
          .col-md-4
            figure
              img(src='@/assets/curso/68.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Demuestra tu buena educación en todo momento que estés conectado.
        .row(titulo="6")
          .col-md-4
            figure
              img(src='@/assets/curso/69.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Comparte tus conocimientos con la comunidad.
        .row(titulo="7")
          .col-md-4
            figure
              img(src='@/assets/curso/70.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Colabora con ambientes sanos, colaborativos y educativos cuando existan debates o discusiones.
        .row(titulo="8")
          .col-md-4
            figure
              img(src='@/assets/curso/71.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Respeta la privacidad de los demás, tal cual como lo haces en la vida real.
        .row(titulo="9")
          .col-md-4
            figure
              img(src='@/assets/curso/72.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p No abuses de tu poder o de las ventajas que puedas tener.
        .row(titulo="10")
          .col-md-4
            figure
              img(src='@/assets/curso/73.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            p Excusa los errores de otros usuarios digitales. Como el ser humano que eres, debes comprender que se cometen errores, así como te gustaría que te comprendieran a ti.
    #t_1_7.titulo-segundo(data-aos='fade-right')
      h2 1.7 Uso ético de la información digital
    p.mb-5 La adopción de las TIC y su uso hacen parte de tu diario vivir, en todas las esferas sociales; por lo tanto, debes tener en cuenta que la ética debe jugar un papel importante. En este componente, se plantea una tríada entre Tecnología – Valores – Personas, donde intervienen algunos componentes como lo social, lo cultural, la justicia y las situaciones que se te presenten, y que conforman, en una sumatoria, un contexto ético de la información.
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p
            b Este contexto que se propone emerge de factores y retos que debes afrontar al pertenecer a la familia digital mundial, para poder manejar con la mayor entereza toda la información que encuentres, donde se redefine continuamente el intercambio rápido y eficiente de conocimiento e información, sin importar tiempo o lugar, como lo has visto dentro de estos contextos. 
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 3. 
      span Tríada en el contexto ético

    figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/74.svg', alt="Imagen que presenta la tríada en el contexto ético.")

    p.mb-4 Las personas, organizaciones y asociaciones públicas o privadas han tenido un crecimiento en respuesta a los nuevos mercados globalizados que hacen impulsar que el conocimiento sea público, y debes trasladar tu comportamiento a los medios digitales con responsabilidad y ética, para lo cual debes apropiar ciertos principios que te servirán para poder hacer uso de la información: 
    
    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span.text-white.text 1
        | Debe primar el bien común antes que el personal.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 2
        | Actuar con dignidad, lealtad y honestidad en cualquier ámbito digital.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 3
        | Tener integridad y solidaridad con las personas con las que interactúas.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 4
        | Apoyar y practicar los derechos de brindar y recibir información.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 5
        | Se debe transmitir información verdadera y exacta.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 6
        | Debes proteger la propiedad intelectual.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 7
        | No invadas los espacios íntimos de una persona en la red.
      li 
        .lista-ol--cuadro__vineta
          span.text-white 8
        | No hagas comentarios que dañen la reputación digital de una persona.
    
    //figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/75.svg')



</template>

<script>
import TabsD from '../components/TabsD.vue' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    TabsD, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El desarrollo de las nuevas tecnologías asociadas a la comunicación y el tratamiento de la información, de cierta manera, han trasladado tus actividades tradicionales a complementarlas con las digitales, haciendo que exista una nueva identidad digital en tus entornos sociales y tus relaciones con los demás, que se deriva de tu comportamiento en las diferentes plataformas que están a tu servicio.',
        imagen: require('@/assets/curso/2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Las plataformas digitales pueden ser analizadas a partir de la información que tu dejas en Internet, la cual puede ser tratada, organizada y almacenada en diferentes partes, para poder determinar quién eres y qué quieres. Es así como tu rastro queda registrado y este, a su vez, puede ser compartido; es allí donde debes ser consciente de cómo gestionar tu propia privacidad.',
        imagen: require('@/assets/curso/3.jpg'),
      },
      {
        titulo: '',
        texto:
          'En las nuevas esferas digitales que encuentras a tu servicio, la información, la privacidad y la seguridad van de la mano en la construcción de tu propia identidad digital. Estos aspectos son muy importantes cuando quieres hacer presencia en Internet, donde la gestión de tu privacidad debe ser el componente imperativo para poder tener una efectiva identidad digital.',
        imagen: require('@/assets/curso/4.jpg'),
      },
      {
        titulo: '',
        texto:
          'La construcción de la identidad es bastante compleja por su permanente construcción y evolución. La realidad del mundo digital impacta de manera directa y es un objeto de estudio que debes tener presente.',
        imagen: require('@/assets/curso/5.jpg'),
      },
      {
        titulo: '',
        texto:
          'Los avances tecnológicos de los cuales has sido testigo directo hacen que tu vida y actividades cotidianas estén inmersas en una realidad tecnológica que incursionó en tu día a día y llegó para quedarse, complementando e incorporando características propias. Los cambios han sido evidentes, desde cómo compras, cómo te diviertes, cómo te reúnes y te comunicas con los demás, hasta la forma en cómo las empresas han transformado sus estrategias y más cuando todo apunta a cómo las experiencias de usuario son un pilar fundamental en el desarrollo social, desde todos los puntos de vista.',
        imagen: require('@/assets/curso/6.jpg'),
      },
      {
        titulo: '',
        texto:
          'Tu actividad y cómo te comportas en los medios digitales van dejando rastros y huellas que configuran tu identidad digital. Ya sea de una forma consciente o inconsciente, forjas el cómo te miran los demás y cómo aportas al desarrollo integral del tejido social humano, en pro de tu propio desarrollo, así como el de tu entorno y todo lo que te rodea.',
        imagen: require('@/assets/curso/7.jpg'),
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

<style lang="sass" scoped>
.bloque-texto-b.color-primario:before
  background-color: #DCCCEC
.figure
  img
  width: 95px !important
  height: 95px !important
.contenedor-comillas
  position: relative
  .fas.fa-quote-left
    position: absolute
    top: -10px
    left: 10px
    color: $color-acento-contenido
    font-size: 45px
.recuadro-verde
  width: 60px
  height: 60px
  background-color: $color-acento-contenido
  margin-left: 10px
.contenedor-lista-numerada
  position: relative
  &:before
    content: ''
    position: absolute
    width: 7px
    height: 100%
    background-color: $color-acento-contenido
    top: 0
    left: 20px
    z-index: 0

  .lista-numerada
    .lista-numerada__numero
      z-index: 99
      width: 40px
      height: 40px
      background-color: $color-primario
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      margin-right: 10px
.lista-ol--cuadro__vineta
  color: $color-sistema-texto
  font-size: 20px
  font-weight: bold
  margin-right: 10px
.borde-1
  border: 3px solid $color-primario !important
  border-radius: 10px
.tarjeta-avatar
  position: relative
  .avatar-1
    position: absolute
    top: 0
    right: 0
    transform: translateY(-50%) translateX(-10%)
    img
      width: 191px
.margin-bottom
  margin-bottom: 120px
.bloque-texto-g__img
  left: auto
  right: 0
.bloque-texto-g
  justify-content: start
.carousel-inner
  padding-left: 100px
  padding-right: 100px
.carousel-control-next, .carousel-control-prev
  background-color: $color-acento-contenido
  width: 8%
  padding: 0px
.carousel-control-next-icon
  background-image: url(../assets/curso/next.svg)

.carousel-control-prev-icon
  background-image: url(../assets/curso/prev.svg)
.bloque-texto-g__img
  background-color: #E0DCE4
.bloque-texto-b__texto
  p
    margin-left: 200px
    font-weight: bold
.borders
  border-top: 2px solid $color-acento-contenido
  border-bottom: 2px solid $color-acento-contenido
.tarjeta--hover

  .contenido
    display: none
  &:hover
    .img--hover
      display: none
    .contenido
      display: block
</style>
