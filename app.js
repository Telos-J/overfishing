const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 500
let y = 90
let theta = Math.PI*4/5
let l = 30

function gameLoop() {
    // x += 6
    // if (x >= canvas.width) {
    //     x = -30
    // } 
    context.fillStyle = '#cefffe'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#8cbe87'
    context.beginPath()
    context.moveTo(x + l*Math.cos(theta), y - l*Math.sin(theta))
    context.lineTo(x + l*Math.cos(theta + Math.PI*5/4), y - l*Math.sin(theta + Math.PI*5/4))
    context.lineTo(x + l*Math.cos(theta - Math.PI*5/4), y - l*Math.sin(theta - Math.PI*5/4))
    context.fill()
    requestAnimationFrame(gameLoop)
}

gameLoop()