document.addEventListener("DOMContentLoaded", () => {
    
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; 
        html2pdf($elementoParaConvertir)
        .from($elementoParaConvertir)   
        .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpg',
                    quality: 0.98
                },
                /*html2canvas: {
                    scale: 1, 
                    letterRendering: true,
                },*/
                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            
            //.from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
    });

});
/*
function aa(){
    var element = document.getElementById('imprime');
    html2pdf(element)
    .from(element)   
        .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 1, 
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            
            //.from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
}*/