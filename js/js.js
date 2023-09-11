function MudaDesenho() {
    const texto = document.querySelector("h1");
    const sobre = document.querySelector('#esse');
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    var [ano, mes, dia] = valor.split('-').map(Number);

    if (dia >= 21 && mes == 03 || dia >= 1 && dia <= 20 && mes == 04) {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src", "img/aries.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Dinâmicos e sinceros, quem tem sol em Áries costuma ter um forte contato com a sua individualidade, que pode parecer egoísmo em alguns momentos.";
    
    } else if (dia >= 21 && mes == 04 || dia >= 1 && dia <= 20 && mes == 05) {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src", "img/touro.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Materialista, resistente a mudanças, fanático, indulgente, guloso, possessivo, teimoso, tacanho.";
   
    } else if (dia >= 21 && mes == 05 || dia >= 1 && dia <= 20 && mes == 06) {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src", "img/gemeos.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Não gostam de regras criadas pela sociedade e, definitivamente, são sempre os primeiros a questioná-las.";
   
     } else if (dia >= 21 && mes == 06 || dia >= 1 && dia <= 22 && mes == 07) {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "img/cancer.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Os cancerianos são sonhadores, empáticos e sentimentais, e a imaginação deles não tem limites. Dóceis, gentis, românticos e carinhosos, são pessoas que se preocupam profundamente com seus amigos, família e lar.";
    
    } else if (dia >= 23 && mes == 07 || dia >= 1 && dia <= 22 && mes == 08) {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "img/leao.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Leão é um signo fixo e resistente à mudança. Por causa disso, os nativos não gostam de ser desafiados ou contrariados.";
    
    } else if (dia >= 23 && mes == 08 || dia >= 1 && dia <= 22 && mes == 09) {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "img/virgem.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "O virginiano costuma ser muito crítico e exigente com os outros e consigo. ";
    
    } else if (dia >= 23 && mes == 09 || dia >= 1 && dia <= 22 && mes == 10) {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "img/libra.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Amam diversão e liberdade, apesar de serem muito apegados e um pouco dependentes.";
    
    } else if (dia >= 23 && mes == 10 || dia >= 1 && dia <= 21 && mes == 11) {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "img/escorpião.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Os nascidos em Escorpião são conhecidos por serem naturalmente intensos, misteriosos e muito vingativos, mas na verdade, são pessoas muito positivas, prestativas e que possuem uma excelente energia que contagia todos à sua volta.";
    
    } else if (dia >= 22 && mes == 11 || dia >= 1 && dia <= 21 && mes == 12) {
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src", "img/sargitario.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "O Sagitário signo é visto como o mais otimista entre os demais, e são parte do elemento de fogo e regidos por Júpiter, por isso, aventura está em seu DNA.";
    
    } else if (dia >= 22 && mes == 12 || dia >= 1 && dia <= 20 && mes == 01) {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "img/capricornio.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Capricornianos costumam planejar e traçar seus objetivos e metas. Obstinados não costumam confiar nos planos feitos por outras pessoas, preferem seguir seus próprios planos.";
   
    } else if (dia >= 21 && mes == 01 || dia >= 1 && dia <= 19 && mes == 02) {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "img/aquario.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "Os aquarianos são pessoas muito diretas e não gostam de trapaças e de coisas feitas por baixo dos panos.";
    
    } else if (dia >= 19 && mes == 02 || dia >= 1 && dia <= 20 && mes == 03) {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "img/peixes.png");
        imagem.setAttribute("width", "300px");
        sobre.innerHTML = "As pessoas nascidas sob o signo de Peixes são gentis, compassivas e generosas, mas também podem ser emotivas, dramáticas e indecisas.";
    
    } else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "img/x.webp");
        imagem.setAttribute("width", "250px");
    }
}
