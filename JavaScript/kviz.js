$(document).ready(function(){
	document.getElementById("kviz-inditas").addEventListener("click", function(){
		this.style.display = "none";
		const kvizTarto = document.querySelector(".kviz-tarto");
		kvizTarto.style.display = "block";
		kvizTarto.setAttribute("data-kerdesszam","1")
		kedesBeallitas(kvizTarto);
		
		const tovabbGomb = document.getElementById("kviz-tovabbgomb");
		tovabbGomb.addEventListener("click", function(){
			const kerdesSzam = Number(kvizTarto.getAttribute("data-kerdesszam"));
			valaszEllenorzes(kvizTarto, kerdesSzam)
			
		});
		
	});
})

function valaszEllenorzes(kvizTarto, kerdesSzam){	
	const kivalasztottLehetoseg = kvizTarto.querySelector("input:checked");
	const probalkozasokSzama = Number(document.getElementById("probalkozas-szam").innerHTML) + 1;
	document.getElementById("probalkozas-szam").innerHTML = probalkozasokSzama;
	const helyesValaszSzoveg = document.querySelector(".helyesValasz");
	helyesValaszSzoveg.style.display = "none";
	
	switch(kerdesSzam){
		
		case 1:
			if(kivalasztottLehetoseg.getAttribute("id") == "lehetoseg3"){
				kvizTarto.setAttribute("data-kerdesszam", kerdesSzam+1);
				helyesValaszSzoveg.style.display="block";
				kedesBeallitas(kvizTarto);
			} else{
				kivalasztottLehetoseg.parentNode.style.background = "#ffb3b3"
			}
			break;
		case 2:
			if(kivalasztottLehetoseg.getAttribute("id") == "lehetoseg2"){
				kvizTarto.setAttribute("data-kerdesszam", kerdesSzam+1);
				helyesValaszSzoveg.style.display="block";
				kedesBeallitas(kvizTarto);
			} else{
				kivalasztottLehetoseg.parentNode.style.background = "#ffb3b3"
			}
			break;
		case 3:
			if(kivalasztottLehetoseg.getAttribute("id") == "lehetoseg1"){
				kvizTarto.setAttribute("data-kerdesszam", kerdesSzam+1);
				helyesValaszSzoveg.style.display="block";
				kedesBeallitas(kvizTarto);
			} else{
				kivalasztottLehetoseg.parentNode.style.background = "#ffb3b3"
			}
			break;
		case 4:
			if(kivalasztottLehetoseg.getAttribute("id") == "lehetoseg4"){
				kvizTarto.setAttribute("data-kerdesszam", kerdesSzam+1);
				helyesValaszSzoveg.style.display="block";
				kedesBeallitas(kvizTarto);
			} else{
				kivalasztottLehetoseg.parentNode.style.background = "#ffb3b3"
			}
			break;
		case 5:
			if(kivalasztottLehetoseg.getAttribute("id") == "lehetoseg3"){
				kvizTarto.querySelector("h3").innerHTML = "Gratulálunk!";
				kvizTarto.querySelector("p").innerHTML =`${probalkozasokSzama} próbálkozással a kvízünk végére értél. Javasoljuk, hogy látogasd meg oldalunk további részeit is!`;
				kivalasztottLehetoseg.parentNode.style.background = "#c1f0c1"
				kvizTarto.querySelector(".kuldes-flex").style.display="none";
			} else{
				kivalasztottLehetoseg.parentNode.style.background = "#ffb3b3"
			}
			break;
	}
}
	

function kedesBeallitas(kvizTarto){
	const lehetosegTartok = document.getElementsByClassName("lehetosegtarto");
	for(let i = 0; i < lehetosegTartok.length; i++){
		lehetosegTartok[i].style.removeProperty("background");
	}
	
	const kerdesSzam = kvizTarto.getAttribute("data-kerdesszam");
	kvizTarto.querySelector("h3").innerHTML =`${kerdesSzam}. kérdés`;
	switch(kerdesSzam){
		case "1":
			kvizTarto.querySelector("p").innerHTML ="Hány metróvonal van Budapesten?";
			kvizTarto.querySelector("label[for=lehetoseg1]").innerHTML = "2 darab";
			kvizTarto.querySelector("label[for=lehetoseg2]").innerHTML = "3 darab";
			kvizTarto.querySelector("label[for=lehetoseg3]").innerHTML = "4 darab";
			kvizTarto.querySelector("label[for=lehetoseg4]").innerHTML = "5 darab";
			break;
		case "2":
			kvizTarto.querySelector("p").innerHTML ="Melyik a leghosszabb éjszakai járat?";
			kvizTarto.querySelector("label[for=lehetoseg1]").innerHTML = "A 941-es";
			kvizTarto.querySelector("label[for=lehetoseg2]").innerHTML = "A 990-es";
			kvizTarto.querySelector("label[for=lehetoseg3]").innerHTML = "A 931-es";
			kvizTarto.querySelector("label[for=lehetoseg4]").innerHTML = "A 909-es";
			break;
		case "3":
			kvizTarto.querySelector("p").innerHTML ="Melyik Budapest leghosszabb villamosvonala?";
			kvizTarto.querySelector("label[for=lehetoseg1]").innerHTML = "A 41-es";
			kvizTarto.querySelector("label[for=lehetoseg2]").innerHTML = "Az 1-es";
			kvizTarto.querySelector("label[for=lehetoseg3]").innerHTML = "A 6-os";
			kvizTarto.querySelector("label[for=lehetoseg4]").innerHTML = "A 3-as";
			break;
		case "4":
			kvizTarto.querySelector("p").innerHTML ="Melyik a legrégebbi típusú Budapesten közlekedő villamos?";
			kvizTarto.querySelector("label[for=lehetoseg1]").innerHTML = "Siemens Combino";
			kvizTarto.querySelector("label[for=lehetoseg2]").innerHTML = "Düwag TW6000";
			kvizTarto.querySelector("label[for=lehetoseg3]").innerHTML = "Tatra T5C5";
			kvizTarto.querySelector("label[for=lehetoseg4]").innerHTML = "Ganz ipari csuklós";
			break;
		case "5":
			kvizTarto.querySelector("p").innerHTML ="Melyik a legforgalmasabb metróvonal Budapesten?";
			kvizTarto.querySelector("label[for=lehetoseg1]").innerHTML = "Az 1-es";
			kvizTarto.querySelector("label[for=lehetoseg2]").innerHTML = "A 2-es";
			kvizTarto.querySelector("label[for=lehetoseg3]").innerHTML = "A 3-es";
			kvizTarto.querySelector("label[for=lehetoseg4]").innerHTML = "A 4-es";
			break;
	}
}