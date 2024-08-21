let qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("why did you scan me?");

function generateQr(){
  if(
    document.querySelector("input").value === "" ||
    document.querySelector("input").value === " "){
      alert("Input Field Is Empty");
    }
    else{
      qrcode.makeCode(document.querySelector("input").value);
    }
}