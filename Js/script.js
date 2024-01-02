/* navbar */

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('hide');
});

/* hitung luas segitiga */
function cek(){
    if(form.alas.value=="" || form.tinggi.value==""){
    alert("angka kosong");
    exit
    }
  }
  function hitung() {
    cek();
    a=parseInt(form.alas.value);
    t=parseInt(form.tinggi.value);
    form.hasil.value=a*t/2;
  }

  /* hitung keliling segitiga */
  function cek() {
    var Sisi1 = document.getElementById('Sisi1').value;
    var Sisi2 = document.getElementById('Sisi2').value;
    var Sisi3 = document.getElementById('Sisi3').value;

    if (Sisi1 === "" || Sisi2 === "" || Sisi3 === "") {
        alert("Angka kosong");
        return false;
    }
    return true;
}

function hitung() {
    if (cek()) {
        var S1 = parseFloat(document.getElementById('Sisi1').value);
        var S2 = parseFloat(document.getElementById('Sisi2').value);
        var S3 = parseFloat(document.getElementById('Sisi3').value);
        var keliling = S1 + S2 + S3;
        document.getElementById('hasil').value = keliling;
    }
}

function resetForm() {
    document.getElementById('form1').reset();
    document.getElementById('hasil').value = "";
}