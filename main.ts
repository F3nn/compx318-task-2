function clearLights () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
        }
    }
}
function moveRight () {
    isOp = 1
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            led.unplot(x - 1, y)
        }
        basic.pause(500)
        clearLights()
    }
    isOp = 0
}
input.onButtonPressed(Button.A, function () {
    if (isOp != 1) {
        moveRight()
    }
})
input.onButtonPressed(Button.B, function () {
    if (isOp != 1) {
        moveLeft()
    }
})
function moveLeft () {
    isOp = 1
    x = 4
    y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            led.unplot(x - 1, y)
            y += 1
        }
        y = 0
        basic.pause(500)
        x += -1
        clearLights()
    }
    isOp = 0
}
let isOp = 0
let y = 0
let x = 0
x = 0
y = 0
isOp = 0
