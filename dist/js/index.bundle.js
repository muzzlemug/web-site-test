/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Пока поля ввода не заполнены , кнопку нельзя нажать \n/*document.addEventListener('DOMContentLoaded', function() {\n    const form = document.getElementById('registration-form');\n    const submitBtn = document.getElementById('submit-btn');\n    const requiredFields = form.querySelectorAll('[required]');\n    \n    function checkFormValidity() {\n        let allFilled = true;\n        requiredFields.forEach(field => {\n            if (!field.value.trim()) {\n                allFilled = false;\n            }\n        });\n        submitBtn.disabled = !allFilled;\n    }\n    \n    requiredFields.forEach(field => {\n        field.addEventListener('input', checkFormValidity);\n    });\n    \n    checkFormValidity();\n});\n*/\n//disabled button \nconsole.log('Hello,World')\ndocument.addEventListener('DOMContentLoaded', function() {\n    const inputFields = document.querySelectorAll('.form-inputs .form-input input');\n    const submitButton = document.getElementById('submitButton');\n\n    function checkInputFields() {\n        let allFieldsFilled = true;\n        inputFields.forEach(field => {\n            if (!field.value.trim()) {\n                allFieldsFilled = false;\n            }\n        });\n\n        if (allFieldsFilled) {\n            submitButton.disabled = false;\n        } else {\n            submitButton.disabled = true;\n        }\n    }\n\n    inputFields.forEach(field => {\n        field.addEventListener('input', checkInputFields);\n    });\n\n    // Проверка начального состояния\n    checkInputFields();\n});\n/////ИСЧЕЗНОВЕНИЕ НАДПИСЕЙ \ndocument.addEventListener('DOMContentLoaded', function() {\n    const inputs = document.querySelectorAll('.placeholder');\n  \n    inputs.forEach(input => {\n      input.addEventListener('input', function() {\n        const spanId = input.id + \"-required\";\n        const span = document.getElementById(spanId);\n        \n        if (input.value.trim() !== '') {\n          span.style.display = 'none';\n        } else {\n          span.style.display = 'inline';\n        }\n      });\n    });\n  });\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const inputs = document.querySelectorAll('.placeholder');\n    const requiredFieldsMsg = document.getElementById('required-fields-msg');\n\n    function checkAllFieldsFilled() {\n        const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n        requiredFieldsMsg.style.display = allFieldsFilled ? 'none' : 'block';\n    }\n\n    inputs.forEach(input => {\n        input.addEventListener('input', checkAllFieldsFilled);\n    });\n\n    checkAllFieldsFilled(); // Проверяем, заполнены ли все поля при загрузке страницы\n});\n//////////////////////////Последний элемент точка в span \ndocument.addEventListener('DOMContentLoaded', function() {\n    const inputs = document.querySelectorAll('.placeholder');\n    const requiredFieldsMsg = document.getElementById('required-fields-msg');\n    const labels = document.querySelectorAll('.text_in_ankets label');\n\n    function checkAllFieldsFilled() {\n        const allFieldsFilled = Array.from(inputs).every(input => input.value.trim() !== '');\n        requiredFieldsMsg.style.display = allFieldsFilled ? 'none' : 'block';\n    }\n\n    function updatePunctuation() {\n        const visibleLabels = Array.from(labels).filter(label => label.style.display !== 'none');\n\n        visibleLabels.forEach((label, index) => {\n            label.classList.remove('comma', 'period');\n            if (index < visibleLabels.length - 1) {\n                label.classList.add('comma');\n            } else {\n                label.classList.add('period');\n            }\n        });\n    }\n\n    inputs.forEach(input => {\n        input.addEventListener('input', function() {\n            const spanId = input.id + \"-required\";\n            const span = document.getElementById(spanId);\n\n            if (input.value.trim() !== '') {\n                span.style.display = 'none';\n            } else {\n                span.style.display = 'inline';\n            }\n\n            updatePunctuation();\n        });\n\n        input.addEventListener('input', checkAllFieldsFilled);\n    });\n\n    checkAllFieldsFilled(); // Проверяем, заполнены ли все поля при загрузке страницы\n    updatePunctuation(); // Устанавливаем правильные знаки препинания при загрузке страницы\n});\n\n//////////////////////////////////////////////\n/*error mes*/\n/////////////////\ndocument.addEventListener('DOMContentLoaded', function() {\n    const form = document.getElementById('form');\n    const inputs = form.querySelectorAll('.placeholder');\n    const submitButton = document.getElementById('submitButton');\n    const touchedInputs = new Set();\n\n    function validateInput(input, errorMessage) {\n        let valid = true;\n        switch (input.id) {\n            case 'name':\n                if (input.value.trim() === '') {\n                    errorMessage.textContent = 'Пожалуйста, введите имя';\n                    valid = false;\n                }\n                break;\n            case 'surname':\n                if (input.value.trim().length < 5 || input.value.trim().length > 20) {\n                    errorMessage.textContent = 'Длина фамилии должна быть от 5 до 20 знаков';\n                    valid = false;\n                }\n                break;\n            case 'patronymic':\n                if (input.value.trim().length < 3) {\n                    errorMessage.textContent = 'Ваше отчество должно состоять не менее чем из 3 символов';\n                    valid = false;\n                }\n                break;\n            case 'email':\n                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;\n                if (!emailPattern.test(input.value.trim())) {\n                    errorMessage.textContent = 'Неверный формат E-mail';\n                    valid = false;\n                }\n                break;\n            case 'password':\n                if (input.value.trim().length < 5) {\n                    errorMessage.textContent = 'Ваш пароль должен быть длиной не менее 5 символов';\n                    valid = false;\n                }\n                break;\n            case 'confirm-password':\n                const password = document.getElementById('password').value.trim();\n                if (input.value.trim() !== password) {\n                    errorMessage.textContent = 'Пожалуйста, введите тот же пароль, что и выше';\n                    valid = false;\n                }\n                break;\n            case 'phone':\n                const phonePattern = /^\\+?\\d{1,4}?[\\d\\s-]{5,20}$/;\n                if (!phonePattern.test(input.value.trim())) {\n                    errorMessage.textContent = 'Пожалуйста, введите телефон';\n                    valid = false;\n                }\n                break;\n            default:\n                break;\n        }\n\n        if (!valid && touchedInputs.has(input)) {\n            input.classList.add('error');\n            errorMessage.style.visibility = 'visible';\n            errorMessage.style.opacity = '1';\n        } else {\n            input.classList.remove('error');\n            errorMessage.style.visibility = 'hidden';\n            errorMessage.style.opacity = '0';\n        }\n\n        return valid;\n    }\n\n    function checkFormValidity() {\n        let formIsValid = true;\n\n        inputs.forEach(input => {\n            const errorMessage = input.nextElementSibling;\n            if (!validateInput(input, errorMessage)) {\n                formIsValid = false;\n            }\n        });\n\n        submitButton.disabled = !formIsValid;\n    }\n\n    inputs.forEach(input => {\n        const errorMessage = input.nextElementSibling;\n\n        input.addEventListener('blur', function() {\n            touchedInputs.add(input);\n            validateInput(input, errorMessage);\n            checkFormValidity();\n        });\n\n        input.addEventListener('input', function() {\n            if (touchedInputs.has(input)) {\n                validateInput(input, errorMessage);\n            }\n            checkFormValidity();\n        });\n    });\n\n    form.addEventListener('submit', function(event) {\n        let formIsValid = true;\n\n        inputs.forEach(input => {\n            const errorMessage = input.nextElementSibling;\n            touchedInputs.add(input); // Mark all inputs as touched on form submission\n            if (!validateInput(input, errorMessage)) {\n                formIsValid = false;\n            }\n        });\n\n        if (!formIsValid) {\n            event.preventDefault(); // Останавливает отправку формы\n        }\n    });\n\n    // Проверка валидности формы при загрузке страницы\n    checkFormValidity();\n});\nconsole.log('hello')\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });