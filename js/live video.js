// live video
let myPlay_live_top = document.getElementById("myPlay_live_top");
let live_video = document.getElementById("live_video");
console.log(myPlay_live_top)
console.log(live_video)
myPlay_live_top.addEventListener("click",()=>{
    console.log("live_video")
    
    live_video.play()
    live_video.setAttribute("controls","")
    myPlay_live_top.style.display = "none"
})