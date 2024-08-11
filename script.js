function generateQRCode() {
    const text = document.getElementById("text").value;
    const qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";
    const qrcode = new QRCode(qrcodeDiv, {
        text :text,
        height :200,
        width : 200,
    });
}

        
