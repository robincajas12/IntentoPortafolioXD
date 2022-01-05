let genshin = document.getElementById("genshin");
let spotify = document.getElementById("Spotify");
let antiSocial = document.getElementById("antiSocial");
let tencent = document.getElementById("Tencent");
let osu = document.getElementById("Osu");
let menu = document.getElementById("menu");
function genshinOpen()
{
    genshin.style.display = "inline-block";
    menuClose()
}
function genshinClose()
{
    genshin.style.display = "none";
    menuOpen()
}
function spotifyOpen()
{
    spotify.style.display = "inline-block";
    menuClose()
}
function spotifyClose()
{
    spotify.style.display = "none";
    menuOpen()
}
function antiSocialOpen()
{
    antiSocial.style.display = "inline-block";
    menuClose()

}
function antiSocialClose()
{
    antiSocial.style.display = "none";
    menuOpen()
}
function tencentOpen()
{
    tencent.style.display = "inline-block";
    menuClose()
}
function tencentClose()
{
    tencent.style.display = "none";
    menuOpen()
}
function osuOpen()
{
    osu.style.display = "inline-block";
    menuClose()

}
function osuClose()
{
    osu.style.display = "none";
    menuOpen()
}
function menuOpen()
{
    menu.style.display = "inline-block";
}
function menuClose()
{
    menu.style.display = "none";
}
let on = document.getElementById("whitemode");
let off = document.getElementById("blackmode");
let header = document.getElementById("header");
let body = document.getElementById("body");

function onMode(){
    off.style.display = "inline-block";
    on.style.display = "none";
    header.style.backgroundColor = "black";
   // body.style.backgroundColor = "black";
   // body.style.color = "whites";

}
