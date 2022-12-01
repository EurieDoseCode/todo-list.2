class TaskManager {
  // Just a placeholder constructor that will do stuff (in the future)
  constructor(id) {
      this.id = 0;
      this.tasks = [];

      //load localStorage
      //remember to update the ID to the last task after loading
  };

  // IMPORT class values to factory function
  addTask(Name, Description, AssignedTo, DueDate, Status) {
      const task = {
          ID: ++this.id,
          Name,
          Description,
          AssignedTo,
          DueDate,
          Status
      }
      
      this.tasks.push(task);
      console.log(this.tasks);
      this.createTaskHTML(task);
  };

  // returns a list (array) of all tasks where a status (is equal to the status) passes as an argument
  getTasksWithStatus(status) {
    //TASK 8 [MARK AS DONE]
    //loop (or an array filter) with if statments (eg. status = status, id = id for deleting tasks)
    /*REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter*/
  }

  // UPDATE status to done
  markTask(ID) {
    //TASK 8 [MARK AS DONE]
    //updating "status" to done
  }

  // DELETE task
  deleteTask(ID) {
    // TASK 10 [DELETE TASK]
    //deleting "tasks"
  }

  // HTML TEMPLATE of task list
  createTaskHTML(task) {
    let card = document.createElement('li');
    card.classList.add('card', 'p-3');
    card.setAttribute('id', `task-${task.ID}`)
    card.innerHTML = `
      <div class="Status ${task.Status.toLowerCase()}">${task.Status}</div>
        <div class="row">
          <div class="col-7">
            <div class="display-6 Name">${task.Name}</div>
          </div>
          <div class="col-5">
            <div class="text-end">
              <a href="#" class="btn btn-success" onclick="finish(event)">Mark as Done</a>
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
        </div
      </div>
    `;
    this.render(card);
  };

  // EXPORT task list to HTML
  render(card) {
    const displayList = document.querySelector("#list");
    displayList.appendChild(card); //console.log(typeof(card));
    
    //TASK 9 [LOCALSTORAGE]
    //save to localStorage
  };
};