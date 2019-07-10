//Comportamento pulsanti
$(document).ready(function() {
	$("#contenuto").load("homeEng.htm");
	$("#home").click(function() {
		$("#contenuto").load("homeEng.htm");
		return false;
	});
	$("#ubuntu").click(function() {
		$("#contenuto").load("ubuntuEng.htm");
		return false;
	});
	$("#kubuntu").click(function() {
		$("#contenuto").load("kubuntuEng.htm");
		return false;
	});
	$("#xubuntu").click(function() {
		$("#contenuto").load("xubuntuEng.htm");
		return false;
	});
	$("#lubuntu").click(function() {
		$("#contenuto").load("lubuntuEng.htm");
		return false;
	});
	$("#ubuntuGnome").click(function() {
		$("#contenuto").load("ubuntuGnomeEng.htm");
		return false;
	});
	$("#ubuntuMate").click(function() {
		$("#contenuto").load("ubuntuMateEng.htm");
		return false;
	});
	$("#edubuntu").click(function() {
		$("#contenuto").load("edubuntuEng.htm");
		return false;
	});
	$("#ubuntuStudio").click(function() {
		$("#contenuto").load("ubuntuStudioEng.htm");
		return false;
	});
	$("#mythbuntu").click(function() {
		$("#contenuto").load("mythbuntuEng.htm");
		return false;
	});
	$("#linuxMint").click(function() {
		$("#contenuto").load("linuxMintEng.htm");
		return false;
	});
	$("#openSuse").click(function() {
		$("#contenuto").load("openSuseEng.htm");
		return false;
	});
	$("#fedora").click(function() {
		$("#contenuto").load("fedoraEng.htm");
		return false;
	});
	$("#kaliLinux").click(function() {
		$("#contenuto").load("kaliLinuxEng.htm");
		return false;
	});
	$("#debian").click(function() {
		$("#contenuto").load("debianEng.htm");
		return false;
	});
	$("#mageia").click(function() {
		$("#contenuto").load("mageiaEng.htm");
		return false;
	});
	$("#archLinux").click(function() {
		$("#contenuto").load("archLinuxEng.htm");
		return false;
	});
});

//disabilitare tasto destro del mouse
var message="Right mouse button disabled!!!";
document.oncontextmenu = new Function("alert(message);return false");

//Rollover Immagini
function MouseRollover(MyImage) {
		MyImage.src = "../img/linuxVersioni.png";
}
function MouseOut(MyImage) {
		MyImage.src = "../img/linux-vs-windows-vs-mac.png";
}

//zoom
if (document.images){
	(function(){
		var cos, times = 40, speed = 20;
		var expConIm = function(im){
			im = im || window.event;
			if (!expConIm.r.test (im.className))
				im = im.target || im.srcElement || null;
			if (!im || !expConIm.r.test (im.className))
				return;
			var e = expConIm;
			widthHeight = function(dim){
				return dim[0] * cos + dim[1] + 'px';
			}
			resize = function(){
				cos = (1 - Math.cos((e.ims[i].jump / times) * Math.PI)) / 2;
				im.style.width = widthHeight (e.ims[i].w);
				im.style.height = widthHeight (e.ims[i].h);
				if (e.ims[i].d && times > e.ims[i].jump){
					++e.ims[i].jump;
					e.ims[i].timer = setTimeout(resize, speed);
				} 
				else if (!e.ims[i].d && e.ims[i].jump > 0){
					--e.ims[i].jump;
					e.ims[i].timer = setTimeout(resize, speed);
				}
			}
			d = document.images, i = d.length - 1;
			for (i; i > -1; --i)
				if(d[i] == im) break;
			i = i + im.src;
			if (!e.ims[i]){
				im.title = '';
				e.ims[i] = {im : new Image(), jump : 0};
				e.ims[i].im.onload = function(){
					e.ims[i].w = [e.ims[i].im.width - im.width, im.width];
					e.ims[i].h = [e.ims[i].im.height - im.height, im.height];
					e (im);
				}
				e.ims[i].im.src = im.src;
				return;
			}
			if (e.ims[i].timer) clearTimeout(e.ims[i].timer);
			e.ims[i].d = !e.ims[i].d;
			resize ();
		};

		expConIm.ims = {};

		expConIm.r = new RegExp('\\bzoom\\b');

		if (document.addEventListener){
			document.addEventListener('mouseover', expConIm, false);
			document.addEventListener('mouseout', expConIm, false);
		}
		else if (document.attachEvent){
			document.attachEvent('onmouseover', expConIm);
			document.attachEvent('onmouseout', expConIm);
		}
	})();
}

//Comparsa immagini

//Percorso immagini e link (opzionali: imposta "" per non avere link):
var immagini=new Array()
immagini[0]="../img/cinnamonDE.png";
immagini[1]="../img/mateDE.jpg";
immagini[2]="../img/xfceDE.png";
immagini[3]="../img/kdeDE.png";

//Imposta bordo immagine
var borderimmagine=0;

function setimmaginehtml(myimg){
	var immaginehtml="";
	immaginehtml+='<img id="distroDE" class="zoom" src="'+myimg+'" border="'+borderimmagine+'">';
	return immaginehtml;
}

