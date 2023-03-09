//Repaso de javascript:
//funciones de flecha, desestructuración de objetos, de arrays; operación ternaria, etc

//------------------función: 


//escribir una función que aumente mi edad en 1
let miEdad = 20;

function cumplirAnios(){
    // miEdad = miEdad + 1;
    // miEdad += 1;
    miEdad++;
}

cumplirAnios();//21
cumplirAnios();//22
cumplirAnios();//23

//arrow funtion: preferimos esto:
const cumplirAniom = ()=>{
    miEdad++;
}
cumplirAniom();
//o así:
const cumplirAniom2 = ()=> miEdad++;//ya tiene el return por defecto
cumplirAniom2();

//ejemplo 2: escribir una función recibirGolpe, que recibe un paraámetro y se reste al total vida; y si tiene menos de 0, hacer un condicional que muere ahre

let vida = 100;
const recibirGolpe = (golpe)=>{//un parámetro es una varible local de la función
    if (golpe > vida){//si el valor de golpe es mayor que la vida...
        vida = 0;//...mostrar la vida en 0
    }else{
        vida -= golpe;//si no solo restarlo
    }
    vida -= golpe;
}
recibirGolpe(20);//80

//Ejemplo 3: escribiru na función curar que regenera la vida en 50, hasta un max de 100

const curar = ()=>{
    vida += 50;
    if (vida > 100) vida = 100//de esta forma le pusimos el máximo
}







//----------DESESTRUCTURACIÓN DE OBJETOS
//con esto nos evitamos poner usuario.nombre o usuario.apellido, etc; aca guardamos las varibles dentro de un objeto

const usuario ={
    nombre: "John",
    apellido:"Doe",
    curso: "ReactJS",
    phone: {
        home: '123456',
        mobile: '5646456'
    }
}
// console.log(usuario.nombre); evitar esto, hacer esto: (no se si ignorar esto)
// const nombre = usuario.nombre;
// const apellido = usuario.apellido;
// const curso = usuario.curso;
//es una forma de facilitar el desarme del objeto y quedarme con los valores de las propiedades del objeto que yo quiero trabajar, es hacer todo más sintetico; esto lo usaremos mucho en React, asi que aprendetelo

//sintaxis de destructuración: IMPORTANT!
// const {prop1,prop2} = obj
//ejemplo si me quiero traer nombre y apellido del const usuario:

const {nombre, apellido, curso, phone:{mobile}} = usuario

//forma de traer la propiedad, pero con otro nombre:
const { nombre: name, apellido:lastName } = usuario;
console.log(name)
console.log(lastName);




//------------DESESTRUCTURACIÓN DE ARRAYS:

const nombres = ["Julian","Sergio","Federico","Adrian"];

//casi misma sintaxis:
const [a,b] = nombres;// Julian Sergio
console.log(a)//Julian

const [,, a,b] = nombres;// Aca me trae a federico y a adrian, porque las dos comas representan dos posiciones


//Ejemplo para retornar arrays:
const getEquipo = () =>{
    return ["Conrado","Federico Blautzik"]
}

// const resp = getEquipo()
// const profesor = resp[0]
// const tutor = resp[1]
//mejor sería así:

const [profe, adjunto] = getEquipo()
console.log(profe);
console.log(adjunto);











//---------Operador ternario:
//escribir un condicional para saber si juan puede ver 1917

const persona = {
    nombre:"Juan",
    edad: 23
}
const pelicula = {
    titulo: "1917",
    edadMinima: 18
}

if(persona.edad >= pelicula.edadMinima){
    alert("Puede ver la película")
}else{
    alert("No puede ver la película")
}

//pasando lo de arriba del condicional al ternario sería así:
//sintaxis: pregunto si condición es verdadera (condicion ?
condicion ? caso1 : caso2
                                     //if                                   
persona.edad >= pelicula.edadMinima ?  alert("Puede ver la película") :   alert("No puede ver la película")//else; //tiene return por defecto, solo sirve si solo tengo un solo if, si lo tuviera pues deberíamos usar el if normal, sin ternario




//---------LÓGICO AND(&&) Y OR (||)

const temperatura = 30

if (temperatura >= 30){
    console.log("Llevar protector solar")
}
//o: tiene return implicito
const alerta = temperatura >= 30 && console.log("LLevar protector solar")
console.log(alerta)

//or || :
const user = {
    nombre: "John Doe",
    curso: "ReactJS",
    rol: "Admin"
    // rol: undefined
}

const rol = user.rol || "Anonimo";//guardame el rol, y si no lo tiene definido, guardame anónimo
console.log(rol);//Admin

const rol2 = 0|| "Anonimo";
console.log(rol2);//Anonimo


//nulish coalescing operator ??  (es como el or, pero en vez de || usa ??, y admite algunos falsies que el or no)