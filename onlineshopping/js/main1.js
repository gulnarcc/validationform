let hearts=document.getElementsByClassName("heart")
let cardTitle=document.getElementById("card-title")
let favListModal=document.querySelector("#favListModal")
let favList=document.querySelector("#favList")
let like=document.getElementById("like")

//let index=i
//hearts[index].classList.add("like")

//this.classList.add("like")

/* let box = document.getElementById("favListModal");
console.log(box.offsetWidth); */

for (let i = 0; i < hearts.length; i++) {

  hearts[i].addEventListener("click", function () {

    // like class toggle
    this.classList.toggle("like");

    // əgər like olundusa animasiya işlə
    if (this.classList.contains("like")) {

      favListModal.classList.remove("favanimation"); 
      void favListModal.offsetWidth; // animation restart hack
      favListModal.classList.add("favanimation");

    }

  });

}

