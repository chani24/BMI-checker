document.querySelector('#btn').addEventListener('click', function(){
    let weight, height, realHeight, bmi;
   height = document.querySelector('#height-input').value;
    weight = document.querySelector('#weight-input').value;

    realHeight = (height*height)/10000;
    
    bmi = (weight/realHeight).toFixed(1);

    document.querySelector('#bmi').textContent = (`Current BMI: ${bmi}`);
    console.log(bmi);

    setTimeout(function(){
        let advice;
        if (bmi < 18.5){
            document.querySelector("#bmi").style.color = "#3888ff";
         advice = (`The result suggests you are underweight, this increases 
         your risk of malnutrition, anemia, etc. We suggest you contact a medical practicioner
          for proper medical advice`);
        } 
        else if (bmi > 18.5 && bmi < 24.9){
            document.querySelector("#bmi").style.color = "#7aff73";
            advice = (`The result suggests you are of normal weight, stay on track and
            don't forget to drink at least two litres of water daily`);
        } 
        else if (bmi > 24.9 && bmi < 29.9){
            document.querySelector("#bmi").style.color = "#ffab23";
            advice = (`The result suggests you are overweight, this increases 
            your risk of hypertension, type 2 diabetes, etc. We suggest you contact a medical practicioner
             for proper medical advice`);
        } 
        else {
            document.querySelector("#bmi").style.color = "#cc1310";
            advice = (`The result suggests you are obese, this increases 
            your risk of cardiovascular diseases. We suggest you contact a medical practicioner
             for proper medical advice`);
        };
        document.querySelector('#recommendation').textContent = advice;
    }, 100)
    });