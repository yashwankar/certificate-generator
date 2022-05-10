function generatePDF(){
    const element = document.getElementById("certificate");
    let opt = {
        filename: "certificate.pdf",
        image: {quality:1},
        jsPDF: {orientation: 'landscape'}
    };
    html2pdf().set(opt).from(element).toPdf().save();
}

function generateImage(){
    const element = document.getElementById("certificate");

    const elementImage = new element.canvas.toDataURL('image/png', 1.0);
    let opt = {
        // filename: "certificate.png",
        image: {quality:1},
        jsPDF: {orientation: 'landscape'}
    };
    // html2pdf().set(opt).from(element).toImg().output('img');
    let pdf = new jsPDF().addImage(elementImage, 'png').save();

}