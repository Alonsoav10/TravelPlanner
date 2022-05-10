//Declara función saludar
function saludar() {
  alert(
    "Hola " + nombre + ".\nAcá podrás organizar un viaje según tu presupuesto."
  );
}
//Declara función de presupuesto
function verPresupuesto() 
{
  presupuestoVisit = prompt("Ingresa acá el presupuesto en USD: ");

	if (presupuestoVisit <= 50) 
	{
		alert ("Ahorra más para tu próximo viaje");
	}
	else if (presupuestoVisit <= 200) 
	{
		alert ("Podrías visitar Perú o Colombia por 3 días");
	}
	else if (presupuestoVisit <= 500) 
	{
		alert ("Podrías visitar Perú");
	}
	else if ((presupuestoVisit >= 501) && (presupuestoVisit <= 601)) 
	{
		alert ("Podrías visitar Perú o Colombia");
	}
	else  
	{
		alert ("Podrías visitar Perú o Colombia o Brasil. Disfruta!");
	}
  //Se pregunta para ver más detalles del viaje
  opcion = prompt(
    "¿Quieres ver más detalles del viaje?\n(si o no)"
  );
}
//Declara función de detalles de gasto aproximado de acuerdo a presupuesto
function detallesViaje()
{
	if (presupuestoVisit <= 50) 
	{
		alert ("Ahorra más para tu próximo viaje");
	}
	else if (presupuestoVisit <= 200) 
	{
		alert ("Recuerda que es un precio estimado.\nComidas: 50$\nPaseo: 60$\nHotel: 60$\nDisfruta tu viaje!");
	}
	else if (presupuestoVisit <= 500) 
	{
		alert ("Recuerda que es un precio estimado.\nComidas: 100$\nPaseo: 250$\nHotel: 100$\nDisfruta tu viaje!");
	}
	else if ((presupuestoVisit >= 501) && (presupuestoVisit <= 601)) 
	{
		alert ("Recuerda que es un precio estimado.\nComidas: 150$\nPaseo: 250$\nHotel: 100$\nDisfruta tu viaje!");
	}
	else  
	{
		alert ("PRecuerda que es un precio estimado.\nComidas: 150$\nPaseo: 300$\nHotel: 150$\nDisfruta tu viaje!");
	}
}

//Variables
let nombre = prompt("Registre su nombre de usuario");
let passwordN = prompt("Registre su contraseña");

let user = prompt("Ingrese su usuario registrado");
let passwordR = prompt("Ingrese su contraseña");

while (passwordN != passwordR)
{
	alert("contraseña incorrecta")
	passwordR = prompt("ingrese contraseña");
}
saludar();
verPresupuesto();
if (opcion == 'si' || opcion == 'Si' || opcion == 'SI'|| opcion == 'sI')
{
	detallesViaje();
}
else
{
	alert ("Muchas gracias!");
}


