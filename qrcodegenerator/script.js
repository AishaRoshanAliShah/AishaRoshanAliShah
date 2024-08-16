function generateQR(){
    var qrText=document.getElementById("qrText");
    var qrImage=document.getElementById("qrImage");
    var qrContainer=document.getElementById("qrContainer");

    if(qrText.value.length>0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150*150&data="+qrText;
        qrText.value="";
        qrContainer.innerHTML=`<a href="${qrImage.src}" download="qr-code.png">Download</a>`;
    }
}