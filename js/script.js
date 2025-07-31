const username = "JuanAramburo";
const reposContainer = document.getElementById("repos");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos
      .filter(repo => !repo.fork) // solo proyectos originales
      .forEach(repo => {
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded-xl shadow hover:shadow-lg transition";

        card.innerHTML = `
          <h3 class="text-xl font-bold mb-2">${repo.name}</h3>
          <p class="text-gray-600 mb-4">${repo.description || "Sin descripción"}</p>
          <a href="${repo.html_url}" target="_blank" class="text-blue-600 font-medium hover:underline">Ver en GitHub</a>
        `;

        reposContainer.appendChild(card);
      });
  })
  .catch(error => {
    reposContainer.innerHTML = `<p class="text-red-600">Error al cargar proyectos: ${error.message}</p>`;
  });
