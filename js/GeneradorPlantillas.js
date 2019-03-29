var doc;
var o, f;

$(document).ready(function () {
    $("#textoArea").val('asignarFormato("carta", "vertical");\ninsertarTexto("Contrato", "normal",10,10,10);');
    eventoPresionarTecla();
    console.log(window.screenX);
});

function eventoPresionarTecla() {
    var texto = $("#textoArea").val();
    try {
        var evaluar =
            texto +
            "var string = doc.output('datauristring');" +
            "$('#framePrincipal').attr('src', string);";
        eval(evaluar);
    } catch (error) {
        console.log(error);
    }

}

/*********************************************************************************************************
 *                FUNCION PARA INSERTAR TEXTO EN PDF
 *********************************************************************************************************/
function insertarTexto(text, tipoletra, tamanio, posicionX, posicionY) {
    try {
        var margen = parseInt(40);
        var altura = parseInt(40);
        doc.setFontSize(tamanio);
        doc.setFontType(tipoletra);
        doc.setFont('courier');
        doc.text(margen + parseInt(posicionX), altura + parseInt(posicionY), noNulos(text));
    } catch (e) {
        // console.log(e);
    }
}

function insertaPagina() {
    doc.addPage();
}

function asignarFormato(format, orientation) {
    if (orientation === 'vertical') { o = "portrait" }
    if (orientation === 'horizontal') { o = "landscape" }
    if (format === 'carta') { f = "letter" }
    if (format === 'oficio') { f = "legal" }
    doc = new jsPDF(o, 'pt', f);
}

function noNulos(texto) {
    if (texto == null || texto == undefined) {
        return "";
    }
    return texto.toString();
}

function lineaVertical(posicionX, posicionY, longitud, grosor) {
    doc.setLineWidth(grosor == undefined || grosor == null ? 1.0 : grosor);
    doc.line(posicionX, posicionY, posicionX, longitud);

}

function lineaHorizontal(posicionX, posicionY, longitud, grosor) {
    doc.setLineWidth(grosor == undefined || grosor == null ? 1.0 : grosor);
    doc.line(posicionY, posicionX, longitud, posicionX);
}

function obtenerFecha() {
    var d = new Date();
    return d.getDate() + "/" + (d.getMonth().toString().length == 1 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "/" + d.getFullYear();
}

function obtenerHora() {
    var d = new Date();
    return d.getHours() + ":" + (d.getMinutes().toString().length == 1 ? "0" + d.getMinutes() : d.getMinutes()) + ":" + (d.getSeconds().toString().length == 1 ? "0" + d.getSeconds() : d.getSeconds());
}

function insertarImagen(base64,posicionX, posicionY,ancho,alto) {
    doc.addImage(base64, posicionX, posicionY, ancho, alto);
}

function insertarTabla(nombreTabla, margentop,encabezado) {
    margentop == null || margentop == undefined ? margentop = 150 : margentop;

    $(document.body).append('<table id="tablaImpresion" style="display:none"><thead><tr></tr></thead><tbody></tbody></table>');

    for (var i = 0; i < $("#" + nombreTabla + "").DataTable().columns().data().length; i++) {
        $("#tablaImpresion thead tr").append('<th>Head</th>');
    }

    $('#tablaImpresion').DataTable({
        pageLength: -1,
        sDom: 't',
        data: $("#" + nombreTabla + "").DataTable().rows().data()
    });


    var res = doc.autoTableHtmlToJson(document.getElementById("tablaImpresion"));
    doc.setFontSize(10);
    doc.setFontType('normal');
    doc.setFont('courier');

    var options = {
        theme: 'plain',
        margin: {
            top: margentop, right: 30, bottom: 30, left: 30
        },
        didDrawCell: data => {

        },
        didDrawPage: data => {
            if (o == "portrait") {
                doc.text("Pag." + data.pageNumber.toString(), 530, 55);
            }
            if (o == "landscape") {
                doc.text("Pag." + data.pageNumber.toString(), 710, 55);
            }
        },
        showHead: 'everyPage',   //'everyPage'|'firstPage'|'never'|| Default - > 'everyPage''
        styles: { font: 'courier', fontSize: 10 }
    }

    doc.autoTable(res.columns, res.data, options)

    $("#tablaImpresion").remove();

}


function imprimirPDF() {
    var string = doc.output('datauristring');
    var win = window.open();
    win.document.write('<iframe width="100%" height="100%" src="' + string + '" frameborder="0"></iframe>');
    setTimeout(function () {
        win.stop();
    }, 1500)
}
