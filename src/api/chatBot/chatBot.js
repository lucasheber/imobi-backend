require('dotenv').config()
const AssistantV1 = require('ibm-watson/assistant/v1');
const chatService = require('../chat/chatService')
const apartamentosService = require('../apartamentos/apartamentosService')


const assistant = new AssistantV1({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    version: process.env.WATSON_VERSION
});


iniciarOuContinuarConversa = (input) => new Promise((resolve, reject) => {
    chatService.find({ session_id: input.session_id }, (err, data) => {
        if (err || data.length == 0 || data == undefined) {

            let chat = new chatService({
                input: input.message || undefined,
                session_id: undefined,
            });
            chat.session_id = chat._id;

            resolve(chat);
        }
        else {
            chat = data[0];
            chat.input = input.message || undefined,
                resolve(chat);
        }
    })
});

reconstruirIntencoesEntidadesContexto = (watsonObject) => new Promise((resolve, reject) => {

    if (watsonObject.context.codigo != undefined) {

        apartamentosService.find({ "codigo": watsonObject.context.codigo }, (err, data) => {
            if (err || data.length == 0 || data == undefined) {

                watsonObject.output.text[0] = `O codigo ${watsonObject.context.codigo} do apartamento não foi encontrado.`;
                watsonObject.context.codigo = undefined
                resolve(watsonObject);
            }
            else {

                watsonObject.context.hasOwnProperty("itens") && watsonObject.context.itens != '' ? watsonObject.context.itens = data[0] : watsonObject.context.itens = data[0];
                //if (watsonObject.output.text[0] != 'Veja os detalhes aqui! Obrigado')
                watsonObject.output.text[0] = `Clique em 'Meu Apartamento' no canto superior para ver mais detalhes.`;
                watsonObject.context.codigo = undefined
                resolve(watsonObject);
            }
        });
    } else {
        resolve(watsonObject);
    }
})

module.exports.analisarConstruirMensagem = (input) => new Promise((resolve, reject) => {
    iniciarOuContinuarConversa(input).then((user) => {

        assistant.message({
            workspace_id: process.env.WATSON_WORKSPACE_ID,
            session_id: user.session_id,
            context: user.context,
            input: user.input
        })
            .then((res) => {
                reconstruirIntencoesEntidadesContexto(res).then((resp) => {
                    user.messages.push({
                        message: input.message.text
                    });

                    resp.output.text.forEach(message => {
                        user.messages.push({
                            message: message,
                            base: 'received'
                        });
                    });

                    user.context = resp.context;

                    resolve(user);

                })
            })
    })
});