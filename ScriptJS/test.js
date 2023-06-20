// FAZER ANIMAÇÃO DE TROCA DE CARTÃO;
// FAZER UM ARRAY DE OBJETOS DOS CARTOES DOS BOSSES;

const names = ['Iudex Gundyr', 'Vordt Of Boreal Valley', 'Cursed Rotted GreatWood', 'Crystal Sage', 'Deacons Of The Deep', 'Abyss Watchers', 'High Lord Wolnir', 'Old Demon King', 'Pontiff Sulyvahn', 'Aldrich Devourer Of Gods', 'Yhorm The Giant', 'Dancer Of Boreal Valley', 'Dragonslayer Armour', 'Lorian Elder Prince And Lothric Young Prince', 'Oceiros The Consumed King', 'Champion Gundyr', 'Ancient Wyvern', 'Nameless King', 'Soul Of Cinder', "Champion's Gravatender", 'Sister Friede', 'Demon Prince', 'Darkeater Midir', 'Halflight', 'Slave Knight Gael'];

const healfs = ['HP 1037', 'HP 1328', 'HP 5405', 'HP 2723', 'HP 4099', 'HP 1548', 'HP 15.041', 'HP 5301', 'HP 5106', 'HP 4727', 'HP 27.822', 'HP 5111', 'HP 4581', 'HP Lorian 7730', 'HP Lothric 5799', 'HP 8087', 'HP 4956', 'HP 7873', 'HP com wyvern 4577', 'HP 7100', 'HP fase 1 6557', 'HP fase 2 4209', 'HP 2791 (Gravatender) HP 4193 (Gravatwolf)', 'HP fase 1 4863', 'HP fase 2 7150', 'HP fase 3 6864', 'HP 7045', 'HP 15.860', 'HP 3350', 'HP 15.037'];

const souls = ['SOULS 3000', 'SOULS 3000', 'SOULS 7000', 'SOULS 8000', 'SOULS 13.000', 'SOULS 18.000', 'SOULS 22.000', 'SOULS 25.000', 'SOULS 28.000', 'SOULS 50.000', 'SOULS 36.000', 'SOULS 60.000', 'SOULS 48.000', 'SOULS 85.000', 'SOULS 58.000', 'SOULS 60.000', 'SOULS 70.000', 'SOULS 80.000', 'SOULS 100.000', 'SOULS 60.000', 'SOULS 72.000', 'SOULS 100.000', 'SOULS 150.000', 'SOULS 80.000', 'SOULS 120.000'];

const imgs = ['../imagens/img/Iudex_gundyr.png',  '../imagens/img/Vordt_of_boreal_valley.png', '../imagens/img/Cursed_rotted_greatwood.png', '../imagens/img/Crystal_sage.png', '../imagens/img/Deacons_of_the_deep.png', '../imagens/img/Abyss_watchers.png', '../imagens/img/High_lord_wolnir.png', '../imagens/img/Old_demon_king.png', '../imagens/img/Pontiff_sulyvahn.png', '../imagens/img/Aldrich_devourer_of_gods.png', '../imagens/img/Yhorm_the_giant2.png', '../imagens/img/Dancer_of_boreal_valley.png', '../imagens/img/Dragonslayer_armour.png', '../imagens/img/lorian_elder_prince_lothric_young_prince.png', '../imagens/img/Oceiros_the_consumed_king.png', '../imagens/img/Champion_gundyr.png', '../imagens/img/Ancient_wyvern.png', '../imagens/img/nameless_king.png', '../imagens/img/Soul_of_cinder.png', "../imagens/img/Champion's_gravatender.jpg", '../imagens/img/Sister_friede.png', '../imagens/img/Demon_prince.png', '../imagens/img/Darkeater_midir.png', '../imagens/img/Halflight.jpeg', '../imagens/img/Slave_knight_gael.png']

