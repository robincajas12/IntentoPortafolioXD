let menubottom1 = document.getElementById("menu");
let settingbottom = document.getElementById("setting");
let modOscuro = document.getElementById("body");
let img_Fondo = document.getElementById("img-fondo");
let osuplay = document.getElementById("osu");
let b = "20vw";
let a = "51vw";
function click1(){
        menubottom1.style.transition="1s";
        menubottom1.style.left=b;
        menubottom1.style.zIndex="99";

}
function exit(){
    menubottom1.style.left=a;

}
function setting1(){
    exit();
    settingbottom.style.left="0vw";
}
function setting2(){
    settingbottom.style.left="-50vw";
}
function oscuro(){
    modOscuro.style.backgroundColor="black";
}
function claro(){
    modOscuro.style.backgroundColor="white";
}

/*--------------------------------------------------------*/
