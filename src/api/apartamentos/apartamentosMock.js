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

    new apartamentosService({
        codigo: "337-07/19",
        type: "Apartamento",
        city: "Barbacena",
        address: "RUA MARANHÃO",
        value: "220000.00",
        description: "COM 03 (TRÊS) QUARTOS, SALA AMPLA, COZINHA, BANHEIRO SOCIAL E ÁREA DE SERVIÇOS.\r\nSEM GARAGEM.",
        imgUrl: "http://www.imoveisam.com.br/fotos_imoveis/maior/70638fcdd32cd9f35c1191d873fcd646.jpg"
    }),

]

// Função exportada que, caso não exista produtos no banco, cria exemplos (MOCK)
module.exports.checkDataBase = () => {
    apartamentosService.find({}, (err, data) => {
        if (err || data.length <= 0 || data == undefined) {
            // Iteração com cada produto da lista produtos
            apartamentos.forEach(apartamento => {
                // Salva o produto no banco
                apartamento.save()
            });
            console.log("Banco criado");
        }
    })
};