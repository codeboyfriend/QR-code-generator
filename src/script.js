let form = document.getElementById('generate-form');
let qr = document.getElementById('qrcode');
let spinner = document.getElementById('spinner');
let body = document.getElementById('body');

const onGenerate = (e) => {
    e.preventDefault();

    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === "") {
        console.log('Please')
    } else {
        spinner.style.display = 'flex';
        body.style.overflowY = 'hidden';

        setTimeout(() => {
            spinner.style.display = 'none';
            body.style.overflowY = 'scroll';
            generateQR(url, size);
        }, 1000);
    }
    
}

const generateQR = (url, size) => {
    const qrcode = new QRCode(qr, {
        text: url,
        width: size,
        height: size,
    })
}

const clearUI = () => {
    qr.innerText = '';
}


form.addEventListener('submit', onGenerate)