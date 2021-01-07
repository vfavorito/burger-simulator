$(function () {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let newDevoured = $(this).data("newDevoured");

        let newDevouredState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            location.reload()
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        let newBurger = {
            burger: $("#burger_name").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            location.reload()
        );
    });
});