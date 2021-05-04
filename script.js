function breakchain() {
    let chain = document.getElementById("chain");

    chain.innerHTML = "&#xf0c1;";

    setTimeout(() => {
        chain.innerHTML = "&#xf127;";
    }, 1000);
}

breakchain();

setInterval(breakchain, 2000);

//battey animation

function battery() {
    let battery = document.getElementById("battery");

    battery.innerHTML = "&#xf244;";

    setTimeout(() => {
        battery.innerHTML = "&#xf243;";
    }, 1000);

    setTimeout(() => {
        battery.innerHTML = "&#xf242;";
    }, 2000);

    setTimeout(() => {
        battery.innerHTML = "&#xf241;";
    }, 3000);

    setTimeout(() => {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}

battery();
setInterval(battery, 5000);

function hourglass() {
    let hourglass = document.getElementById("hour-glass");

    hourglass.innerHTML = "&#xf251;";

    setTimeout(() => {
        hourglass.innerHTML = "&#xf252;";
    }, 1000);

    setTimeout(() => {
        hourglass.innerHTML = "&#xf253;";
    }, 2000);
}

hourglass();

setInterval(hourglass, 3000);