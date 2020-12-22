class DateHelper {

    static textoParaData(texto) {
        return new Date(texto.split('-'));
    }

    static dataParaTexto(data) {
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}