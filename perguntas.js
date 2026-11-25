const bancoPerguntas = [];

function adicionar(categoria, pergunta, respostas) {
    bancoPerguntas.push([
        categoria,
        pergunta,
        Array.isArray(respostas) ? respostas : [String(respostas)]
    ]);
}

// FUTEBOL

const futebol = [
    ["Qual país venceu a Copa do Mundo de 2002?", "Brasil"],
    ["Qual país venceu a Copa do Mundo de 2014?", "Alemanha"],
    ["Qual país venceu a Copa do Mundo de 2018?", "França"],
    ["Qual país venceu a Copa do Mundo de 2022?", "Argentina"],
    ["Qual jogador ficou conhecido como Rei do Futebol?", "Pelé"],
    ["Qual clube brasileiro é conhecido como Timão?", "Corinthians"],
    ["Qual clube brasileiro é conhecido como Verdão?", "Palmeiras"],
    ["Qual clube brasileiro é conhecido como Mengão?", "Flamengo"],
    ["Qual clube brasileiro é conhecido como Peixe?", "Santos"],
    ["Quantos minutos tem um tempo normal de futebol?", ["45","quarenta e cinco"]],
    ["Qual jogador é conhecido como CR7?", "Cristiano Ronaldo"],
    ["Em qual país nasceu Lionel Messi?", "Argentina"],
    ["Em qual país nasceu Cristiano Ronaldo?", "Portugal"],
    ["Qual país sediou a Copa do Mundo de 2014?", "Brasil"],
    ["Qual jogador pode usar as mãos dentro da própria área?", "Goleiro"]
];

futebol.forEach(p => adicionar("FUTEBOL", ...p));

// GEOGRAFIA

const capitais = [
    ["Brasil","Brasília"],
    ["Argentina","Buenos Aires"],
    ["Portugal","Lisboa"],
    ["França","Paris"],
    ["Itália","Roma"],
    ["Espanha","Madri"],
    ["Alemanha","Berlim"],
    ["Japão","Tóquio"],
    ["China","Pequim"],
    ["Rússia","Moscou"],
    ["Canadá","Ottawa"],
    ["Austrália","Camberra"],
    ["Chile","Santiago"],
    ["Peru","Lima"],
    ["Uruguai","Montevidéu"],
    ["Paraguai","Assunção"],
    ["Egito","Cairo"],
    ["México","Cidade do México"],
    ["Colômbia","Bogotá"],
    ["Grécia","Atenas"],
    ["Noruega","Oslo"],
    ["Suécia","Estocolmo"],
    ["Finlândia","Helsinque"],
    ["Dinamarca","Copenhague"],
    ["Irlanda","Dublin"],
    ["Áustria","Viena"],
    ["Polônia","Varsóvia"],
    ["Cuba","Havana"],
    ["Angola","Luanda"],
    ["Moçambique","Maputo"]
];

capitais.forEach(([pais, capital]) => {
    adicionar("GEOGRAFIA",
        `Qual é a capital do país: ${pais}?`, capital);
});

// ANIMAIS

const animais = [
    ["Qual animal terrestre é o mais rápido?", ["Guepardo","Chita"]],
    ["Qual animal é conhecido como rei da selva?", "Leão"],
    ["Qual animal possui uma tromba?", "Elefante"],
    ["Qual animal possui listras pretas e brancas?", "Zebra"],
    ["Qual animal é famoso por comer bambu?", "Panda"],
    ["Qual animal possui oito braços?", "Polvo"],
    ["Qual animal produz mel?", ["Abelha","Abelhas"]],
    ["Qual animal possui o pescoço muito comprido?", "Girafa"],
    ["Qual é o maior animal do planeta?", "Baleia azul"],
    ["Qual mamífero consegue realizar voo ativo?", "Morcego"],
    ["Qual animal é conhecido por mudar de cor?", "Camaleão"],
    ["Qual animal australiano carrega o filhote em uma bolsa e se locomove aos saltos?", "Canguru"]
];

animais.forEach(p => adicionar("ANIMAIS", ...p));

// POKÉMON

const pokemon = [
    ["Qual Pokémon amarelo acompanha Ash?", "Pikachu"],
    ["Qual Pokémon evolui para Charmeleon?", "Charmander"],
    ["Qual Pokémon evolui para Charizard?", "Charmeleon"],
    ["Qual Pokémon evolui para Wartortle?", "Squirtle"],
    ["Qual Pokémon evolui para Blastoise?", "Wartortle"],
    ["Qual Pokémon evolui para Ivysaur?", "Bulbasaur"],
    ["Qual Pokémon evolui para Venusaur?", "Ivysaur"],
    ["Qual Pokémon evolui para Gyarados?", "Magikarp"],
    ["Qual Pokémon é conhecido por dormir muito?", "Snorlax"],
    ["Qual Pokémon evolui para Raichu?", "Pikachu"]
];

pokemon.forEach(p => adicionar("POKÉMON", ...p));

// ESPAÇO

