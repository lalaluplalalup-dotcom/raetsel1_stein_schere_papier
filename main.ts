input.onGesture(Gesture.Shake, function () {
    if (randint(1, 3) == 1) {
        basic.showIcon(IconNames.Scissors)
    }
    if (randint(1, 3) == 2) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (randint(1, 3) == 3) {
        basic.showIcon(IconNames.Square)
    }
})
