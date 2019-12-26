//select the element
const got = document.querySelector('.got');
const med = document.querySelector('.med');
const every = document.querySelector('.every');
const kry = document.querySelector('.kry');
const eye = document.querySelector('.eye');


const hide = document.querySelector('.hide');
const hides = document.querySelector('.hides');

const hideOne = document.querySelector('.hide-one');
const hidesOne = document.querySelector('.hides-one');

const hideTwo = document.querySelector('.hide-two');
const hideThree = document.querySelector('.hide-three');
const hideFour = document.querySelector('.hide-four');
const displayImage = document.querySelectorAll('.display-image');

// if (!("ontouchstart" in document.documentElement)) {
// document.documentElement.className += " no-touch";
// }

// mouseleave event when you hover off the images on the portfolio
displayImage.forEach(el => {
    el.addEventListener('mouseleave', (e) => {
        e.target.style.transition = "all 1.5s ease-out";
    })
})




//loop through all the icons and apply the event listener to it when clicked
// let elem = [got, med, every, kry, eye,];




// document.getElementById("myDIV").style.animation = "mynewmove 4s 2";



// Add event listeners
got.addEventListener('click', function (e){
    if (hide.style.display === "none") {
        hide.style.display = "block";
        hide.style.display = "grid";
        hide.style.animation = "movetoright 2.2s";
        hideOne.style.display = "none"; 
        hideTwo.style.display = "none"; 
        hideThree.style.display = "none"; 

        
    } else {
        hide.style.display = "none"; 
    }
});

// for writings
got.addEventListener('click', function (e){
    if (hides.style.display === "none") {
        hides.style.display = "block";
        hides.style.display = "grid";
        hides.style.animation = "movetoright 2.2s";
        hideOne.style.display = "none"; 
        hidesOne.style.display = "none"; 

        hideTwo.style.display = "none"; 
        hideThree.style.display = "none"; 

        
    } else {
        hides.style.display = "none"; 
    }
});


med.addEventListener('click', function(e) {
     if (hideOne.style.display === "none") {
        hideOne.style.display = "block";
        hideOne.style.display = "grid";
        hideOne.style.animation = "movetoleft 2.2s";
         hide.style.display = "none"; 
         hides.style.display = "none";  
         
         hideTwo.style.display = "none"; 
         hideThree.style.display = "none";  
         hideFour.style.display = "none";  
         
         

        
    } else {
        hideOne.style.display = "none"; 
    }
})


med.addEventListener('click', function(e) {
     if (hidesOne.style.display === "none") {
        hidesOne.style.display = "block";
        hidesOne.style.display = "grid";
        hidesOne.style.animation = "movetoleft 2.2s";
         hide.style.display = "none"; 
         hides.style.display = "none";  
         
         hideTwo.style.display = "none"; 
         hideThree.style.display = "none";  
         hideFour.style.display = "none";  
         
         

        
    } else {
        hidesOne.style.display = "none"; 
    }
})



every.addEventListener('click', function(e) {
      if (hideTwo.style.display === "none") {
        hideTwo.style.display = "block";
        hideTwo.style.display = "grid";
        hideTwo.style.animation = "movetoright 2.2s";
          hide.style.display = "none";
          hides.style.display = "none";  
          
          hideOne.style.display = "none";
          hidesOne.style.display = "none";  
          
        hideFour.style.display = "none"; 
        hideThree.style.display = "none"; 
          
          
          

        
    } else {
        hideTwo.style.display = "none"; 
    }
})


kry.addEventListener('click', (e) =>{
      if (hideThree.style.display === "none") {
        hideThree.style.display = "block";
        hideThree.style.display = "grid";
        hideThree.style.animation = "movetoleft 2.2s";
          hide.style.display = "none";
          hides.style.display = "none";  
          
          hideOne.style.display = "none"; 
          hidesOne.style.display = "none";  
          
        hideTwo.style.display = "none";  
        hideFour.style.display = "none";  
          
        

        
    } else {
        hideThree.style.display = "none"; 
    }
})


eye.addEventListener('click', (e)=> {
       if (hideFour.style.display === "none") {
        hideFour.style.display = "block";
        hideFour.style.display = "grid";
        hideFour.style.animation = "movetoright 2.2s";
           hide.style.display = "none";
           hides.style.display = "none";  
           
           hideOne.style.display = "none";
           hidesOne.style.display = "none";  
           
        hideTwo.style.display = "none";  
        hideThree.style.display = "none";  
          
        

        
    } else {
        hideFour.style.display = "none"; 
    }
})

