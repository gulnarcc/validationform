
let hearts=document.querySelectorAll(".heart")
let favList=document.querySelector("#favList")

let cardtitle=document.querySelectorAll(".card-title")
let  favListModal=document.querySelector("#favListModal")
let cardimgtop=document.querySelectorAll(".card-img-top")
let  Countf=document.querySelector("#countf")
let count=""

for(let i=0; i<hearts.length; i++){

let index=i
hearts[i].addEventListener("click", function(){


 
 this.classList.toggle("like")

favListModal.classList.remove("favanimation")
void favListModal.offsetWidth
favListModal.classList.add("favanimation")

if(this.classList.contains("like")){
 //alert("like")
 count++
 
} else{
  // alert(" not like")
   count--
   if(count<1){
    count=""
   }
}

Countf.innerText=count


let li=document.createElement("li")
let span=document.createElement("span")

span.innerText=count
li.append(span)
favList.append(li)

})



/*  
 favListModal.classList.remove("favanimation");
    void   favListModal.offsetWidth; // reflow, animasiyanı yenidən başlatmaq üçün
    favListModal.classList.add("favanimation");

     
    if(this.classList.contains("like")){
       licreate(index)
       count++
       Countf.innerText=count
    }
   else{
let li = favList.querySelector(`li[data-index="${index}"]`)
      if(li){
        li.remove()
     
       
if(count>1){
  count--
}else{
  count=""
}
Countf.innerText=count

      } */



   }
  


/* 
function licreate(index) {
  let li = document.createElement("li")
   let span = document.createElement("span")
  li.setAttribute("data-index", index)   // vacib!

  let fimg = document.createElement("img")
  fimg.src = cardimgtop[index].src
  span.innerText=cardtitle[index].innerText
  li.append(fimg)
  li.append(span)

  favList.prepend(li)
} */
  


/// alert("hhh")

//cardimgtop[i].src

/* if(this.classList.contains("like")){

this.classList.remove("like")

} else{

  this.classList.add("like")
 
    let li=document.createElement("li")
  cardFavList.append(li)
  let fimg=document.createElement("img")
  fimg.src=cardimgtop[i].src
  li.append(fimg)

}



 */



/* })


} */






/*  clas work

//let hearts=document.getElementsByClassName("heart")
let hearts=document.querySelectorAll(".heart")


for(let i=0; i<hearts.length; i++){

hearts[i].addEventListener("click", function(){

 this.classList.toggle("like")
/// alert("hhh")



})


}
 */


/* let hearts=document.getElementsByClassName("heart")
let cardTitle=document.getElementById("card-title")
let favListModal=document.querySelector("#favListModal")
let favList=document.querySelector("#favList")
let like=document.getElementById("like")



for (let i = 0; i < hearts.length; i++) {

  hearts[i].addEventListener("click", function () {


    this.classList.toggle("like");

  
    if (this.classList.contains("like")) {

      favListModal.classList.remove("favanimation"); 
      void favListModal.offsetWidth; // animation restart hack
      favListModal.classList.add("favanimation");

    }

  });

}
 */


//let index=i
//hearts[index].classList.add("like")

//this.classList.add("like")

/* let box = document.getElementById("favListModal");
console.log(box.offsetWidth); */