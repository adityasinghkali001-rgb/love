// =========================
// START BUTTON + MUSIC
// =========================

const enterBtn =
document.getElementById("enterBtn");

const loader =
document.getElementById("loader");

const music =
document.getElementById("bgMusic");

enterBtn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    loader.style.display="none";

});

// =========================
// FEATHERS
// =========================

const featherContainer =
document.getElementById("featherContainer");

function createFeather(){

    const feather =
    document.createElement("img");

    feather.src =
    "assets/feather.png";

    feather.style.position="absolute";
    feather.style.left=Math.random()*100+"vw";
    feather.style.top="-100px";
    feather.style.width=
    (20+Math.random()*25)+"px";

    feather.style.opacity=
    .4+Math.random()*.6;

    featherContainer.appendChild(
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
    12000+
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
// IMAGE ANIMATIONS
// =========================

const effects = [

{scale:1.18},

{x:80},

{filter:"blur(0px)"},

{filter:"brightness(1)"},

{scale:1.25,x:40,y:-20},

{rotate:2},

{x:-80},

{y:-80},

{scale:1.3},

{x:100},

{scale:1.35},

{scale:1.4,filter:"brightness(1.2)"}

];

effects.forEach((effect,index)=>{

    const scene =
    `.scene:nth-child(${index+1}) img`;

    let from = {};

    switch(index){

        case 0:
        from={scale:1};
        break;

        case 1:
        from={x:-80,scale:1.1};
        break;

        case 2:
        from={filter:"blur(15px)"};
        break;

        case 3:
        from={filter:"brightness(.35)"};
        break;

        case 4:
        from={scale:1,x:0,y:0};
        break;

        case 5:
        from={rotate:-2,scale:1.05};
        break;

        case 6:
        from={x:80,scale:1.1};
        break;

        case 7:
        from={y:80,scale:1.1};
        break;

        case 8:
        from={scale:1};
        break;

        case 9:
        from={x:-100};
        break;

        case 10:
        from={scale:1};
        break;

        case 11:
        from={
            scale:1,
            filter:"brightness(.8)"
        };
        break;

    }

    gsap.fromTo(

    scene,

    from,

    {

    ...effect,

    scrollTrigger:{

        trigger:
        `.scene:nth-child(${index+1})`,

        start:"top bottom",

        end:"bottom top",

        scrub:true

    }

    });

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

// =========================
// SNAKE TITLE GLOW
// =========================

gsap.utils.toArray(
".snake-title"
).forEach(title=>{

    gsap.from(title,{

        opacity:0,

        y:50,

        duration:1.2,

        scrollTrigger:{

            trigger:title,

            start:"top 85%"

        }

    });

});

// =========================
// CAMERA
// =========================

const camera =
document.getElementById("camera");

const canvas =
document.getElementById("canvas");

const captureBtn =
document.getElementById("captureBtn");

const photoPreview =
document.getElementById("photoPreview");

const finalPhoto =
document.getElementById("finalPhoto");

const popup =
document.getElementById("thankPopup");

const closePopup =
document.getElementById("closePopup");

if(camera){

navigator.mediaDevices
.getUserMedia({

video:true

})

.then(stream=>{

camera.srcObject =
stream;

})

.catch(err=>{

console.log(err);

});

}

if(captureBtn){

captureBtn.addEventListener(
"click",
()=>{

const ctx =
canvas.getContext("2d");

canvas.width =
camera.videoWidth;

canvas.height =
camera.videoHeight;

ctx.drawImage(
camera,
0,
0
);

const image =
canvas.toDataURL(
"image/png"
);

photoPreview.src =
image;

photoPreview.style.display=
"block";

finalPhoto.src =
image;

finalPhoto.style.display=
"block";

popup.style.display=
"flex";

});
}

// =========================
// POPUP CLOSE
// =========================

if(closePopup){

closePopup.addEventListener(
"click",
()=>{

popup.style.display=
"none";

});
}