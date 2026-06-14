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

        duration:0.8,

        ease:"power2.out",

        onComplete:()=>{

            loader.style.display=
            "none";

        }

    });

});

// =========================
// FEATHERS
// LIGHT VERSION
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
    (10 + Math.random()*15)
    + "px";

    feather.style.opacity =
    .25 + Math.random()*.35;

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
            "translateY(120vh) translateX(40px) rotate(120deg)"
        }

    ],

    {

        duration:
        18000 +
        Math.random()*6000,

        iterations:1

    });

    setTimeout(()=>{

        feather.remove();

    },25000);

}

setInterval(
createFeather,
1200
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

        y:40,

        opacity:0,

        duration:1.2,

        ease:"power2.out",

        scrollTrigger:{

            trigger:box,

            start:"top 85%"

        }

    });

});

// =========================
// IMAGE CINEMATIC ZOOM
// =========================

gsap.utils.toArray(
".scene img"
).forEach(img=>{

    gsap.fromTo(

        img,

        {
            scale:1,
            y:60
        },

        {
            scale:1.22,
            y:-60,

            ease:"none",

            scrollTrigger:{

                trigger:img,

                start:"top bottom",

                end:"bottom top",

                scrub:1

            }

        }

    );

});

// =========================
// PARAGRAPH FADE
// =========================

gsap.utils.toArray(
".textBox p"
).forEach(text=>{

    gsap.from(text,{

        opacity:0,

        y:20,

        duration:1.2,

        delay:0.2,

        ease:"power2.out",

        scrollTrigger:{

            trigger:text,

            start:"top 90%"

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

        opacity:0.7,

        duration:1,

        scrollTrigger:{

            trigger:scene,

            start:"top 95%"

        }

    });

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

        scale:1.15,

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

// =========================
// MOBILE OPTIMIZATION
// =========================

if(window.innerWidth < 768){

    gsap.globalTimeline.timeScale(
    0.95
    );

}