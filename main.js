$(document).ready(function () {
    var numbSes = parseInt($('.session-numb').html());
    var numbBreak = parseInt($('.break-numb').html());
    var seconds = parseInt($('#seconds').html());
    var minutes = parseInt($('#minutes').html());
    var melody = new Audio ('Alarm Clock Sound Effect.mp3');
    var timer;
    $('.btn-min-ss').click(function () {
        if (numbSes>0){
            numbSes--;
        }
        $('.session-numb').html(zero(numbSes));
        $('#minutes').html(zero(numbSes));
    });
    $('.btn-plus-ss').click(function () {
        numbSes++;
        $('.session-numb').html(zero(numbSes));
        $('#minutes').html(zero(numbSes));
    });
    function zero(x) {
        if(x<10){
            x = '0' + x;
        }
        return x;
    }
    function pomodoroTimer() {
        seconds--;
        if(numbSes == 0){
            melody.play();
        }
        if(seconds < 0){
            seconds = seconds + 60;
            numbSes--;
        }
        if (numbSes < 0) {
            $("#minutes").hide();
            $('#break-min').show();
            if(seconds == 59){
                numbBreak--;
            }
            if (numbBreak == 0 && seconds == 0){
                melody.play();
                clearInterval(timer);
                $('.btn-pause').hide();
                $('.btn-start').show();
                numbSes = 25;
                seconds = 0;
                numbBreak = 5;
                $('.session-numb').html(zero(numbSes));
                $('#seconds').html(zero(seconds));
                $('#minutes').html(zero(numbSes));
                $('.break-numb').html(zero(numbBreak));
                $('#minutes').show();
                $('#break-min').hide();
            }
        }


    }


    $('.btn-min-br').click(function () {
        if(numbBreak > 0){
            numbBreak = numbBreak - 5;
        }
        $('.break-numb').html(zero(numbBreak));
    });
    $('.btn-plus-br').click(function () {
       numbBreak = numbBreak + 5;
        $('.break-numb').html(zero(numbBreak));
    });
    $('.btn-start').click(function () {

        $('.btn-start').hide();
        $('.btn-pause').show();
        timer = setInterval(function(){
            pomodoroTimer();
            $('#seconds').html(zero(seconds));
            $('#minutes').html(zero(numbSes));
            $('#break-min').html(zero(numbBreak));

        }, 1000);
    });
    $('.btn-pause').click(function () {
        $('.btn-pause').hide();
        $('.btn-start').show();
       clearInterval(timer);
    });
    $('.btn-reset').click(function () {
        clearInterval(timer);
        $('.btn-pause').hide();
        $('.btn-start').show();
        numbSes = 25;
        seconds = 0;
        numbBreak = 5;
        $('.session-numb').html(zero(numbSes));
        $('#seconds').html(zero(seconds));
        $('#minutes').html(zero(numbSes));
        $('.break-numb').html(zero(numbBreak));
    });

});