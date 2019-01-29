$("#pOneId").click(function () {
    $("#pOneId").html("This is the new paragraph.");
});

$("#button2").click(function () {
    $(".paragraph2").html("This is the new paragraph.");
    alert($(".paragraph2").html());
});

$("#button3").click(function () {
    var element = $(".paragraph3");
    element.html("I changed the paragraph and its CSS style.");
    element.css("color", "blue");
});
$(".paragraph4").click(function () {
    $(this).css("background-color", "rgb(156, 242, 240)");
    $(this).css("border", "3px solid rgb(32, 11, 93)");
});