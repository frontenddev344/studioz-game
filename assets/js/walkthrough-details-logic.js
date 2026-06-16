document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("walkthrough");

    if (!slug || typeof walkthroughs === "undefined") return;

    const guide = walkthroughs.find(w => w.slug === slug);
    if (!guide) {
        document.title = "Walkthrough Not Found";
        const title = document.querySelector(".hero-title");
        if (title) title.innerText = "Walkthrough Not Found";
        return;
    }

    document.title = guide.title;
    const heroTitle = document.querySelector(".hero-title");
    const banner = document.querySelector(".hero-map-card");
    const navList = document.getElementById("walkthrough-nav");
    const mainContent = document.getElementById("walkthrough-content");
    const metaLine = document.getElementById("walkthrough-meta");

    if (heroTitle) heroTitle.innerText = guide.title;

    if (banner) {
        const bg = guide.bannerImage || guide.image;
        banner.style.backgroundImage = `url('${bg}')`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";
    }

    if (metaLine) {
        metaLine.innerHTML = `
            <strong class="text_theme">Author:</strong> Gaming Content Team |
            <strong class="text_theme">System:</strong> ${guide.system || "PC"} |
            <strong class="text_theme">Updated:</strong> 2026 |
            <strong>Version:</strong> 1.0
        `;
    }

    if (navList) {
        navList.innerHTML = guide.sections.map(section => `
            <li class="walkthrough_details_nav_item">
                <a href="#${section.id}">${section.title}</a>
            </li>
        `).join("");
    }

    if (mainContent) {
        mainContent.innerHTML = guide.sections.map(section => `
            <section id="${section.id}" class="walkthrough_details_section">
                <h2>${section.title}</h2>
                <p class="walkthrough_details_content">${section.content}</p>
            </section>
        `).join("");
    }
});
