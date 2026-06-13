// =========================
// START BUTTON + MUSIC
// =========================

const enterBtn =
document.getElementById("enterBtn");

const loader =
document.getElementById("loader");

const music =
document.getElementById("bgMusic");

enterBtn.addEventListener(
"click",
()=>{

    music.play().catch(()=>{});

    gsap.to(loader,{

        opacity:0,

        duration:1,

        onComplete:()=>{

            loader.style.display=
            "none";

        }

    });

});

// =========================
// FEATHERS
// LESS FEATHERS
// =========================

const featherContainer =
document.getElementById(
"featherContainer"
);

function createFeather(){

    const feather =
    document.createElement(
    "img"
    );

    feather.src =
    "assets/feather.png";

    feather.style.position =
    "absolute";

    feather.style.left =
    Math.random()*100 +
    "vw";

    feather.style.top =
    "-100px";

    feather.style.width =
    (12 + Math.random()*15)
    + "px";

    feather.style.opacity =
    .3 + Math.random()*.4;

    featherContainer
    .appendChild(
    feather
    );

    feather.animate(

    [

        {
            transform:
            "translateY(-100px) translateX(0px) rotate(0deg)"
        },

        {
            transform:
            "translateY(120vh) translateX(60px) rotate(180deg)"
        }

    ],

    {

        duration:
        18000 +
        Math.random()*8000,

        iterations:1

    });

    setTimeout(()=>{

        feather.remove();

    },25000);

}

setInterval(
createFeather,
1800
);

// =========================
// GSAP
// =========================

gsap.registerPlugin(
ScrollTrigger
);

// =========================
// TEXT FADE
// =========================

gsap.utils.toArray(
".textBox"
).forEach(box=>{

    gsap.from(box,{

        y:60,

        opacity:0,

        duration:1.2,

        ease:"power3.out",

        scrollTrigger:{

            trigger:box,

            start:"top 80%"

        }

    });

});

// =========================
// SMOOTH IMAGE ZOOM
// ALL SCENES
// =========================

gsap.utils.toArray(
".scene img"
).forEach(img=>{

    gsap.fromTo(

    img,

    {
        scale:1
    },

    {

        scale:1.12,

        ease:"none",

        scrollTrigger:{

            trigger:img,

            start:"top bottom",

            end:"bottom top",

            scrub:1

        }

    });

});

// =========================
// SCENE FADE
// =========================

gsap.utils.toArray(
".scene"
).forEach(scene=>{

    gsap.from(scene,{

        opacity:.6,

        duration:1,

        scrollTrigger:{

            trigger:scene,

            start:"top 90%"

        }

    });

});

// =========================
// JOURNEY PATH
// LEFT TOP TO RIGHT END
// =========================

const path =
document.getElementById(
"journeyPath"
);

window.addEventListener(
"scroll",
()=>{

    const scrollTop =
    window.pageYOffset;

    const docHeight =
    document.body.scrollHeight -
    window.innerHeight;

    const progress =
    scrollTop / docHeight;

    const x =
    15 + (
    Math.sin(progress*12)
    * 25
    );

    if(path){

        path.style.background =

        `linear-gradient(
        to bottom,
        transparent,
        rgba(255,45,149,.15),
        transparent
        )`;

        path.style.transform =
        `translateX(${x}vw)`;

    }

});

// =========================
// END HEART
// =========================

const endHeart =
document.querySelector(
".end-heart"
);

if(endHeart){

    gsap.to(
    endHeart,
    {

        scale:1.2,

        duration:1,

        repeat:-1,

        yoyo:true,

        ease:"power1.inOut"

    });

}

// =========================
// PERFORMANCE
// =========================

ScrollTrigger.config({

    autoRefreshEvents:
    "DOMContentLoaded,load"

});
