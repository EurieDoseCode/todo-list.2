//TODO LIST

// Variables
const form = document.querySelector('form');
const fields = Array.from(form.elements); // create an array from all elements in a form
const taskManager = new TaskManager(); /* EXPORT form values to TaskManager.js */
//const labels = [];

function necessaryVariables() {
  // Set up date to use for validation. Need to find a way to reuse pre-existing in date to optimise
  DueDate.min = new Date().toISOString().split('T')[0];

  // Loop through fields to remove buttons
  /*Could have targeted fields[6] directly - abstracting permits changes to form structure in future. Find a way to improve code to further abstract*/
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].nodeName === 'BUTTON') {
      fields.splice(i, 2);
    };
  };

  /*// Extract input labels as plain text & push results into labels array
  // Uncertain if still need to use
  for (let i = 0; i < fields.length; i++) {
    let inputMaps = fields[i].labels[0].outerText.slice(0, -2); // scoping issue needs resolving
    labels.push(inputMaps);
  };*/
}

// Form validation
/*Heavy assistance from https://oliverjam.es/articles/better-native-form-validation*/
function validateTaskForm(form) {
  form.setAttribute('novalidate', ''); // prevents browser default validation appearing, can now override

  // IMPORT user input to form values
  form.addEventListener('submit', (event) => {
    const inputName = document.getElementById("Name").value;
    const inputAssignedTo = document.getElementById("AssignedTo").value;
    const inputDescription = document.getElementById("Description").value;
    const inputDate = document.getElementById("DueDate").value;
    const inputStatus = document.getElementById("Status").value;

    const allValid = form.checkValidity(); // variable calls method to check all fields in form are valid
    event.preventDefault();
    
    if (allValid) {
      taskManager.addTask(inputName, inputAssignedTo, inputDescription, inputDate, inputStatus);
    }
  });

  //const fields = Array.from(form.elements); // create an array from all elements in a form

  // Loop through fields to remove buttons
  /*could have targeted fields[6] directly, but abstracting permits changes to form structure in future*/
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].nodeName === 'BUTTON') {
      fields.splice(i, 2);
    }
  };

  // For each item in fields array
  fields.forEach(field => {
    field.setAttribute('aria-invalid', false); //stops fields failing validation before info entered
    // Inject validation messages directly into HTML
    const errorBox = document.createElement('p'); // currently takes up room in code; could set display: none in CSS until submit button is clicked
    const errorId = field.id + 'Error'; // concatenated string 
    errorBox.setAttribute('id', errorId);
    errorBox.setAttribute('class', 'toggle-off');
    field.setAttribute('aria-describedby', errorId);
    field.insertAdjacentElement('afterend', errorBox); // insert error messages next to field

    // Event listener: invalid values in fields
    field.addEventListener('invalid', () => {
      field.setAttribute('aria-invalid', true);
      errorBox.setAttribute('class', 'toggle-on');
      const message = errorMessage(field);
      errorBox.textContent = message || field.validationMessage; // add browser default error messages inside p stemming from errorBox
    });

    // Event listener: on input of values in fields
    field.addEventListener('input', () => {
      const valid = field.checkValidity();
      if (valid) {
        field.setAttribute('aria-invalid', false);
        errorBox.setAttribute('class', 'toggle-off');
        errorBox.textContent = '';
      };
    });
  });
};

// Custom error messages
function errorMessage(field) {
  const validity = field.validity;
  if (validity.valueMissing) { // is the field empty?
    switch (field.attributes.id.nodeValue) { //target by value in id
      case 'Name':
        return 'Task cannot be empty';
        break;
      case 'Description':
        return 'Task description cannot be empty';
        break;
      case 'AssignedTo':
        return 'Assigned to cannot be empty';
        break;
      case 'DueDate':
        return 'Please select a due date';
        break;
      case 'Status':
        return 'Status must be selected';
        break;
      default:
        return field.validationMessage;
        break;
    };
  };
  if (validity.tooShort) { // has minlength been hit?
    switch (field.attributes.id.nodeValue) {
      case 'Name':
        return 'Task needs to be 9 characters or longer';
        break;
      case 'Description':
        return 'Task description needs to be 16 characters or longer';
        break;
      case 'AssignedTo':
        return 'Assigned to needs to be 9 characters or longer';
        break;
      default:
        return field.validationMessage;
        break;
    };
  };
  if (validity.rangeUnderflow) { // was a past date selected?
    switch (field.attributes.id.nodeValue) {
      case 'DueDate':
        return 'Due date cannot be in the past';
        break;
      default:
        return field.validationMessage;
        break;
    }
  }
};

// Call functions
necessaryVariables();
validateTaskForm(form);