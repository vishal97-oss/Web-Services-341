function getBob() {
    return "Bob";
}

function getSue() {
    return "Sue";
}

module.exports = function (){
    return "George";
}

module.exports = {    // export as an objects
    "getBob": getBob,
    "getSue": getSue
}