const espaco = [
    ["Qual é o maior planeta do Sistema Solar?", "Júpiter"],
    ["Qual planeta é conhecido como planeta vermelho?", "Marte"],
    ["Qual planeta é mais próximo do Sol?", "Mercúrio"],
    ["Qual é o satélite natural da Terra?", ["Lua","A Lua"]],
    ["Qual estrela fica no centro do Sistema Solar?", ["Sol","O Sol"]],
    ["Qual planeta é famoso por seus grandes anéis?", "Saturno"],
    ["Em qual planeta vivemos?", "Terra"],
    ["Quantos planetas existem no Sistema Solar?", ["8","oito"]]
];

espaco.forEach(p => adicionar("ESPAÇO", ...p));

// FILMES E DESENHOS

const filmes = [
    ["Qual é o nome do cowboy de Toy Story?", "Woody"],
    ["Qual é o nome do ogro verde da DreamWorks?", "Shrek"],
    ["Qual é o nome do leão protagonista de O Rei Leão?", "Simba"],
    ["Qual personagem da Disney é um rato famoso?", "Mickey"],
    ["Qual super-herói utiliza um martelo chamado Mjolnir?", "Thor"],
    ["Qual super-herói vive em Gotham?", "Batman"],
    ["Qual é o nome da irmã de Elsa?", "Anna"],
    ["Qual personagem dos desenhos vive em um abacaxi no fundo do mar?", "Bob Esponja"]
];

filmes.forEach(p => adicionar("FILMES", ...p));

// CIÊNCIAS

const ciencias = [
    ["Qual órgão bombeia o sangue pelo corpo?", "Coração"],
    ["Qual gás é essencial para a respiração humana?", "Oxigênio"],
    ["Qual é a fórmula química da água?", "H2O"],
    ["Quantos ossos normalmente possui um adulto humano?", "206"],
    ["Qual órgão é responsável principalmente pelo pensamento?", "Cérebro"],
    ["Qual metal é representado pelo símbolo Au?", "Ouro"],
    ["Qual metal é representado pelo símbolo Fe?", "Ferro"],
    ["Como se chama a passagem do estado líquido para o gasoso?", "Vaporização"]
];

ciencias.forEach(p => adicionar("CIÊNCIAS", ...p));

// JOGOS

const jogos = [
    ["Qual jogo possui criaturas chamadas Creepers?", "Minecraft"],
    ["Qual personagem da Nintendo usa um boné vermelho com a letra M?", "Mario"],
    ["Qual é o nome do irmão de Mario?", "Luigi"],
    ["Qual personagem azul da Sega é conhecido pela velocidade?", "Sonic"],
    ["Em qual jogo existem Robux?", "Roblox"],
    ["Qual jogo da Epic Games é famoso pelo modo Battle Royale?", "Fortnite"]
];

jogos.forEach(p => adicionar("JOGOS", ...p));

// CONHECIMENTOS GERAIS

const gerais = [
    ["Quantos dias tem uma semana?", ["7","sete"]],
    ["Quantos meses tem um ano?", ["12","doze"]],
    ["Quantos segundos tem um minuto?", ["60","sessenta"]],
    ["Qual objeto usamos para cortar papel?", "Tesoura"],
    ["Qual objeto usamos para apagar lápis?", "Borracha"],
    ["Qual objeto circular permite que um carro se movimente?", ["Roda","Rodas"]],
    ["Qual instrumento musical possui teclas pretas e brancas?", "Piano"],
    ["Qual profissional cuida dos dentes?", "Dentista"],
    ["Qual fruta é conhecida por sua casca amarela e formato curvado?", "Banana"],
    ["Qual líquido congela a zero grau Celsius em condições normais?", "Água"]
];

gerais.forEach(p => adicionar("CONHECIMENTOS GERAIS", ...p));

// GERADOR DE MATEMÁTICA

const matematica = [];

for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {

        if (a <= b) {
            matematica.push([
                "MATEMÁTICA",
                `Quanto é ${a} + ${b}?`,
                [String(a + b)]
            ]);
        }

        if (a >= b) {
            matematica.push([
                "MATEMÁTICA",
                `Quanto é ${a} menos ${b}?`,
                [String(a - b)]
            ]);
        }

        if (a <= 20 && b <= 20 && a <= b) {
            matematica.push([
                "MATEMÁTICA",
                `Quanto é ${a} vezes ${b}?`,
                [String(a * b)]
            ]);
        }

        if (a <= 20 && b <= 20) {
            matematica.push([
                "MATEMÁTICA",
                `Quanto é ${a * b} dividido por ${b}?`,
                [String(a)]
            ]);
        }
    }
}

// EMBARALHAMENTO

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    return lista;
}

embaralhar(matematica);

// COMPLETAR AS 5.000 PERGUNTAS

const usadas = new Set(
    bancoPerguntas.map(p => p[1])
);

for (const pergunta of matematica) {

    if (bancoPerguntas.length >= 5000) break;

    if (!usadas.has(pergunta[1])) {
        bancoPerguntas.push(pergunta);
        usadas.add(pergunta[1]);
    }
}

embaralhar(bancoPerguntas);

console.log("Total de perguntas:", bancoPerguntas.length);
