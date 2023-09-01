const button = document.querySelector('.burger');
const burgerline = document.querySelectorAll('.burgerline');

const collapse = document.querySelector('.collapse');
const navactive = document.querySelector('.nav');
const logo = document.querySelector('.logo')





button.addEventListener('click', () => {
    collapse.classList.toggle('resp-nav');
    navactive.classList.toggle('nav-active');
    burgerline[1].classList.toggle('cancel');
    burgerline[2].classList.toggle('cancel');

    burgerline[0].classList.toggle('cancel');

    if (logo.style.display === 'none') {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }


})





document.addEventListener('DOMContentLoaded', function () {


    const tl = gsap.timeline();

    tl.from('.text', {
        y: -200,
        duration: 1
    })

    if (window.innerWidth > 768) {
        tl.from('.collapse li', {
            stagger: .2,
            y: -100,
            ease: 'easeInOut',

        })
    }

    tl.to('.text-after',
        {
            width: '100%',
            duration: 1,
            ease: 'easeInOut',

            onComplete: () => {
                tl.to('.text-after', {
                    width: 0,
                    duration: 1.5

                })
            }


        })
        gsap.from('.detail',{
            color:'transparent',
            scale:1.4,
            duration:1.5,
            ease:Expo.easeInOut
        })
    
         if(window.innerWidth < 700){

            gsap.from('.detail',{

                color:'transparent',
                scale:1.5,
                duration:1.5,
               
            })

         }


     gsap.to(['.img'],{

        
        width:'100%',
        ease:'Expo.easeInOut',
        duration:1,
        onComplete:()=>{
            gsap.to('#textanimate',{
                width:'100%',
                x:0,
                duration:1
                
            
   
            })
        }
        
     })   

     gsap.to('.iconimg',{
        width:'100%',
        stagger:3,
        ease:Expo.easeInOut,
        duration:2,
        repeat:-1,
     
     })



     const text = "WE BUILD WEB OF TOMORROW. TURNING IDEAS INTO INTERACTIVE EXPERIENCES THROUGH MODERN ANIMATIONS. IN A WORLD OF BROWSERS, WE MAKE YOUR WEBSITE STAND OUT.";
    
     const animationTextElement = document.getElementById("textanimate");
     const words = text.split(" ");
     let currentIndex = 0;
   
     function animateText() {
       if (currentIndex < words.length) {
         const word = words[currentIndex];
         let letterIndex = 0;
   
         function addLetter() {
           if (letterIndex < word.length) {
             animationTextElement.textContent += word[letterIndex];
             letterIndex++;
             setTimeout(addLetter, 50); 
           } else {
             animationTextElement.textContent += " ";
             currentIndex++;
             setTimeout(animateText, 50); 
           }
         }
   
         addLetter();
       }
     }
   setTimeout(animateText,3000) ;  
   
   
  
       


 








})

// JavaScript code to handle the scrolling effect



