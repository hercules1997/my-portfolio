const modal = document.querySelector(".modal");
const projetsContainers = document.querySelector(".cards-projects");
const allProjectsContainer = document.querySelector(".allProjects");

const getProjectAll = () => {
  const dataProjects = [
    //*PROJETO SITE MEDCLIN*//
    {
      id: 1,
      title: "Site MedClin",
      date: "Outubro 22022",
      description: ` Esse projeto foi desenvolvido para o desafio do curso Formação HTML Web Developer da Dio.me. É uma página falsa para uma clínica médica, usando apenas HTML e um pouco de CSS. `,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `Git`,
      skil4: `GitHub`,
      skil5: `Bootstap`,
      miniatura: "./assets/img/medclin.png",
      videoSrc: "./assets/vid/medclin.mp4",
      linkedin:
        "https://www.linkedin.com/posts/hercules-chaves-andrade_webdeveloper-html-css-activity-6995541305112072192-4_aC?utm_source=share&utm_medium=member_desktop",
      repository: "https://github.com/hercules1997/Site-MedClin",
      site: "https://hercules1997.github.io/Site-MedClin/",
    },

    //*PROJETO SITE 3H TECNOLOGIA*//
    {
      id: 2,
      title: "3H Tecnologia",
      date: "Nov 2022",
      description: ` Este é um projeto ainda em desenvolvimento para uma empresa de tecnologia.`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `JavaScript`,
      skil4: `Bootstap`,
      skil5: `GitHub`,
      miniatura: "./assets/img/3htech.png",
      videoSrc: "./assets/vid/3htech.mp4",
      linkedin: "#",
      repository: "",
      site: "",
    },
    //*PROJETO ACESSO DO BATALHÃO 4° BI MEC*//

    {
      id: 3,
      title: "Sistema de controle de acesso",
      date: "Ago 2023 - Em andamento",
      description: ` Este é um projeto ainda em desenvolvimento para uma empresa onde terá o controle de estrada e saida de pessoal`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `JavaScript`,
      skil4: `ReactJS`,
      skil5: `NodeJS`,
      miniatura: "./assets/img/control-acess.png",
      videoSrc: "3",
      linkedin: "#",
      repository: "https://github.com/hercules1997/controle-de-acesso-frontend",
      site: "#",
    },
    //*PROJETO REGISTRO TELEFONICO*//
    {
      id: 4,
      title: "Sistema simples de registros telefônicos",
      date: "jun - em processo de atualização",
      description: ` Este é um projeto desenvolvido para um teste técnico da CreativeCode, onde consiste cadastrar registos pessoais`,
      skil1: `ReactJS`,
      skil2: `NodeJS`,
      skil3: `JavaScript`,
      skil4: `MUI`,
      skil5: `GitHub`,
      miniatura:
        "https://user-images.githubusercontent.com/109186074/235692862-c068ce17-8bf4-4cf7-9517-4ed841d0f1b4.png",
      videoSrc: "./assets/vid/3htech.mp4",
      linkedin: "#",
      repository:
        "https://github.com/hercules1997/front-junior-creativecode-2023/tree/main/agenda-telefonica",
      site: "https://frontend-agenda-tel.vercel.app/login",
    },

    //*PROJETO CLONE WIKIPÉDIA*//
    {
      id: 5,
      title: "Clone Wikipédia",
      date: "Novembro 2022",
      description: `Este projeto foi desenvolvido pelo desafio do curso de formação Developer Web HTML da DIO.me, onde foi realizado um clone da página do wikipédia com a finalidade de práticas em HTML.`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `Git`,
      skil4: `GitHub`,
      skil5: `bootstrap`,
      miniatura: "./assets/img/clone-wikipedia.png",
      videoSrc: "./assets/vid/wikipedia.mp4",
      linkedin:
        "https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_html-css-sucesso-activity-7001999239060860928-s9r8?utm_source=share&utm_medium=member_desktop",
      repository: "https://github.com/hercules1997/Clone-site-wikipedia",
      site: "https://hercules1997.github.io/Clone-site-wikipedia/",
    },

    //*PROJETO CLONE DO SITE INSTAGRAM*//
    {
      id: 6,
      title: "Clone instagram",
      date: "Setembro 2022",
      description: ` Este é um simples projeto desenvolvido através da missão programação do zero com o professor Rodolfo Mori. O objetvo era uma página fictícia do instagram. OBS: CASO TENTE ACESSAR O SITE DO PROJETO PODERÁ APARECER UMA MENSAGEM DIZENDO SER FRAUDULENTO, porém o site não contém nenhuma ação, apenas o esboço da tela de login.`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `JavaScript`,
      skil4: `Git`,
      skil5: `GitHub`,
      miniatura: "./assets/img/instagram.png",
      videoSrc: "./assets/vid/instagram.mp4",
      linkedin:
        "https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_javascript-css-html-activity-6986775151761592320-PetL?utm_source=share&utm_medium=member_desktop",
      repository: "https://github.com/hercules1997/Clone-Instagram",
      site: "https://clone-instagram-p7nr.vercel.app/",
    },

    //*PROJETO CONVERT MONEY*//
    {
      id: 7,
      title: "Convert Money",
      date: "5 de dezembro",
      description: `Este aplicativo foi desenvolvido com HTML5, CSS, JS e API. Trata-se de um desafio do 9º Módulo do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode converter o valor de real para as moedas mais utilizadas. <br /> <br />`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `JavaScript`,
      skil4: `NodeJs`,
      skil5: `GitHub`,
      miniatura: "./assets/img/convert-money.png",
      videoSrc: "./assets/vid/convert-money.mp4",
      linkedin:
        "https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_css-javascript-html-activity-7004568916551184384-5fbR?utm_source=share&utm_medium=member_desktop",
      repository: "https://github.com/hercules1997/Convert-Money-DevClub",
      site: "https://hercules1997.github.io/Convert-Money-DevClub/",
    },

    //*PROJETO CODE BURGUER*//
    {
      id: 8,
      title: "Code burguer",
      date: "30 dezembro 22",
      description: `Este aplicativo foi desenvolvido com React JS, é um desafio do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode inserir o nome e escolher o tipo de lanche. Após clicar em "realizar pedido" é direcionado à área de acompanhamento do pedido. Obs: Para o funcionamento é preciso do backend`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `ReactJS`,
      skil4: `NodeJS`,
      skil5: `GitHub`,
      miniatura: "./assets/img/code-burger.png",
      videoSrc: "./assets/vid/code-burguer.mp4",
      linkedin:
        "https://www.linkedin.com/feed/update/urn:li:activity:7014743674169253888/",
      repository:
        "https://github.com/hercules1997/Desafio-Code-Burguer-DevClub",
      site: "https://burguer-iota.vercel.app/",
    },

    //*PROJETO CADASTRO DE USUÁRIOS*//
    {
      id: 9,
      title: "Code user",
      date: "Dezembro de 2022",
      description: `Este é projeto bem simples desenvolvido através do desafio do curso DevClub, onde o usuário pode cadastrar mais de uma pessoa com o nome e idade. A finalidade é o desenvolvimento do Backend e sua comunicação com o frontend.`,
      skil1: `HTML`,
      skil2: `CSS`,
      skil3: `ReactJS`,
      skil4: `NodeJS`,
      skil5: `GitHub`,
      miniatura: "./assets/img/join-user.png",
      videoSrc: "./assets/vid/projeto-react.mp4",
      linkedin: "https://",
      repository: "https://github.com/hercules1997/first-react",
      site: "https://registration-users.netlify.app/",
    },
  ];

  return dataProjects;
};

