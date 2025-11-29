import dotenv from "dotenv";
import connectDB from "../config/database";
import { Recipe } from "../models/Recipe";

dotenv.config();

const seed = async () => {
  await connectDB(process.env.DATABASE_URL as string);

  console.log("Limpando coleção...");
  await Recipe.deleteMany({});

  console.log("Inserindo receitas...");

  await Recipe.insertMany([
    // ----------------------------------------------------------
    // ------------------------ FRANGO --------------------------
    // ----------------------------------------------------------
    {
      title: "Strogonoff de Frango",
      category: "Frango",
      time: "30 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-simples.jpeg",
      ingredients: [
        { name: "Peito de frango", measure: "300g" },
        { name: "Creme de leite", measure: "1 caixa" },
        { name: "Ketchup", measure: "2 colheres" },
        { name: "Mostarda", measure: "1 colher" },
        { name: "Cebola picada", measure: "1 unidade" },
        { name: "Alho picado", measure: "2 dentes" }
      ],
      instructions: `
1. Corte o frango em cubos e tempere com sal e pimenta.
2. Refogue a cebola e o alho até dourarem.
3. Acrescente o frango e cozinhe até ficar levemente dourado.
4. Adicione ketchup, mostarda e misture bem.
5. Finalize com o creme de leite e cozinhe por mais 5 minutos em fogo baixo.
      `
    },

    {
      title: "Frango Grelhado com Ervas",
      category: "Frango",
      time: "20 min",
      servings: "2 porções",
      image:
        "https://www.kitano.com.br/wp-content/uploads/2020/09/Fil%C3%A9-de-Frango-com-Manteiga-de-Ervas.jpg",
      ingredients: [
        { name: "Peito de frango", measure: "2 unidades" },
        { name: "Ervas finas", measure: "1 colher de sopa" },
        { name: "Alho amassado", measure: "2 dentes" },
        { name: "Azeite", measure: "1 colher" }
      ],
      instructions: `
1. Tempere os peitos de frango com sal, alho e ervas.
2. Aqueça uma frigideira com azeite.
3. Grelhe o frango por 7–8 minutos de cada lado.
4. Sirva com legumes ou arroz branco.
      `
    },

    {
      title: "Frango Xadrez",
      category: "Frango",
      time: "25 min",
      servings: "3 porções",
      image:
        "https://i.panelinha.com.br/i1/64-bk-9566-blog-frango-xadrez-2.webp",
      ingredients: [
        { name: "Peito de frango em cubos", measure: "400g" },
        { name: "Pimentão verde", measure: "1 unidade" },
        { name: "Pimentão vermelho", measure: "1 unidade" },
        { name: "Molho shoyu", measure: "4 colheres" },
        { name: "Amendoim torrado", measure: "½ xícara" }
      ],
      instructions: `
1. Refogue o frango até dourar levemente.
2. Adicione os pimentões cortados em cubos.
3. Misture o shoyu e cozinhe por 5 minutos.
4. Finalize com amendoim e sirva imediatamente.
      `
    },

    {
      title: "Frango Assado Simples",
      category: "Frango",
      time: "1h",
      servings: "4 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/frango-assado.jpeg",
      ingredients: [
        { name: "Frango inteiro", measure: "1 unidade" },
        { name: "Manteiga", measure: "2 colheres" },
        { name: "Alho", measure: "4 dentes" },
        { name: "Limão", measure: "1 unidade" }
      ],
      instructions: `
1. Tempere o frango com sal, alho, manteiga e limão.
2. Coloque em uma assadeira e cubra com papel-alumínio.
3. Asse por 45 minutos a 200°C.
4. Retire o papel e deixe dourar por mais 15 minutos.
      `
    },

    // ----------------------------------------------------------
    // ------------------------- CARNE --------------------------
    // ----------------------------------------------------------
    {
      title: "Lasanha à Bolonhesa",
      category: "Carne",
      time: "60 min",
      servings: "6 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/lasanha-a-bolonhesa.jpeg",
      ingredients: [
        { name: "Massa de lasanha", measure: "500g" },
        { name: "Carne moída", measure: "400g" },
        { name: "Molho de tomate", measure: "2 xícaras" },
        { name: "Queijo muçarela", measure: "300g" }
      ],
      instructions: `
1. Refogue a carne moída até dourar.
2. Adicione o molho de tomate e cozinhe por 10 minutos.
3. Monte camadas alternando massa, molho e queijo.
4. Asse por 40 minutos a 180°C.
      `
    },

    {
      title: "Carne de Panela",
      category: "Carne",
      time: "50 min",
      servings: "4 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/carne-de-panela.jpeg",
      ingredients: [
        { name: "Carne em cubos", measure: "600g" },
        { name: "Cebola", measure: "1 unidade" },
        { name: "Batata", measure: "2 unidades" },
        { name: "Caldo de carne", measure: "1 tablete" }
      ],
      instructions: `
1. Doure a carne em uma panela de pressão.
2. Adicione cebola e refogue por 3 minutos.
3. Acrescente água e o caldo de carne.
4. Cozinhe por 30 minutos após pegar pressão.
      `
    },

    {
      title: "Bife Acebolado",
      category: "Carne",
      time: "15 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/bife-acebolado.jpeg",
      ingredients: [
        { name: "Bifes de alcatra", measure: "4 unidades" },
        { name: "Cebolas fatiadas", measure: "2 unidades" },
        { name: "Manteiga", measure: "1 colher" }
      ],
      instructions: `
1. Tempere os bifes com sal e alho.
2. Grelhe em frigideira quente com manteiga.
3. Na mesma panela, refogue as cebolas até caramelizar.
4. Misture tudo e sirva.
      `
    },

    {
      title: "Escondidinho de Carne Moída",
      category: "Carne",
      time: "45 min",
      servings: "6 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/escondidinho-carne-moida.jpeg",
      ingredients: [
        { name: "Carne moída", measure: "500g" },
        { name: "Purê de batatas", measure: "3 xícaras" },
        { name: "Muçarela", measure: "200g" }
      ],
      instructions: `
1. Refogue a carne moída com temperos.
2. Prepare um purê de batatas bem cremoso.
3. Monte camadas alternando carne e purê.
4. Finalize com queijo e asse por 20 minutos.
      `
    },

    // ----------------------------------------------------------
    // ----------------------- SOBREMESAS -----------------------
    // ----------------------------------------------------------
    {
      title: "Bolo de Chocolate",
      category: "Sobremesa",
      time: "45 min",
      servings: "8 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/bolo-de-chocolate-simples.jpeg",
      ingredients: [
        { name: "Farinha de trigo", measure: "2 xícaras" },
        { name: "Chocolate em pó", measure: "1 xícara" },
        { name: "Ovos", measure: "3 unidades" },
        { name: "Açúcar", measure: "1½ xícara" }
      ],
      instructions: `
1. Misture farinha, chocolate e açúcar.
2. Adicione ovos e mexa até obter massa homogênea.
3. Despeje em forma untada.
4. Asse por 40 minutos a 180°C.
      `
    },

    {
      title: "Brigadeiro",
      category: "Sobremesa",
      time: "10 min",
      servings: "12 unidades",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/brigadeiro.jpeg",
      ingredients: [
        { name: "Leite condensado", measure: "1 lata" },
        { name: "Chocolate em pó", measure: "3 colheres" },
        { name: "Manteiga", measure: "1 colher" }
      ],
      instructions: `
1. Misture os ingredientes em fogo baixo.
2. Mexa até desgrudar do fundo da panela.
3. Deixe esfriar e enrole as bolinhas.
      `
    },

    {
      title: "Mousse de Maracujá",
      category: "Sobremesa",
      time: "20 min",
      servings: "5 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/mousse-de-maracuja.jpeg",
      ingredients: [
        { name: "Suco de maracujá", measure: "1 xícara" },
        { name: "Leite condensado", measure: "1 lata" },
        { name: "Creme de leite", measure: "1 lata" }
      ],
      instructions: `
1. Bata todos os ingredientes no liquidificador.
2. Leve à geladeira por pelo menos 3 horas.
      `
    },

    {
      title: "Pudim de Leite Condensado",
      category: "Sobremesa",
      time: "1h30",
      servings: "8 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/pudim-de-leite.jpeg",
      ingredients: [
        { name: "Leite condensado", measure: "1 lata" },
        { name: "Leite", measure: "2 medidas da lata" },
        { name: "Ovos", measure: "3 unidades" }
      ],
      instructions: `
1. Bata todos os ingredientes no liquidificador.
2. Prepare caramelo na forma.
3. Asse em banho-maria por 1h20.
      `
    },

    // ----------------------------------------------------------
    // ------------------------ RÁPIDAS -------------------------
    // ----------------------------------------------------------
    {
      title: "Omelete Simples",
      category: "Rápidas",
      time: "10 min",
      servings: "1 porção",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/omelete-simples.jpeg",
      ingredients: [
        { name: "Ovos", measure: "2 unidades" },
        { name: "Queijo ralado", measure: "2 colheres" },
        { name: "Sal", measure: "a gosto" }
      ],
      instructions: `
1. Bata os ovos com sal e queijo.
2. Aqueça uma frigideira e despeje a mistura.
3. Cozinhe dos dois lados até dourar.
      `
    },

    {
      title: "Macarrão Alho e Óleo",
      category: "Rápidas",
      time: "15 min",
      servings: "2 porções",
      image:
        "https://www.kitano.com.br/wp-content/uploads/2019/08/Kitano-RecipeImages-770x550-MacarraoAoAlhoOleo.jpg",
      ingredients: [
        { name: "Macarrão espaguete", measure: "200g" },
        { name: "Alho fatiado", measure: "3 dentes" },
        { name: "Azeite", measure: "3 colheres" }
      ],
      instructions: `
1. Cozinhe o macarrão até ficar al dente.
2. Frite o alho no azeite até dourar.
3. Misture o macarrão e ajuste o sal.
      `
    },

    {
      title: "Tapioca Recheada",
      category: "Rápidas",
      time: "5 min",
      servings: "1 porção",
      image:
        "https://receitadaboa.com.br/wp-content/uploads/2024/07/iStock-531704206.jpg",
      ingredients: [
        { name: "Goma de tapioca", measure: "3 colheres" },
        { name: "Queijo", measure: "2 colheres" },
        { name: "Presunto", measure: "2 fatias" }
      ],
      instructions: `
1. Aqueça uma frigideira e espalhe a goma.
2. Recheie com queijo e presunto.
3. Dobre ao meio e sirva quente.
      `
    },

    {
      title: "Sanduíche Natural",
      category: "Rápidas",
      time: "5 min",
      servings: "1 porção",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/sanduiche-natural.jpeg",
      ingredients: [
        { name: "Pão de forma", measure: "2 fatias" },
        { name: "Peito de peru", measure: "2 fatias" },
        { name: "Alface", measure: "2 folhas" }
      ],
      instructions: `
1. Passe maionese no pão.
2. Monte com peito de peru e alface.
3. Sirva imediatamente.
      `
    },

    // ----------------------------------------------------------
    // ------------------------- VEGANA -------------------------
    // ----------------------------------------------------------
    {
      title: "Salada Verde",
      category: "Vegana",
      time: "5 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/salada-verde.jpeg",
      ingredients: [
        { name: "Alface", measure: "1 maço" },
        { name: "Rúcula", measure: "1 maço" },
        { name: "Azeite", measure: "1 colher" }
      ],
      instructions: `
1. Lave bem as folhas.
2. Misture tudo e regue com azeite.
      `
    },

    {
      title: "Hambúrguer Vegano",
      category: "Vegana",
      time: "30 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/hamburguer-vegano.jpeg",
      ingredients: [
        { name: "Grão de bico cozido", measure: "1 xícara" },
        { name: "Cebola", measure: "½ unidade" },
        { name: "Farinha de aveia", measure: "¼ xícara" }
      ],
      instructions: `
1. Amasse o grão de bico e misture cebola e aveia.
2. Modele os hambúrgueres.
3. Grelhe por 5 minutos de cada lado.
      `
    },

    {
      title: "Sopa de Legumes",
      category: "Vegana",
      time: "25 min",
      servings: "3 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/sopa-de-legumes.jpeg",
      ingredients: [
        { name: "Cenoura", measure: "1 unidade" },
        { name: "Batata", measure: "1 unidade" },
        { name: "Abobrinha", measure: "½ unidade" }
      ],
      instructions: `
1. Cozinhe os legumes até ficarem macios.
2. Tempere com sal e azeite.
3. Sirva quente.
      `
    },

    {
      title: "Grão de Bico Refogado",
      category: "Vegana",
      time: "20 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/grao-de-bico-refogado.jpeg",
      ingredients: [
        { name: "Grão de bico cozido", measure: "1 xícara" },
        { name: "Cebola picada", measure: "1 unidade" },
        { name: "Azeite", measure: "1 colher" }
      ],
      instructions: `
1. Refogue a cebola até dourar.
2. Acrescente o grão de bico e mexa bem.
3. Tempere a gosto e sirva.
      `
    },

    // ----------------------------------------------------------
    // ------------------------ BEBIDAS -------------------------
    // ----------------------------------------------------------
    {
      title: "Suco Natural de Laranja",
      category: "Bebidas",
      time: "5 min",
      servings: "1 copo",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/suco-de-laranja.jpeg",
      ingredients: [
        { name: "Laranjas", measure: "4 unidades" },
        { name: "Açúcar", measure: "a gosto" }
      ],
      instructions: `
1. Esprema as laranjas.
2. Coe se desejar.
3. Misture o açúcar e sirva gelado.
      `
    },

    {
      title: "Vitamina de Banana",
      category: "Bebidas",
      time: "5 min",
      servings: "1 copo",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/vitamina-de-banana.jpeg",
      ingredients: [
        { name: "Bananas", measure: "2 unidades" },
        { name: "Leite", measure: "1 copo" },
        { name: "Aveia", measure: "2 colheres" }
      ],
      instructions: `
1. Bata todos os ingredientes no liquidificador.
2. Sirva bem gelado.
      `
    },

    {
      title: "Milkshake de Ovomaltine",
      category: "Bebidas",
      time: "10 min",
      servings: "1 copo",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/milkshake-de-ovomaltine.jpeg",
      ingredients: [
        { name: "Leite", measure: "1 copo" },
        { name: "Sorvete de creme", measure: "3 bolas" },
        { name: "Ovomaltine", measure: "3 colheres" }
      ],
      instructions: `
1. Bata o leite e o sorvete até ficar cremoso.
2. Acrescente o Ovomaltine.
3. Misture com uma colher e sirva.
      `
    },

    {
      title: "Chá Gelado Caseiro",
      category: "Bebidas",
      time: "10 min",
      servings: "2 copos",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/cha-gelado.jpeg",
      ingredients: [
        { name: "Chá preto", measure: "2 sachês" },
        { name: "Açúcar", measure: "2 colheres" },
        { name: "Gelo", measure: "a gosto" }
      ],
      instructions: `
1. Prepare o chá quente.
2. Adoce e deixe esfriar.
3. Sirva com bastante gelo.
      `
    },

    // ----------------------------------------------------------
    // ------------------------- MASSAS -------------------------
    // ----------------------------------------------------------
    {
      title: "Espaguete ao Alho",
      category: "Massas",
      time: "15 min",
      servings: "2 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/espaguete-alho.jpeg",
      ingredients: [
        { name: "Espaguete", measure: "200g" },
        { name: "Alho picado", measure: "3 dentes" },
        { name: "Azeite", measure: "3 colheres" }
      ],
      instructions: `
1. Cozinhe o macarrão até ficar al dente.
2. Doure o alho no azeite.
3. Misture o macarrão e finalize com cheiro-verde.
      `
    },

    {
      title: "Penne ao Molho Branco",
      category: "Massas",
      time: "25 min",
      servings: "3 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/penne-molho-branco.jpeg",
      ingredients: [
        { name: "Penne", measure: "250g" },
        { name: "Leite", measure: "2 xícaras" },
        { name: "Manteiga", measure: "1 colher" },
        { name: "Farinha", measure: "1 colher" }
      ],
      instructions: `
1. Cozinhe o macarrão.
2. Faça o molho branco com manteiga, farinha e leite.
3. Misture tudo e sirva quente.
      `
    },

    {
      title: "Macarronada Tradicional",
      category: "Massas",
      time: "40 min",
      servings: "4 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/macarronada.jpeg",
      ingredients: [
        { name: "Macarrão", measure: "300g" },
        { name: "Molho de tomate", measure: "2 xícaras" },
        { name: "Queijo ralado", measure: "½ xícara" }
      ],
      instructions: `
1. Cozinhe o macarrão.
2. Prepare um molho simples de tomate.
3. Misture tudo e finalize com queijo.
      `
    },

    {
      title: "Fettuccine Alfredo",
      category: "Massas",
      time: "20 min",
      servings: "3 porções",
      image:
        "https://www.receiteria.com.br/wp-content/uploads/fettuccine-alfredo.jpeg",
      ingredients: [
        { name: "Fettuccine", measure: "250g" },
        { name: "Creme de leite", measure: "1 caixa" },
        { name: "Queijo parmesão", measure: "½ xícara" }
      ],
      instructions: `
1. Cozinhe o fettuccine.
2. Aqueça o creme de leite e misture o parmesão.
3. Junte o macarrão e sirva imediatamente.
      `
    }
  ]);

  console.log("✔ Seed finalizado com sucesso!");
  process.exit(0);
};

seed();
