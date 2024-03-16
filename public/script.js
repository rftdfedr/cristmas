function change_theme(){
document.body.classList.toggle('dark-theme')   

switch(document.cookie){
case "":
    console.log(123)
    document.cookie="theme=dark; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/;";
    break;
case "theme=dark;":
    document.cookie="theme=light; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/;";
    break;
case "theme=light;":
    document.cookie="theme=dark; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/;";
    break;
}
}


document.querySelector(".change-theme-icon").addEventListener("click", change_theme)



if (document.cookie == "theme=dark;"){
    document.body.classList.add('dark-theme');
}

function mobile_menu(){
    document.querySelector("nav").classList.toggle("mobile-menu")
}

document.querySelector(".mobile-menu-button").addEventListener("click", mobile_menu)
document.querySelector(".mobile-menu-button-off").addEventListener("click", mobile_menu)



function change_newgift(){

}

document.querySelector(".b1").addEventListener("click",)
document.querySelector(".b2").addEventListener("click",)
document.querySelector(".b3").addEventListener("click",)