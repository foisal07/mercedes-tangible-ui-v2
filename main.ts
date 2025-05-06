basic.forever(function () {
    keyboard.startKeyboardService()
    // Estimated time of arrival/location

    // Passenger choice/options
    input.onButtonPressed(Button.A, function () {
        keyboard.sendString("A")
    })
    input.onButtonPressed(Button.B, function () {
        keyboard.sendString("B")
    })

    // Passenger accepted the agenda
    input.onGesture(Gesture.TiltLeft, function () {
        basic.showString("Y")
    })
    input.onGesture(Gesture.TiltRight, function () {
        basic.showString("N")
    })

    // Passenger angry
    input.onGesture(Gesture.Shake, function () {
        keyboard.sendString("g")
    })

    // Driver Hand Gesture
    if (input.lightLevel() < 50) {
        keyboard.sendString("l");
    };

    // Driver patting the cat
    input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        keyboard.sendString("c")
    })
})
basic.showArrow(ArrowNames.North)
