const form = document.querySelector("form");

// below useCase will give you an empty value
// const height = parseInt(document.querySelector("#height").value);
// const weight = parseInt(document.querySelector("#weight").value);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    // Validation the checks
    if(height === "" || height < 0  || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    } else if(weight === "" || weight < 0  || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);

        // show thw result
        results.innerHTML = `Your BMI is ${bmi}`;
    }

    if (results < 18.6) {
        results.classList.add("underweight");
    } else if (results > 18.6 && results < 24.9) {
        results.classList.add("normal");        
    } else if (results > 24.9) {
        results.classList.add("overweight");
    } 
    

});