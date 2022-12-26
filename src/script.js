let form = document.getElementById('generate-form');
let url = document.getElementById('url');
let qr = document.getElementById('qr-code')

const onGenerate = (e) => {
    e.preventDefault()

    let qrcode = new QRCode("qr-code", {
        text: url.value,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}


form.addEventListener('submit', onGenerate)