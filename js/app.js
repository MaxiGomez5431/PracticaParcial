//Ejercicio 1
const productos = [
    { nombre: 'Laptop', precio: 800, categoria: 'Electrónica' },
    { nombre: 'Teclado', precio: 50, categoria: 'Electrónica' },
    { nombre: 'Silla', precio: 120, categoria: 'Muebles' },
    { nombre: 'Mesa', precio: 200, categoria: 'Muebles' },
    { nombre: 'Teléfono', precio: 600, categoria: 'Electrónica' },
    { nombre: 'Mouse', precio: 120, categoria: 'Electrónica' }
]

function filtrarProductos(array, minPrecio, maxPrecio, categoria){
  return array.filter(producto => {
    if(producto.categoria == categoria && producto.precio >= minPrecio && producto.precio <= maxPrecio){
      return producto
    }
  })
}

//console.log(filtrarProductos(productos, 500, 800, 'Electrónica'))

//Ejercicio 2
const empleados = [
  { nombre: 'Pedro', edad: 25, salario: 3000 },
  { nombre: 'Ana', edad: 35, salario: 4000 },
  { nombre: 'Maria', edad: 42, salario: 3500 },
  { nombre: 'Luis', edad: 28, salario: 2700 },
]

function ordenarEmpleados(array){
  const empleadosConAumento = array.map(empleado => {
    if(empleado.edad > 30){
       empleado.salario = empleado.salario * 1.1
    }
    return empleado
    }

 
  ) 
  return empleadosConAumento.sort((b,a) => b.salario-a.salario)
}

//console.log(ordenarEmpleados(empleados))

//Ejercicio 3
const tareas = [
  { titulo: 'Estudiar JavaScript', fechaLimite: '2024-09-20', completada: false },
  { titulo: 'Hacer ejercicio', fechaLimite: '2024-09-10', completada: true },
  { titulo: 'Leer un libro', fechaLimite: '2024-10-15', completada: false },
  { titulo: 'Enviar proyecto', fechaLimite: '2024-09-30', completada: false },
]

function gestionarTareas(array){
  return array.filter(t => !t.completada && new Date(t.fechaLimite) >= new Date())
}

// console.log(gestionarTareas(tareas))

//Ejercicio 4

let carrito = []

const producto1 = {nombre: 'Pepa', precio: 1000, cantidad: 1}

function agregarProducto(producto) {

  const productoExistente = carrito.find(p => p.nombre == producto.nombre)

  if(productoExistente){
    productoExistente.cantidad += 1;
  }
  else{
    carrito.push(producto)
  }
}

function eliminarProducto(nombreProducto) {
  const indice = carrito.findIndex(p => p.nombre === nombreProducto);
  if (indice !== -1) {
    carrito.splice(indice, 1); // Eliminar el producto encontrado
  }
}

function calcularTotal(){

  return carrito.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);
}

/* // Ejemplo de uso
agregarProducto({ nombre: 'Laptop', precio: 1000, cantidad: 1 });
agregarProducto({ nombre: 'Mouse', precio: 50, cantidad: 2 });
agregarProducto({ nombre: 'Laptop', precio: 1000, cantidad: 1 }); // Aumenta cantidad de Laptop

console.log(carrito)

// Mostrando el total del carrito
console.log("Total:", calcularTotal()); // Total: 2100

// Eliminando un producto
eliminarProducto('Mouse');

console.log(carrito)

// Mostrando el total después de eliminar
console.log("Total después de eliminar:", calcularTotal()); // Total: 2000 */


//Ejercicio 5
const texto = "la paciencia es clave en la vida pero la perseverancia es aún más importante para lograr el éxito y la perseverancia lo es todo y es clave"  

const texto2 = "El perro de la casa es un perro muy amigable, y la casa es grande. El perro corre rápido.";

function analizarTexto(text){
  const palabrasExcluidas = ["el", "la", "de", "y", "a", "en", "que", "los", "las", "con", "por", "para", "un", "una", "del", "al", "es"];

  const palabras = text.toLowerCase().split(' ')

  const palabrasContadas = {}

  palabras.forEach(palabra => {
    if(!palabrasExcluidas.includes(palabra)){
      if(palabrasContadas[palabra]){
        palabrasContadas[palabra]++;
      }
      else{
        palabrasContadas[palabra] = 1
      }
    }
    
  })

  return palabrasContadas
}

// console.log(analizarTexto(texto2))

//Ejercicio 6
const empleados2 = [
  { nombre: 'Pedro', departamento: 'IT', salario: 3000 },
  { nombre: 'Ana', departamento: 'RRHH', salario: 2500 },
  { nombre: 'Luis', departamento: 'IT', salario: 3500 },
  { nombre: 'Marta', departamento: 'Ventas', salario: 4000 },
  { nombre: 'Carlos', departamento: 'RRHH', salario: 2700 },
]

function agruparPorDepartamento(array){
  const departamentos = {}

  array.forEach(empleado => {
    if (departamentos[empleado.departamento]) {
      departamentos[empleado.departamento].push({ nombre: empleado.nombre, salario: empleado.salario });
    } else {
      // Si el departamento no existe, crear un nuevo array con el empleado
      departamentos[empleado.departamento] = [{ nombre: empleado.nombre, salario: empleado.salario }];
    }

    
  })

  for (let departamento in departamentos) {
    departamentos[departamento].sort((a, b) => b.salario - a.salario);
  }

  for (let departamento in departamentos) {
    departamentos[departamento] = departamentos[departamento].map(empleado => empleado.nombre);
  }

  return departamentos
}

