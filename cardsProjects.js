//? CARDS DOS PROJETOS */
export const renderProjects = (container, data) => {
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
