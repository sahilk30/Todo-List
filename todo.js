var tasks = [];
var input = document.getElementById("input");
var taskList = document.getElementById("taskList");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("addButton").click();
	}
});

function addTask() {
	var taskName = input.value;

	if (taskName !== "") {
		var task = {
			name: taskName,
			completed: false
		};
		tasks.push(task);

		var li = document.createElement("li");
		li.innerHTML = taskName;
		li.addEventListener("click", function() {
			li.classList.toggle("checked");
			task.completed = !task.completed;
		});

		// Add a span element with a delete button to the list item
var span = document.createElement("span");
span.innerHTML = "&times;";
span.addEventListener("click", function() {
    var clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.addEventListener("click", function() {
        taskList.removeChild(li);
        tasks.splice(tasks.indexOf(task), 1);
    });
    li.appendChild(clearButton);
    li.style.textDecoration = "line-through";
    task.completed = !task.completed;
});
li.appendChild(span);

		taskList.appendChild(li);
		input.value = "";
	}
}
