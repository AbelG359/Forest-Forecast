$(".clicktxt").hide();

$(".clickimg").dblclick(function() {
    $(".Article1").css("background-color", "red");
});

$(".fire").click(function() {
    $(".fire").show(".clicktxt");
});