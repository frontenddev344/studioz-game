document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const gameSlug = params.get('game');
    const articleSlug = params.get('article');
    const heroTitle = document.querySelector('.hero-title');
    // Selectors
    const metaContainer = document.getElementById('meta-container');
    const container = document.getElementById('details-container');
    const pageTitle = document.getElementById('page-main-title');
    const banner = document.querySelector('.hero-map-card');
    const bodyContainer = document.getElementById('article-body-container');
    const footerData = document.getElementById('data-footer-container');

    // --- 1. GAME LOGIC ---
    const game = (typeof games !== 'undefined') ? games.find(g =>
        g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gameSlug
    ) : null;

    if (game) {
        document.title = game.title;
        if (heroTitle) heroTitle.innerText = game.title;
        if (banner) {
            const bgSource = game.bannerImage || game.image;
            banner.style.backgroundImage = `url('${bgSource}')`;
            banner.style.backgroundSize = 'cover';
            banner.style.backgroundPosition = 'center';
        }

        if (pageTitle) pageTitle.innerText = game.title;

        const descriptionHTML = (game.description || "")
            .split('\n')
            .map(p => `<p class="mb-3">${p.trim()}</p>`)
            .join('');

        if (container) {
            container.innerHTML = `
                <div class="game-meta mb-4">
                    <p><strong class="text_theme">Release Year:</strong> ${game.year}</p>
                    <p><strong class="text_theme">Platforms:</strong> ${game.platform ? game.platform.join(', ') : 'N/A'}</p>
                    <p><strong class="text_theme">Genre:</strong> ${game.genre ? game.genre.join(', ') : 'N/A'}</p>
                </div>
                <div class="game-description mb-4">${descriptionHTML}</div>
                ${game.features ? `
                    <div class="key-features mb-4">
                        <h4 class="mb-3">Key Features</h4>
                        <ul class="list-unstyled">
                            ${game.features.map(f => `<li class="mb-2"> ${f}</li>`).join('')}
                        </ul>
                    </div>
                ` : ""}
                <p class="fst-italic">${game.closingNote || ""}</p>
            `;
        }
    }

    // --- 2. NEWS ARTICLE LOGIC ---
    else if (articleSlug && typeof news_articles !== 'undefined') {
        const article = news_articles.find(a => a.slug === articleSlug);

        if (article) {
            // A. Hide decorative elements
            document.querySelectorAll('.hide-on-details, .floating-hat-image, .hero-description')
                .forEach(el => el.style.display = 'none');

            // B. Banner
            if (banner) {
                banner.style.backgroundImage = `url('${article.image}')`;
                banner.style.backgroundSize = 'cover';
                banner.style.backgroundPosition = 'center';
                // banner.style.minHeight = '300px';
            }

            // C. Titles
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                heroTitle.style.display = 'block';
                heroTitle.innerText = article.title;
            }
            if (pageTitle) pageTitle.innerText = article.title;

            // D. Meta Container
            if (metaContainer) {
                metaContainer.innerHTML = `
                    <div class="meta-item"><span class="meta-label">Category</span><span class="meta-value">${article.categoryLabel}</span></div>
                    <div class="meta-divider"></div>
                    <div class="meta-item"><span class="meta-label">Read Time</span><span class="meta-value">${article.readTime}</span></div>
                    <div class="meta-divider"></div>
                    <div class="meta-item"><span class="meta-label">Platform</span><span class="meta-value">${article.platform}</span></div>
                `;
            }

            // E. Body Content
            if (bodyContainer) {
                bodyContainer.innerHTML = `
                    <div class="article-intro"><p>${article.intro}</p></div>
                    <div class="article-content">${article.content}</div>
                `;
            }

            // F. Footer Data (Dynamic Features, Tips, and Recovery)
            if (footerData) {
                let footerHtml = "";

                // Render Feature Grid if exists
                if (article.careerBenefits && article.onlineBenefits) {
                    footerHtml += `
                        <div class="feature-grid">
                            <div class="feature-card">
                                <h3>Career Benefits</h3>
                                <ul>${article.careerBenefits.map(item => `<li>${item}</li>`).join('')}</ul>
                            </div>
                            <div class="feature-card">
                                <h3>Online Benefits</h3>
                                <ul>${article.onlineBenefits.map(item => `<li>${item}</li>`).join('')}</ul>
                            </div>
                        </div>
                    `;
                }

                // Render Quick Tips
                if (article.quickTips) {
                    footerHtml += `
                        <h2>Quick Tips to Build Reputation Fast</h2>
                        <div class="tips-box">
                            <ul>${article.quickTips.map(tip => `<li>${tip}</li>`).join('')}</ul>
                        </div>
                    `;
                }

                // Render Recovery/Conclusion Section
                if (article.recoveryContent) {
                    footerHtml += article.recoveryContent;
                }

                footerData.innerHTML = footerHtml;
            }
        } else {
            if (pageTitle) pageTitle.innerText = "Article Not Found";
        }
    }
});