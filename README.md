
## ÍNDICE
* [1. Ecogram](#1-Ecogram )
* [2. Historia de Usuario](#2-historia-de-usuario)
* [3. Realización del Diseño](#3-realizacion-del-proyecto)
* [4. Tecnologías empleadas](#4-tecnologias-empleadas)
* [5. Fuentes](#5-fuentes)
* [6. Autores](#6-autores)

***

<div align="center">
<img src="/src/img/Logos/LogoG7.png" width="800">
</div>

# 1. Ecogram

♻️ **Ecogram** (Enveronmental Social Network) es una red social enfocada en crear una comunidad interesada en la preservación de nuestro único hogar "🌎El Planeta Tierra". Permite a cualquier usuario crearse una cuenta de acceso y loguearse con ella; crear, editar, borrar y "likear" publicacciones.

El objetivo principal de aprendizaje de este proyecto es construir una **Single-page Application** (SPA) responsive (con más de una vista / página) en la que podamos leer y escribir datos.

***

## 2. Historia de Usuario ✍🏼

### 🕵🏼 ¿Quienes son los principales usuarios?
Los principales usuarios del producto son aquellas personas interesadas en encontrar una comunidad enfocada en la preservación del medio ambiente.
### 🕵🏼‍♀️ ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
  - Buscar usuarios con intereses afines.
  - Poder publicar posts con información relevante sobre eventos, voluntariados o tips para el cuidado ambiental.
  - Poder dar "me gusta" a las publicaciones.
  - Poder Eliminar su publicaión.
  - Poder editar su información personal que muestra en el perfil.

### 🕵🏽‍♂️ ¿Cuáles son los secciones más relevantes que quieren ver en la interfaz y por qué?
Según algunas encuestas que realizamos, los usuarios están interesados en ver:
- Un muro para visualizar las publicaciones de todos los usuarios.
- Noticias globales relacionadas al medio ambiente.
- Nombre por cada usuario.
- Foto de perfil por cada usuario.
- Intereses por cada usuario.
- Nacionalidad de cada usuario.
- Biografía de cada usuario.
- Correo por cada usuario.
- Una sección para buscar a los usuarios por nombre, intereses o nacionalidad.

### 🕵🏾‍♀️ ¿Cuándo utilizan o utilizarían el producto?
Utilizarían el producto para publicar, encontrar información y conocer usuarios con el mismo afin ambiental.

### HISTORIAS DE USUARIO:

Realizamos una investigación mediante un [formulario](https://docs.google.com/forms/d/1BrhtlpXD5XL9ctElupPEY35oIijw0oQSvmwU9qWYkoM/edit?ts=619fbadf) en el cual fueron participes un total de 30 usuarios.

A continuación, mostraremos algunas de las historias de Usuario:

<div align="center">
<img src="/src/img/Readme/HistoryUser/UserHistory.png" width="800">
</div>

***

## 3. Realización del Proyecto
## 3.1 Diseño 📱
### 3.1.1 Flowchart: 📝
Para definir las páginas y su contenido se realizó un mapa semántico del mismo. Si desea visualizarlo puededar click [Aquí](https://raw.githubusercontent.com/RJRCH123/LIM016-social-network/dev/practicekmr/src/img/Readme/Flowchart/Flowchart.png).

### 3.1.2 Wireframe: 🙋🏼
Por consiguiente, en esta fase se busca realizar un esquema virtual de distribución más detallado en Figma.
A continuación, se mostrará parte del Wireframe; si desea puede verlo completo dando click en:
-  [Prototipado mobile](https://github.com/RJRCH123/LIM016-social-network/blob/dev/practicekmr/src/img/Readme/Wireframe/wireframeDesktop.png)
-  [Prototipado desktop](https://github.com/RJRCH123/LIM016-social-network/blob/dev/practicekmr/src/img/Readme/Wireframe/wireframeDesktop.png)

<div align="center">
<img src="/src/img/Readme/Wireframe/Example-WF.png" width="800">
</div>

### 3.1.3 Prototipado de Alta Fidelidad: 💁🏼
Luego de ya tener el Wireframe, se realiza el diseño de la web en base a estilos, paleta de colores, entre otros recursos.
A continuación, se mostrará parte del prototipado de alta fidelidad, si desea puede verlo completo dando click en:
-  [Prototipado mobile](https://github.com/RJRCH123/LIM016-social-network/blob/dev/practicekmr/src/img/Readme/HighFidelity/HF-Mobile.png)
-  [Prototipado desktop](https://github.com/RJRCH123/LIM016-social-network/blob/dev/practicekmr/src/img/Readme/HighFidelity/HF-Desktop.png)

<div align="center">
<img src="/src/img/Readme/HighFidelity/Example-HF.png" width="800">
</div>

***

## 4. Tecnologías empleadas 👩🏾‍💻
### Para la estructura y diseño:
-   [HTML:](https://developer.mozilla.org/es/docs/Web/HTML)  Siguiendo las reglas del HTML semántico se estructuró con un  `header`  que contiene una barra de navegación y el  `main`  para englobar el contenido principal.

-   [CSS:](https://developer.mozilla.org/es/docs/Web/CSS)  Usada para definir el estilo visual del proyecto.

-   [Figma:](https://www.figma.com) Plataforma para crear las estructuras del prototipo (Wireframe, prototipo de alta fidelidad, mockups).

### Para el Testing:
-   [Jest:](https://jestjs.io/docs/es-ES/getting-started)  Framework para realizar los testing unitarios.

-   [Eslint:](https://jestjs.io/docs/es-ES/getting-started)  Herramienta de linting para analizar el código en busca de errores.
### Para la funcionalidad:
-   [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript)  Para dar la funcionalidad a la plataforma.
-   [Firebase:](https://firebase.google.com)Se trata de una plataforma móvil creada por Google, cuya principal función es desarrollar y facilitar la creación de apps de elevada calidad de una forma rápida. Para este proyecto se uso lo siguiente:
    -   [Cloud Firestore:](https://firebase.google.com/products/firestore)  Es una base de datos NoSQL orientada a los documentos. A diferencia de una base de datos SQL, no hay tablas ni filas; En su lugar, almacenas los datos en documentos, que se organizan en colecciones. Cada documento contiene un conjunto de pares clave-valor.
    -   [Cloud Storage:](https://firebase.google.com/products/storage)  Cloud Storage se diseñó para ayudarte a almacenar y procesar con rapidez y facilidad el contenido generado por usuarios, como fotos y videos.
    -   [Authentication:](https://firebase.google.com/products/auth)  Busca facilitar la creación de sistemas de autenticación seguros, a la vez que mejora la experiencia de integración y acceso para los usuarios finales. Proporciona una solución de identidad de extremo a extremo, compatible con cuentas de correo electrónico y contraseñas, autenticación telefónica, acceso mediante Google, Twitter, Facebook y GitHub, y mucho más.
    -   [Realtime Database:](https://firebase.google.com/products/realtime-database)  Sincronización en tiempo real para datos JSON. Firebase Realtime Database es una base de datos NoSQL alojada en la nube que te permite almacenar y sincronizar datos entre tus usuarios en tiempo real.

***
## 5. Fuentes 📚
- [Repositorio de Laboratoria:](https://github.com/Laboratoria/LIM016-social-network) Se encuentran todas las condiciones y herramientas a trabajar para el proyecto.

## 6. Autores 📍
- [Katerin Tello](https://github.com/KaterinT)
- [Mariana Guanda](https://github.com/marianagdeveloper)
- [Rosamaria Rodriguez](https://github.com/RJRCH123)
- Equipo de Laboratoria LIM016

****

<div align = "center">
<img src="/src/img/Readme/KMR.jpg" width="800">
</div>

<div align="center">
<img src="/src/img/Logos/KMR4.png" width="400">
</div>
