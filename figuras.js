//codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function perimetroCuadrado(lado){
    return lado * 4;
}
function AreaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// //codigo del Triangulo
console.group("Triangulos");
// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// const altura = 12;
// console.log("Los lados del triangulo miden:  Lado1 = " 
// + lado1 + " cm Lado2 = " + lado2 
// + " cm  Base = " + base + " cm");

// const perimetroTriangulo = lado1 + lado2 + base;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (base * altura) / 2;
// console.log("El area del cuadrado es: " + areaTriangulo + "cm^2");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function AreaTriangulo(base,altura){
    return (base*altura)/2;
}
console.groupEnd();

// //Codigo del Circulo
console.group("Circulos");

// //radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");
// //diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");
// //PI
// const PI = Math.PI;
// console.log("PI es: " + PI + " cm");

// //Circunferencia 
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
// //Area
// const areaCirculo = PI * (radioCirculo*radioCirculo);
// console.log("El area del circulo es: " + areaCirculo + " cm^3");

function perimetroCirculo(radio){
    return Math.PI * (radio * 2);
}
function AreaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.groupEnd();


function isoscelesHigh(lado,base){
    return Math.sqrt((lado*lado)-((base/2)*(base/2)));
}

//Aqui interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = AreaCuadrado(value);
    alert(perimetro);
}

// Triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("Inputlado1");
    const valuelado1 = parseInt(input.value);

    const input2 = document.getElementById("Inputlado2");
    const valuelado2 = parseInt(input2.value);

    const input3 = document.getElementById("Inputbase");
    const valuebase = parseInt(input3.value);

    const perimetrot = perimetroTriangulo(valuelado1,valuelado2,valuebase);
    alert(perimetrot);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("Inputbase");
    const valuebase = parseInt(input.value);

    const inputhigh = document.getElementById("Inputaltura");
    const valuealtura = parseInt(inputhigh.value);

    const areat = AreaTriangulo(valuebase,valuealtura);
    alert(areat);
} 

// Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = AreaCirculo(value);
    alert(area);
} 

//Isosceles

function calcularAlturaIsosceles(){
    const inputl = document.getElementById("Inputladoigual");
    const valueladoigual = inputl.value;

    const inputb = document.getElementById("InputbaseI");
    const valuebase = inputb.value;

    const Altura = isoscelesHigh(valueladoigual,valuebase);
    alert(Altura);
}