function agruparPorDepartamento2(empleados) {
  const resultado = {};

  // Recorrer el array de empleados
  empleados.forEach(empleado => {
    const { nombre, departamento, salario } = empleado;

    // Si el departamento no existe en el resultado, lo creamos
    if (!resultado[departamento]) {
      resultado[departamento] = [];
    }

    // Agregamos el empleado al array de su departamento
    resultado[departamento].push({ nombre, salario });
  });

  // Ordenar los empleados en cada departamento por salario de mayor a menor
  for (let departamento in resultado) {
    resultado[departamento].sort((a, b) => b.salario - a.salario);
  }

  // Convertir los objetos de cada departamento en solo los nombres de los empleados
  for (let departamento in resultado) {
    resultado[departamento] = resultado[departamento].map(empleado => empleado.nombre);
  }

  return resultado;
}


// console.log(agruparPorDepartamento2(empleados2))

//Ejercicio 7

function calcularPrecioPromedio(){
  let primerMenu = document.querySelectorAll('.precios-uno')

  let suma = 0
  primerMenu.forEach(precio => {
    const valor = Number(precio.textContent.substring(1))
    suma += valor
  })

  const promedio = suma / primerMenu.length

  console.log(`El precio promedio del primer menú es: ${promedio.toFixed(2)}`) 
}

//calcularPrecioPromedio();


function actualizarPrecio(indice, aumento){
  let segundoMenu = document.querySelectorAll('.precios-dos')
  
  if(indice >= 0 && indice < segundoMenu.length){
    let precioActual = Number(segundoMenu[indice].textContent.substring(1))

    let precioActualizado = precioActual + aumento

    segundoMenu[indice].textContent = precioActualizado

    console.log(`El precio actualizado del item de indice ${indice} es: ${precioActualizado}`) 
  }
  else{
    console.log('Indice invalido')
  }
  
    
}

//console.log(actualizarPrecio(2,10))

//Ejercicio 8

const operaciones = {
  Suma: (a, b) => a + b,
  Resta: (a, b) => a - b,
  Multiplicacion: (a, b) => a * b,
  Dividir: (a, b) => b !== 0 ? a / b : 'Error: No se puede dividir por 0',
  Modulo: (a, b) => b !== 0 ? a % b : 'Error: No se puede obtener módulo con 0'
};

function calcularOperacion(){
  const primerNumero = Number(document.getElementById('primer-numero').value)
  const segundoNumero = Number(document.getElementById('segundo-numero').value)
  const operacion = document.getElementById('operacion').value;

  let resultado;

  if(isNaN(primerNumero) && isNaN(segundoNumero)){
    
      mostrarResultado('Error: Ingrese números válidos');
      return;
  }

  resultado = operaciones[operacion](primerNumero,segundoNumero);
  

  mostrarResultado(`Resultado: ${resultado}`)
}

function mostrarResultado(mensaje) {
  const divResultado = document.getElementById('resultado');
  divResultado.innerHTML = `<p>${mensaje}</p>`;
}

document.getElementById('calcular').addEventListener('click', calcularOperacion);

//Ejercicio 9

document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevenir el envío del formulario por defecto

  let nombre = document.getElementById('nombre').value.trim();
  let edad = document.getElementById('edad').value.trim();
  let errorNombre = document.getElementById('errorNombre');
  let errorEdad = document.getElementById('errorEdad');
  let resultado = document.getElementById('resultadoForm');

  let esValido = true;

  // Resetear mensajes de error y éxito
  errorNombre.textContent = '';
  errorEdad.textContent = '';
  resultado.textContent = '';

  // Validar campo de nombre
  if (nombre === '') {
      errorNombre.textContent = 'El campo de nombre no puede estar vacío.';
      esValido = false;
  }

  // Validar campo de edad
  if (edad === '') {
      errorEdad.textContent = 'El campo de edad no puede estar vacío.';
      esValido = false;
  } else if (isNaN(edad) || edad <= 0) {
      errorEdad.textContent = 'Por favor, introduce una edad válida.';
      esValido = false;
  } else if(edad < 18){
      errorEdad.textContent = 'Debes ser mayor de 18 años.';
      esValido = false;
  }

  // Mostrar mensaje de éxito si todo es válido
  if (esValido) {
      resultado.textContent = 'Envío correcto';
  }
});



//Ejercicio 10
const listadoProductos = [
  {
    nombre: 'Laptop',
    descripcion: 'Una laptop potente con 16GB de RAM y 512GB de SSD.',
    precio: 1200
  },
  {
    nombre: 'Smartphone',
    descripcion: 'Un smartphone con una pantalla AMOLED y cámara de 48MP.',
    precio: 800
  },
  {
    nombre: 'Auriculares',
    descripcion: 'Auriculares inalámbricos con cancelación de ruido.',
    precio: 200
  },
  {
    nombre: 'Monitor',
    descripcion: 'Monitor 4K de 27 pulgadas con soporte HDR.',
    precio: 400
  },
  {
    nombre: 'Teclado Mecánico',
    descripcion: 'Teclado mecánico con iluminación RGB y switches azules.',
    precio: 150
  }
]

const resultadoPrecio = document.getElementById('precio')
const inputProducto = document.getElementById('producto')
const btnBuscar = document.getElementById('buscar')

btnBuscar.addEventListener('click', function() {
  
  const productoIngresado = inputProducto.value.trim(); // Obtener el valor ingresado y eliminar espacios

  const productoEncontrado = listadoProductos.find(producto => producto.nombre.toLowerCase() === productoIngresado.toLowerCase());

  if(productoEncontrado){
    resultadoPrecio.innerText = `Producto: ${productoEncontrado.nombre} \nDescripción: ${productoEncontrado.descripcion} \nPrecio: $${productoEncontrado.precio}`;
  }
  else{
    resultadoPrecio.innerText = 'Producto no encontrado.';
  }

  
})

