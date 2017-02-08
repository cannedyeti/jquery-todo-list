$(function() {
	var numberTasks = 0;
	$(".submitButton").click(function(){
		var userInput = $("#userToDo").val().toUpperCase();
		if (userInput !== "") {
			$("#userToDo").val("");
			$(".thingsToDo").append("<li class='needsDoing'>" + userInput + "</li>");
			numberTasks++
			$(".numberTasks").text(numberTasks);
		}
	})

	$("ul").on("click", "li", function() {
		$(this).remove();
		numberTasks--
		$(".numberTasks").text(numberTasks);
	});
});