$("#pOneId").click(function () {
    $("#pOneId").html("This is the new paragraph.");
});

$("#button2").click(function () {
    $(".paragraph2").html("This is the new paragraph.");
    alert($(".paragraph2").html());

});