function caricaimmagine(mydiv, indice){
	var immagine=document.getElementById(mydiv);
	immagine.innerHTML=setimmaginehtml(immagini[indice]);
	return false;
}

//--> LOCAL STORAGE

function uguali(u,o){ //gli utenti differisono soltanto per l'email!
	if (u.e == o.e)
		return true;
	return false;
}

function validazione_email(email) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (!reg.test(email)) return false; 
	else return true;
}

function validazioneData(data) {
	var reg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
	if (!reg.test(data)) return false;
	else {
		anno = parseInt(data.substr(6), 10);
		mese = parseInt(data.substr(3, 2), 10);
		giorno = parseInt(data.substr(0, 2), 10);
		
		var date = new Date(anno, mese-1, giorno);
		if (date.getFullYear() == anno && date.getMonth()+1 == mese && date.getDate() == giorno) return true;
		else return false;
	}
}

function inizializzaStorageUtenti(){
	if (typeof(localStorage.utenti) == "undefined") {
		localStorage.utenti="[]";
		var admin1 = {n:"Marco", c:"Costa", e:"costa.1691388@studenti.uniroma1.it", p:"1123581321", a:"20/07/1996", s:"M"};
		var admin2 = {n:"Andrea Luca", c:"Antonini", e:"antonini.1707560@studenti.uniroma1.it", p:"gaùcho", a:"28/01/1996", s:"M"};
		var admin3 = {n:"Lorenzo", c:"Fioravanti", e:"fioravanti.1658825@studenti.uniroma1.it", p:"Morbidissimo1", a:"13/08/1995", s:"M"};
		var u = JSON.parse(localStorage.utenti);
		u[0] = admin1;
		u[1] = admin2;
		u[2] = admin3;
		localStorage.utenti = JSON.stringify(u);
		localStorage.accesso = 0;
		localStorage.utentecorrente = -1;
	}
}

//-->REGISTRATI

function inserisciUtente() {
	if (document.registrazione.nome.value=="") {
		alert("Insert name!");
		return false;
	}
	if (document.registrazione.cognome.value=="") {
		alert("Insert surname!");
		return false;
	}
	if (document.registrazione.email.value=="") {
		alert("Insert email!");
		return false;
	}
	if(!validazione_email(document.registrazione.email.value)) {
		alert("The entered email is not valid!");
		return false;
	}
	if (document.registrazione.anno.value=="") {
		alert("Insert the year of birth!");
		return false;
	}	
	if (!validazioneData(document.registrazione.anno.value)) {
		alert("The entered date is not valid!");
		return false;
	}
	if (document.registrazione.sesso.value=="") {
		alert("Insert gender!");
		return false;
	}
	if (!(document.registrazione.sesso.value.toUpperCase() == "M" || document.registrazione.sesso.value.toUpperCase() == "F")) {
		alert("Insert M or F!");
		return false;
	}
	if (document.registrazione.password1.value=="") {
		alert("Insert password!");
		return false;
	}
	if (document.registrazione.password1.value.length < 8) {
		alert("Password must be at least 8 characters long!");
		return false;
	}
	if (document.registrazione.password1.value.length > 16) {
		alert("Password must be a maximum of 16 characters long!");
		return false;
	}
	if (document.registrazione.password2.value=="") {
		alert("Confirm password!");
		return false;
	}
	if (document.registrazione.password1.value!=document.registrazione.password2.value) {
		alert("The entered passwords do not match!");
		return false;
	}		
	var u =JSON.parse(localStorage.utenti);
	var nextpos= u.length;
	var o = {n:document.registrazione.nome.value, c:document.registrazione.cognome.value, e:document.registrazione.email.value, p:document.registrazione.password1.value, a:document.registrazione.anno.value, s:document.registrazione.sesso.value.toUpperCase()};
	for(i=0; i < nextpos; i++)
		if(uguali(u[i],o)){
			alert("Already registered user!");
			return false;
		}
	u[nextpos] = o;
	localStorage.utenti=JSON.stringify(u);
	alert("Registration completed successfully!");
	return true;
}
//<--

//-->ACCEDI

function accedi() {
	
    // Dati inseriti nella form di registrazione
    var u = JSON.parse(localStorage.utenti);
	var nextpos = u.length;
	
    // Dati inseriti nella form di accesso
    if (document.accesso.utente.value == "") {
		alert("Insert the email with which you registered!");
		return false;
	}
	if(!validazione_email(document.accesso.utente.value)) {
		alert("The email entered is not valid!");
		return false;
	}
    if (document.accesso.password.value == "") {
		alert("Insert password!");
		return false;
	}
	var o = {e:document.accesso.utente.value, p:document.accesso.password.value};

	for(i=0; i < nextpos; i++) {
		if (u[i].e == o.e && u[i].p != o.p) {
			alert("The entered password is not valid!");
			return false;
		}
		else if (u[i].e == o.e && u[i].p == o.p) {
			localStorage.accesso = parseInt(localStorage.accesso) + 1;
			document.getElementById("logout").style.display="block";
			document.getElementById("profilo").style.display="block";
			document.getElementById("accedi").style.display="none";
			document.getElementById("registrati").style.display="none";
			localStorage.utentecorrente = i;
			alert("Access performed! \n Hi, " + u[i].n +"!");
			window.location.href = "indexEng.htm";
		}
		else if (i == nextpos - 1) {
			alert("The user is not registered!");
			return false;
			
		}
	}
	return false;
}

