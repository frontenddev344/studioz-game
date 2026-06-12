function renderCards(data) {
    const grid = document.getElementById("grid");
    
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = "<p>No games found matching your criteria.</p>";
        return;
    }
    grid.innerHTML = data.map(game => {
        const slug = game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const platforms = game.platform.map(p => `<span class="pill">${p}</span>`).join("");
        const genres = game.genre.map(g => `<span class="tag">${g}</span>`).join("");

        return `
        <a href="details.html?game=${slug}" class="game-card" style="background-image:url('${game.image}')">
            <div class="card-overlay">
                <div class="card-title">${game.title}</div>
                <div class="card-year">${game.year}</div>
                <div class="card-tags">${genres}</div>
                <div class="card-platforms">${platforms}</div>
            </div>
        </a>`;
    }).join(""); 
}