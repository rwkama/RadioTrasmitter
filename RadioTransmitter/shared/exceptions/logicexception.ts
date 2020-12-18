import { CustomException } from "./customexception";
class LogicException extends CustomException {

    constructor(mensaje: string) {
        super(mensaje);
    }


}
