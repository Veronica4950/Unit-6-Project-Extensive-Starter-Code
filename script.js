$(".Part-Two-Yes, .Part-Two-No, .Story-Ending-Yes, .Story-Ending-No").hide();

$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".title, .button").hide();
});

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".title, .button").hide();
});

$(".female").dblclick(function() {
    $(".Story-Ending-Yes").show();
    $(".Part-Two-Yes").hide();
});

$(".Part-Two-No").dblclick(function() {
    $(".Story-Ending-No").show();
    $(".Part-Two-No").hide();
});

$(".broke").hover(function() {
    $(".wallet").toggle();
    $(".wallet").slideDown();
});

$(".female").dblclick(function() {
    $(".Story-Ending-Yes").css("background-color","teal");
});
