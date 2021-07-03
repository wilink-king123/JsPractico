//codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//codigo del Triangulo
console.group("Triangulos");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 12;
console.log("Los lados del triangulo miden:  Lado1 = " 
+ lado1 + " cm Lado2 = " + lado2 
+ " cm  Base = " + base + " cm");

const perimetroTriangulo = lado1 + lado2 + base;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (base * altura) / 2;
console.log("El area del cuadrado es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
//PI
const PI = Math.PI;
console.log("PI es: " + PI + " cm");

//Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
//Area
const areaCirculo = PI * (radioCirculo*radioCirculo);
console.log("El area del circulo es: " + areaCirculo + " cm^3");


console.groupEnd();