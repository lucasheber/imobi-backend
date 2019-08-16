const apartamentosService = require('./apartamentosService');

const apartamentos = [
    new apartamentosService({
        codigo: "315-12/2018",
        description: "COM 04 (QUATRO) QUARTOS, TODOS COM ARMÁRIOS, SALA COM ÁREA DE VENTILAÇÃO EXTERNA, COPA, COZINHA, BANHEIRO AMPLO, ÁREA DE SERVIÇOS EXTERNA E DEP. EMPREGADA COM BANHEIRO.\r\nEXCELENTE LOCALIZAÇÃO - PRÉDIO COM ELEVADOR E PORTARIA.",
        city: "Barbacena",
        address: "RUA XV DE NOVEMBRO - EDIFÍCIO DO BANCO MERCANTIL",
        type: "Apartamento",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/37eb30f5706720d1f2c4dd3cdb6060ec.jpg",
        value: "370000.00",
    }),

    new apartamentosService({
        codigo: "280-03/18",
        description: "TRÊS QUARTOS, SENDO UM SUÍTE COM SACADA, SALA EM DOIS AMBIENTES COM SACADA, COZINHA, BANHEIRO SOCIAL, ÁREA DE SERVIÇOS, DEP. EMPREGADA COMPLETA E GARAGEM. EXCELENTE PRÉDIO COM PORTEIRO, ELEVADORES E SALÃO DE FESTAS.",
        city: "Barbacena",
        address: "Rua Presidente Kennedy",
        type: "Apartamento",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/17fa028fb1a22f86742d4bda96521593.jpg",
        value: "600000.00",
    }),

    new apartamentosService({
        codigo: "174-10/15",
        description: "PRÓXIMO COLÉGIO SALESIANOS - 05 MINUTOS DO CENTRO\r\n\r\nAPARTAMENTOS PADRÃO TRÊS QUARTOS, SENDO UM SUÍTE (COM SACADA), SALA, COZINHA, BANHEIRO SOCIAL, ÁREA DE SERVIÇOS E UMA VAGA DE GARAGEM.\r\nOPÇÕES COM COBERTURA COM ÁREA GOURMET COBERTA E ÁREA EXTERNA COM CHURRASQUEIRA.\r\nPREVISÃO DE ENTREGA DE 06 (SEIS) MESES.\r\nFINANCIAMENTO PELO BANCO OU DIRETO COM A CONSTRUTORA",
        city: "Barbacena",
        address: "Rua do salesianos",
        type: "Apartamento",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/e82f75bcae5729eec464777610c44c79.jpg",
        value: "299000.00",
    }),

    new apartamentosService({
        codigo: "323-02/19",
        type: "Apartamento",
        city: "Barbacena",
        address: "RUA CRUZ DAS ALMAS",
        value: "450000.00",
        description: "COM 03 (TRÊS) QUARTOS, SENDO UM SUÍTE, SALA AMPLA COM SACADA, COZINHA, BANHEIRO SOCIAL, ÁREA DE SERVIÇOS, ÁREA EXTERNA E DUAS VAGAS GARAGEM. \r\nPRÉDIO COM ELEVADOR.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/7e4e548d3f0a33a93abfd4386c7a96db.jpg"
    }),

    new apartamentosService({
        codigo: "335-07/19",
        type: "Apartamento",
        city: "Barbacena",
        address: "RUA TEOBALDO TOLENDAL",
        value: "390000.00",
        description: "APARTAMENTO NO CENTRO - COM 03 (TRÊS) QUARTOS, SENDO UM SUÍTE, SALA AMPLA, COZINHA, BANHEIRO SOCIAL, ÁREA DE SERVIÇOS E ÁREA EXTERNA.\r\nPRIMEIRO ANDAR.\r\nEXCELENTE LOCALIZAÇÃO.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/6d667f4498b36cbf9d5850dc19e1f999.jpg"
    }),

    new apartamentosService({
        codigo: "336-07/19",
        type: "Apartamento",
        city: "Barbacena",
        address: "RUA MARANHÃO",
        value: "310000.00",
        description: "COM 03 (TRÊS) QUARTOS, SENDO UM SUÍTE, SALA, COZINHA, BANHEIRO SOCIAL, ÁREA DE SERVIÇOS, DEP. EMPREGADA E GARAGEM.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/a154392636f3d723c31d917fdb6d3043.jpg"
    }),

    /** CASAS */
    new apartamentosService({
        codigo: "329-04/19",
        type: "Casa",
        city: "Barbacena",
        address: "RUA FRANCISCO DA SILVA FORTES",
        value: "330000.00",
        description: "CASA COM 03 (TRÊS) QUARTOS, SALA, COZINHA, BANHEIRO, ÁREA DE SERVIÇOS, QUINTAL E GARAGEM.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/d7aa954aa1113721a6309ceb6d8205e3.jpg"
    }),

    new apartamentosService({
        codigo: "187-04/16",
        type: "Casa",
        city: "Barbacena",
        address: "RUA CASSIMIRO DE ABREU, Nº 19",
        value: "200000.00",
        description: "CASA SIMPLES - COM DOIS QUARTOS, SALA, COZINHA E BANHEIRO.\r\nTERRENO COM APROXIMADAMENTE 350,00mts.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/94206d735801169f4d434ed33d239885.jpg"
    }),
    
    new apartamentosService({
        codigo: "310-09/18",
        type: "Casa",
        city: "Barbacena",
        address: "RUA FRANCISCO AFONSO GABRIEL",
        value: "950000.00",
        description: "COM 03 (TRÊS) QUARTOS, SENDO UM SUÍTE, TODOS COM ARMÁRIOS, DUAS SALAS AMPLAS, SALA DE JANTAR, DOIS BANHEIROS SOCIAIS, SACADA, ESCRITÓRIO COM BANHEIRO, ÁREA EXTERNA CIMENTADA, DOIS CÔMODOS DE DESPEJO E GARAGEM PARA 04 (QUATRO) CARROS.\r\n\r\nÁREA CONSTRUÍDA DE 332,00mts.\r\n\r\nEXCELENTE LOCALIZAÇÃO.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/9c56838c6d0095a3143f2dc1c6386572.jpg"
    }),

    new apartamentosService({
        codigo: "276-03/18",
        type: "Casa",
        city: "Barbacena",
        address: "RUA TANCREDO ESTEVES",
        value: "450000.00",
        description: "COM 03 (TRÊS) QUARTOS, SENDO UM SUÍTE, SALA DE VISITAS, SALA DE ESTAR COM LAVABO (CONVERSÍVEL PARA QUARTO), COPA, COZINHA, BANHEIRO SOCIAL COM HIDROMASSAGEM, ÁREA ANEXA À COZINHA COM FOGÃO COOKTOP, LAVANDERIA COM BANHEIRO, GARAGEM PARA 02 CARROS E QUINTAL.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/88fbbcb50875cf5cbca76f7f1c8c9b73.jpg"
    }),
    
]


module.exports.checkDataBase = () => {
    apartamentosService.find({}, (err, data) => {
        if (err || data.length <= 0 || data == undefined) {

            apartamentos.forEach(apartamento => {

                apartamento.save()
            });
            console.log("Banco criado");
        }
    })
};