const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects ');
const allProjectsContainer = document.querySelector(' .cd-container #cd-timeline .cards-projects .timeline-content-info-title .timeline-content-info-date .content-skills .cd-date .cd-timeline-content .cd-timeline-img cd-movie .cd-timeline-block  .allProjects  ');
const HIGHTLIGHT_TYPE = 1;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
    const dataProjects = [

        //*PROJETO SITE MEDCLIN*//
        {
            id: 1,
            type: 1,
            title: 'Site MedClin',
            date: 'Outubro 22022',
            languages: [],
            description: ` Esse projeto foi desenvolvido para o desafio do curso Formação HTML Web Developer da Dio.me. É uma página falsa para uma clínica médica, usando apenas HTML e um pouco de CSS. `,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `Git`,
            skil4: `GitHub`,
            skil5: `Bootstap`,
            miniatura: './assets/img/medclin.png',
            videoSrc: './assets/vid/medclin.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_webdeveloper-html-css-activity-6995541305112072192-4_aC?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Site-MedClin',
            site: 'https://hercules1997.github.io/Site-MedClin/'
        },


        {
            id: 2,
            type: 1,
            title: '3H Tecnologia',
            date: 'Nov 2022 - Em andamento',
            languages: [''],
            description: ` Este é um projeto ainda em desenvolvimento para uma empresa de tecnologia.`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `JavaScript`,
            skil4: `Bootstap`,
            skil5: `GitHub`,
            miniatura: './assets/img/3htech.png',
            videoSrc: './assets/vid/3htech.mp4',
            linkedin: '#',
            repository: '',
            site: ''
        },


 

        //*PROJETO CLONE WIKIPÉDIA*//

        {
            id: 3,
            type: 1,
            title: 'Clone Wikipédia',
            date: 'Novembro 2022',
            languages: [],
            description: `Este projeto foi desenvolvido pelo desafio do curso de formação Developer Web HTML da DIO.me, onde foi realizado um clone da página do wikipédia com a finalidade de práticas em HTML.`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `Git`,
            skil4: `GitHub`,
            skil5: `bootstrap`,
            miniatura: './assets/img/clone-wikipedia.png',
            videoSrc: './assets/vid/wikipedia.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_html-css-sucesso-activity-7001999239060860928-s9r8?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Clone-site-wikipedia',
            site: 'https://hercules1997.github.io/Clone-site-wikipedia/'

        },

        //*PROJETO CLONE DO SITE INSTAGRAM*//
        {
            id: 4,
            type: 1,
            title: 'Clone instagram',
            date: 'Setembro 2022',
            languages: [''],
            description: ` Este é um simples projeto desenvolvido através da missão programação do zero com o professor Rodolfo Mori. O objetvo era uma página fictícia do instagram. OBS: CASO TENTE ACESSAR O SITE DO PROJETO PODERÁ APARECER UMA MENSAGEM DIZENDO SER FRAUDULENTO, porém o site não contém nenhuma ação, apenas o esboço da tela de login.`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `JavaScript`,
            skil4: `Git`,
            skil5: `GitHub`,
            miniatura: './assets/img/instagram.png',
            videoSrc: './assets/vid/instagram.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_javascript-css-html-activity-6986775151761592320-PetL?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Clone-Instagram',
            site: 'https://clone-instagram-p7nr.vercel.app/'
        },
        //*PROJETO CONVERT MONEY*//
        {
            id: 5,
            type: 1,
            title: 'Convert Money',
            date: '5 de dezembro',
            languages: [],
            description: `Este aplicativo foi desenvolvido com HTML5, CSS, JS e API. Trata-se de um desafio do 9º Módulo do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode converter o valor de real para as moedas mais utilizadas. <br /> <br />`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `JavaScript`,
            skil4: `NodeJs`,
            skil5: `GitHub`,
            miniatura: './assets/img/convert-money.png',
            videoSrc: './assets/vid/convert-money.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_css-javascript-html-activity-7004568916551184384-5fbR?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Convert-Money-DevClub',
            site: 'https://hercules1997.github.io/Convert-Money-DevClub/'
        },
        //*PROJETO CODE BURGUER*//
        {
            id: 6,
            type: 1,
            title: 'Code burguer',
            date: '30 dezembro 22',
            languages: [],
            description: `Este aplicativo foi desenvolvido com React JS, é um desafio do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode inserir o nome e escolher o tipo de lanche. Após clicar em "realizar pedido" é direcionado à área de acompanhamento do pedido. Obs: Para o funcionamento é preciso do backend`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `ReactJS`,
            skil4: `NodeJS`,
            skil5: `GitHub`,
            miniatura: './assets/img/code-burger.png',
            videoSrc: './assets/vid/code-burguer.mp4',
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7014743674169253888/',
            repository: 'https://github.com/hercules1997/Desafio-Code-Burguer-DevClub',
            c: 'https://burguer-iota.vercel.app/'
        },


        //*PROJETO CADASTRO DE USUÁRIOS*//
        {
            id: 7,
            type: 1,
            title: 'Code user',
            date: 'Dezembro de 2022',
            languages: [],
            description: `Este é projeto bem simples desenvolvido através do desafio do curso DevClub, onde o usuário pode cadastrar mais de uma pessoa com o nome e idade. A finalidade é o desenvolvimento do Backend e sua comunicação com o frontend.`,
            skil1: `HTML`,
            skil2: `CSS`,
            skil3: `ReactJS`,
            skil4: `NodeJS`,
            skil5: `GitHub`,
            miniatura: './assets/img/join-user.png',
            videoSrc: './assets/vid/projeto-react.mp4',
            linkedin: 'https://',
            repository: 'https://github.com/hercules1997/first-react',
            site: 'https://first-react-eta.vercel.app/'
        },

    ];

    return typeId ? dataProjects.filter(({
        type
    }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
    container.innerHTML = data.map(({
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
        site
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
      `
    }).join('');
}

const scrollDistance = 360;
 let moveProjects = document.getElementById("move");
 document.getElementById("scroll-left").addEventListener("click", function () {
     moveProjects.scrollLeft -= scrollDistance;
 });

 document.getElementById("scroll-right").addEventListener("click", function () {
     moveProjects.scrollLeft += scrollDistance
 });



const renderSkillsSection = () => {
    const cardsContainer = document.querySelector('.cards');

    const skills = [{
            name: 'HTML5',
            src: 'html'
        },
        {
            name: 'CSS3',
            src: 'css'
        },
        {
            name: 'JavaScript',
            src: 'javascript'
        },
        {
            name: 'Git',
            src: 'git'
        },
        {
            name: 'GitHub',
            src: 'github'
        },
        {
            name: 'React',
            src: 'react'
        },
        {
            name: 'Node JS',
            src: 'nodejs'
        },
        {
            name: 'Bootstrap',
            src: 'bootstrap'
        },

    ]

    cardsContainer.innerHTML = skills.map(({
        name,
        src
    }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="./assets/icons-habilidade/${src}.png" alt="">
    </div>
  `).join('')
}

const addData = ({
    title,
    description,
    date,
    site,
    repository,
    linkedin,
    videoSrc
}) => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('transparent')
    modalTitle.innerHTML = title
    modalDescription.innerHTML = description
    modalDate.innerHTML = date
    modalLinkProject.setAttribute('href', site)
    modalLinkRepository.setAttribute('href', repository)
    modalLinkLinkedin.setAttribute('href', linkedin)
    iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop')

}

const insertProjectAction = () => {
    projectsBox.forEach((project) => {
        const id = Number(project.getAttribute('id'));

        project.addEventListener('click', () => {
            const allProjects = getProjectsByTypeOrAll();
            const foundProject = allProjects.find((project) => project.id === id);
            addData(foundProject);
        })
    });
}

const closeModal = () => {
    modal.classList.add('hidden')
    document.body.style.overflow = 'visible';
    document.body.classList.remove('transparent')
    iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
    closeModalAction.addEventListener('click', closeModal)
    document.addEventListener('keydown', ({
        key
    }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();


