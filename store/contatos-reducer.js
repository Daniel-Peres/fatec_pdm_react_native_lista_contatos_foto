import { ADD_CONTATO, RMV_CONTATO } from "./contatos-actions";

import Contato from '../modelo/Contato'

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {

    switch (action.type) {
        case ADD_CONTATO:
            const l = new Contato(
                new Date().toString()
                , action.dadosContato.nome
                , action.dadosContato.telefone
                , action.dadosContato.imagem);
            return {
                contatos: estado.contatos.concat(l)
            };
        case RMV_CONTATO:
            return {
                contatos: estado.contatos.filter(contato => { return contato.key != action.dadosContato.key })
            };
        default:
            return estado;
    }

}