$(document).ready(function() {
  let availableTags = ["mostafa", "ali", "mohamed", "amr", "sherif","sara"];
  $("#tags").autocomplete({
    source: availableTags,
    select: function(event, ui) {
      $(this).val("");
      $("#invite-list ul")
        .append(
          "<li class='hidden'>" +
            ui.item.value +
            " <button class='remove btn btn-info'>X</button> </li>"
        )
        .find("li.hidden")
        .fadeIn();
        console.log(this);
    }
  });

  $("#invite-list ul").on("click", ".remove", function() {
    $(this)
      .parent()
      .fadeOut(700)
      .remove();
  });
});
