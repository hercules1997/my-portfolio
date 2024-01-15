
const modal = document.querySelector('.modal')
const projetsContainers = document.querySelector('.cards-projects')
const allProjectsContainer = document.querySelector('.allProjects')

import { getProjectAll } from "./projectObject"
import { renderSkillsSection } from "./skillsObject"
import { renderProjects } from "./cardsProjects" 


//?MOVIMENTA O SCROLLBAR */
const scrollDistance = 360
let moveProjects = document.getElementById("move")

document.getElementById("scroll-left").addEventListener("click", () => { moveProjects.scrollLeft -= scrollDistance })
document.getElementById("scroll-right").addEventListener("click", () => { moveProjects.scrollLeft += scrollDistance })
    
renderSkillsSection()
renderProjects(projetsContainers, getProjectAll())



