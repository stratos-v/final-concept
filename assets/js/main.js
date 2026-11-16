const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const front = document.querySelectorAll(".front");
const page = document.querySelectorAll(".page");

leftBtn.addEventListener('click', () => {
    front.forEach(function(front) {
         front.style.transform = 'translateX(-150px)';
        })

    page.forEach(function(page) {
         page.style.transform = 'translateX(150px)';
    });
    
});

rightBtn.addEventListener('click', () => {
    front.forEach(function(front) {
         front.style.transform = 'translateX(0px)';
        })

    page.forEach(function(page) {
         page.style.transform = 'translateX(0px)';
    });
});