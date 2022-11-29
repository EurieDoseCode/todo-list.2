class TaskManager {
    // Just a placeholder constructor that will do stuff (in the future)
    constructor(id) {
        this.id = 0;
        this.tasks = [];
    };

    // IMPORT class values to factory function
    addTask(Name, Description, AssignedTo, DueDate, Status) {
        const task = {
            ID: this.id++,
            Name,
            Description,
            AssignedTo,
            DueDate,
            Status
        }
        
        this.tasks.push(task);
        this.render();
    };

    // returns a list (array) of all tasks where a status (is equal to the status) passes as an arguement
    getTasksWithStatus(status) {

    }

    // HTML TEMPLATE of task list
    createTaskHTML(task) {
        return `
        <li class="card p-3" taskID="${task.ID}">
          <div class="Status ${task.Status.toLowerCase()}">${task.Status}</div>
          <div class="row">
            <div class="col-7">
              <div class="display-6 Name">${task.Name}</div>
            </div>
            <div class="col-5">
              <div class="text-end">
                <a href="#" class="btn btn-success">Finish</a>
                <a href="#" class="btn btn-danger">X</a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="Description">${task.Description}</div>
          </div>
          <div class="row">
            <div class="col-7">
              <div class="AssignedTo">${task.AssignedTo}</div>
            </div>
            <div class="col-5">
              <div class="DueDate text-end">Due Date: <u>${task.DueDate}</u></div>
            </div>
          </div>
        </li>
        `
    };

    // EXPORT task list to HTML
    render() {
        const displayList = document.querySelector("#list");

		this.tasks.forEach(task => {
			displayList.innerHTML += this.createTaskHTML(task)
        });
    };
};