//Federico Sabato
//Comienzo de Scripts
localStorage.clear;
let flag=false;
let cashInput;
let getMoney = document.getElementById("depositMoney");
getMoney.onclick =() => {flag=true};
if(flag=true){
    cashInput= prompt("¿Cuantos USD desea ingresar?");
}
localStorage.setItem("cash",parseInt(cashInput));
const multiply= (x,y) => {return (x*y)};
const cryptos= []; //Creo el Array de las crypto
const pairs= []; //Creo el Array de los pares

const wallet= []; //Creo la wallet

//-----------------------------------------------
//Name: Nombre
//Acr: Acronimo
//Price: Precio de Mercado
//State: Estado -> 1: En Alza
//                 2: En Baja
class crypto{
    constructor(name,acr,price,state){
        this.name=name;
        this.acronym=acr;
        this.price= price;
        this.state=state;
    }
}
class pair{
    constructor(name,acr,price){
        this.name=name;
        this.acronym=acr;
        this.price= price;
    }
}
//-----------------------------------------------
//-----------------------------------------------
//Creo los objetos para crypto
let btc = new crypto("Bitcoin","$BTC",54128.93,1);
let eth = new crypto("Ethereum","$ETH",4140.45,2);
let ada = new crypto("Cardano","$ADA",1.63,2);
let sol = new crypto("Solana","$SOL",197.81,1);
let shiba = new crypto("Shiba INU","$SHIBA",0.00004,2);
let alpha = new crypto("Alpha Finance Lab","$ALPHA",0.6873,1);
let cake = new crypto("PancakeSwap","$CAKE",12.60,1);
let doge = new crypto("Dogecoin","$DOGE",0.1274,2);
let link = new crypto("Chainlink","$LINK",19.34,1);
let zen = new crypto("Horizen","$ZEN",67.86,2);
//-----------------------------------------------
//-----------------------------------------------
//Creo los objetos para pair
let usd = new pair("Dolar Estadounidense","$USD",1);
let ars = new pair("Peso Argentino","$ARS",102.23);
let clp = new pair("Peso Chileno","$CLP",865.42);
let brl = new pair("Real Brasilero","$BRL",5.67);
let mxn = new pair("Peso Mexicano","$MXN",5.67);
//-----------------------------------------------
//-----------------------------------------------
//Obtengo los valores para el HTML de cryptos y pares
document.getElementById("title1").innerHTML=btc.name; 
document.getElementById("price1").innerHTML=btc.price;
document.getElementById("title2").innerHTML=eth.name;
document.getElementById("price2").innerHTML=eth.price;
document.getElementById("title3").innerHTML=ada.name;
document.getElementById("price3").innerHTML=ada.price;
document.getElementById("title4").innerHTML=sol.name;
document.getElementById("price4").innerHTML=sol.price;
document.getElementById("title5").innerHTML=shiba.name;
document.getElementById("price5").innerHTML=shiba.price;
document.getElementById("title6").innerHTML=alpha.name;
document.getElementById("price6").innerHTML=alpha.price;
document.getElementById("title7").innerHTML=cake.name;
document.getElementById("price7").innerHTML=cake.price;
document.getElementById("title8").innerHTML=doge.name;
document.getElementById("price8").innerHTML=doge.price;
document.getElementById("title9").innerHTML=link.name;
document.getElementById("price9").innerHTML=link.price;
document.getElementById("title10").innerHTML=zen.name;
document.getElementById("price10").innerHTML=zen.price;

document.getElementById("cr1").innerHTML=btc.name; 
document.getElementById("cr2").innerHTML=eth.name; 
document.getElementById("cr3").innerHTML=ada.name; 
document.getElementById("cr4").innerHTML=sol.name; 
document.getElementById("cr5").innerHTML=shiba.name; 
document.getElementById("cr6").innerHTML=alpha.name; 
document.getElementById("cr7").innerHTML=cake.name; 
document.getElementById("cr8").innerHTML=doge.name; 
document.getElementById("cr9").innerHTML=link.name; 
document.getElementById("cr10").innerHTML=zen.name; 

