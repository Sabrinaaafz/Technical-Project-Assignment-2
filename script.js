const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high")) {
    body.style.background =
      "linear-gradient(55deg, #e1e9e8 0%, #d5e9eb 51%, #ededed 85%)";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let height_status = false,
    weight_status = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height_error").innerHTML =
      "Masukan Tinggi Badan Dalam cm";
  } else {
    document.getElementById("height_error").innerHTML = "";
    height_status = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight_error").innerHTML =
      "Masukan Berat Badan Dalam kg ";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weight_status = true;
  }

  if (height_status && weight_status) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = "Your BMI UnderWeight : " + bmi;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML = "Your BMI Normal : " + bmi;
    } else if (bmi >= 25 && bmi < 29.9) {
      result.innerHTML = "Your BMI OverWeight : " + bmi;
    } else {
      result.innerHTML = "Your BMI is Obesity : " + bmi;
    }
  } else {
    alert("Data yang Anda Masukan Salah!");
    result.innerHTML = "";
  }
});