//<--

// ESCI
function logout() {
	localStorage.accesso = parseInt(localStorage.accesso) - 1;
	document.getElementById("logout").style.display="none";
	document.getElementById("proflio").style.display="none";
	document.getElementById("accedi").style.display="block";
	document.getElementById("registrati").style.display="block";
	localStorage.utentecorrente = -1;
	alert("Logout performed!");
	return true;
}

//<--

//invio mail
function Email() {
	var selezione = document.formEmail.opzione.checked;
	var destinatario = document.formEmail.destinatari.selectedIndex;
	var oggetto = document.formEmail.oggetto.value;
	var messaggio = document.formEmail.messaggio.value;
	var controlloAccesso = parseInt(localStorage.accesso);
	if (controlloAccesso == 0) {
		alert("You must login first.\nRegister if you have not already done so!");
		return false;
	}
	else if ((oggetto == "") || (oggetto == "undefined")) {
		alert("Insert object!");
		document.formEmail.oggetto.focus();
		return false;
	}
	else if ((messaggio == "") || (messaggio == "undefined")) {
		alert("Insert message!");
		document.formEmail.messaggio.focus();
		return false;
	}
	
	else {
		if (selezione == true) {
			location.href = "mailto:costa.1691388@studenti.uniroma1.it?Subject=" + oggetto + "&Cc=antonini.1707560@studenti.uniroma1.it&Bcc=fioravanti.1658825@studenti.uniroma1.it" + "&Body=" + messaggio;
			return false;
		}
		else {
			switch(destinatario) {
			case 0: location.href = "mailto:costa.1691388@studenti.uniroma1.it" + "?Subject=" + oggetto + "&Body=" + messaggio; ; break;
			case 1: location.href = "mailto:antonini.1707560@studenti.uniroma1.it" + "?Subject=" + oggetto + "&Body=" + messaggio; ; break;
			case 2: location.href = "mailto:fioravanti.1658825@studenti.uniroma1.it" + "?Subject=" + oggetto + "&Body=" + messaggio; ; break;
			}
			return false;
		}
	}
}

//termini per invio mail
var checkobj;

function agreesubmit(el){
	checkobj=el;
	for (i=0;i<checkobj.form.length;i++){  
		var tempobj=checkobj.form.elements[i];
		if(tempobj.type.toLowerCase()=="submit")
			tempobj.disabled=!checkobj.checked;
	}
}

// Mostra/nascondi bottoni menù superiore

function mostraNascondiBottoni() {
	var u = JSON.parse(localStorage.utenti);
	var myutente = u[parseInt(localStorage.utentecorrente)];
	if (parseInt(localStorage.accesso) == 0) {
		document.getElementById("logout").style.display="none";
		document.getElementById("profilo").style.display="none";
		document.getElementById("accedi").style.display="block";
		document.getElementById("registrati").style.display="block";
	}
	else if (parseInt(localStorage.accesso) == 1){
		document.getElementById("logout").style.display="block";
		document.getElementById("profilo").style.display="block";
		document.getElementById("accedi").style.display="none";
		document.getElementById("registrati").style.display="none";
		$("#profilob").text(myutente.n);
	}
}

//Cambiare password

function cambiaPassword() {
	var u = JSON.parse(localStorage.utenti);
	var myutente = u[parseInt(localStorage.utentecorrente)];
	if (document.profilo.oldpassword.value == "") {
		alert("Insert old password!");
		return false;
	}
	else if (document.profilo.oldpassword.value != myutente.p) {
		alert("The entered password is not valid!");
		return false;
	}
	else if (document.profilo.newpassword1.value == "") {
		alert("Insert new password!");
		return false;
	}
	else if (document.profilo.newpassword1.value.length < 8) {
		alert("Password must be at least 8 characters long!");
		return false;
	}
	else if (document.profilo.newpassword1.value.length > 16) {
		alert("Password must be a maximum of 16 characters long!");
		return false;
	}
	else if (document.profilo.newpassword2.value == "") {
		alert("Confirm password!");
		return false;
	}
	else if (document.profilo.newpassword1.value != document.profilo.newpassword2.value) {
		alert("The passwords do not match!");
		return false;
	}
	myutente.p = document.profilo.newpassword2.value;
	localStorage.utenti=JSON.stringify(u);
	alert("Password has been changed!");
	return true;
}

function caricaUtente() {
	var u = JSON.parse(localStorage.utenti);
	var myutente = u[parseInt(localStorage.utentecorrente)];
	$("#nome").text(myutente.n);
	$("#cognome").text(myutente.c);
	$("#anno").text(myutente.a);
	$("#sesso").text(myutente.s);
}
