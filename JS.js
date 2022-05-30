
let picture = document.getElementById("picture");
let wartosc = document.querySelector("select");
let ilosc = document.getElementsByClassName("wpisz2")[0];
let koszt = document.getElementsByClassName("wpisz2")[1];
function fun(){
    if(wartosc.value == 0){
        document.getElementById("picture").src = ""
    } else if(wartosc.value == 100){
        document.getElementById("picture").src = "kostka_rubika.png"
    }else if(wartosc.value == 150){
        document.getElementById("picture").src = "kostka_gun.png"
    }else if(wartosc.value == 400){
        document.getElementById("picture").src = "kostka_go.png"
    }else if(wartosc.value == 500){
        document.getElementById("picture").src = "kostka_man.png"
    }
}
fun()
function zegarsko(){
    let data = new Date();
    let godzina = data.getHours();
    let minuty = data.getMinutes();
    let sekundy = data.getSeconds();

    if (minuty < 10) minuty = "0" + minuty;
    if (sekundy < 10) sekundy = "0" + sekundy;


    let pokazDate =godzina + ':' + minuty + ':' + sekundy;
    document.getElementById("zegar").innerHTML = pokazDate;

    setTimeout(zegarsko, 1000);
}
zegarsko()
function cena(){
    addEventListener('change', () =>{
        koszt.value = ilosc.value*wartosc.value;
    })
}
cena()
function kupiono(){
        if(wartosc.value == 0){
            alert("Nie wybrano kostki");
        } else if(ilosc.value == 0){
            alert("Podaj ilość");
        } else if(ilosc.value <0){
            alert("Podaj dodatnią wartość")
        } else {
        if(wartosc.value == 100){
            alert("Kupiono: \n"+"Kostka Rubika"+"\n"+"Ilość: "+ilosc.value+"\n"+"Koszt: "+koszt.value+"zł");
        } else if(wartosc.value == 150){
            alert("Kupiono: \n"+"Kostka GUN"+"\n"+"Ilość: "+ilosc.value+"\n"+"Koszt: "+koszt.value+"zł");
        } else if(wartosc.value == 400){
            alert("Kupiono: \n"+"Kostka GO"+"\n"+"Ilość: "+ilosc.value+"\n"+"Koszt: "+koszt.value+"zł");
        } else if(wartosc.value == 500){
            alert("Kupiono: \n"+"Kostka man-x"+"\n"+"Ilość: "+ilosc.value+"\n"+"Koszt: "+koszt.value+"zł");
        }

}
}

// function koszyk(){

//     let kosz = document.getElementsByClassName("kosz")[0];
//     kosz.getElementsByClassName.

// }
