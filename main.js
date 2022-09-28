const btn=document.getElementById('menu-btn');
const body=document.getElementById('body')
const overlay=document.getElementsByClassName('overlay')[0];
const mobileMenu=document.getElementById('mobile-menu');
const hamburger=document.getElementById('menu-btn');
const counters=document.querySelectorAll('.counter');
let stopScrolling=false;
window.addEventListener("scroll", scrollPage)

btn.addEventListener("click",(eo)=>{
    btn.classList.toggle('open')
    overlay.classList.toggle('show-overlay')
    body.classList.toggle('stop-scrolling')
})

hamburger.addEventListener("click",(eo)=>{
    mobileMenu.classList.toggle("show-menu")
})

// counter

function countUp(){
    counters.forEach(item => {
        item.innerText="0";
        const updateCounter=()=>{
            const target=+item.getAttribute("data-target");
            // current value
            const c=+item.innerText;
            const increment =1;
            if(c<target)
            {
                item.innerText=`${c+increment}`
                setTimeout(() => {
                    updateCounter()
                }, 120);
            }
            else{
                item.innerText=target
            }
           
        }
        updateCounter();
    });
}
function reset(){
    counters.forEach(element => {
        element.innerText='0';
    });
}

function scrollPage(){
    const scrolled=window.scrollY;
    if(scrolled>100 && !stopScrolling)
    {
        countUp()
        stopScrolling=true;
    }
    else if(scrolled<100 && stopScrolling){
        reset();
        stopScrolling=false;

    }
}