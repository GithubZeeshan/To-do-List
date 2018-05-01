var toDoItem;

//Toggle color + strikethrough effect when list item is clicked on
$("ul").on("click" , "li", function() {
    $(this).toggleClass("completed");
});


//Delete item by clicking trash icon
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    });

    //stop event bubbling up to parent elements
    event.stopPropagation();            
});

//Add new to-do list item when enter is clicked in text input
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //Save text from input field into variable, then clear text field
        toDoItem = $(this).val();
        $(this).val('');

        //Append new list item to the end of to-do list
        $(".list").fadeIn("slow", function() {
            $(this).append("<li class=listItem>" + "<span class='deleteIcon'><i class='far fa-trash-alt'></i></span> " + toDoItem + "</li>");
        });
    }
});

//Toggle input box when icon is clicked
$(".fa-arrows-alt-v").click(function() {
    $("input").toggleClass("hide");
})