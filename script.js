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
    gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
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
                                    class="btn btn-sm btn-outline-secondary"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >
                                    View
                                </button>
                                    <button 
                                    type="button" 
                                    class="btn btn-sm btn-outline-secondary"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    >Edit
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    });
}


// Appeler la fonction writeDom
writeDom();