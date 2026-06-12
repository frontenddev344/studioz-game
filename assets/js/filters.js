function applyFilters() {

    return games.filter(game => {

        if (
            state.search &&
            !game.title.toLowerCase().includes(state.search)
        ) {
            return false;
        }

        if (
            state.letter !== "ALL" &&
            game.title[0].toUpperCase() !== state.letter
        ) {
            return false;
        }

        const check = (key, selected) => {

            if (!selected.length) return true;

            return selected.some(val =>
                game[key].includes(val)
            );
        };

        if (!check("platform", state.platform)) return false;
        if (!check("genre", state.genre)) return false;
        if (!check("theme", state.theme)) return false;
        if (!check("perspective", state.perspective)) return false;
        if (!check("gameplay", state.gameplay)) return false;
        if (!check("control", state.control)) return false;
        if (!check("style", state.style)) return false;

        return true;
    });
}