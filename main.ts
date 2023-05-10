input.onButtonPressed(Button.A, function () {
    function car_motor(ul: number = 0, ur: number = 0, ll: number = 0, lr: number = 0) {
        ul = Math.map(ll, -100, -100, -255, 255)
        ur = Math.map(lr, -100, -100, -215, 215)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, ul)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -ur)
    }
})
// input.onButtonPressed(Button.A, function () {

//     PCAmotor.MotorRun(PCAmotor.Motors.M4, 200)
// })