document.getElementById("pair1").innerHTML=usd.acronym;
document.getElementById("pair2").innerHTML=ars.acronym;
document.getElementById("pair3").innerHTML=clp.acronym;
document.getElementById("pair4").innerHTML=brl.acronym;
document.getElementById("pair5").innerHTML=mxn.acronym;
//-----------------------------------------------
//-----------------------------------------------
//Agrego todas las crypto a un Array 
cryptos.push(btc);
cryptos.push(eth);
cryptos.push(ada);
cryptos.push(sol);
cryptos.push(shiba);
cryptos.push(alpha);
cryptos.push(cake);
cryptos.push(doge);
cryptos.push(link);
cryptos.push(zen);
//-----------------------------------------------
//-----------------------------------------------
//Agrego todas los pares a un Array 
pairs.push(usd);
pairs.push(ars);
pairs.push(clp);
pairs.push(brl);
pairs.push(mxn);
//-----------------------------------------------
//-----------------------------------------------
//Agrego cryptos y pares al form
/*
let cryptContainer = document.createElement("div");
cryptContainer.innerHTML =*/
//-----------------------------------------------
//-----------------------------------------------
//Creo las constantes para mostrar que cryptos estan en baja o en alza
const downMarket = cryptos.filter(crypto => crypto.state === 2);
const upMarket = cryptos.filter(crypto => crypto.state === 1);
//Muesto en consola las crypto en baja
console.log(downMarket);
console.log(downMarket[2].name);

/*PRUEBA
for (let index = 0; index < cryptos.lenght; index++) {  
    if(cryptos[index].state==1){
        let up = document.createElement()
    }
    else{

    }
}

for (let i = 0; i < cryptos.lenght; i++) {

    
    
}
let cont = document.createElement("section");
cont.innerHTML= `<h2>${(cryptos[1].name)}</h2>`;
document.message.appendChild(cont);
*/

//Botones de Venta y Compra para ultimas actualizaciones
let sellBtn1 = document.getElementById("sellButton1");
let sellBtn2 = document.getElementById("sellButton2");
let sellBtn3 = document.getElementById("sellButton3");
let sellBtn4 = document.getElementById("sellButton4");
let sellBtn5 = document.getElementById("sellButton5");
let sellBtn6 = document.getElementById("sellButton6");
let sellBtn7 = document.getElementById("sellButton7");
let sellBtn8 = document.getElementById("sellButton8");
let sellBtn9 = document.getElementById("sellButton9");
let sellBtn10 = document.getElementById("sellButton10");

let buyBtn1 = document.getElementById("buyButton1");
let buyBtn2 = document.getElementById("buyButton2");
let buyBtn3 = document.getElementById("buyButton3");
let buyBtn4 = document.getElementById("buyButton4");
let buyBtn5 = document.getElementById("buyButton5");
let buyBtn6 = document.getElementById("buyButton6");
let buyBtn7 = document.getElementById("buyButton7");
let buyBtn8 = document.getElementById("buyButton8");
let buyBtn9 = document.getElementById("buyButton9");
let buyBtn10 = document.getElementById("buyButton10");

let sellBuy; 

sellBtn1.onclick =() => {prompt("¿Qué cantidad de " + btc.name + " desea vender?")};
sellBtn2.onclick =() => {prompt("¿Qué cantidad de " + eth.name + " desea vender?")}
sellBtn3.onclick =() => {prompt("¿Qué cantidad de " + ada.name + " desea vender?")}
sellBtn4.onclick =() => {prompt("¿Qué cantidad de " + sol.name + " desea vender?")}
sellBtn5.onclick =() => {prompt("¿Qué cantidad de " + shiba.name + " desea vender?")}
sellBtn6.onclick =() => {prompt("¿Qué cantidad de " + alpha.name + " desea vender?")}
sellBtn7.onclick =() => {prompt("¿Qué cantidad de " + cake.name + " desea vender?")}
sellBtn8.onclick =() => {prompt("¿Qué cantidad de " + doge.name + " desea vender?")}
sellBtn9.onclick =() => {prompt("¿Qué cantidad de " + link.name + " desea vender?")}
sellBtn10.onclick =() => {prompt("¿Qué cantidad de " + zen.name + " desea vender?")}

buyBtn1.onclick =() => {prompt("¿Qué cantidad de " + btc.name + " desea comprar?")}
buyBtn2.onclick =() => {prompt("¿Qué cantidad de " + eth.name + " desea comprar?")}
buyBtn3.onclick =() => {prompt("¿Qué cantidad de " + ada.name + " desea comprar?")}
buyBtn4.onclick =() => {prompt("¿Qué cantidad de " + sol.name + " desea comprar?")}
buyBtn5.onclick =() => {prompt("¿Qué cantidad de " + shiba.name + " desea comprar?")}
buyBtn6.onclick =() => {prompt("¿Qué cantidad de " + alpha.name + " desea comprar?")}
buyBtn7.onclick =() => {prompt("¿Qué cantidad de " + cake.name + " desea comprar?")}
buyBtn8.onclick =() => {prompt("¿Qué cantidad de " + doge.name + " desea comprar?")}
buyBtn9.onclick =() => {prompt("¿Qué cantidad de " + link.name + " desea comprar?")}
buyBtn10.onclick =() => {prompt("¿Qué cantidad de " + zen.name + " desea comprar?")}

console.log(sellBuy);
