let qr;

function generateQR(){

const text=document.getElementById("text").value;

if(text===""){
alert("Enter text");
return;
}

document.getElementById("qrcode").innerHTML="";

qr=new QRCode(document.getElementById("qrcode"),{
text:text,
width:250,
height:250
});

}

function downloadQR(){

const img=document.querySelector("#qrcode img");

if(!img){
alert("Generate QR First");
return;
}

const a=document.createElement("a");

a.href=img.src;

a.download="QRCode.png";

a.click();

}

function onScanSuccess(decodedText){

document.getElementById("result").value=decodedText;

}

const html5QrCode=new Html5QrcodeScanner(
"reader",
{
fps:10,
qrbox:250
}
);

html5QrCode.render(onScanSuccess);