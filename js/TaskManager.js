//Variables
let taskList = document.querySelector('#list');
// Similar to render() in React - can replace once start learning React
let newHtml = `
<li class="card p-3"><!-- CARD -->
    <!-- Card content start: Task 1 -->
    <div class="Status">${Status}</div><!-- Task 1 Row: Status-->
    <div class="row"><!-- Task 1 Row: Name, buttons-->
        <div class="col-7"><!-- Task 1 Name-->
        <div class="display-6 Name">${Name}</div>
        </div>
        <div class="col-5"><!-- Task 1 Buttons -->
        <div class="text-end">
            <a href="#" class="btn btn-success">Finish</a>
            <a href="#" class="btn btn-danger">X</a>
        </div>
        </div>
    </div>
    <div class="row"><!-- Task 1 Row: Description -->
        <div class="Description">${Description}</div>
    </div>
    <div class="row"><!-- Task 1 Row: AssignedTo, DueDate-->
        <div class="col-5"><!-- Task 1 AssignedTo-->
        <div class="AssignedTo">${AssignedTo}</div>
        </div>
        <div class="col-7"><!--- Task 1 DueDate-->
        <div class="DueDate text-end">DUE DATE: <u>${DueDate}</u></div>
        </div>
    </div>
</li>
`;

class TaskManager {
    // Constructor
    // Just a placeholder constructor that will do stuff (in the future)
    constructor(id) {
        this.id = id;
        this.tasks = [];
    };

    // Use a (factory) function for the object creation
    addTask(Name, Description, AssignedTo, DueDate, Status) {
        const task = {
            id: this.id++,
            Name: Name,
            Description: Description,
            AssignedTo: AssignedTo,
            DueDate: DueDate,
            Status: Status
        }
        this.tasks.push(task);
    };

    // returns list of all tasks
    ShowArray() {
        console.log(this.tasks)
    };
};

// returns a list (array) of all tasks where a status (is equal to the status) passes as an arguement
function getTasksWithStatus(status) { }

function addTask() { // you probs need a task parameter here; interestingly returning undefined in console but unsure why
    // add a task to existing task list (array); call this within an event listener on submit
    let NewTaskManager = new TaskManager(0)
    NewTaskManager.addTask("Test task 1", "This is a test description", "Sarah Dowling", "28/11/2022", "done");
    //NewTaskManager.addTask("Test task 2","This is another test description","Sarah Dowling","28/11/2022","done")
    //NewTaskManager.ShowArray()
    createTaskHTML();
}

/*function getAllTasks() {
    for (let i = 0; i < NewTaskManager.length; i++) {

    }
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TASK 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createTaskHTML() {
    render();
};

let render = function () {
    taskList.innerHTML += newHtml;
};