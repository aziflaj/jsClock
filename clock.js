var clock = function() {
    var date = new Date();

    var hours = (date.getHours() >= 10 ? date.getHours() : '0' + date.getHours());
    var mins = (date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes());
    var secs = (date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds());

    var hexColor = "#" + hours + mins + secs;

    document.getElementById("clock").innerHTML = hexColor;
    document.bgColor = hexColor;

    setTimeout(clock,1000);
};

clock();

