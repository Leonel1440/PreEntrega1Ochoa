// Diseño modular: crearemos compojnentes para resolver pequeños problemas que son fáciles de visualizar y comprender; es una pieza establecida que yo puedo reutilizar. Lo vemos como un conjunto de componentes que trabajan entre sí, ya no está suelto.
//hay componentes basadas en clases y componentes basadas en funciones; antes eran solo clases, pero ahora con React se usan principalmente componentes basadas en funciones.
//cada módulo que creamos alberga un componentes solamente y generamos, hacemos que el archivo que creamos exporte el componetne con el mismo nombre que contiene
//como los componentes son funciones, los puedo reutilizar cambiando algunas cositas, los componentes pueden recibir UN parámetro que lo reciben siempre a ese parámetro




//Patrones de diseño:

//División de componentes: 1-componentes de presentación; 2-componentes contenedores (componente orientado a resolver la lógica de los datos a mostrar por los componenters de presentación).



//Children: 




//preentrega: crear un componente de presentación del header que tendrá su logo y enlaces genéricos (bootstrap para react: tailwind y MaterialUI  )
//un Cartwidget (un carrito, solo visual no importa la función)
<Navbar />
<ItemListContainer greeting="Hola mundo"/>//es el catalogo de productos
//eso necesitamos



{/* <hr/>
      <h2>Coder 51155</h2>

      <Tutores />
      <Noticias />

      <ContenedorTurquesa>
        <h2>Titulo</h2>
        <p>asdaskldaslekase</p>
        <small>xdxddx</small>
        
        <section>
          <h4>titulo chiquito</h4>
        </section>
          <Noticias />
          <Tutores />

      </ContenedorTurquesa>
      {/* <Boton>
        Click me
      </Boton> */}
      
{/* Todo lo que  está dentro de noticias son los "childrens" */}
      // <Tutor 
      //   comision={51155}
      //   nombre="Fede Bluatzik" 
      //   curso="ReactJs" 
      //   edad={28}
      // />

      // <Tutor 
      //   nombre="Julian Alvarez"
      //   curso="Javascript"
      //   edad={19}

      // /> */}