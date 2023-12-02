const cores = document.querySelectorAll("button")
let pincel = ""

cores.forEach((evt)=>{
    evt.addEventListener("click",()=>{
        pincel = evt.id
    })
})

const casinhas = document.querySelectorAll("section")
casinhas.forEach((evt)=>{
    evt.addEventListener("dragover",(teste)=>{
        teste.target.style.backgroundColor = pincel
        })
    })




for(let j  = 0;j < 17;j++){
    var fora_divs = document.createElement("div")
    fora_divs.className = "fora"
    fora_divs.style.display = "flex"
    document.getElementById("paint_canvas").appendChild(fora_divs)
    for(let i  = 0; i < 50;i++){
        var divs = document.createElement("div")
        divs.style.height = "50px"
        divs.style.width = "50px"
        divs.style.backgroundColor = "white"
        
        fora_divs.appendChild(divs)
        }
}

