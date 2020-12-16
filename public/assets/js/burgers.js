
// Make sure we wait to attach our handlers until the DOM is fully loaded.
    //
    $(function() {
        $(".devour-burger").on("click", function(event) {
            const id = $(this).data("id");
        
            const newBurger = {
                devoured: $(this).data("devoured")
            };
        
            // Send the PUT request.
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newBurger
            }).then(
            function() {
                console.log("devoured the burger");
                // Reload the page to get the updated list
                location.reload();
            });
        });
        
        $(".create-form").on("submit", function(event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
        
            var newBurger = {
                burger_name: $("#burger-name").val().trim()
            };
        
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
            function() {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            });
        });
    });
    // $(function() {

    //     $(".create-form").on("submit", function(event) {
            
    //         event.preventDefault();
        
    //         // Packaging user text about burger_name into a data-object called newBurger containing the property burger_name and then transporting it via the Ajax request
    //         var newBurger = {
    //             burger_name: $("#burger-name").val().trim()
    //         };
        
    //         // Send the POST request.
    //         $.ajax("/api/burgers", {
    //             type: "POST",
    //             data: newBurger // this basically contains the name of the burger typed in by the user
    //         }).then(
    //         function() {
    //             console.log("added new burger");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         });
    //     });


    //     $(".devour-burger").on("click", function(event) {

    //         // assigining an id
    //         const id = $(this).data("id");
        
    //         // sending information regarding the burger dwvour status to API route for update
    //         const newBurger = {
    //             devoured: $(this).data("devoured")
    //         };
        
    //         // Maing ajax request using the put method to update devour status
    //         $.ajax("/api/burgers/" + id, {
    //             type: "PUT",
    //             data: newBurger
    //         }).then(
    //         function() {
    //             console.log("devoured the burger");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         });
    //     });
   
    // });