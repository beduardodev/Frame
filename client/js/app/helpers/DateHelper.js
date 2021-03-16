class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada!');
    }

    static textoParaData(texto) {

        if (/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Data está fora do formato!');

        return new Date(texto.split('-'));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;


    }
}