

 let caseButton  = document.getElementById("case-button")
 let divs = document.getElementsByClassName("pic-divs")
 let paragraphs = document.querySelectorAll("p")
 let isUpperCase = true
 
 caseButton.onclick = function(){
     if(isUpperCase == true){
         paragraphs.innerHTML = paragraphs.innerHTML.toLowerCase()
         isUpperCase = false
     }
     else{
         paragraphs.innerHTML = paragraphs.innerHTML.toUpperCase()
         isUpperCase = true
     }
 }

