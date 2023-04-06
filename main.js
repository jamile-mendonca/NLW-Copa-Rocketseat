function createGame(player1, hour, player2) {
  return ` <li><img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
<strong>${hour}</strong>
<img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
</li>`
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
  <h2> ${date} <span>${day}</span></h2>
  <ul>
   ${games}
  </ul>
</div>
  `
}
const listaJogos = [
  {
    data: '20/11', diaSemana: 'Domingo',
    jogos: [
      { horario: '13:00', pais1: 'catar', pais2: 'equador' },
    ]
  },
  {
    data: '21/11', diaSemana: 'Segunda',
    jogos:
      [
        { horario: '10:00', pais1: 'inglaterra', pais2: 'ira' },
        { horario: '13:00', pais1: 'senegal', pais2: 'holanda' },
        { horario: '16:00', pais1: 'eua', pais2: 'gales' }
      ]
  },
  {
    data: '22/11', diaSemana: 'Terça',
    jogos: [
      { horario: '07:00', pais1: 'argentina', pais2: 'arabiasaudita' },
      { horario: '10:00', pais1: 'dinamarca', pais2: 'tunisia' },
      { horario: '13:00', pais1: 'mexico', pais2: 'polonia' },
      { horario: '16:00', pais1: 'franca', pais2: 'australia' },
    ]
  },
  {
    data: '23/11', diaSemana: 'Quarta',
    jogos: [
      { horario: '07:00', pais1: 'marrocos', pais2: 'croacia' },
      { horario: '10:00', pais1: 'alemanha', pais2: 'japao' },
      { horario: '13:00', pais1: 'espanha', pais2: 'costarica' },
      { horario: '16:00', pais1: 'belgica', pais2: 'canada' },
    ]
  },
  {
    data: '24/11', diaSemana: 'Quinta',
    jogos: [
      { horario: '07:00', pais1: 'suica', pais2: 'camaroes' },
      { horario: '10:00', pais1: 'uruguai', pais2: 'coreiasul' },
      { horario: '13:00', pais1: 'portugal', pais2: 'gana' },
      { horario: '16:00', pais1: 'brasil', pais2: 'servia' }
    ]
  },
  {
    data: '25/11', diaSemana: 'Sexta',
    jogos: [
      { horario: '07:00', pais1: 'gales', pais2: 'ira' },
      { horario: '10:00', pais1: 'catar', pais2: 'senegal' },
      { horario: '13:00', pais1: 'holanda', pais2: 'equador' },
      { horario: '16:00', pais1: 'inglaterra', pais2: 'eua' }
    ]
  },

  {
    data: '26/11', diaSemana: 'Sábado',
    jogos: [
      { horario: '07:00', pais1: 'tunisia', pais2: 'australia' },
      { horario: '10:00', pais1: 'polonia', pais2: 'arabiasaudita' },
      { horario: '13:00', pais1: 'franca', pais2: 'dinamarca' },
      { horario: '16:00', pais1: 'argentina', pais2: 'mexico' }
    ]
  },
  {
    data: '27/11', diaSemana: 'Domingo',
    jogos: [
      { horario: '07:00', pais1: 'japao', pais2: 'costarica' },
      { horario: '10:00', pais1: 'belgica', pais2: 'marrocos' },
      { horario: '13:00', pais1: 'croacia', pais2: 'canada' },
      { horario: '16:00', pais1: 'espanha', pais2: 'alemanha' }
    ]
  },

  {
    data: '28/11', diaSemana: 'Segunda',
    jogos: [
      { horario: '07:00', pais1: 'camaroes', pais2: 'servia' },
      { horario: '10:00', pais1: 'coreiasul', pais2: 'gana' },
      { horario: '13:00', pais1: 'brasil', pais2: 'suica' },
      { horario: '16:00', pais1: 'portugal', pais2: 'uruguai' }
    ]
  },
  {
    data: '29/11', diaSemana: 'Terça',
    jogos: [
      { horario: '12:00', pais1: 'holanda', pais2: 'catar' },
      { horario: '12:00', pais1: 'equador', pais2: 'senegal' },
      { horario: '16:00', pais1: 'gales', pais2: 'inglaterra' },
      { horario: '16:00', pais1: 'ira', pais2: 'eua' }
    ]
  },
  {
    data: '30/11', diaSemana: 'Quarta',
    jogos: [
      { horario: '12:00', pais1: 'tunisia', pais2: 'franca' },
      { horario: '12:00', pais1: 'australia', pais2: 'dinamarca' },
      { horario: '16:00', pais1: 'polonia', pais2: 'argentina' },
      { horario: '16:00', pais1: 'arabiasaudita', pais2: 'mexico' }
    ]
  },

  {
    data: '01/12', diaSemana: 'Quinta',
    jogos: [
      { horario: '12:00', pais1: 'croacia', pais2: 'belgica' },
      { horario: '12:00', pais1: 'canada', pais2: 'marrocos' },
      { horario: '16:00', pais1: 'japao', pais2: 'espanha' },
      { horario: '16:00', pais1: 'costarica', pais2: 'alemanha' }
    ]
  },
  {
    data: '02/12', diaSemana: 'Sexta',
    jogos: [
      { horario: '12:00', pais1: 'gana', pais2: 'uruguai' },
      { horario: '12:00', pais1: 'coreiasul', pais2: 'portugal' },
      { horario: '16:00', pais1: 'servia', pais2: 'suica' },
      { horario: '16:00', pais1: 'camaroes', pais2: 'brasil' }
    ]
  }
]

function CriarJogos() {
  let htmlCard = "";
  listaJogos.forEach(diaJogo => {
    let htmlGames = "";
    diaJogo.jogos.forEach(jogo => {
      htmlGames += createGame(jogo.pais1, jogo.horario, jogo.pais2);
    })
    htmlCard += createCard(diaJogo.data, diaJogo.diaSemana, htmlGames)
  })
  return htmlCard
}

document.querySelector('#cards').innerHTML = CriarJogos();
// document.querySelector('#cards').innerHTML = createCard("20/11", "Domingo", createGame('brazil', "16:00", 'serbia')) +
//   createCard("21/11", "Segunda", createGame('brazil', "13:00", 'switzerland')) +
//   createCard("22/11", "Terça", createGame('brazil', "16:00", 'cameroon'))
// createCard("23/11", "Quarta", createGame('brazil', "16:00", 'cameroon'))
// createCard("24/11", "Quinta", createGame('brazil', "16:00", 'cameroon'))
// createCard("25/11", "Sexta", createGame('brazil', "16:00", 'cameroon'))
// createCard("26/11", "Sábado", createGame('brazil', "16:00", 'cameroon'))
// createCard("27/11", "Domingo", createGame('brazil', "16:00", 'cameroon'))
// createCard("28/11", "Segunda", createGame('brazil', "16:00", 'cameroon'))
// createCard("29/11", "Terça", createGame('brazil', "16:00", 'cameroon'))
// createCard("30/11", "Quarta", createGame('brazil', "16:00", 'cameroon'))
// createCard("01/12", "Quinta", createGame('brazil', "16:00", 'cameroon'))
// createCard("02/12", "Sexta", createGame('brazil', "16:00", 'cameroon'))