$(function () {
    //ticketAmount for radio buttons, ticketAddition for checkboxes
    var ticketAmount = 0,
        ticketAddition = 0;
    $(".ticketAmount").change(function () {
        //Set ticketAmount to the value of the button checked.
        var value = parseInt(this.value);
        ticketAmount = value;
        $('#amount').text((ticketAmount + ticketAddition) + ".00");
    });
    $(".ticketAddition").change(function () {
        //Add or subtract the value of the button from ticketAddition
        //depending on whether or not the button has been checked or unchecked.
        var value = parseInt(this.value);
        if (this.checked) ticketAddition += value;
        else ticketAddition -= value;
        $('#amount').text((ticketAmount + ticketAddition) + ".00");
    });
});
/*
nav = document.getElementById('total');
window.onscroll = function () {
    if (window.pageXOffset > 100) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
    } else {
        nav.style.position = 'absolute';
        nav.style.top = 100;
    }
}*/
/*
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
*/