function mudaTema() {
  document.body.classList.toggle("dark");
}

function mudaTema_b() {
  document.body.classList.toggle("darkb");
}

function mudaTema_c() {
  document.body.classList.toggle("darkc");
}
// * 1 - capturar  valor da textArea para criar o tweet
// 2 - construir tweet
//  3 - imprimir esse tweet

const textarea = document.querySelector("textarea");
const tweetar = document.querySelector("button");
const feed = document.querySelector(".conteudoPrincipal__listaTweets");

function pegarTweet(event) {
  event.preventDefault();

  const tweetTextarea = textarea.value;
  criarTweet(tweetTextarea);
}

tweetar.addEventListener("click", pegarTweet);

/**
 * criar o tweet * texto do tweet * nome * foto * nome user* horario */
function criarTweet(tweetTexto) {
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();

  //OBJETO
  const tweet = {
    nome: "Miles Tails",
    foto: (src =
      "https://i.pinimg.com/originals/1b/3f/c2/1b3fc2ad26e4e53a082d16530856c8dc.jpg"),
    usuario: "@Tail's",
    texto: tweetTexto,
    tempo: `${hora}:${minutos}`
  };

  listarTemplateTweet(tweet);
}

function listarTemplateTweet(tweet) {
  const { nome, foto, usuario, texto, tempo } = tweet;

  //CRIANDO ELEMENTOS PARA LISTAR O TEMPLATE
  let li = document.createElement("li");
  li.classList.add("conteudoPrincipal__tweet");

  let img = document.createElement("img");
  img.src = foto;
  img.classList.add("tweet__fotoPerfil");

  let div = document.createElement("div");
  div.classList.add("tweet__conteudo");

  let h2 = document.createElement("h2");
  h2.innerText = nome;

  let span = document.createElement("span");
  span.innerText = ` ${usuario} - ${tempo}`;

  let p = document.createElement("p");
  p.innerText = texto;

  //ADICIONANDO ELEMENTOS DENTRO DA DIV
  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(p);

  //ADICIONANDO ELEMENTOS DENTRO DA LI
  li.appendChild(img);
  li.appendChild(div);

  feed.appendChild(li);
  textarea.value = "";
}

//DAR ENTER PARA PUBLICAR
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    const btn = document.querySelector("button");

    btn.click();
    e.preventDefault();

  }
});
