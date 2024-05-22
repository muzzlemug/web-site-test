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
        let visibleLabels = Array.from(labels).filter(label => label.style.display !== 'none');
        
        visibleLabels.forEach((label, index) => {
            label.textContent = label.textContent.replace(/[,.]*$/, '');
            if (index < visibleLabels.length - 1) {
                label.textContent += ',';
            } else {
                label.textContent += '.';
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
