document.addEventListener('DOMContentLoaded', function() {
    function downloadAsPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set title of the PDF
        doc.setFontSize(16);
        doc.text('JavaScript Documentation', 20, 20); 

        const content = document.querySelector('main');

        const margin = { top: 30, left: 20, bottom: 20 };
        
        doc.html(content, {
            margin: margin,
            callback: function (doc) {
                doc.save('JavaScript_Documentation.pdf');
            }
        });
    }
    document.getElementById('downloadBtn').addEventListener('click', downloadAsPDF);
});
