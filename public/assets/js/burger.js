$(function () {
    // puts an onclick listener on the devour buttons.
    // when clicked it grabs the burgers id the button was asigned to and sends that along with a devoured value of 1(true) to the put route
    // in the controller which will then call the burger.updateOne method with the data we got here.
    $(".devour").on("click", function (event) {
        let id = $(this).data("id");
        let newDevoured = 1;

        let newDevouredState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
            location.reload()
            }
        );
    });
    // puts an onclick listener to the add a burger button.
    // when clicked it grabs everything in the text box and sends it to the post route
    // in the controller along with a devoured value of 0(false) which will then call the method burger.insertOne with the data we got here
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
            function(){
            location.reload()
            }
        );
    });
});