const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
    const dataProjects = [

        //*PROJETO CONVERT MONEY*//
        {
            id: 1,
            type: 1,
            title: 'Convert Money',
            date: '5 de dezembro',
            languages: [],
            description: `Este aplicativo foi desenvolvido com HTML5, CSS, JS e API. Trata-se de um desafio do 9º Módulo do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode converter o valor de real para as moedas mais utilizadas. <br /> <br />`,
            imgSrc: './assets/img/convert-money.png',
            videoSrc: './assets/vid/convert-money.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_css-javascript-html-activity-7004568916551184384-5fbR?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Convert-Money-DevClub',
            site: 'https://hercules1997.github.io/Convert-Money-DevClub/'
        },


        //*PROJETO CODE BURGUER*//
        {
            id: 2,
            type: 1,
            title: 'Code burguer',
            date: '30 dezembro 22',
            languages: [],
            description: `Este aplicativo foi desenvolvido com React JS, é um desafio do curso de formação Full-Stack do DevClub. Neste aplicativo o usuário pode inserir o nome e escolher o tipo de lanche. Após clicar em "realizar pedido" é direcionado à área de acompanhamento do pedido. Obs: Para o funcionamento é preciso do backend`,
            imgSrc: './assets/img/code-burger.png',
            videoSrc: './assets/vid/code-burguer.mp4',
            linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7014743674169253888/',
            repository: 'https://github.com/hercules1997/Desafio-Code-Burguer-DevClub',
            site: 'https://burguer-iota.vercel.app/'
        },
        {
            id: 2,
            type: 2,
            title: 'Code burguer',
            date: 'Dezembro 22022',
            languages: [],
            description: ` `,
            imgSrc: './assets/img/code-burger.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },

        //*PROJETO CLONE WIKIPÉDIA*//

        {
            id: 3,
            type: 1,
            title: 'Clone site Wikipédia',
            date: 'Novembro 2022',
            languages: [],
            description: `Este projeto foi desenvolvido pelo desafio do curso de formação Developer Web HTML da DIO.me, onde foi realizado um clone da página do wikipédia com a finalidade de práticas em HTML.`,
            imgSrc: './assets/img/clone-wikipedia.png',
            videoSrc: './assets/vid/wikipedia.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_html-css-sucesso-activity-7001999239060860928-s9r8?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Clone-site-wikipedia',
            site: 'https://hercules1997.github.io/Clone-site-wikipedia/'

        },
        {
            id: 3,
            type: 2,
            title: 'Clone site Wikipédia',
            date: 'Novembro 2022',
            languages: [],
            description: `   `,
            imgSrc: './assets/img/clone-wikipedia.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'

        },

        //*PROJETO CADASTRO DE USUÁRIOS*//
        {
            id: 4,
            type: 1,
            title: 'Cadastros de usuários',
            date: 'Dezembro de 2022',
            languages: [],
            description: `Este é projeto bem simples desenvolvido através do desafio do curso DevClub, onde o usuário pode cadastrar mais de uma pessoa com o nome e idade. A finalidade é o desenvolvimento do Backend e sua comunicação com o frontend.`,
            imgSrc: './assets/img/join-user.png',
            videoSrc: './assets/vid/projeto-react.mp4',
            linkedin: 'https://',
            repository: 'https://github.com/hercules1997/first-react',
            site: 'https://first-react-eta.vercel.app/'
        },

        //*PROJETO SITE MEDCLIN*//
        {
            id: 5,
            type: 1,
            title: 'Site MedClin',
            date: 'Outubro 22022',
            languages: [],
            description: ` Esse projeto foi desenvolvido para o desafio do curso Formação HTML Web Developer da Dio.me. É uma página falsa para uma clínica médica, usando apenas HTML e um pouco de CSS. `,
            imgSrc: './assets/img/medclin.png',
            videoSrc: './assets/vid/medclin.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_webdeveloper-html-css-activity-6995541305112072192-4_aC?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Site-MedClin',
            site: 'https://hercules1997.github.io/Site-MedClin/'
        },
        {
            id: 5,
            type: 2,
            title: 'Site MedClin',
            date: 'Outubro 2022',
            languages: [],
            description: `  `,
            imgSrc: './assets/img/medclin.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },

        //*PROJETO CLONE DO SITE INSTAGRAM*//
        {
            id: 6,
            type: 1,
            title: 'Clone instagram',
            date: 'Setembro 2022',
            languages: [''],
            description: ` Este é um simples projeto desenvolvido através da missão programação do zero com o professor Rodolfo Mori. O objetvo era uma página fictícia do instagram. OBS: CASO TENTE ACESSAR O SITE DO PROJETO PODERÁ APARECER UMA MENSAGEM DIZENDO SER FRAUDULENTO, porém o site não contém nenhuma ação, apenas o esboço da tela de login.`,
            imgSrc: './assets/img/instagram.png',
            videoSrc: './assets/vid/instagram.mp4',
            linkedin: 'https://www.linkedin.com/posts/h%C3%A9rcules-chaves-andrade-4a2594238_javascript-css-html-activity-6986775151761592320-PetL?utm_source=share&utm_medium=member_desktop',
            repository: 'https://github.com/hercules1997/Clone-Instagram',
            site: 'https://clone-instagram-p7nr.vercel.app/'
        },
        {
            id: 6,
            type: 2,
            title: 'Clone instagram',
            date: 'Setembro 2022',
            languages: [''],
            description: `  `,
            imgSrc: './assets/img/instagram.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 7,
            type: 1,
            title: '3H Tecnologia',
            date: 'Novembro 2022 - Em andamento',
            languages: [''],
            description: ` Este é um projeto ainda em desenvolvimento para uma empresa de tecnologia.`,
            imgSrc: './assets/img/3htech.png',
            videoSrc: './assets/vid/3htech.mp4',
            linkedin: '#',
            repository: '',
            site: ''
        },
        {
            id: 7,
            type: 2,
            title: '3H Tecnologia',
            date: 'Setembro 2022',
            languages: [''],
            description: `  `,
            imgSrc: './assets/img/3htech.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
    ];

    return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
    container.innerHTML = data.map(({ id, title, imgSrc, date}) => {
        return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="">
            <div class="details">
              <p>${title}</p>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Visualizar</a>
          </div>
        </div>
      `
    }).join('');
}

const renderSkillsSection = () => {
    const cardsContainer = document.querySelector('.cards');

    const skills = [
        {
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

    cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="./assets/icons-habilidade/${src}.png" alt="">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
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
    document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();

