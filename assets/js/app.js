let state = {

    page: 1,
    perPage: 12,

    search: "",
    letter: "ALL",

    platform: [],
    genre: [],
    theme: [],
    perspective: [],
    gameplay: [],
    control: [],
    style: [],

    sort: "az"
};

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderAlphabet();

        initFilters();

        bindEvents();

        updateUI();
    }
);

function renderAlphabet() {

    const alphabetDiv =
        document.getElementById("alphabet");

    alphabetDiv.innerHTML = "";

    const letters = ["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    letters.forEach(letter => {

        const btn =
            document.createElement("button");

        btn.innerText = letter;

        // ACTIVE STATE
        if (state.letter === letter) {
            btn.classList.add("active");
        }

        btn.onclick = () => {

            state.letter = letter;
            state.page = 1;

            updateUI();
        };

        alphabetDiv.appendChild(btn);
    });
}

function initFilters() {

    const filters = [
        "genre",
        "theme",
        "perspective",
        "gameplay",
        "platform",
        "control",
        "style"
    ];

    filters.forEach(filter => {

        const select =
            document.getElementById(
                `${filter}-filter`
            );

        const values = FILTERS[filter];

        values.forEach(value => {

            const option =
                document.createElement("option");

            option.value = value;
            option.textContent = value;

            select.appendChild(option);
        });

        select.addEventListener("change", e => {

            state[filter] =
                e.target.value
                    ? [e.target.value]
                    : [];

            state.page = 1;

            updateUI();
        });
    });
}

function bindEvents() {
    const search = document.getElementById("search");
    const sort = document.getElementById("sort");
    const clear = document.getElementById("clear");

    if (search) {
        search.addEventListener("input", e => {
            state.search = e.target.value.toLowerCase();
            state.page = 1;
            updateUI();
        });
    }

    if (sort) {
        sort.addEventListener("change", e => {
            state.sort = e.target.value;
            state.page = 1;
            updateUI();
        });
    }

    if (clear) {
        clear.addEventListener("click", () => {
            // 1. Reset JavaScript global state object
            state.page = 1;
            state.search = "";
            state.letter = "ALL";
            state.sort = "az"; // Explicitly reset state sort back to default

            state.platform = [];
            state.genre = [];
            state.theme = [];
            state.perspective = [];
            state.gameplay = [];
            state.control = [];
            state.style = [];

            // 2. Reset category dropdown visuals Safely
            const filterDropdowns = document.querySelectorAll(".filters-grid select");
            filterDropdowns.forEach(s => s.value = "");

            // 3. Reset sort dropdown visual to default option match
            if (sort) {
                sort.value = "az";
            }

            // 4. Reset input checkboxes if you have any
            document.querySelectorAll("input[type='checkbox']")
                .forEach(c => c.checked = false);

            // 5. Update layout view completely
            updateUI();
        });
    }
}

function sortData(data) {

    if (state.sort === "az") {
        data.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );
    }

    if (state.sort === "za") {
        data.sort(
            (a, b) =>
                b.title.localeCompare(
                    a.title
                )
        );
    }

    if (state.sort === "new") {
        data.sort(
            (a, b) =>
                b.year - a.year
        );
    }

    if (state.sort === "old") {
        data.sort(
            (a, b) =>
                a.year - b.year
        );
    }

    return data;
}

function updateUI() {

    let data = applyFilters();

    data = sortData(data);
    renderAlphabet();
    console.log("Filtered Games:", data.length);

    renderCards(
        paginate(data)
    );

    renderPagination(
        data.length
    );

    document.getElementById("count").textContent =
        `${data.length} Games`;
}