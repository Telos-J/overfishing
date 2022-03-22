console.log('Hello World')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 500


function gameLoop() {
    // x += 6
    // if (x >= canvas.width) {
    //     x = -30
    // } 
    context.fillStyle = '#cefffe'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#8cbe87'
    context.beginPath()
    context.moveTo(x, 90)
    context.lineTo(x-100, 90-30)
    context.lineTo(x-100, 90+60)
    context.fill()
    requestAnimationFrame(gameLoop)
}

gameLoop()