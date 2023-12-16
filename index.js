function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    var tooQuiet = "I can't hear you!"
    var tooLoud = "YES INDEED!"
    var justRight = 'I would love to!'
    if (string.toLowerCase(string) === string) {
        return tooQuiet
    }
    else if (string.toUpperCase(string) === string) {
        return tooLoud
    }
    else if ("Let's have dinner together!" === string) {
        return justRight
    }
}