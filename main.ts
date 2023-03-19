input.onButtonPressed(Button.A, function () {
    if (sat_ukljucen == 1) {
        sat_ukljucen = 0
        music.playTone(247, music.beat(BeatFraction.Half))
    } else {
        if (sat_ukljucen == 0) {
            music.playTone(988, music.beat(BeatFraction.Half))
            sat_ukljucen = 1
        }
    }
})
let sat_ukljucen = 0
let cas = 0
let minuta = 0
let sekunda = 0
loops.everyInterval(1000, function () {
    if (sat_ukljucen == 1) {
        sekunda = sekunda + 1
        music.playTone(494, music.beat(BeatFraction.Quarter))
        serial.writeLine("" + cas + ":" + minuta + ":" + sekunda)
        if (sekunda >= 60) {
            sekunda = 0
            minuta = minuta + 1
            music.playTone(262, music.beat(BeatFraction.Whole))
            if (minuta >= 60) {
                minuta = 0
                cas = cas + 1
                music.playTone(262, music.beat(BeatFraction.Double))
            }
        }
    }
})
