document.addEventListener('DOMContentLoaded', () => {

    function getBeyondCodePages() {
        if (!portfolioData || !portfolioData.beyondCode || !Array.isArray(portfolioData.beyondCode.pages)) {
            return [];
        }
        return portfolioData.beyondCode.pages;
    }

    function hasPageContent(page) {
        return Array.isArray(page.items) && page.items.length > 0;
    }

    function escapeHtml(value) {
        return String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }

    // ── Render Experience ──────────────────────────────────────────
    function renderExperience() {
        const data = portfolioData.experience;
        const tagsEl  = document.querySelector('.exp-tags');
        const cardsEl = document.querySelector('.exp-cards');
        if (!tagsEl || !cardsEl) return;

        tagsEl.innerHTML  = data.map((item, i) => `
            <span class="exp-tag ${i === 0 ? 'active' : ''}" data-target="${item.id}">
                ${item.icon} ${item.company}
            </span>`).join('');

        cardsEl.innerHTML = data.map((item, i) => `
            <div class="exp-card ${i !== 0 ? 'hidden' : ''}" id="${item.id}">
                <div class="exp-card-inner">
                    <h3>${item.role}</h3>
                    <span class="exp-badge">${item.badge}</span>
                    <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
            </div>`).join('');

        tagsEl.addEventListener('click', e => {
            const tag = e.target.closest('.exp-tag');
            if (!tag) return;
            tagsEl.querySelectorAll('.exp-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            cardsEl.querySelectorAll('.exp-card').forEach(card => {
                card.classList.toggle('hidden', card.id !== tag.dataset.target);
            });
        });
    }

    // ── Render Education ───────────────────────────────────────────
    function renderEducation() {
        const data = portfolioData.education;
        const tagsEl  = document.querySelector('.edu-tags');
        const cardsEl = document.querySelector('.edu-cards');
        if (!tagsEl || !cardsEl) return;

        tagsEl.innerHTML  = data.map((item, i) => `
            <span class="edu-tag ${i === 0 ? 'active' : ''}" data-edu-target="${item.id}">
                ${item.icon} ${item.institution}
            </span>`).join('');

        cardsEl.innerHTML = data.map((item, i) => `
            <div class="edu-card ${i !== 0 ? 'hidden' : ''}" id="${item.id}">
                <div class="edu-card-inner">
                    <h3>${item.degree}</h3>
                    <span class="edu-badge">${item.badge}</span>
                    <ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
                </div>
            </div>`).join('');

        tagsEl.addEventListener('click', e => {
            const tag = e.target.closest('.edu-tag');
            if (!tag) return;
            tagsEl.querySelectorAll('.edu-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            cardsEl.querySelectorAll('.edu-card').forEach(card => {
                card.classList.toggle('hidden', card.id !== tag.dataset.eduTarget);
            });
        });
    }

    // ── Render Projects ────────────────────────────────────────────
    // Each project has a `size` field: "xl" | "l" | "m" | "s" | "xs"
    // Grid layout: XL (2col×2row) | L (1col×2row) | M | S | XS (all 1×1)
    function renderProjects() {
        const data = portfolioData.projects;
        const gridEl = document.querySelector('.project-grid');
        if (!gridEl) return;

        if (!data.length) {
            gridEl.innerHTML = '<p class="projects-empty">No projects yet — check back soon.</p>';
            return;
        }

        function links(p, primaryLabel) {
            const parts = [];
            if (p.github) parts.push(`<a href="${p.github}" target="_blank" rel="noopener" class="project-link project-link-primary">${primaryLabel || 'GitHub →'}</a>`);
            if (p.live)   parts.push(`<a href="${p.live}"   target="_blank" rel="noopener" class="project-link">Live →</a>`);
            return parts.length ? `<div class="project-links">${parts.join('')}</div>` : '';
        }

        function tags(p) {
            if (!p.tags || !p.tags.length) return '';
            return `<div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>`;
        }

        const templates = {
            xl: p => `
                <div class="project-card project-card-xl">
                    <h3 class="project-title">${p.title}</h3>
                    <div class="project-xl-body">
                        <p class="project-desc">${p.description}</p>
                        <div class="project-xl-image">
                            ${p.image ? `<img src="${p.image}" alt="${p.title}">` : '<div class="project-xl-image-placeholder"></div>'}
                        </div>
                    </div>
                    ${tags(p)}
                    ${links(p, 'View Project →')}
                </div>`,

            l: p => `
                <div class="project-card project-card-l">
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.description}</p>
                    ${tags(p)}
                    ${links(p)}
                </div>`,

            m: p => `
                <div class="project-card project-card-m">
                    <h3 class="project-title">${p.title}</h3>
                    <p class="project-desc">${p.description}</p>
                    ${links(p)}
                </div>`,

            s: p => `
                <div class="project-card project-card-s">
                    <h3 class="project-title">${p.title}</h3>
                    ${tags(p)}
                    ${links(p)}
                </div>`,

            xs: p => `
                <div class="project-card project-card-xs">
                    ${p.projects.map(mini => `
                        <div class="project-xs-row">
                            <span class="project-xs-title">${mini.title}</span>
                            <div class="project-links">
                                ${mini.github ? `<a href="${mini.github}" target="_blank" rel="noopener" class="project-link">GitHub →</a>` : ''}
                                ${mini.live   ? `<a href="${mini.live}"   target="_blank" rel="noopener" class="project-link">Live →</a>`   : ''}
                            </div>
                        </div>`).join('')}
                </div>`,
        };

        gridEl.innerHTML = data.map(p => (templates[p.size] || templates.xs)(p)).join('');
    }

    // ── Render Skills Marquee ──────────────────────────────────────
    function buildTrack(skills) {
        // Duplicate for seamless loop
        return [...skills, ...skills].map(s => `
            <div class="marquee-item">
                <i class="${s.icon}"></i><span>${s.name}</span>
            </div>`).join('');
    }

    function renderSkills() {
        const { row1, row2, row3 } = portfolioData.skills;
        const wrappers = document.querySelectorAll('.marquee-wrapper');
        if (wrappers.length < 3) return;

        wrappers[0].querySelector('.marquee-track').innerHTML = buildTrack(row1);
        wrappers[1].querySelector('.marquee-track').innerHTML = buildTrack(row2);
        wrappers[2].querySelector('.marquee-track').innerHTML = buildTrack(row3);
    }

    // ── Render Beyond Code cards on home page ────────────────────
    function renderBeyondCodeCards() {
        const gridEl = document.querySelector('.beyondcode-grid');
        if (!gridEl) return;

        const pages = getBeyondCodePages();
        if (!pages.length) {
            gridEl.innerHTML = '<p class="subpage-empty">Beyond Code pages are coming soon.</p>';
            return;
        }

        gridEl.innerHTML = pages.map(page => {
            const available = hasPageContent(page);
            const classes = `beyondcode-card ${available ? '' : 'is-under-construction'}`.trim();
            const href = available ? page.href : '#';
            const disabledAttrs = available ? '' : 'aria-disabled="true" tabindex="-1"';
            const statusTag = available ? '' : '<span class="construction-tag">Under construction</span>';
            const cta = available ? 'OPEN PAGE' : 'COMING SOON';

            return `
                <a href="${escapeHtml(href)}" class="${classes}" data-page-id="${escapeHtml(page.id)}" ${disabledAttrs}>
                    ${statusTag}
                    <span class="beyondcode-icon">${escapeHtml(page.icon || '•')}</span>
                    <h3 class="beyondcode-card-title">${escapeHtml(page.title || 'Untitled')}</h3>
                    <p class="beyondcode-card-desc">${escapeHtml(page.description || '')}</p>
                    <span class="beyondcode-card-link">${cta}</span>
                </a>`;
        }).join('');
    }

    // ── Render dynamic content on subpages ───────────────────────
    function renderSubpageFromData() {
        if (!document.body.classList.contains('subpage')) return;

        const pages = getBeyondCodePages();
        const fileName = window.location.pathname.split('/').pop().replace('.html', '');
        const page = pages.find(p => p.id === fileName);
        if (!page) return;

        const iconEl = document.querySelector('.subpage-icon');
        const titleEl = document.querySelector('.subpage-hero h1');
        const descEl = document.querySelector('.subpage-description');
        const locationEl = document.querySelector('.photo-location');
        const heroImageEl = document.querySelector('.photo-hero-img');
        const contentEl = document.querySelector('.subpage-dynamic-content');

        if (iconEl) iconEl.textContent = page.icon || '•';
        if (titleEl) titleEl.textContent = page.title || 'Coming Soon';
        if (descEl) descEl.textContent = page.description || 'Content coming soon.';
        if (document.title) document.title = `${page.title || 'Page'} | Kapish Patel`;

        if (heroImageEl && page.heroImage) {
            heroImageEl.src = page.heroImage;
            heroImageEl.alt = `${page.title || 'Page'} hero image`;
            heroImageEl.hidden = false;
        }

        if (locationEl) {
            if (page.location) {
                locationEl.textContent = `📍 ${page.location}`;
                locationEl.hidden = false;
            } else {
                locationEl.hidden = true;
            }
        }

        if (!contentEl) return;

        if (!hasPageContent(page)) {
            contentEl.innerHTML = `
                <div class="subpage-under-construction">
                    <span class="construction-tag">Under construction</span>
                    <p class="subpage-empty">This page is under construction. Content coming soon.</p>
                </div>`;
            return;
        }

        if (page.type === 'posts') {
            contentEl.className = 'subpage-post-list subpage-dynamic-content';
            contentEl.innerHTML = page.items.map(item => `
                <a class="subpage-post" href="${escapeHtml(item.href || '#')}">
                    <span class="sp-date">${escapeHtml(item.date || '')}</span>
                    <span class="sp-title">${escapeHtml(item.title || '')}</span>
                    <span class="sp-tag">${escapeHtml(item.tag || '')}</span>
                </a>`).join('');
            return;
        }

        if (page.type === 'gallery') {
            contentEl.className = 'subpage-gallery subpage-dynamic-content';
            contentEl.innerHTML = page.items.map(item => {
                if (item.image) {
                    return `<div class="sg-item"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt || page.title || 'Gallery image')}"></div>`;
                }
                return `<div class="sg-item">${escapeHtml(item.caption || 'photo')}</div>`;
            }).join('');
            return;
        }

        if (page.type === 'recipes') {
            contentEl.className = 'subpage-recipe-grid subpage-dynamic-content';
            contentEl.innerHTML = page.items.map(item => `
                <div class="sr-card">
                    <span class="sr-emoji">${escapeHtml(item.emoji || '🍽️')}</span>
                    <h3 class="sr-title">${escapeHtml(item.title || '')}</h3>
                    <p class="sr-meta">${escapeHtml(item.meta || '')}</p>
                </div>`).join('');
            return;
        }

        if (page.type === 'trails') {
            contentEl.className = 'subpage-trail-list subpage-dynamic-content';
            contentEl.innerHTML = page.items.map((item, index) => `
                <div class="st-item">
                    <span class="st-num">${String(index + 1).padStart(2, '0')}</span>
                    <div class="st-info">
                        <h3 class="st-name">${escapeHtml(item.name || '')}</h3>
                        <p class="st-meta">📍 ${escapeHtml(item.meta || '')}</p>
                    </div>
                </div>`).join('');
        }
    }

    // ── Smooth marquee speed on hover ─────────────────────────────
    function initMarquee() {
        const SPEED_NORMAL = 30000;
        const SPEED_SLOW   = 90000;
        const LERP_FACTOR  = 0.05;

        document.querySelectorAll('.marquee-wrapper').forEach(wrapper => {
            const track = wrapper.querySelector('.marquee-track');
            let currentDuration = SPEED_NORMAL;
            let targetDuration  = SPEED_NORMAL;
            let raf = null;

            function tick() {
                currentDuration += (targetDuration - currentDuration) * LERP_FACTOR;
                const rounded = Math.round(currentDuration);
                const anim = track.getAnimations()[0];
                if (anim) {
                    const prevDuration = anim.effect.getTiming().duration;
                    const progress = (anim.currentTime % prevDuration) / prevDuration;
                    anim.effect.updateTiming({ duration: rounded });
                    anim.currentTime = progress * rounded;
                }
                if (Math.abs(targetDuration - currentDuration) > 50) {
                    raf = requestAnimationFrame(tick);
                } else {
                    currentDuration = targetDuration;
                    raf = null;
                }
            }

            wrapper.addEventListener('mouseenter', () => {
                targetDuration = SPEED_SLOW;
                if (!raf) raf = requestAnimationFrame(tick);
            });
            wrapper.addEventListener('mouseleave', () => {
                targetDuration = SPEED_NORMAL;
                if (!raf) raf = requestAnimationFrame(tick);
            });
        });
    }

    // ── Init ───────────────────────────────────────────────────────
    renderExperience();
    renderEducation();
    renderProjects();
    renderSkills();
    renderBeyondCodeCards();
    renderSubpageFromData();
    initMarquee();
});

