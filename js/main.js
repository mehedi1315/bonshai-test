// menu section
const btn = document.querySelector(".mobile-menu-btn")
const menu = document.querySelector(".mobile-menu")

btn.addEventListener("click", function(){
    menu.classList.toggle("hidden")
})

const btnm = document.querySelector("#btn5")
  const subMenu = document.querySelector("#sub-menu")
  const drop = document.querySelectorAll("#drop")

  btnm.addEventListener("click", function(){
      subMenu.classList.toggle("hidden")
  })
  drop.forEach(value => {
      value.addEventListener("mouseover", function(){
          subMenu.classList.remove("hidden")
      })
  })