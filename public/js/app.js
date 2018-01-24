$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgername")
        .val()
        .trim(),
      devoured: $("[name=devoured]:checked")
        .val()
        .trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New burger inputed!");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".Eat").on("click", function(event) {
    var id = $(this).data("id");
    var devour = {
      devoured: 1
    };
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devour
    }).then(function() {
      location.reload();
    });
  });
});