//? CARDS DOS PROJETOS */
const renderProjects = (container, data) => {
  container.innerHTML = data
    .map(
      ({
        id,
        title,
        miniatura,
        date,
        videoSrc,
        description,
        skil1,
        skil2,
        skil3,
        skil4,
        skil5,
        repository,
        linkedin,
        site,
      }) => {
        return `

     <section  class="cd-container">
        <div class="cd-timeline-block" id="${id}">
           
            <div class="cd-timeline-content">

              <h2>${title}</h2>
              <div class="timeline-content-info">

                <span class="timeline-content-info-title">
                    <i class="fa fa-certificate" aria-hidden="true"></i>Front End Developer
                </span>

                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  ${date}
                </span>
              </div>

              <video height="200px" muted controls controlsList="nodownload" poster="${miniatura}">
                <source  src="${videoSrc}">
              </video>

              <p>
                ${description}
              </p>

              <h4>Linguagens usadas:</h4>

              <ul class="content-skills">
                <li>${skil1}</li>
                <li>${skil2}</li>
                <li>${skil3}</li>
                <li>${skil4}</li>
                <li>${skil5}</li>
              </ul>

              <div class="links">
                <a target="_blank" href="${site}">Acessar projeto</a>
                <a target="_blank" href="${repository}">Acessar repositório</a>
                <a target="_blank" href="${linkedin}">Ver post no Linkedin</a>
              </div>

            </div>
        </div>

        <div class="cd-timeline-block"></div>
     </section>
      `;
      }
    )
    .join("");
};

//?MOVIMENTA O SCROLLBAR */
const scrollDistance = 360;
let moveProjects = document.getElementById("move");

document.getElementById("scroll-left").addEventListener("click", () => {
  moveProjects.scrollLeft -= scrollDistance;
});
document.getElementById("scroll-right").addEventListener("click", () => {
  moveProjects.scrollLeft += scrollDistance;
});

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector(".cards");

  const skills = [
    {
      name: "HTML5",
      src: "html",
    },
    {
      name: "CSS3",
      src: "css",
    },
    {
      name: "JavaScript",
      src: "javascript",
    },
    {
      name: "Git",
      src: "git",
    },
    {
      name: "GitHub",
      src: "github",
    },
    {
      name: "React",
      src: "react",
    },
    {
      name: "Node JS",
      src: "nodejs",
    },
    {
      name: "Bootstrap",
      src: "bootstrap",
    },
    {
      name: "Docker",
      src: "docker",
    },
    {
      name: "Postgres",
      src: "postgre",
    },
    {
      name: "MongoDB",
      src: "mongo",
    },
    {
      name: "API",
      src: "api",
    },
  ];

  cardsContainer.innerHTML = skills
    .map(
      ({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="./assets/icons-habilidade/${src}.png" alt="">
    </div>
  `
    )
    .join("");
};

renderSkillsSection();
renderProjects(projetsContainers, getProjectAll());
