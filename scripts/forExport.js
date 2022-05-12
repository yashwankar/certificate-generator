function generatePDF(){
    const element = document.getElementById("certificate");
    let opt = {
        filename: "certificate.pdf",
        image: {quality:1},
        jsPDF: {orientation: 'landscape'}
    };
    html2pdf().set(opt).from(element).toPdf().save();
}

function addScript(url) {
    let script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    document.head.appendChild(script);
}
addScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');