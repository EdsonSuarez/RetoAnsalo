//Variables h3
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

//Variables botones
let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

//Variables Temporales
let letrasTemp = "";
let numerosTemp = "";
let letrasBandera = false;
let numerosBandera = false;
let contadorLetras = 0;
let contadorNumeros = 0;

// Funciones
const btnA1f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 0){
            contadorLetras += 1;
            letrasTemp = "A";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else{
            alert("La letra A ya esta");
        }
    } else {
        if(contadorNumeros === 0){
            contadorNumeros += 1;
            numerosTemp = "1";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else{
            alert("El numero 1 ya esta");
        }
    }

   

};

const btnB2f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 1){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "B";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 1) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra B ya esta");
        }
    } else {
        if(contadorNumeros === 1){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "2";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 1) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 2 ya esta");
        }
    }
};

const btnC3f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 2){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "C";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 2) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra C ya esta");
        }
    } else {
        if(contadorNumeros === 2){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "3";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 2) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 3 ya esta");
        }
    }
};

const btnD4f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 3){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "D";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 3) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra D ya esta");
        }
    } else {
        if(contadorNumeros === 3){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "4";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 3) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 4 ya esta");
        }
    }
};

const btnE5f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 4){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "E";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 4) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra E ya esta");
        }
    } else {
        if(contadorNumeros === 4){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "5";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 4) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 5 ya esta");
        }
    }
};

const btnF6f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 5){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "F";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 5) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra F ya esta");
        }
    } else {
        if(contadorNumeros === 5){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "6";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 5) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 6 ya esta");
        }
    }
};

const btnG7f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 6){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "G";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 6) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra G ya esta");
        }
    } else {
        if(contadorNumeros === 6){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "7";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 6) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 7 ya esta");
        }
    }
};

const btnH8f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 7){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "H";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 7) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra H ya esta");
        }
    } else {
        if(contadorNumeros === 7){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "8";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 7) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 8 ya esta");
        }
    }
};

const btnI9f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 8){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "I";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
        } else if(contadorLetras < 8) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra I ya esta");
        }
    } else {
        if(contadorNumeros === 8){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "9";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 8) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 9 ya esta");
        }
    }
};

const btnJ0f = () => {
    if(letrasBandera == false){
        if(contadorLetras === 9){
            contadorLetras += 1;
            letrasTemp = letrasTemp + "J";
            console.log(letrasTemp);
            letras.innerHTML = letrasTemp;
            letrasBandera = true;
        } else if(contadorLetras < 9) {
            alert("Faltan letras anteriores");
        } else{
            alert("La letra J ya esta");
            
        }
    } else {
        if(contadorNumeros === 9){
            contadorNumeros += 1;
            numerosTemp = numerosTemp + "0";
            console.log(numerosTemp);
            numeros.innerHTML = numerosTemp;
        } else if(contadorNumeros < 9) {
            alert("Faltan numeros anteriores");
        } else{
            alert("El numero 0 ya esta");
        }
    }
};


// Onclick
btnA1.onclick = () => {
    btnA1f();
};

btnB2.onclick = () => {
    btnB2f();
};

btnC3.onclick = () => {
    btnC3f();
};

btnD4.onclick = () => {
    btnD4f();
};
btnE5.onclick = () => {
    btnE5f();
};
btnF6.onclick = () => {
    btnF6f();
};
btnG7.onclick = () => {
    btnG7f();
};
btnH8.onclick = () => {
    btnH8f();
};
btnI9.onclick = () => {
    btnI9f();
};
btnJ0.onclick = () => {
    btnJ0f();
};
