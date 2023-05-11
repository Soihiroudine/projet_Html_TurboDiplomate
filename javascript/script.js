let bar = document.querySelector("img.headerImageBar");

bar.addEventListener("click", function(){
    let menuHeader = document.querySelector("div.header");
    if(menuHeader.style.display == "flex"){
        menuHeader.style.display = "none";
    }else{
        menuHeader.style.display = "flex";
    }
});