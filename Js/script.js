/* navbar */

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('hide');
});

/* luas segitiga */
function cekLuas() {
    var form = document.forms["luasForm"];
    if (form.alas.value === "" || form.tinggi.value === "") {
        alert("Angka kosong");
        return false;
    }

    if (!isNumeric(form.alas.value) || !isNumeric(form.tinggi.value)) {
        alert("Masukkan hanya angka yang valid untuk alas dan tinggi");
        return false;
    }

    return true;
}

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function hitungLuas() {
    if (cekLuas()) {
        var form = document.forms["luasForm"];
        var a = parseFloat(form.alas.value);
        var t = parseFloat(form.tinggi.value);
        form.luasHasil.value = (a * t) / 2;
    }
}

function cekKeliling() {
    var Sisi1 = document.getElementById('Sisi1').value;
    var Sisi2 = document.getElementById('Sisi2').value;
    var Sisi3 = document.getElementById('Sisi3').value;

    if (Sisi1 === "" || Sisi2 === "" || Sisi3 === "") {
        alert("Angka kosong");
        return false;
    }

    if (!isNumeric(Sisi1) || !isNumeric(Sisi2) || !isNumeric(Sisi3)) {
        alert("Masukkan hanya angka yang valid untuk panjang sisi");
        return false;
    }

    return true;
}

/* keliling segitiga */
function hitungKeliling() {
    if (cekKeliling()) {
        var S1 = parseFloat(document.getElementById('Sisi1').value);
        var S2 = parseFloat(document.getElementById('Sisi2').value);
        var S3 = parseFloat(document.getElementById('Sisi3').value);
        var keliling = S1 + S2 + S3;
        document.getElementById('kelilingHasil').value = keliling;
    }
}

function resetKelilingForm() {
    document.getElementById('kelilingForm').reset();
    document.getElementById('kelilingHasil').value = "";
}
