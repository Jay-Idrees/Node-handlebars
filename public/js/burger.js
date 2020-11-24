    
    $(function() {

        $(".create-form").on("submit", function(event) {
            
            event.preventDefault();
        
            // Packaging user text about burger_name into a data-object called newBurger containing the property burger_name and then transporting it via the Ajax request
            var newBurger = {
                burger_name: $("#burger-name").val().trim()
            };
        
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger // this basically contains the name of the burger typed in by the user
            }).then(
            function() {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            });
        });




   
    });