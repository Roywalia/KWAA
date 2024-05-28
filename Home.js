function redHome(){
    window.location.href = "Home.html";
}


const btn1 = document.querySelector('.main-tag-btn-1');
const text1 = document.querySelector('.main-tag-text-1');
const btn2 = document.querySelector('.main-tag-btn-2');
const text2 = document.querySelector('.main-tag-text-2');
const btn3 = document.querySelector('.main-tag-btn-3');
const text3 = document.querySelector('.main-tag-text-3');

btn1.addEventListener('mouseover', function() {
    text1.style.display = 'block';
});
btn1.addEventListener('mouseout', function() {
    text1.style.display = 'none';
});

btn2.addEventListener('mouseover', function() {
    text2.style.display = 'block';
});
btn2.addEventListener('mouseout', function() {
    text2.style.display = 'none';
});

btn3.addEventListener('mouseover', function() {
    text3.style.display = 'block';
});
btn3.addEventListener('mouseout', function() {
    text3.style.display = 'none';
});





function moveTag2() {
    var mainTag1 = document.getElementById('mainTag1');
    var mainTag3 = document.getElementById('mainTag3');
    var mainline = document.getElementById('line');
    var mainImg1 = document.getElementById('main-img-1');
    var mainImg3 = document.getElementById('main-img-3');
    mainTag1.classList.add('move-left');
    mainImg1.classList.add('move-left');
    mainTag3.classList.add('move-right');
    mainImg3.classList.add('move-right');
    mainline.classList.add('i-m');
}

function resetTag2() {
    var mainTag1 = document.getElementById('mainTag1');
    var mainTag3 = document.getElementById('mainTag3');
    var mainline = document.getElementById('line');
    var mainImg1 = document.getElementById('main-img-1');
    var mainImg3 = document.getElementById('main-img-3');
    mainTag1.classList.remove('move-left');
    mainImg1.classList.remove('move-left');
    mainTag3.classList.remove('move-right');
    mainImg3.classList.remove('move-right');
    mainline.classList.remove('i-m');
}



let lastScrollTop = 0;
let brightness = 0;
const motoElement = document.querySelector('.moto');
const h1Element = document.querySelector('.moto h1');

// Hide .moto initially
motoElement.style.opacity = 0;
motoElement.style.display = 'none';
h1Element.style.opacity = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  // Check scroll direction
  let scrollDirection = currentScroll > lastScrollTop ? 'down' : 'up';
  
  // Check if scrolled past 50px
  if (currentScroll > 50) {
    motoElement.style.display = 'flex';
    // Apply background brightness effect based on scroll direction
    brightness = (scrollDirection === 'down') ? (currentScroll - 70) / 70 : Math.max(0, brightness - 0.02); // Decrease brightness gradually if scrolling up
    
    motoElement.style.backgroundColor = `rgba(245, 195, 39, ${brightness})`;

    // Fade in the .moto class
    motoElement.style.transition = 'opacity 0.5s ease-in-out'; // Add transition
    motoElement.style.opacity = 1;

    // Fade in the h1Element when brightness starts increasing
    h1Element.style.transition = 'opacity 0.5s ease-in-out'; // Add transition
    h1Element.style.opacity = brightness;

    // If brightness reaches maximum and scrolled down more than 300px, hide .moto and h1
    if (brightness === 1 && currentScroll > 300) {
      motoElement.style.opacity = 0;
      motoElement.style.display = 'none';
      h1Element.style.opacity = 0;
      h1Element.style.display = 'none';
    }
  } else {
    // Hide .moto and reset background color if not scrolled past 50px
    motoElement.style.transition = 'none'; // Remove transition
    motoElement.style.opacity = 0;
    motoElement.style.backgroundColor = 'rgba(245, 195, 39, 1)';
    brightness = 0; // Reset brightness
    h1Element.style.opacity = 0; // Hide h1Element
  }
  if (brightness >= 1 && currentScroll > 300) {
    // Hide .moto with fade effect
    motoElement.style.transition = 'opacity 0.5s ease-in-out'; // Add transition
    motoElement.style.opacity = 0;
    setTimeout(() => {
      motoElement.style.display = 'none';
    }, 500); // Delay hiding to match the transition duration
  }

  lastScrollTop = Math.max(currentScroll, 0); // Ensure lastScrollTop is not negative
  if (currentScroll < 50) {
    motoElement.style.display = 'none';
    h1Element.style.opacity = 0;
  }
}, false);





// for main-tag-line and main-tag

const mainContainer = document.getElementById('main-things');
const mainTagLine = document.getElementById('line');
const mainTag = document.querySelector('.main-tag');

let lastScrollTop1 = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    let scrollDirection = currentScroll > lastScrollTop1 ? 'down' : 'up';

    if (currentScroll > 210) {
        // Scrolled more than 200px
        mainTagLine.style.display = 'none'; // Hide main-tag-line
        
        mainTag.style.opacity = '0'; // Hide main-tag
    } else {
        // Scrolled less than or equal to 200px
        mainTagLine.style.display = 'block'; // Show main-tag-line
        
        mainTag.style.opacity = '1'; // Show main-tag
    }

    lastScrollTop = currentScroll;
});

const exp = document.querySelector('.exp');
window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if(currentScroll >305 ){
        exp.style.display = 'flex';
    }
    else{
        exp.style.display = 'none';
    }
});


// for top
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (window.scrollY > 316) {
        // Add the class to hide the nav
        nav.style.display= 'none';
    } else {
        // Remove the class to show the nav
        nav.style.display= 'block';
    }
});
