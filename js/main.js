//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Federico Sabato - CoderHouse - Proyecto
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const multiply= (x,y) => {return (x*y)};
const cryptos= []; //Creo el Array de las crypto
const pairs= []; //Creo el Array de los pares

const wallet= []; //Creo la wallet

let inputMon= 0; //Dinero Ingresado
let selectedPair; //Par de moneda utilizado dependiendo del pais o el dinero a ingresar

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Name: Nombre
//Acr: Acronimo
//Price: Precio de Mercado
//State: Estado -> 1: En Alza
//                 2: En Baja

class crypto{
    constructor(id,name,acr,price,state){
        this.id=id;
        this.name=name;
        this.acronym=acr;
        this.price= price;
        this.state=state;
    }
}
class pair{
    constructor(id,name,acr,price){
        this.id=id;
        this.name=name;
        this.acronym=acr;
        this.price= price;
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Creo los objetos para crypto
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let btc = new crypto(1,"Bitcoin","$BTC",54128.93,1);
let eth = new crypto(2,"Ethereum","$ETH",4140.45,2);
let ada = new crypto(3,"Cardano","$ADA",1.63,2);
let sol = new crypto(4,"Solana","$SOL",197.81,1);
let shiba = new crypto(5,"Shiba INU","$SHIBA",0.00004,2);
let alpha = new crypto(6,"Alpha Finance Lab","$ALPHA",0.6873,1);
let cake = new crypto(7,"PancakeSwap","$CAKE",12.60,1);
let doge = new crypto(8,"Dogecoin","$DOGE",0.1274,2);
let link = new crypto(9,"Chainlink","$LINK",19.34,1);
let zen = new crypto(10,"Horizen","$ZEN",67.86,2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Creo los objetos para pair
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let usd = new pair(1,"Dolar Estadounidense","$USD",1);
let ars = new pair(2,"Peso Argentino","$ARS",102.23);
let clp = new pair(3,"Peso Chileno","$CLP",865.42);
let brl = new pair(4,"Real Brasilero","$BRL",5.67);
let mxn = new pair(5,"Peso Mexicano","$MXN",5.67);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Agrego todas las crypto a un Array = cryptos[]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Agrego todas los pares a un Array = pairs[]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

pairs.push(usd);
pairs.push(ars);
pairs.push(clp);
pairs.push(brl);
pairs.push(mxn);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Creo las constantes para mostrar que cryptos estan en baja o en alza
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const downMarket = cryptos.filter(crypto => crypto.state === 2);
const upMarket = cryptos.filter(crypto => crypto.state === 1);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Muesto en consola las crypto en baja
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log(downMarket);
console.log(downMarket[2].name);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cargo las crypto al HTML
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    $("#cryptoGrid").append(`

                        <div class="cryptoDesc">
                        <img src="Images/CryptoLogos/${cryptos[index].name}.png" alt="Crypto 1" width="200px" height="200px">
                        <h3 id="${cryptos[index].name}">${cryptos[index].name}</h3>
                        <h4 >${cryptos[index].price}</h4>
                        <button id="sellButton" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#sell${cryptos[index].id}Modal">VENDER</button>
                        <button id="buyButton" class="btn btn-success"data-bs-toggle="modal" data-bs-target="#buy${cryptos[index].id}Modal">COMPRAR</button>

                        <!--SELL MODAL-->

                        <div class="modal fade" id="sell${cryptos[index].id}Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Vender ${cryptos[index].name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">${cryptos[index].acronym}</span>
                                    <input type="text" class="form-control sellQuantity"> <!--sellQuantity tendra la cantidad que quiere vender-->
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">${localStorage.getItem("Currency",selectedPair)}</span>
                                    <input type="text" class="form-control sellQuantityPrice"> <!--sellQuantityPrice tendra el valor de lo que quiere vender-->
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Aceptar</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <!--BUY MODAL-->

                        <div class="modal fade" id="buy${cryptos[index].id}Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Comprar ${cryptos[index].name}:</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">${cryptos[index].acronym}</span>
                                <input type="text" class="form-control buyQuantity"> <!--buyQuantity tendra la cantidad que quiere comprar-->
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">${localStorage.getItem("Currency",selectedPair)}</span>
                                    <input type="text" class="form-control sellQuantityPrice"> <!--buyQuantityPrice tendra el valor de lo que quiere comprar-->
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Aceptar</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        </div>`
                        );
    
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cargo las crypto y los pares al los select del FORM
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < cryptos.length; index++) {

    $("#select1").append(`
        <option value="${index+1}">${cryptos[index].name}</option>
    `);

}
for (let index = 0; index < pairs.length; index++) {

    $("#select2").append(`
        <option value="${index+1}">${pairs[index].acronym}</option>
    `);

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Botones de Venta y Compra para ultimas actualizaciones
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(function(){

    $(".btn-danger").on('click',function(){  //Boton VENTA
        let aux = $(this).parent().children();
        console.log("Vender "+aux[1].id);
    })
});

$(function(){

    $(".btn-success").on('click',function(){  //Boton COMPRA
        let aux = $(this).parent().children();
        console.log("Comprar "+aux[1].id);
    })
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Modal de Ingreso de Dinero
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for (let index = 0; index < pairs.length; index++) {

    $(".inputMoneyAcr").append(`
        <option value="${pairs[index].acronym}">${pairs[index].acronym}</option>
    `);

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Boton de Ingresar Dinero
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$("#depositMoneyOk").on('click',function(){    //Boton Aceptar en el modal de Ingreso de Dinero


    inputMon = $("#inputMoneyQuantity").val();
    selectedPair = $("#inputMoneyPair").val();
    localStorage.setItem("Money",inputMon);
    localStorage.setItem("Currency",selectedPair);
    location.reload(true); //Refrescamos la pagina para que se cambie el par

})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Dinero Ingresado
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$("#realMoneyQuantity").append(`

        <h5 class="m-4">${localStorage.getItem("Currency",selectedPair)}${localStorage.getItem("Money",inputMon)}</h5> <!--Dinero ya ingresado-->

`);