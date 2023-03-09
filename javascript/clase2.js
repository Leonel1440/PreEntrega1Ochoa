//Virtual DOM: es una representación del DOM real que React va a armar y cargar en memoria con la intención de poner un punto intermedio entre las funcionalidades que yo quiero desarrollar y el DOM, para tener su propia interpretación del DOM. Para todos los calculos del DOM, lo pueda hacer en js antes de acceder al DOM real; esto mejora mucho la performance y el renderizado del sitio web, lo optimiza. React puede escuchar los eventos cuando suceden cambios (interacciones de usuarios, etc) y calcular cuales nodos deben actualizarse, todo esto estará superautomaizado y organizado en React.
//Dom real:

//React: antes de acceder al DOM real, va a la memoria, esto hace que sea más rápido
//Vamos a armar a concebir de forma más integral el html, más organizado. Y estos componentes tendran tanto de la parte visual del html y de la funcionalidad; lo bueno de este tipo de estructural es que nos dará una forma jerarquica de todas estas piezas, manejaremos un flujo de datos unidirrecional. Trabajaremos con un "arbol de componentes" y donde cada pieza tendrá sus datos y sus hijos-componentes. Al estar todo "unido" al verse alterado uno de los componentes del arbol, esto también cambiará a los hijos de los componentes para que se vayan actualizando de forma automática a través de React; con poco código puedo tener una estructura muy compleja e interactiva.
//React implementa una tecnología llamada Fiber, resutla ser todo lo que React sabe de tu aplicación y cada nodo o fibra
//React lleva registro de todos los cambios de la aplicación y al tenerla en su memoria será mucho más agil, y luego lo consiliará con el DOM real
//RESUMIENDO: 1-React eejcuta un algoritmo de "diffing" que identiifa lo que se ha cambiado; 2-reconciliación, se actualiza el DOM con los resultados de diff. (Todo esto lo hace React solo, nosotros solo tenemos que hacer la app que querramos siguiendo ciertas convenciones)





//Node: es un entorno de ejecución de js, que le permite al código en js ser ejecutado en nuestra computadora. Podemos darle a node un archivo de js y éste puede ejecutarlo, y darle acceso a recursos de nuestras computadora (IO, Network, Etc). Corre por fuera del navegador, de ahi que con Node js se pueden desarrollar servidores, programación backend, etc.; 




//NPM: es el administrador de paquetas de Node js.  Sirve para instalar módulos adicionales para utilizar una funcionalidad de alguna librería publicada; entonces podré usar varias librerías.
//Ponemos npm init en la terminal, y nos creará un "package.json"



//CLI: es un comando de consola, pero esto nos permite crear aplicaciones; create-react-app
//