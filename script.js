textos_eixos = {
    "Saúde": {
        "Conteúdo":  "Saúde para todos. O Sistema Estadual de Saúde, apesar de ainda conviver com inúmeros problemas, já está em rota de estruturação na perspectiva de garantir o acesso igualitário à atenção integral à saúde, que priorize o aprimoramento da eficiência e da resolutividade, frente às diferentes situações e demandas dos usuários.",
        "Atuação":   "Universalidade; Transparência; Regionalização; Educação Permanente; Redes de Atenção à Saúde.",
        "Propósito": "Assegurar políticas públicas voltadas à promoção, proteção e recuperação da saúde.",
        "Visão":     "Ser referência na promoção de ações e serviços públicos de saúde, contribuindo com a melhoria da qualidade de vida da população.",
    },
    "Segurança": {
        "Conteúdo":  "O atual cenário político e econômico brasileiro traz constantes desafios para a Segurança Pública em Roraima. Por ser um estado situado na Amazônia brasileira, com dimensões geográficas significativas, suas fronteiras com a Venezuela e a Guiana Inglesa, e divisas com o Estado do Pará e o Estado do Amazonas, enfrentar esses desafios requer planejamento de médio e longo prazos, além de estratégias integradas e inovadoras, que permitam atender as novas demandas da sociedade, enfrentando os novos desafios frente às facções criminosas locais e estrangeiras.",
        "Atuação":   "Segurança; Cidadania; Defesa; Proteção; Dignidade Humana.",
        "Propósito": "Promover Segurança Pública de excelência, por meio da governança e cultura de integração e cooperação, proporcionando defesa e cidadania à sociedade.",
        "Visão":     "Ser um sistema de excelência em políticas públicas de segurança.",
    },
    "Educação": {
        "Conteúdo":  "Educação de qualidade, inclusiva e com equidade social, consolidada nos princípios inovador e transformador das práticas de ensino, capaz de promover o desenvolvimento integral da criança, do adolescente e do jovem, com melhoria das condições de trabalho, redução da vulnerabilidade social e capacidade de apropriação de atitudes cidadãs correspondentes as políticas públicas de interesses coletivos nas diversas áreas, para alcançar o desenvolvimento social, econômico e preservar a dignidade da pessoa humana.",
        "Atuação":   "Educação Básica e Educação Profissional; Educação Superior; Valorização Profissional.",
        "Propósito": "Garantir que todas as crianças, adolescentes, jovens e adultos, especialmente os mais desfavorecidos e aqueles com deficiências, tenham acesso a escolaridade, aprendendo em ambiente acolhedor,saudável, livre de todas as formas de violência, alcançando o conhecimento necessário para responder aos desafios em contexto de multiculturalismo de Roraima, do território Amazônico Legal e do Mundo.",
        "Visão":     "Ser referência na universalização do acesso em todos os níveis, etapas e modalidades da educação, garantia da inclusão, equidade e qualidade nos resultados da aprendizagem com a valorização da ciênciade diferentes conhecimentos, com promoção do empreendedorismo e da paz.",
    },
    "Infraestrutura": {
        "Conteúdo":  "Ser competitivo é ter uma base sólida para superar os desafios e obstáculos que limitam o pleno desenvolvimento. O Estado precisa proporcionar as con dições estruturantes de itens de primeira grandeza como estradas, energia, comunicação e saneamento básico, dentro de uma lógica que nos impõe a criação de soluções integradas e efetivas.",
        "Atuação":   "Conexão; Sustentabilidade; Logística Intermodal; Segurança; Viabilidade.",
        "Propósito": "Criar condições e estrutura para que Roraima possa alcançar o desenvolvimento de forma sustentável, gerando qualidade de vida.",
        "Visão":     "Roraima ser um modelo em gestão de infraestrutura.",
    },
    "Bem Estar": {
        "Conteúdo":  "Fortalecimento da autonomia e da função protetiva da família, do individuo e de grupos sociais em situação de vulnerabilidade social e econômica, com ações executadas de forma integrada a diversas políticas públicas internas e externas, com o compromisso de assegurar a melhoria da qualidade de vida dessa população.",
        "Atuação":   "Qualidade de Vida; Reintegração; Trabalho; Renda; Cultura; Esporte; Dignidade; Segurança Alimentar e Nutricional.",
        "Propósito": "Fomentar e fortalecer o empreendedorismo social comprometido com o desenvolvimento econômico e social das famílias, indivíduos e grupos em situação de vulnerabilidade.",
        "Visão":     "Ter um ambiente social empreendedor que propicie qualidade de vida e que promova efetiva mudança na sociedade roraimense.",
    },
    "Gestão e Economia": {
        "Conteúdo":  "Economia Equilibrada, Gestão Eficiente. A crescente demanda por utilidades públicas requer soluções cada vez mais eficientes e efetivas. O desafio é, por- tanto, aprimorar a gestão administrativa e fiscal e a transparência das informações, a fim de oferecer serviços públicos de qualidade e um ambiente de negó- cios atrativo, que promovam a melhoria da qualidade de vida da população.",
        "Atuação":   "Planejamento; Gestão; Transparência; Governança.",
        "Propósito": "Promover a gestão integrada, eficiente, sustentável e transparente dos recursos do Estado, a fim de melhorar o ambiente de negócios e induzir o desenvolvimento econômico e o bem-estar da população.",
        "Visão":     "Ser referência na adoção de práticas de gestão voltadas para sustentabilidade econômica e para o aperfeiçoamento da responsabilidade fiscal.",
    },
    "Desenvolvimento Sustentável": {
        "Conteúdo":  "Pensar o desenvolvimento para gerar qualidade de vida das pessoas, tornan- do Roraima um modelo para a região Amazônica na conciliação de produção e sustentabilidade, bem como gerar segurança jurídica para todos, criando assim um ambiente de negócios favorável por meio de cadeias produtivas definidas de forma estratégica para trabalhar com valor agregado.",
        "Atuação":   "Segurança Jurídica; Melhoria no ambiente de negócios; Cadeias Produtivas; Produtividade; Inovação; Meio Ambiente e Sustentabilidade.",
        "Propósito": "Trabalhar o desenvolvimento de Roraima de forma integrada e sustentável, buscando oportunizar ambiente para gerar competitivi- dade econômica para os empreendimentos roraimenses.",
        "Visão":     "Roraima ser um estado competitivo e sustentável até 2030.",
    },
}

