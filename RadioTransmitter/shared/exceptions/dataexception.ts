import { CustomException } from "./customexception";
class DataException extends CustomException {

    constructor(mensaje: string) {
        super(mensaje);
    }


}