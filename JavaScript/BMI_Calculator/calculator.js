const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<span>${bmi}</span>`

        //bmi classifications
        if (bmi < 18.5) {
            results.innerHTML = `Your BMI is "${bmi}" and you are underweight`;
        } else if (bmi >= 18.5 && bmi <= 24.9){
            results.innerHTML = `Your BMI is "${bmi}" and you are normal weight`;
        } else if (bmi >= 25 && bmi <= 29.9){
            results.innerHTML = `Your BMI is "${bmi}" and you are overweight`;
        } else if (bmi >= 30){
            results.innerHTML = `Your BMI is "${bmi}" and you are obese`;
        }
    }
});