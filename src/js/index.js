//Пока поля ввода не заполнены , кнопку нельзя нажать 
/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const submitBtn = document.getElementById('submit-btn');
    const requiredFields = form.querySelectorAll('[required]');
    
    function checkFormValidity() {
        let allFilled = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    }
    
    requiredFields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
    });
    
    checkFormValidity();
});
*/
//disabled button 
document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.form-inputs .form-input input');
    const submitButton = document.getElementById('submitButton');

    function checkInputFields() {
        let allFieldsFilled = true;
        inputFields.forEach(field => {
            if (!field.value.trim()) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    inputFields.forEach(field => {
        field.addEventListener('input', checkInputFields);
    });

    // Проверка начального состояния
    checkInputFields();
});
/////ИСЧЕЗНОВЕНИЕ НАДПИСЕЙ 
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.placeholder');
  
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        const spanId = input.id + "-required";
        const span = document.getElementById(spanId);
        
        if (input.value.trim() !== '') {
          span.style.display = 'none';
        } else {
          span.style.display = 'inline';
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.placeholder');
    const requiredFieldsMsg = document.getElementById('required-fields-msg');

    function checkAllFieldsFilled() {
        const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        requiredFieldsMsg.style.display = allFieldsFilled ? 'none' : 'block';
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkAllFieldsFilled);
    });

    checkAllFieldsFilled(); // Проверяем, заполнены ли все поля при загрузке страницы
});
//////////////////////////Последний элемент точка в span 
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.placeholder');
    const requiredFieldsMsg = document.getElementById('required-fields-msg');
    const labels = document.querySelectorAll('.text_in_ankets label');

    function checkAllFieldsFilled() {
        const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        requiredFieldsMsg.style.display = allFieldsFilled ? 'none' : 'block';
    }

    function updatePunctuation() {
        const visibleLabels = Array.from(labels).filter(label => label.style.display !== 'none');

        visibleLabels.forEach((label, index) => {
            label.classList.remove('comma', 'period');
            if (index < visibleLabels.length - 1) {
                label.classList.add('comma');
            } else {
                label.classList.add('period');
            }
        });
    }

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const spanId = input.id + "-required";
            const span = document.getElementById(spanId);

            if (input.value.trim() !== '') {
                span.style.display = 'none';
            } else {
                span.style.display = 'inline';
            }

            updatePunctuation();
        });

        input.addEventListener('input', checkAllFieldsFilled);
    });

    checkAllFieldsFilled(); // Проверяем, заполнены ли все поля при загрузке страницы
    updatePunctuation(); // Устанавливаем правильные знаки препинания при загрузке страницы
});

//////////////////////////////////////////////
/*error mes*/
/////////////////
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('.placeholder');
    const submitButton = document.getElementById('submitButton');
    const touchedInputs = new Set();

    function validateInput(input, errorMessage) {
        let valid = true;
        switch (input.id) {
            case 'name':
                if (input.value.trim() === '') {
                    errorMessage.textContent = 'Пожалуйста, введите имя';
                    valid = false;
                }
                break;
            case 'surname':
                if (input.value.trim().length < 5 || input.value.trim().length > 20) {
                    errorMessage.textContent = 'Длина фамилии должна быть от 5 до 20 знаков';
                    valid = false;
                }
                break;
            case 'patronymic':
                if (input.value.trim().length < 3) {
                    errorMessage.textContent = 'Ваше отчество должно состоять не менее чем из 3 символов';
                    valid = false;
                }
                break;
            case 'email':
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                if (!emailPattern.test(input.value.trim())) {
                    errorMessage.textContent = 'Неверный формат E-mail';
                    valid = false;
                }
                break;
            case 'password':
                if (input.value.trim().length < 5) {
                    errorMessage.textContent = 'Ваш пароль должен быть длиной не менее 5 символов';
                    valid = false;
                }
                break;
            case 'confirm-password':
                const password = document.getElementById('password').value.trim();
                if (input.value.trim() !== password) {
                    errorMessage.textContent = 'Пожалуйста, введите тот же пароль, что и выше';
                    valid = false;
                }
                break;
            case 'phone':
                const phonePattern = /^\+?\d{1,4}?[\d\s-]{5,20}$/;
                if (!phonePattern.test(input.value.trim())) {
                    errorMessage.textContent = 'Пожалуйста, введите телефон';
                    valid = false;
                }
                break;
            default:
                break;
        }

        if (!valid && touchedInputs.has(input)) {
            input.classList.add('error');
            errorMessage.style.visibility = 'visible';
            errorMessage.style.opacity = '1';
        } else {
            input.classList.remove('error');
            errorMessage.style.visibility = 'hidden';
            errorMessage.style.opacity = '0';
        }

        return valid;
    }

    function checkFormValidity() {
        let formIsValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!validateInput(input, errorMessage)) {
                formIsValid = false;
            }
        });

        submitButton.disabled = !formIsValid;
    }

    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;

        input.addEventListener('blur', function() {
            touchedInputs.add(input);
            validateInput(input, errorMessage);
            checkFormValidity();
        });

        input.addEventListener('input', function() {
            if (touchedInputs.has(input)) {
                validateInput(input, errorMessage);
            }
            checkFormValidity();
        });
    });

    form.addEventListener('submit', function(event) {
        let formIsValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            touchedInputs.add(input); // Mark all inputs as touched on form submission
            if (!validateInput(input, errorMessage)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            event.preventDefault(); // Останавливает отправку формы
        }
    });

    // Проверка валидности формы при загрузке страницы
    checkFormValidity();
});
