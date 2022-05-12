const MENU = document.querySelectorAll(".menu li");
const CARDS = document.querySelectorAll(".cardContent");

MENU.forEach(menuItem =>{
    menuItem.addEventListener("mouseover", function(){
        menuItem.style.backgroundColor="rgb(66, 75, 80)";
        menuItem.firstElementChild.setAttribute("src", `${menuItem.getAttribute("data-name")}white.png`);
        menuItem.addEventListener("mouseout", function(){
            menuItem.style.backgroundColor="transparent";
            menuItem.firstElementChild.setAttribute("src", `${menuItem.getAttribute("data-name")}.png`);
        })

    })
}) 

CARDS.forEach(card =>{
    card.addEventListener("mouseover", function(){
        card.style.position
    })
})

