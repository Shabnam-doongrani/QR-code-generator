function generateQR() {
    let text = document.getElementById("text").value;
    if (!text) { alert("Please enter text or URL!"); return; }
    let qr = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text);
    document.getElementById("qrBox").innerHTML = "<img src='" + qr + "'>";
  }