const texts = [
    "Iudex Gundyr é um grande humanóide vestido com armadura pesada e ataca o jogador usando uma grande alabarda. Os jogadores encontrarão uma espada fincada em seu peito quando o encontram pela primeira vez. Depois de seu hp ser reduzido a um certo limite, uma massa negra gigante emerge de seu pescoço que lhe dá acesso a ataques adicionais. Este chefe não é opcional e o jogador terá que enfrentá-lo para ter acesso ao Santuário Firelink.",
    "Vordt do Vale Boreal é uma grande criatura quadrúpede vestindo armadura de cavaleiros pesados ​​e ele é um portandor de um grande martelo que se assemelha a uma maça. Quando os jogadores o encontram, ele é visto saindo de um orbe de neblina. Depois de ser reduzido a um certo limite de saúde, a névoa azul ao redor dele e sua arma se intensificam, infligindo lentamente Queimadura por frio para o jogador se ele estiver perto dele. Esta é a primeira ocorrência de congelamento que o jogador pode encontrar no jogo.",
    "Vordt do Vale Boreal é uma grande criatura quadrúpede vestindo armadura de cavaleiros pesados ​​e ele é um portandor de um grande martelo que se assemelha a uma maça. Quando os jogadores o encontram, ele é visto saindo de um orbe de neblina. Depois de ser reduzido a um certo limite de saúde, a névoa azul ao redor dele e sua arma se intensificam, infligindo lentamente Queimadura por frio para o jogador se ele estiver perto dele. Esta é a primeira ocorrência de congelamento que o jogador pode encontrar no jogo.",
    "The Curse-Rotted Greatwood é uma árvore gigante com membros semelhantes aos de humanos. Ele é coberto de ovos que atuam como hitbox do chefe. Quando o jogador se aproxima do Boss, ele encontrará alguns mortos-vivos na arena que lutarão ao lado dele durante o combate. Depois de ser reduzido a um certo limite de saúde, em vez de passar por uma transformação, a arena de batalha muda. Esta enorme árvore está cheia de maldições e é objeto de adoração para os habitantes de Assentamento de mortos-vivos.",
    "O Crystal Sage é um grande humanóide coberto com vestes largas de feiticeiro e usa uma armadura de mago. Seu chapéu grande é suficiente para cobrir o rosto. Ele lançam feitiços principalmente usando um orbe mágico, mas pode atacar o jogador que chega muito perto dele com sua rapieira. Os jogador deve estar em alerta ao se aproximar de sua arena, pois a luta contra o chefe começa ao entrar em sua arena. Depois de ser reduzido a um certo limite de sua saúde, o chefe começará a gerar clones de si mesmo, diferenciados pela cor de suas magias.",
    "Os Deacons Of The Deep são um grupo de clérigos que empunham castiçais em combate. Alguns empunham sua arma semelhante à de uma espada, enquanto outros a usam como catalisador para piromancia. Esta congregação de clérigos defende uma alma errante, que eventualmente se revela ser o arquidiácono depois de ser reduzido a um certo limite de saúde.",
    "Os Vigilantes do Abismo são humanóides altos vestidos com armaduras de couro, empunhando uma espada grande na mão direita e um punhal na mão esquerda. O jogador encontrara os Vigilantes do Abismo aparentemente lutando entre si quando os encontrarem. Depois de ter reduzido a um certo limite de saúde do Boss, a espada grande do chefe principal é infundida com fogo, aumentando seus ataques. Os Vigilantes do Abismo, sua alma, passando de um corpo para o outro, sempre em guerra, é um dos Senhores das Cinzas, e é o primeiro de 5 que o jogador encontrará.",
    "O High Lord Wolnir é um esqueleto gigante coberto de joias, cujas pulseiras atuam como a hitbox do chefe. Ele ataca principalmente o jogador com seu torso e membros, mas ocasionalmente pode empunhar sua espada, tornando a luta mais perigosa. Este esqueleto colossal está imbuído de uma escuridão mortal que está o consumindo e comanda um exército de esqueletos em sua defesa.",
    "O Old Demon King é um grande demônio coberto de chamas e empunha uma gigante marreta em combate. Queimando nas covas do lago fumegante, os cadáveres de demônios o cercam. Depois de ser reduzido a um certo limite de saúde, ele será fortalecido com uma aura flamejante mais forte, dando-lhe acesso a ataques mais contundentes.",
    "O Pontífice Sulyvahn é um humanoide alto vestido com vestes de feiticeiro cravejadas de joias. Ele empunha duas espadas largas em combate, uma espada grande em sua mão esquerda emanando uma aura roxa e outra espada grande na mão direita envolta em chamas. Depois de ser reduzido a um certo limite de saúde, asas semelhantes a galhos brotam de suas costas e ele sumona clones de si mesmo.",
    "Aldrich aparece para o jogador como uma massa escura de ossos e carne com a parte superior do corpo e roupas semelhantes às usadas por Gwyndolin em Dark Souls 1. Ele ataca com as armas de Gwyndolin, um catalisador, que é imbuído de fogo depois de ser reduzido a um certo limite de saúde, e um arco.",
    "Conhecido como o eclusive lord of the Profaned Capita, Yhorm é descendente de um antigo conquistador, mas foi convidado por pessoas subjugadas para liderá-los. No passado, ele é um habilidoso combatente gigante, poderoso o suficiente para se tornar um senhor de uma cidade e um Senhor das Cinzas. Durante o combate, ele ataca o jogador com seu facão que brilha como brasas depois de ser reduzido a um certo limite de saúde.",
    "A Dancer Of Boreal Valley é uma cavaleira alta e blindada que usa uma capa espectral e se esgueira em direção ao jogador quando encontrado. Durante o combate, ela empunha uma espada em sua mão esquerda e, depois de ser reduzido a um certo limite de saúde, empunha uma espada de escuridão em sua direita - como a arma do Pontífice Sulyvahnarmas.",
    "A Dragonslayer Armour é uma armadura possuída que guarda a entrada Grand Archives, e é assistido por Pilgrim Butterflies, que na verdade são as que controlam a armadura. Ele ataca os jogadores com um grande machado eletrificado e pode atacar e proteger contra ataques de jogadores com seu grande escudo. Depois de ser reduzido a um certo limite de saúde, os projéteis começarão a cair na arena de batalha.",
    "Lothric é um chefe puramente mágico e é uma força a ser reconhecida enquanto ele está acompanhado por seu irmão e chefe parceiro Lorian, Príncipe Ancião. Lothric é uma figura alta e encapuzada com a característica mais notável sendo seus braços finos, e é o único dos príncipes gêmeos a falar durante as cenas. Enquanto ele não é combatido durante a primeira fase, depois de esgotar a barra de saúde de Lorian uma vez, Lothric se teletransporta para o lado de seu irmão e se agarra às suas costas pelo restante da luta.",
    "Oceiros encontra-se no jardim abaixo do Castelo Lothric, guardando um santuário. Pode-se supor que ele é cego (como Seat The Scaleless de Dark Souls 1), pois suas órbitas estão vazias, e ele faz referências a isso durante toda a luta. Ele é um chefe muito vocal, e fala de um bebê invisível ou imaginário que ele segura em seu braço durante a primeira metade da luta. Oceiros inicialmente ataca o jogador com um bastão, mas depois de ser reduzido a um certo limite de saúde, fica de quatro e ataca como uma fera.",
    "Champion Gundyr é uma versão diferente do Iudex Gundyr, no entanto, ele utiliza o mesmo moveset de Iudex Gundyr com a adição de novos ataques. Ele é muito mais agressivo do que era no Cemetery Of Ash. Depois de ser reduzido a um certo limite de saúde, em vez de sofrer uma transformação física, seus olhos brilham em vermelho e começam a atacar o jogador de forma muito mais agressiva.",
    "O Ancient Wyvern é um grande wyvern cinza, e sua luta é única, pois há uma maneira adicional de matá-lo além da tática regular de bater e correr necessária para a maioria dos chefes. Em vez de lutar contra o wyvern de frente, os jogadores podem optar por correr pelas ruínas, lutando contra inimigos comuns, para chegar alto o suficiente para desferir um golpe mortal na cabeça dos wyverns.",
    "O Nameless King é um humanóide blindado montado em um wyvern azul e ataca os jogadores com sua lança. Durante a primeira fase da luta contra o chefe, seu nome é mostrado como Rei da Tempestade, até que o wyvern que ele está montando seja morto. Isso inicia a segunda fase, onde seu nome muda para Rei Sem Nome.",
    "The Soul of Cinder é visto como o fusão de todos os Lords of Cinder, com uma variedade de Dark Dialectics spells e movesets da usados ​​durante sua primeira fase e o uso do moveset de Gwyn(Último Boss de Dark Soul 1) para a segunda fase. Ele aparece para o jogador como um cavaleiro fortemente blindado e empunha a Firelink GreatSword em batalha, uma espada grande que pode se transformar em uma das três outras formas durante a primeira fase da luta. Depois de esgotar sua saúde uma vez, a segunda fase começa, onde o chefe recupera toda a sua saúde e adere a um conjunto de movimentos.",
    "Quando encontrado, o Champion's Greavetender é encontrado com três lobos ao lado de uma lápide. Ele está vestido com armadura e empunha uma espada e um pequeno escudo, com um moveset não muito diferente dos inimigos regulares. Depois de serem reduzidos a um certo limite de saúde, eles convocam o Gravetender Greatwolf, um lobo significativamente maior que os outros três.",
    "A Sister Friede está vestida com roupas de freira e empunha uma foice ao lutar contra o jogador. Ela luta sozinha na primeira e terceira fase da luta do chefe e ao lado do padre Ariandel, uma figura enorme que ataca com uma tigela grande, na segunda. Em vez de ter duas barras de saúde separadas, Friede e Ariandel compartilham uma barra de saúde quando lutam juntas.",
    "Depois de derrotar o Demon in Pain & Demon From Below, o fogo se acumula dentro do cadáver do último demônio morto e, alguns segundos depois, há uma explosão com um pequeno AoE revelando o Príncipe Demônio. Um par de asas grandes brotam das costas do Príncipe Demônio e eles têm um conjunto diferente de ataques com base em qual demônio foi morto na primeira fase.",
    "Midir, descendente dos Archdragons, foi criado pelos deuses e, devido à sua imortalidade, recebeu o dever de lutar eternamente contra as trevas, um dever que ele nunca esqueceria, mesmo depois que os deuses perecessem. Ele é um dragão enorme com cristais que revestem todo o seu corpo e quatro asas.",
    "Halflight é um humano empunhando uma espada e escudo na batalha e aparecerá como o chefe desta área se o jogador estiver no modo offline. No entanto, quando eles estão no modo online, essa luta de chefe é travada contra outro jogador, semelhante a uma luta PvP. Independentemente de qual chefe é gerado, dois NPCs guardiões aparecerão para ajudar o chefe - um aparece no início da luta, o outro quando o chefe atinge aproximadamente metade da saúde.",
    "Slave Knight Gael é uma aberração criada ao consumir o Dark Soul. Não se sabe por qual reino Gael lutou ou em quais guerras ele atuou. Em algum momento de sua vida ele encontrou o Mundo Pintado de Ariandel e uma jovem que desejava pintar um mundo novo. Ele usa uma capa vermelha visivelmente brilhante. Quando os jogadores o encontram, ele primeiro se move e luta como uma fera de quatro, mas depois se endireita quando é reduzido a um certo limite de saúde."]

