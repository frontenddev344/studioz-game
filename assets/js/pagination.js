function paginate(data) {

    const start =
        (state.page - 1) * state.perPage;

    return data.slice(
        start,
        start + state.perPage
    );
}

function renderPagination(total) {

    const pages =
        Math.ceil(total / state.perPage);
    console.log("Total:", total);
    console.log("Per Page:", state.perPage);
    
    const el =
        document.getElementById("pagination");

    if (!el) return;

    el.innerHTML = "";

    if (pages < 2) {
        el.style.display = "none";
        return;
    }

    el.style.display = "flex";

    // Previous

    const prev =
        document.createElement("button");

    prev.innerHTML = "‹";

    prev.disabled =
        state.page === 1;

    prev.onclick = () => {

        state.page--;

        updateUI();
    };

    el.appendChild(prev);

    // Pages

    for (let i = 1; i <= pages; i++) {

        const btn =
            document.createElement("button");

        btn.textContent = i;

        if (i === state.page) {
            btn.classList.add("active");
        }

        btn.onclick = () => {

            state.page = i;

            updateUI();
        };

        el.appendChild(btn);
    }

    // Next

    const next =
        document.createElement("button");

    next.innerHTML = "›";

    next.disabled =
        state.page === pages;

    next.onclick = () => {

        state.page++;

        updateUI();
    };

    el.appendChild(next);
}