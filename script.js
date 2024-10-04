

// const img1 = document.querySelector(".imgs .img .im:nth-child(1) img")
// const img2 = document.querySelector(".imgs .img .im:nth-child(2) img")
// const img3 = document.querySelector(".imgs .img .im:nth-child(3) img")
// const img4 = document.querySelector(".imgs .img .im:nth-child(4) img")


// const img_r = document.querySelector(".imgs .img1 .img_r:nth-child(1)")
// const img_r1 = document.querySelector(".imgs .img1 .img_r:nth-child(2)")
// const img_r2 = document.querySelector(".imgs .img1 .img_r:nth-child(3)")
// const img_r4 = document.querySelector(".imgs .img1 .img_r:nth-child(5)")
// const img_r5 = document.querySelector(".imgs .img1 .img_r:nth-child(6)")
// const img_r6 = document.querySelector(".imgs .img1 .img_r:nth-child(7)")



// window.addEventListener('scroll', function() {
//     let scrollPosition = window.scrollY || document.documentElement.scrollTop;
//     console.log('Scroll Position:', scrollPosition);

//     if(scrollPosition >= 3850){
//         img1.style.animation = "img 0.5s forwards"
//         img2.style.animation = "img 0.5s forwards 0.5s"
//         img3.style.animation = "img 0.5s forwards 1s"
//         img4.style.animation = "img 0.5s forwards 1.5s"
//         // img5.style.animation = "img 0.5s forwards 2s"
//     }

//     if(scrollPosition >= 4100){
//         img_r.style.animation = "img_r1 1s forwards 1s linear"
//         img_r1.style.animation = "img_r1 1s forwards 0.5s linear"
//         img_r2.style.animation = "img_r1 1s forwards linear"

//         img_r6.style.animation = "img_r2 1s forwards 1s linear"
//         img_r5.style.animation = "img_r2 1s forwards 0.5s linear"
//         img_r4.style.animation = "img_r2 1s forwards linear"
//     }

// });

// --------------------------------------------------------

const video = document.querySelector(".hero .video")

const vid = document.querySelectorAll(".hero .text .vid_icon video")

vid.forEach((vid)=>{
    vid.onclick = ()=>{
        video.style.transform = `translateY(${vid.getAttribute("data-translateY")})`
    }
})

// -----------------------------------------------------

const text = document.querySelector(".box_3d .text")

var shadow = ""
for (let i = 0; i < 20; i++) {
    shadow += (shadow? "," : "") + -i*1+"px "+ i*1+"px 0 #d6d6d6" 
}

text.style.textShadow = shadow


// ---------------------------------------------------


const next = document.querySelector(".book .book_box .page2 .back_p span:nth-child(4)")

const prve = document.querySelector(".book .book_box .page2 .front_p span:nth-child(6)")

const page4_5 = document.querySelector(".book .book_box .page2")

next.onclick = ()=>{
    // page4_5.style.transform = "rotateY(0deg)"
    page4_5.style = "z-index: 1;transform: rotateY(0deg);"
}

prve.onclick = ()=>{
    page4_5.style.transform = "rotateY(180deg)"
}



const next1 = document.querySelector(".book .book_box .page3 .back_p span:nth-child(3)")

const prve1 = document.querySelector(".book .book_box .page3 .front_p span:nth-child(3)")

const page2_4 = document.querySelector(".book .book_box .page3")

next1.onclick = ()=>{
    page2_4.style.transform = "rotateY(0deg)"
}

prve1.onclick = ()=>{
    page2_4.style.transform = "rotateY(180deg)"
    page4_5.style = "z-index: 0;"
}