const effects = [
    ["../effects/BlackKnight.png", "../effects/bleed-indent.png", "../effects/blessed_weapon.png", "../effects/dark-indent.png", "../effects/fgs-indent.png", "../effects/fire-indent.png", "../effects/frost-indent.png", "../effects/lightning-indent.png", "../effects/magic-indent.png", "../effects/pestilent_mercury.png", "../effects/physica-indent.lpng.png", "../effects/poison-indent.png", "../effects/strike-indent.jpg", "../effects/toxic-indent.png", "../effects/vow_of_silence.png", "../effects/wolf_knights_greatsword.png"]
]

const bosses = [];

for(let c = 0; bosses.length < 26; c++){
    bosses.push({
        name: names[c],
        healf: healfs[c],
        soul: souls[c],
        src: imgs[c],
        description: texts[c]
    })
}

class Card{
    constructor(){
        this.bossName = document.querySelectorAll('.bossname');
        this.bossHP = document.querySelectorAll('.health');
        this.bossSoul = document.querySelectorAll('.souls');
        this.bossDescription = document.querySelectorAll('.descrição');
        this.bossCardSelect = document.querySelectorAll('.Bosses');
        this.bossNumber = 0;
    }

    bossCard(number){
        if(number % 2 == 0){
            return 0;
        }else{
            return 1;
        };
    }

