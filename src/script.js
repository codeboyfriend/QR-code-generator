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

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50)
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
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.remove();
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-btn';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

form.addEventListener('submit', onGenerate)