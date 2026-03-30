
let hearts=document.querySelectorAll(".heart")
let favList=document.querySelector("#favList")

let cardtitle=document.querySelectorAll(".card-title")
let  favListModal=document.querySelector("#favListModal")
let cardimgtop=document.querySelectorAll(".card-img-top")
let  Countf=document.querySelector("#countf")
let count=0

let  cart=document.querySelector("#card")

cart.addEventListener("click", function(){

//alert("added")
cartlistModal.classList.add("blockwidth")


})



for(let i=0; i<hearts.length; i++){

let index=i


hearts[i].addEventListener("click", function(){


 this.classList.toggle("like")

favListModal.classList.remove("favanimation")
void favListModal.offsetWidth
favListModal.classList.add("favanimation")

if(this.classList.contains("like")){

 count++
CreateLi(index)
 
} else{
let li = favList.querySelector(`li[data-index="${index}"]`)
if(li){
  li.remove()
}

  count--
   if(count<1){
    count=""



   }

/* let li=favList.querySelector(`[data-index="${i}"]`)
if(li){
li.remove()
} */



}

Countf.innerText=count


function CreateLi(index){

  let li=document.createElement("li")
  let span=document.createElement("span")
  let img=document.createElement("img")
  li.setAttribute("data-index", index)
  img.src=cardimgtop[index].src
span.innerText=cardtitle[index].innerText
    li.append(img)
  li.append(span)

favList.prepend(li)
}




/* function CreateLI(index){

let li=document.createElement("li")
let span=document.createElement("span")
let img=document.createElement("img")
li.setAttribute("data-index", index) 


img.src=cardimgtop[index].src
span.innerText=cardtitle[index].innerText
li.append(img)
li.append(span)
favList.prepend(li)

} */




})



}


let cartlistModal=document.querySelector("#cartlistModal")
let tocart=document.querySelectorAll(".tocart")
let cardcountspan=document.querySelector("#cardcount")
let countc=0


for(let i=0; i<tocart.length; i++){

let index=i


tocart[i].addEventListener("click", function(){


 //alert("added")




 this.classList.toggle("tocartadded")

cartlistModal.classList.remove("favanimation")
void cartlistModal.offsetWidth
cartlistModal.classList.add("favanimation")


if(this.classList.contains("tocartadded")){

  countc++
  cardcountspan.innerText=countc
  this.innerText="added"

} else{
    countc--
  cardcountspan.innerText=countc
  this.innerText="cart"
}
 


})
}


/* close farovite page */
let fav=document.querySelector("#fav")
  
fav.addEventListener("click",function(){
 

this.classList.toggle("like")

favListModal.classList.toggle("blockwidth")
closef.classList.add("block")

})



let closef=document.querySelector("#closef")
closef.addEventListener("click",function(){

favListModal.classList.remove("blockwidth")


})