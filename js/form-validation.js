// Variables
const form = document.querySelector('form');

// Form validation
/*Heavy assistance from https://oliverjam.es/articles/better-native-form-validation*/
function validateTaskForm(form) {
  form.setAttribute('novalidate', ''); // prevents browser default validation appearing, can now override

  // Event listener: submit
  form.addEventListener('submit', (event) => {
    const allValid = form.checkValidity(); // variable calls method to check all fields in form are valid
    if (!allValid) {
      event.preventDefault();
    }
  });

  const fields = Array.from(form.elements); // create an array from all elements in a form

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
    field.setAttribute('aria-describedby', errorId);
    field.insertAdjacentElement('afterend', errorBox); // insert error messages next to field

    // Event listener: invalid values in fields
    field.addEventListener('invalid', () => {
      field.setAttribute('aria-invalid', true);
      //field.style.display = 'block';
      const message = errorMessage(field);
      errorBox.textContent = message || field.validationMessage; // add browser default error messages inside p stemming from errorBox
    });

    // Event listener: on input of values in fields
    field.addEventListener('input', () => {
      const valid = field.checkValidity();
      if (valid) {
        field.setAttribute('aria-invalid', false);
        //field.style.display = 'none';
        errorBox.textContent = '';
      };
    });
  });
};

// Custom error messages
function errorMessage(field) {
  const validity = field.validity;
  if (validity.valueMissing) {
    return 'Value is missing'; // replace with more useful error message
  };
  if (validity.typeMismatch) {
    return 'Value is invalid';  // replace with more useful error message
  }
};

// Call form validation
validateTaskForm(form);