buttonsEixo = document.querySelectorAll(".eixo");
activeSection = document.querySelector(".active-section");
sectionEixoText = document.querySelector(".eixo-text");

buttonsEixo.forEach((button) => {
    button.addEventListener("click", () => {
        buttonsEixo.forEach((button) => {
            button.classList.remove("active");
        });

        button.classList.add("active");
        
        sectionEixoText.innerHTML = `
        <p>
            ${textos_eixos[button.querySelector("i").attributes.alt.value]["Conteúdo"]}
        </p>

        <b>Atuação</b>

        <p>
            ${textos_eixos[button.querySelector("i").attributes.alt.value]["Atuação"]}
        </p>

        <b>Propósito</b>

        <p>
            ${textos_eixos[button.querySelector("i").attributes.alt.value]["Propósito"]}
        </p>

        <b>Visão</b>

        <p>
            ${textos_eixos[button.querySelector("i").attributes.alt.value]["Visão"]}
        </p>
        `;
    });
});

municipios = [
    "Amajari",
    "Alto Alegre",
    "Boa Vista",
    "Bonfim",
    "Cantá",
    "Caracaraí",
    "Caroebe",
    "Iracema",
    "Mucajaí",
    "Normandia",
    "Pacaraima",
    "Rorainópolis",
    "São João da Baliza",
    "São Luiz",
    "Uiramutã",
]

selectMunicipio = document.getElementById("municipio");
selectMunicipio.innerHTML = `<option hidden selected value="">Município</option>`;

