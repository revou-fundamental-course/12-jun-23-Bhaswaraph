const inputs = document.querySelectorAll(".unit input");
const celsius = document.querySelector("#celsius");
const farenheit = document.querySelector("#farenheit");
const kelvin = document.querySelector("#kelvin");

// Select semua input menggunakan quearySelectorAll, dan juga seelct masing masing input dengan id masing masing.

inputs.forEach(input => {
    // Gunakan forEach untuk loop pada addEventListener, dan gunakan addEventListener untuk input. 
    input.addEventListener("input", e=> {
        const unit = e.target.id;
        // unit akan mengambil id pada salah satu input yang kita gunakan
        const v = parseInt(e.target.value);
        // v akan mengambil value dari input id yang di dapat oleh var unit, dan gunakan parseInt untuk mengkonversi string menjadi int
        if(unit ==="celsius") {
            farenheit.value = parseFloat((v * 1.8) + 32).toFixed(4) * 1;
            kelvin.value =  parseFloat(v  + 273.15).toFixed(4)*1;
        }else if(unit ==="farenheit") {
            celsius.value = parseFloat((v-32) * 5/9).toFixed(4) * 1;
            kelvin.value = parseFloat(((v-32) * 5/9) + 273.15).toFixed(4)*1;
        }else if(unit ==="kelvin") {
            celsius.value = parseFloat(v-273.15).toFixed(4)*1;
            farenheit.value = parseFloat((v-273.15) * 9 /5 + 32).toFixed(4)*1;
        }
        // berikut adalah algoritma kalkulasi untuk mengubah suhu dari input menjadi output
    })
})