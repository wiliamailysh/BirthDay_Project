$( document ).ready(function() {
    $("#message1").click(e => {
        $("#message2").css("display", "block");
    })
    $("#message2").click(e => {
        $("#message3").css("display", "block");
    })
    $("#message3").click(e => {
        $("#message4").css("display", "block");
        $("body").addClass("confetti");
    })

    const birthdaySong = new Audio("sources/song.mp3");
    $('#message3').click(e => birthdaySong.play());

});