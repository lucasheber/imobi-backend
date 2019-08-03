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
    if (watsonObject.intents.length > 0 && watsonObject.intents[0].intent == 'Adquirir Apartamento') { 
        allSearchs = []

        for (let index = 0; index < watsonObject.entities.length; index++) {
            if (watsonObject.entities[index].entity == 'apartamento') {
                let search;
                if (index + 1 < watsonObject.entities.length) {
                    search = watsonObject.input.text.substring(
                        watsonObject.entities[index].location[0],
                        watsonObject.entities[index + 1].location[0]
                    )
                }
                else {
                    search = watsonObject.input.text.substring(
                        watsonObject.entities[index].location[0]
                    )
                }

                allSearchs.push(new Promise((resolve, reject) => {
                    apartamentosService.find({ "name": { "$regex": search.trim(), "$options": "i" } }, (err, data) => {         
                        if (err || data.length == 0 || data == undefined) {
                            watsonObject.output.text[0] += ", Este apartamentos não foi encontrado.";
                            resolve(watsonObject);
                        }
                        else {
                            watsonObject.context.hasOwnProperty("itens") && watsonObject.context.itens != '' ? response.context.itens.push(data[0]) : response.context.itens = [data[0]];
                            watsonObject.output.text[0] += ` ${data[0].name}, `;
                            resolve(watsonObject);
                        }
                    });
                }));
            }
        }
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
});