    oculteCard(number){
        if(number === 0){
            this.bossCardSelect[0].classList.remove('selecionado');
            this.bossCardSelect[1].classList.add('selecionado');
        } else {
            this.bossCardSelect[0].classList.add('selecionado');
            this.bossCardSelect[1].classList.remove('selecionado');
        }
    }
}

document.addEventListener('click', event => {
    element = event.target;

    if(element.classList.contains('volta')){
        if(card.bossNumber === 0) return window.alert("Começo da lista!");
        
        card.oculteCard(card.bossCard(card.bossNumber));
        card.bossNumber--;

        card.bossName[card.bossCard(card.bossNumber)].innerHTML = names[card.bossNumber];
        card.bossHP[card.bossCard(card.bossNumber)].innerHTML = healfs[card.bossNumber];
        card.bossSoul[card.bossCard(card.bossNumber)].innerHTML = souls[card.bossNumber];
        card.bossDescription[card.bossCard(card.bossNumber)].innerHTML = texts[card.bossNumber];
    }

    if(element.classList.contains('proximo')){
        if(card.bossNumber === 26) return window.alert("Fim da lista!");
        
        card.oculteCard(card.bossCard(card.bossNumber));
        card.bossNumber++;

        card.bossName[card.bossCard(card.bossNumber)].innerHTML = names[card.bossNumber];
        card.bossHP[card.bossCard(card.bossNumber)].innerHTML = healfs[card.bossNumber];
        card.bossSoul[card.bossCard(card.bossNumber)].innerHTML = souls[card.bossNumber];
        card.bossDescription[card.bossCard(card.bossNumber)].innerHTML = texts[card.bossNumber];
    }
})

let card = new Card();