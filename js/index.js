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