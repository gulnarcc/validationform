

let hearts = document.getElementsByClassName("heart");
let favModal = document.getElementById("favModal");
let cartFavTitile = document.getElementsByClassName("card-title");
let FavList = document.getElementById("cardFavList");

let FavCount = document.getElementById("favCount");
let favCounter = 0; // <- favorit sayını saxlayan dəyişən

let cardImgTop=document.getElementsByClassName("card-img-top");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function() {
    this.classList.toggle("like"); // class əlavə / sil

   favModal.classList.remove("fadeOut");
    void favModal.offsetWidth; // reflow, animasiyanı yenidən başlatmaq üçün
    favModal.classList.add("fadeOut");
  

    let cardImg=cardImgTop[i].src;
    let productName = cartFavTitile[i].innerText;

    // listdə olub olmadığını yoxla
    let existingLi = FavList.querySelector(`li[data-name="${productName}"]`);

    if (this.classList.contains("like")) {
      // like varsa → əlavə et (əgər listdə yoxdursa)
      if (!existingLi) {
        let li = document.createElement("li");

let Img = document.createElement("img");
Img.src = cardImg;
Img.style.width = "60px";

let span = document.createElement("span");
span.innerText = productName;

li.appendChild(Img);
li.appendChild(span);

      
        
        li.setAttribute("data-name", productName);
        FavList.appendChild(li);
        
 // say artır
        favCounter++;
        FavCount.innerHTML = favCounter;

      }
    } else {
      // like yoxdursa → sil
      if (existingLi) {
        existingLi.remove();
      

        
        // say azalt
        favCounter--;
        FavCount.innerHTML = favCounter;
      }
    }

  });
}


let myFav=document.getElementById("fav");

myFav.addEventListener("click", myFavFunction);

function myFavFunction(){
   favModal.classList.toggle('displayblock')
}