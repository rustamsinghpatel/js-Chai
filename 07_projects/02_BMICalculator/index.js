const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value); // Corrected ID
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {  
        results.innerHTML = "Please enter a valid height.";
        return;
    } else if (isNaN(weight) || weight <= 0) {  
        results.innerHTML = "Please enter a valid weight.";
        return;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<h2>Your BMI: ${bmi}</h2>`; 
    }
});
