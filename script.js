// hamburger menu

let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");


open.addEventListener("click", () => {
    overlay.style.transform = "translateY(0)";
});

close.addEventListener("click", () => {
    overlay.style.transform = "translateY(-110%)";
});

// home page changing background image

var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'photos/bgIMG/bg1-1x.jpg';
images[1] = 'photos/bgIMG/bg2-1x.jpg';
images[2] = 'photos/bgIMG/bg3-1x.jpg';


function changePicture() {
    document.getElementById('homeBody').style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;


// infinite scroll

$(document).ready(function() {
    $('div').fadeIn(1000).removeClass('hidden');
    console.log('help');
});

const items = document.querySelectorAll('.Figure');

const active = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('viewscroll');
        } else {
            entry.target.classList.remove('viewscroll');
        }
    });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io2.observe(items[i]);
}