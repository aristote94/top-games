const gamesList = [
    {
        title: "Game Title",
        year: 2022,
        imageUrl: "https://example.com/image.jpg",
        id: 1,
    },
    {
        title: "Street Fighter V",
        year: 2015,
        imageUrl: "https://gaming-cdn.com/images/products/671/orig/street-fighter-v-pc-jeu-steam-cover.jpg?v=1662539255",
        id: 4,
    },
    {
        title: "Half Life 2",
        year: 2004,
        imageUrl: "https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
        id: 5,
    },
    {
        title: "Skyrim",
        year: 2011,
        imageUrl: "https://gaming-cdn.com/images/products/146/orig/the-elder-scrolls-v-skyrim-pc-jeu-steam-europe-cover.jpg?v=1661270991",
        id: 6,
    },
];

function writeDom() {
    const articleContainer = document.querySelector(".row");
    gamesList.forEach((game) => {
        articleContainer.innerHTML += `
            <article class="col">
                <div class="card shadow-sm">
                    <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />
                    <div class="card-body">
                        <h3 class="card-title">${game.title}</h3>
                        <p class="card-text">Description du jeu.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button 
                                    type="button" 
                                    class="btn btn-sm btn-outline-secondary edit"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    data-edit-id="${game.id}">
                                    Edit
                                </button>
                                <button 
                                    type="button" 
                                    class="btn btn-sm btn-outline-secondary view"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    data-edit-id="${game.id}">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
}

// Appeler la fonction writeDom
writeDom();

// Sélectionner tous les boutons avec la classe .edit et ajouter un écouteur d'événements
const editButtons = document.querySelectorAll(".edit");
editButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        editModal(e.target.getAttribute("data-edit-id"));
    });
});

// Sélectionner tous les boutons avec la classe .view et ajouter un écouteur d'événements
const viewButtons = document.querySelectorAll(".view");
viewButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        viewModal(e.target.getAttribute("data-edit-id"));
    });
});

function editModal(gameId) {
    const resultIndex = gamesList.findIndex((game) => game.id === parseInt(gameId));
    if (resultIndex !== -1) {
        const result = gamesList[resultIndex];
        modifyModal("Mode Edition", result.title);
        document.querySelector(".modal-body").innerHTML = `
            <p>Titre: ${result.title}</p>
            <p>Année: ${result.year}</p>
            <img src="${result.imageUrl}" alt="${result.title}" class="img-fluid">
        `;
    }
}

function viewModal(gameId) {
    const resultIndex = gamesList.findIndex((game) => game.id === parseInt(gameId));
    if (resultIndex !== -1) {
        const result = gamesList[resultIndex];
        modifyModal(result.title, result.title);
        document.querySelector(".modal-body").innerHTML = `
            <p>Titre: ${result.title}</p>
            <p>Année: ${result.year}</p>
            <img src="${result.imageUrl}" alt="${result.title}" class="img-fluid">
        `;
    }
}

function modifyModal(modalTitle, gameTitle) {
    document.querySelector(".modal-title").textContent = modalTitle;
    document.querySelector(".modal-title").textContent = gameTitle;
}