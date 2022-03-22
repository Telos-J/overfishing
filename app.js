console.log('Hello World')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

let x = 10


function gameLoop() {
    x += 6
    if (x >= canvas.width) {
        x = -30
    } 
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'black'
    context.fillRect(x, 90, 30, 30)
    requestAnimationFrame(gameLoop)
}

gameLoop()