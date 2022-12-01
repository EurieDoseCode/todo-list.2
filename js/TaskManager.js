class TaskManager {
  // Just a placeholder constructor that will do stuff (in the future)
  constructor() {
    this.id = 0;
    this.tasks = [];

    // load localStorage
    this.tasks = JSON.parse(localStorage.getItem("taskManager"));
    if (this.tasks === null) {
      this.tasks = [];
    };
    this.render();
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
    this.render();
  };

  // RETURN a list (array) of all tasks
  getTasksWithStatus(status) {
    this.tasks.fliter(task => {
      if (task.Status === status) {
        return task
      };
    })
  };
  /*REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter*/

  // UPDATE status to done
  markTask(ID) {
    this.tasks.forEach(task => {
      if (task.ID === ID) {
        task.Status = "DONE"
        return
      };
    })
    this.render();
  }

  // DELETE task
  deleteTask(ID) {
    const temp = this.tasks.filter(task => {
      if (task.ID !== ID) {
        return task
      }
    })
    this.tasks = temp;
    this.render();
  }

  // HTML TEMPLATE of the task list
  createTaskHTML(task) {
    let card = document.createElement('li');
    card.classList.add('card', 'p-3');
    card.setAttribute('id', `${task.ID}`)
    card.innerHTML = `
      <div class="Status ${task.Status.toLowerCase()}">${task.Status}</div>
        <div class="row">
          <div class="col-7">
            <div class="display-6 Name">${task.Name}</div>
          </div>
          <div class="col-5">
            <div class="text-end">
              <a href="#" class="btn btn-success" onclick="finish(event)">Mark as Done</a>
              <a href="#" class="btn btn-danger" onclick="TaskDelete(event)">X</a>
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
    return card
  };

  // EXPORT task list to HTML
  render() {
    const displayList = document.querySelector("#list");
    displayList.innerHTML = "";
    for (let index = 0; index < this.tasks.length; index++) {
      const task = this.tasks[index];
      displayList.appendChild(this.createTaskHTML(task)); //console.log(typeof(card));
    }

    //save to localStorage
    localStorage.setItem("taskManager", JSON.stringify(this.tasks));
  };
};