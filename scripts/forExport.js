function generatePDF(){
    const element = document.getElementById("certificate");
    let opt = {
        filename: "certificate.pdf",
        image: {quality:1},
        jsPDF: {orientation: 'landscape'}
    };
    html2pdf().set(opt).from(element).toPdf().save();
}