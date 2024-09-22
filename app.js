document.querySelector("button").addEventListener("click", function() {
    // Get height and weight values
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    // Convert height from cm to meters
    height = height / 100;
    
    // Calculate BMI
    let bmi = weight / (height * height);
    
    // Display BMI result, rounding it to 2 decimal places
    document.querySelector("input[name='display']").value = bmi.toFixed(2);
});
