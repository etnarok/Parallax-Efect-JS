let listBg = document.querySelectorAll('.parallax .bg');
let titleBanner = document.querySelectorAll('.parallax .h1');
let listMain = document.querySelectorAll('.main');

window.addEventListener('scroll', (event) => {
 //scrolY is the web scrollbar position (pixel!)
 let top = this.scrollY;

 /*index is the order of class bg(0,1,2,...,8)
 when scrolling the web, the class bg scroll down,
 the bigger the index, the faster the movement.
 */

 listBg.forEach((bg, index) => {
    if(index != 0  && index != 8){
        bg.style.transform = `translateY(${top*index/2}px)`;
    }

    else if(index == 0 ){
        bg.style.transform = `translateY(${top/3}px)`;
    }

 })


 listMain.forEach(main => {
    if(main.offsetTop - top < 550){
        main.classList.add('active');
    }
    else{
        main.classList.remove('active');
    }
 })
})