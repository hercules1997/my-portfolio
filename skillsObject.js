export const renderSkillsSection = () => {
    const cardsContainer = document.querySelector('.cards')

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
    {
        name: 'Docker',
        src: 'docker'
    },
    {
        name: 'Postgres',
        src: 'postgre'
    },
    {
        name: 'MongoDB',
        src: 'mongo'
    },
    {
        name: 'API',
        src: 'api'
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