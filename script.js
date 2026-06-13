// =========================
// START BUTTON + MUSIC
// =========================

const enterBtn =
document.getElementById(
"enterBtn"
);

const loader =
document.getElementById(
"loader"
);

const music =
document.getElementById(
"bgMusic"
);

enterBtn.addEventListener(
"click",
()=>{

    music.play().catch(()=>{});

    loader.style.display =
    "none";

});

// =========================
// FEATHERS
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
    (20 + Math.random()*25)
    + "px";

    feather.style.opacity =
    .4 + Math.random()*.6;

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
            "translateY(120vh) translateX(100px) rotate(360deg)"
        }

    ],

    {

        duration:
        12000 +
        Math.random()*8000,

        iterations:1

    });

    setTimeout(()=>{

        feather.remove();

    },20000);

}

setInterval(
createFeather,
300
);

// =========================
// GSAP
// =========================

gsap.registerPlugin(
ScrollTrigger
);

// =========================
// TEXT ANIMATION
// =========================

gsap.utils.toArray(
".textBox"
).forEach(box=>{

    gsap.from(box,{

        y:80,

        opacity:0,

        duration:1.5,

        ease:"power3.out",

        scrollTrigger:{

            trigger:box,

            start:"top 80%"

        }

    });

});

// =========================
// IMAGE 1
// ZOOM
// =========================

gsap.fromTo(

".scene:nth-child(1) img",

{
scale:1
},

{
scale:1.18,

scrollTrigger:{
trigger:".scene:nth-child(1)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 2
// LEFT TO RIGHT
// =========================

gsap.fromTo(

".scene:nth-child(2) img",

{
x:-80,
scale:1.1
},

{
x:80,

scrollTrigger:{
trigger:".scene:nth-child(2)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 3
// BLUR TO CLEAR
// =========================

gsap.fromTo(

".scene:nth-child(3) img",

{
filter:"blur(15px)"
},

{
filter:"blur(0px)",

scrollTrigger:{
trigger:".scene:nth-child(3)",
start:"top 80%",
end:"center center",
scrub:true
}

});

// =========================
// IMAGE 4
// DARK TO BRIGHT
// =========================

gsap.fromTo(

".scene:nth-child(4) img",

{
filter:"brightness(.35)"
},

{
filter:"brightness(1)",

scrollTrigger:{
trigger:".scene:nth-child(4)",
start:"top 80%",
end:"center center",
scrub:true
}

});

// =========================
// IMAGE 5
// KEN BURNS
// =========================

gsap.fromTo(

".scene:nth-child(5) img",

{
scale:1,
x:0,
y:0
},

{
scale:1.25,
x:40,
y:-20,

scrollTrigger:{
trigger:".scene:nth-child(5)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 6
// ROTATE
// =========================

gsap.fromTo(

".scene:nth-child(6) img",

{
rotate:-2,
scale:1.05
},

{
rotate:2,

scrollTrigger:{
trigger:".scene:nth-child(6)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 7
// RIGHT TO LEFT
// =========================

gsap.fromTo(

".scene:nth-child(7) img",

{
x:80,
scale:1.1
},

{
x:-80,

scrollTrigger:{
trigger:".scene:nth-child(7)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 8
// FLOAT UP
// =========================

gsap.fromTo(

".scene:nth-child(8) img",

{
y:80,
scale:1.1
},

{
y:-80,

scrollTrigger:{
trigger:".scene:nth-child(8)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 9
// PROMISE SCENE
// SLOW CINEMATIC
// =========================

gsap.fromTo(

".scene:nth-child(9) img",

{
scale:1
},

{
scale:1.3,

scrollTrigger:{
trigger:".scene:nth-child(9)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 10
// PANORAMA MOVE
// =========================

gsap.fromTo(

".scene:nth-child(10) img",

{
x:-100
},

{
x:100,

scrollTrigger:{
trigger:".scene:nth-child(10)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 11
// FOREVER SCENE
// DREAMY ZOOM
// =========================

gsap.fromTo(

".scene:nth-child(11) img",

{
scale:1
},

{
scale:1.35,

scrollTrigger:{
trigger:".scene:nth-child(11)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// IMAGE 12
// FINAL ENDING
// EPIC CINEMATIC
// =========================

gsap.fromTo(

".scene:nth-child(12) img",

{
scale:1,
filter:"brightness(.8)"
},

{
scale:1.4,
filter:"brightness(1.2)",

scrollTrigger:{
trigger:".scene:nth-child(12)",
start:"top bottom",
end:"bottom top",
scrub:true
}

});

// =========================
// SECTION FADE
// =========================

gsap.utils.toArray(
".scene"
).forEach(scene=>{

    gsap.from(scene,{

        opacity:.4,

        duration:1,

        scrollTrigger:{

            trigger:scene,

            start:"top 90%"

        }

    });

});