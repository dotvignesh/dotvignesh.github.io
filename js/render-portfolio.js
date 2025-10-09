// Render Work Experiences
document.addEventListener("DOMContentLoaded", function () {
  // WORK EXPERIENCES
  const workContainer = document.getElementById("work-experiences-container");
  if (workContainer && typeof workExperiences !== "undefined") {
    workExperiences.forEach((exp) => {
      const row = document.createElement("div");
      row.className = "row space";

      // Logo
      const logoCol = document.createElement("div");
      logoCol.className = "col-4 my-auto";
      const logoImg = document.createElement("img");
      logoImg.className = "img-fluid";
      logoImg.src = exp.orgLogo;
      logoImg.alt = "";
      logoCol.appendChild(logoImg);

      // Details
      const detailsCol = document.createElement("div");
      detailsCol.className = "col-8 my-auto";
      const orgTitle = document.createElement("h3");
      orgTitle.className = "display-6";
      orgTitle.textContent = exp.orgName;
      const roleP = document.createElement("p");
      roleP.className = "fw-lighter";
      if (exp.role) {
        roleP.innerHTML = `${exp.role}<br>${exp.period}`;
      } else {
        roleP.innerHTML = `${exp.period}`;
      }
      const bulletsP = document.createElement("p");
      bulletsP.className = "lead";
      const ul = document.createElement("ul");
      exp.bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        ul.appendChild(li);
      });
      bulletsP.appendChild(ul);
      detailsCol.appendChild(orgTitle);
      detailsCol.appendChild(roleP);
      detailsCol.appendChild(bulletsP);

      row.appendChild(logoCol);
      row.appendChild(detailsCol);
      workContainer.appendChild(row);
    });
  }

  // PROJECTS
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer && typeof projects !== "undefined") {
    // Projects are grouped into rows of 2 (col-sm-6)
    for (let i = 0; i < projects.length; i += 2) {
      const row = document.createElement("div");
      row.className = "row space";

      for (let j = i; j < i + 2 && j < projects.length; j++) {
        const proj = projects[j];
        const col = document.createElement("div");
        col.className = "col-sm-6";

        const card = document.createElement("div");
        card.className = "card bg-dark";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = proj.img;
        img.alt = proj.alt;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = proj.title;

        const desc = document.createElement("p");
        desc.className = "card-text";
        desc.innerHTML = proj.desc;

        let btn;
        if (proj.disabled) {
          btn = document.createElement("a");
          btn.className = "btn disabled";
          btn.href = proj.link;
          btn.target = "_blank";
          btn.rel = "noopener noreferrer";
          btn.textContent = proj.linkText;
        } else {
          btn = document.createElement("a");
          btn.className = "btn btn-primary";
          btn.href = proj.link;
          btn.target = "_blank";
          btn.rel = "noopener noreferrer";
          btn.textContent = proj.linkText;
        }

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(btn);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      }
      projectsContainer.appendChild(row);
    }
  }
});
