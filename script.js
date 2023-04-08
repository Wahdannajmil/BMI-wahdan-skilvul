let hasilbmi = document.querySelector("#hasil-bmi");
let klasifikasihasil = document.querySelector("#klasifikasi-hasil");
let tb = document.querySelector("#input-tb");
let bb = document.querySelector("#input-bb");

// rumus : Berat Badan/(Tinggi Badan/100)^2
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5 – 24.9
// Overweight = 25 – 29.9
// Obesity = BMI of 30 or greater
const tampilHasil = () => {
    const bmi = bb.value / (tb.value/100)**2;

    if (tb.value === '' || bb.value === '') {
        hasilbmi.innerHTML = "Masukkan nilai yang valid."
    } else if (bmi < 18.5) {
        hasilbmi.innerHTML = `BMI Anda adalah ${bmi}.`;
        klasifikasihasil.innerHTML = "Underweight(berat badan kurang)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasilbmi.innerHTML = `BMI Anda adalah ${bmi}.`;
        klasifikasihasil.innerHTML = "Normal weight(berat normal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasilbmi.innerHTML = `BMI Anda adalah ${bmi}.`;
        klasifikasihasil.innerHTML = "Overweight(berat badan berlebih)";
    } else {
        klasifikasihasil.innerHTML = "Obesity(obesitas)";
    }
}