// 1. Przypisać zmienne;
// 2. Stworzyć system losujący;
// 3. Wypisać w konsoli wylosowaną rzecz;
// Musi sprawdzić jaki gest wykazał gracz oraz komputer, do każdego przydzielić inne wyniki i punktacje




// var 0 = 'papier';
// var 1 = 'kamien';
// var 2 = 'nozyce';

let pktPlr = 0;
let pktPc = 0;



function spr0(){
    console.log('Wybrałeś Papier');
    let znak = Math.floor(Math.random()*3);

switch(znak) {
    case 0:
        console.log('Komputer wybrał Papier');
        document.getElementById("demo").innerHTML = "Remis";
        console.log('Remis');
        pktPlr++;
        console.log(pktPlr);
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Papier";
        document.getElementById('gestpc').innerHTML = "Papier";
        break;
    case 1:
        console.log('Komputer wybrał Kamień');
        document.getElementById("demo").innerHTML = "Wygrał gracz";
        console.log('Wygrał gracz');
        pktPlr++;
        console.log(pktPlr);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById('gestplr').innerHTML = "Papier";
        document.getElementById('gestpc').innerHTML = "Kamień";
        break;
    case 2:
        console.log('Komputer wybrał Nożyce');
        document.getElementById("demo").innerHTML = "Wygrał komputer";
        console.log('Wygrał komputer');
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Papier";
        document.getElementById('gestpc').innerHTML = "Nożyce";
        break;
    }
}



function spr1(){
    console.log('Wybrałeś Kamień');
    let znak = Math.floor(Math.random()*3);

switch(znak) {
    case 0:
        console.log('Komputer wybrał Papier');
        document.getElementById("demo").innerHTML = "Wygrał komputer";
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Kamień";
        document.getElementById('gestpc').innerHTML = "Papier";
        break;
    case 1:
        console.log('Komputer wybrał Kamień');
        document.getElementById("demo").innerHTML = "Remis";
        console.log('Remis');
        pktPlr++;
        console.log(pktPlr);
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Kamień";
        document.getElementById('gestpc').innerHTML = "Kamień";
        break;
    case 2:
        console.log('Komputer wybrał Nożyce');
        document.getElementById("demo").innerHTML = "Wygrał gracz";
        console.log('Wygrał gracz');
        pktPlr++;
        console.log(pktPlr);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById('gestplr').innerHTML = "Kamień";
        document.getElementById('gestpc').innerHTML = "Nożyce";
        break;
    }
}

function spr2(){
    console.log('Wybrałeś Nożyce');
    let znak = Math.floor(Math.random()*3);

switch(znak) {
    case 0:
        console.log('Komputer wybrał Papier');
        document.getElementById("demo").innerHTML = "Wygrał gracz";
        console.log('Wygrał gracz');
        pktPlr++;
        console.log(pktPlr);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById('gestplr').innerHTML = "Nożyce";
        document.getElementById('gestpc').innerHTML = "Papier";
        break;
    case 1:
        console.log('Komputer wybrał Kamień');
        document.getElementById("demo").innerHTML = "Wygrał komputer";
        console.log('Wygrał komputer');
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Nożyce";
        document.getElementById('gestpc').innerHTML = "Kamień";
        break;
    case 2:
        console.log('Komputer wybrał Nożyce');
        document.getElementById("demo").innerHTML = "Remis";
        console.log('Remis');
        pktPlr++;
        console.log(pktPlr);
        pktPc++;
        console.log(pktPc);
        document.getElementById("pktPlr").innerHTML = pktPlr;
        document.getElementById("pktPc").innerHTML = pktPc;
        document.getElementById('gestplr').innerHTML = "Nożyce";
        document.getElementById('gestpc').innerHTML = "Nożyce";
        break;
    }
}

