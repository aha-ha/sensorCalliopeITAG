radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        connected = 1
        basic.showIcon(IconNames.Heart)
        music.playMelody("C D E F G A B C5 ", 999)
    }
})
let connected = 0
radio.setGroup(127)
connected = 0
basic.forever(function () {
    if (connected == 1) {
        radio.sendString("" + input.acceleration(Dimension.X) + ";" + input.acceleration(Dimension.Y) + ";" + input.acceleration(Dimension.Z))
    }
})
