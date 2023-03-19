const form = document.getElementById("calculator");
form.addEventListener("submit", function (event) {
event.preventDefault();
const Angka1 = Number(document.getElementById("Angka1").value);
const pilihan = document.getElementById("pilihan").value;
const Angka2 = Number(document.getElementById("Angka2").value);

  
  if (isNaN(Angka1) || isNaN(Angka2)) {
    alert("Maaf yang Anda Input bukan Angka");
    return;
  }

  let result;
  switch (pilihan) {
    case "+":
      result = Angka1 + Angka2;
      break;
    case "-":
      result = Angka1 - Angka2;
      break;
    case "*":
      result = Angka1 * Angka2;
      break;
    case "/":
      result = Angka1 / Angka2;
      break;
    default:
      alert("Buat Pilihan");
      return;
  }

  // Tampilkan hasil perhitungan
  document.getElementById(
    "Hasil"
  ).innerHTML = `Hasil: ${Angka1} ${Hasil} ${Angka2} = ${result}`;
});