municipios.forEach(municipio => {
    selectMunicipio.innerHTML += `<option value="${municipio}">${municipio}</option>`;
});

eixos = {
    "Saúde": {
        1: "Garantir acesso à integralidade com atendimento humanizado",
        2: "Promover o planejamento regional integrado da saúde",
        3: "Executar a educação permanente em saúde",
        4: "Outros",
    },
    "Segurança": {
        5: "Promover segurança pública de excelência",
        6: "Sistema de trânsito seguro",
        7: "Garantir um sistema penitenciário equilibrado e controlado",
        8: "Outros",
    },
    "Educação": {
        10: "Garantir o desenvolvimento e o sucesso escolar para todos na idade certa",
        11: "Universalizar a educação superior em Roraima",
        12: "Valorização dos profissionais da educação",
        13: "Outros",
    },
    "Infraestrutura": {
        14: "Garantir, integrar e ampliar o fornecimento de energia elétrica e o sistema de comunicação no estado de Roraima",
        15: "Estruturar e viabilizar a malha viária para integração do estado de Roraima em bases sustentáveis",
        16: "Articular e estruturar a infraestrutura de transportes intermodais em Roraima",
        17: "Outros",
    },
    "Bem Estar": {
        18: "Assegurar a eficiência, eficácia e efetividade das políticas públicas que levem ao bem-estar social da população de Roraima",
        19: "Aperfeiçoar a governança do sistema único de assistência social (SUAS-RR), a gestão estratégica institucional e as políticas intersetoriais e complementares",
        20: "Promover estratégias para acesso ao trabalho, emprego e renda",
        21: "Outros",
    },
    "Gestão e Economia": {
        22: "Modernizar a gestão pública",
        23: "Atingir o equilíbrio e a sustentabilidade fiscal",
        24: "Governança",
        25: "Outros",
    },
    "Desenvolvimento Sustentável": {
        26: "Impulsionamento econômico-ambiental",
        27: "Fortalecimento de setores produtivos estratégicos",
        28: "Conexão com mercados globais",
        29: "Outros",
    },
}

selectTema = document.getElementById("tema");
selectTema.innerHTML = `<option hidden selected value="">Tema</option>`;

Object.entries(eixos).forEach(([eixo, temas]) => {
    selectTema.innerHTML += `<option class="disabled" disabled>${eixo}</option>`;
    Object.values(temas).forEach(tema => {
        selectTema.innerHTML += `<option value="${`${eixo}: ${tema}`}">${tema}</option>`;
    });
});

escolaridades = [
    "Fundamental incompleto",
    "Fundamental completo",
    "Médio incompleto",
    "Médio completo",
    "Superior incompleto",
    "Superior completo",
    "Especialização",
    "Mestrado",
    "Doutorado",
    "Não informado",
]

selectEscolaridade = document.getElementById("escolaridade");
selectEscolaridade.innerHTML = `<option hidden selected value="">Escolaridade</option>`;

escolaridades.forEach(escolaridade => {
    selectEscolaridade.innerHTML += `<option value="${escolaridade}">${escolaridade}</option>`;
});

faixas_etarias = [
    "10-14",
    "15-19",
    "20-25",
    "26-30",
    "30-35",
    "36-42",
    "43-52",
    "53+",
    "Não informado",
]

selectFaixaEtaria = document.getElementById("faixa_etaria");
selectFaixaEtaria.innerHTML = `<option hidden selected value="">Faixa Etária</option>`;

faixas_etarias.forEach(faixa_etaria => {
    selectFaixaEtaria.innerHTML += `<option value="${faixa_etaria}">${faixa_etaria}</option>`;
});

generos = [
    "Masculino",
    "Feminino",
    "Outros",
    "Não informado",
]

selectGenero = document.getElementById("genero");
selectGenero.innerHTML = `<option hidden selected value="">Gênero</option>`;

generos.forEach(genero => {
    selectGenero.innerHTML += `<option value="${genero}">${genero}</option>`;
});
