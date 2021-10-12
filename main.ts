basic.forever(function () {
    if (Math.abs(input.acceleration(Dimension.X)) < 100) {
        if (Math.abs(input.acceleration(Dimension.Y)) < 100) {
            basic.showIcon(IconNames.SmallDiamond)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
