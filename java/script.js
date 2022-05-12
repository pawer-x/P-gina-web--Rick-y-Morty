alert ("Se te harán una serie de preguntas para saber cuánto sabes de la serie. Todas las respuestas deben empezar en mayúscula.");
var count=0;
var ty=0;
var respuesta= prompt("¿En qué dimensión vive Morty? (Esta pregunta te restará un punto si no la aciertas)");
if (respuesta== "C-137"){
  count++; }
else{ 
  count--;
}
respuesta= prompt("¿Cuál es la primera palabra que se dice en el primer capítulo de la serie? ");
  if (respuesta== "Rick"){
  count++;
  }
respuesta= prompt("¿Cuál era el nombre del perro de Morty que casi acaba con la raza humana?");
  if(respuesta== "Snuffles"){
    count++;
  }
respuesta= prompt("¿Qué crea Rick dentro del cuerpo de un viejo vagabundo?");
  if((respuesta== "Un parque de atracciones")||(respuesta== "Parque de atracciones")){
  count++;
  }
respuesta= prompt("¿Qué productos trata de vender Jerry en la propaganda que presenta a la nueva empresa tras perder el trabajo?");
  if (respuesta== "manzanas"){
    count++;
  }
respuesta= prompt("¿Cuántos planetas visita la familia de Morty buscando un nuevo hogar en el último capítulo de la segunda temporada?");
  if((respuesta=="3")||(respuesta=="Tres")){
    count++;
  }
respuesta= prompt("¿Cuál es el trabajo de Beth? (Tienes dos intentos para esta pregunta)");
while((ty!=1)&&(respuesta!="Veterinaria de caballos"))
  { 
  ty++;
  respuesta= prompt("¿Cuál es el trabajo de Beth? (Tienes dos intentos para esta pregunta)");
 }
if (respuesta== "Veterinaria de caballos")
  count++;
var n1 =Math.floor (Math.random() * 10+1);
var n2= prompt("Tienes que adivinar un número entre el 1 y el 10 en un solo intento. Si aciertas se te sumarán 5 puntos")
if ("n1"=="n2"){
  count++;}
document.write("Tu puntuación es de: " +count);


