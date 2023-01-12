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
        {
            id: 1,
            type: 2,
            title: 'The Movie Guide',
            date: '17 de Março de 2022',
            languages: [],
            description: `The Movie Guide é uma aplicação que reúne informações sobre artistas e produções, permitindo que usuários pesquisem e avaliem seus filmes favoritos, além de personalizar seu próprio perfil. <br /> <br />

        Tive muita inspiração de sites como Letterboxd e Filmow, dos quais sou usuário assíduo há anos. Mas a ideia surgiu mesmo do Desafio Front-End da Promobit localizado no repositório do Felipe Fialho, onde cumpri os requisitos apontados e fui além criando novas features, como: <br /> <br />

        • Realizar upload de Imagens; <br />
        • Avaliar e catalogar filmes favoritos/já assistidos; <br />
        • Barra de pesquisa que busca por títulos e artistas simultaneamente; <br />
        • Animações com a biblioteca Framer Motion; <br />
        • Rotas dinâmicas com React Router Dom; <br />
        • Filtro acumulativo de gêneros; <br /> <br />

        No desenvolvimento decidi utilizar o Vite.js como Build Tool pelo desempenho, Redux pro gerenciamento e armazenamento de Estados Globais, Styled Components pelos diversos benefícios do CSS-in-JS, TypeScript por facilitar na hora de fazer depuração no código e o React Router Dom pra manipulação de rotas;  <br />  <br />

        Foram longas horas de desenvolvimento, e sinto que esse projeto serviu pra consolidar tudo que aprendi nesses últimos meses estudando React.js :)
`,
            imgSrc: './assets/icons-habilidade/javascript.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 2,
            type: 1,
            title: 'DoWhile 2021 Virtual Badge',
            date: '24 de Outubro de 2021',
            languages: [],
            description: `O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D <br><br>

        Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
        
        • Modal para o usuário inserir seus próprios dados no Card; <br>
        • Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página; <br>
        • Animação de Flip em 3D (com CSS puro); <br>
        • Verso do Card com informações sobre o DoWhile 2021; <br>
        • Versão Desktop e Mobile.`,
            imgSrc: './assets/icons-habilidade/nodejs.png',
            videoSrc: '/assets/projects/fundo2.mp4',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 3,
            type: 2,
            title: 'Daily Weather',
            date: '28 de Outubro de 2021',
            languages: [],
            description: `Daily Weather é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto os dos próximos 7 dias, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. <br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        
        • HTML5; <br>
        • Vanilla JavaScript; <br>
        • Compilador SASS; <br>
        • Unsplash API; <br>
        • Open Weather API (One Call & Current Weather Data); <br>
        • LocalStorage API; <br>
        • Moment.js; <br>
        `,
            imgSrc: './assets/icons-habilidade/css.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'

        },
        {
            id: 4,
            type: 2,
            title: 'Calculadora do Windows 10',
            date: '14 de Outubro de 2021',
            languages: [],
            description: `Esse é um projeto que eu desenvolvi a interface há dois meses atrás, mas que só fui me sentir confiante pra dar continuidade recentemente depois de avançar em meus estudos, pois meu objetivo era de construir toda a lógica do zero, sem utilizar a função eval(). <br><br> Eu ainda não tinha feito uma calculadora, e creio que esse seja um dos principais exercícios pra praticar a lógica de programação, então além de aplicar as funcionalidades e a interface da calculadora do Windows 10, tentei simular uma espécie de ambiente desktop, onde é possível abrir, fechar ou minimizar a aplicação. <br><br>  Algumas features que valem destacar: <br><br>
        • É possível utilizar o teclado para realizar as operações matemáticas; <br>
        • Ao "fechar" a calculadora os dados do display são apagados; <br>
        • Só é possível adicionar um ponto decimal; <br>
        • O tamanho da fonte do display se adapta conforme os números são adicionados; <br>
        • Responsivo para Mobile;`,
            imgSrc: './assets/icons-habilidade/git.png',
            videoSrc: 'https://s',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 5,
            type: 1,
            title: 'Death Cat Grocery Store',
            date: '28 de Setembro de 2021',
            languages: [],
            description: "Um E-Commerce utilizando apenas JavaScript (com localStorage) 🚀 <br><br> O objetivo desse segundo checkpoint era de desenvolver não só habilidades técnicas, mas também soft-skills como o trabalho em equipe e a organização. <br> Para essa entrega, nossa equipe (composta por Marcelo Garofalo, Filipe Farias e eu) decidiu transformar a entrega em uma loja virtual com JavaScript, alinhando o projeto com a nossa matéria de Programação Imperativa, ministrada pela instrutora Ana Cristina Teixeira. <br><br> Decidimos explorar as funcionalidades do localStorage para poder armazenar e recuperar as informações dos produtos adicionados ao carrinho, permitindo ao usuário alterar a quantidade de itens ou removê-los completamente. <br><br> Como demonstra o vídeo abaixo, mesmo após fecharmos o nosso navegador, os itens persistem em nosso carrinho de compras devido ao uso do localStorage, que armazena essas informações em nosso browser e possibilita a recuperação destes dados quando a página é aberta novamente.",
            imgSrc: './assets/icons-habilidade/angular.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 6,
            type: 1,
            title: 'Youtube Clone',
            date: '23 de Setembro de 2021',
            languages: [],
            description: "Essa foi a minha tentativa de clonar a interface do YouTube utilizando HTML5, CSS3 e JavaScript. Com o conceito Don't Repeat Yourself na mente, fiz com que todo o projeto rodasse em uma única página manipulada pelo JavaScript, que fica responsável por atualizar o source e a descrição dos vídeos dependendo de qual vídeo o usuário seleciona, além de ocultar/exibir o sidebar e a main para dar destaque ao vídeo. Estou há aproximadamente um mês e meio estudando JavaScript e estou bem satisfeito por já estar conseguindo utilizá-lo para facilitar o desenvolvimento dos meus projetos, isso é extremamente motivador. Voltarei nesse projeto em breve para aprimorá-lo cada vez mais.",
            imgSrc: './assets/icons-habilidade/bootstrap.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 7,
            type: 1,
            title: 'Barber House',
            date: '30 de Julho de 2021',
            languages: [''],
            description: "A Barber House é uma landing page mobile-first que reúne os conceitos fundamentais de HTML5, CSS3 e JavaScript. Ela possui animações para fazer surgir gradualmente cada section no decorrer do scroll. Além de ser totalmente responsiva para diferentes tamanhos de tela, é uma página facilmente customizável, pois todas as cores utilizadas estão armazenadas em variáveis dentro do CSS.",
            imgSrc: './assets/icons-habilidade/html.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: 'https://'
        },
        {
            id: 8,
            type: 1,
            title: 'Rocket.Q',
            date: '07 de Julho de 2021',
            languages: [],
            description: "Minha primeira participação da Next Leve Week da Rocketseat. <br><br> Desenvolvemos do zero uma aplicação de gerenciamento de perguntas anônimas, esse foi meu primeiro contato com o Node.js, que apesar de não ser o meu foco, foi extremamente interessante conhecer.",
            imgSrc: './assets/icons-habilidade/react.png',
            videoSrc: 'https://',
            linkedin: 'https://',
            repository: 'https://',
            site: ''
        },


    ];

    return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
    container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
        return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="dowhile 2021">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img style='width: 40px'src="./assets/icons-habilidade/${language}.png" alt="${language}">`)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
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
            src: 'Git'
        },
        {
            name: 'GitHub',
            src: 'Github'
        },
        {
            name: 'React.js',
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
        {
            name: 'Angular',
            src: 'angular'
        },

    ]

    cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img style='width: 100px'src="./assets/icons-habilidade/${src}.png" alt="html">
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
    iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=1')

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