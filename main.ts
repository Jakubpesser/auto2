radio.setGroup(3)
radio.setFrequencyBand(7)

let lastBtnA = false
let lastBtnB = false

basic.forever(function() {
    let btnA = input.buttonIsPressed(Button.A)
    let btnB = input.buttonIsPressed(Button.B)

    if (btnA != lastBtnA) {
        radio.sendValue("btnA", +btnA)
    }

    if (btnB != lastBtnB) {
        radio.sendValue("btnB", +btnB)
    }

    lastBtnA = btnA
    lastBtnB = btnB
})