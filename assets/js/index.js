// Header JS Start
document.addEventListener('DOMContentLoaded', () => {
  const searchExpandBtn = document.getElementById('searchExpandBtn');
  const searchCancelBtn = document.getElementById('searchCancelBtn');
  const searchBarContainer = document.getElementById('searchBarContainer');
  const searchInput = document.getElementById('searchInput');
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const mobileMainPanel = document.getElementById('mobileMainPanel');
  const subPanelTriggers = document.querySelectorAll('.dynamic-trigger');
  const subPanelBackButtons = document.querySelectorAll('.panel-back-btn');
  function openSearch() {
    searchBarContainer.classList.add('active');
    setTimeout(() => searchInput.focus(), 120);
    closeMobileMenu();
  }
  function closeSearch() {
    searchBarContainer.classList.remove('active');
    searchInput.value = '';
  }
  searchExpandBtn.addEventListener('click', openSearch);
  mobileSearchBtn.addEventListener('click', openSearch);
  searchCancelBtn.addEventListener('click', closeSearch);
  function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    mobileMainPanel.className = 'mobile-panel-view active';
    document.querySelectorAll('.mobile-panel-view:not(#mobileMainPanel)').forEach(panel => {
      panel.classList.remove('active');
    });
  }
  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    setTimeout(() => {
      mobileMainPanel.className = 'mobile-panel-view active';
    }, 300);
  }
  menuOpenBtn.addEventListener('click', openMobileMenu);
  menuCloseBtn.addEventListener('click', closeMobileMenu);
  subPanelTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);

      if (targetPanel) {
        mobileMainPanel.classList.remove('active');
        mobileMainPanel.classList.add('shifted-left');
        targetPanel.classList.add('active');
      }
    });
  });
  subPanelBackButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeSubPanel = btn.closest('.mobile-panel-view');
      if (activeSubPanel) {
        activeSubPanel.classList.remove('active');
        mobileMainPanel.classList.remove('shifted-left');
        mobileMainPanel.classList.add('active');
      }
    });
  });
});

// Header JS End

// Go To Top JS Start
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Go To Top JS End

// Tabs JS Start
const tabs = document.querySelectorAll(".tab");
const gameLists = document.querySelectorAll(".games-list");

document.querySelector('.games-list[data-category="popular"]').classList.add('active');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(item => item.classList.remove("active"));
        tab.classList.add("active");
        const filter = tab.dataset.filter;

        gameLists.forEach(list => {
            if (list.dataset.category === filter) {
                list.classList.add("active");
            } else {
                list.classList.remove("active");
            }
        });
    });
});
// Tabs JS End


// Home Videos JS  Start
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".video-trigger").forEach(el => {

    el.addEventListener("click", () => {

        const src = el.dataset.video;

        player.src = src;
        modal.classList.add("active");

        player.play();
    });

});

function closeModal() {
    player.pause();
    player.currentTime = 0;
    player.src = "";
    modal.classList.remove("active");
}

closeBtn.onclick = closeModal;

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Home Videos JS  End

// News Filter JS Start
// function filterCards(category, btn) {
//   document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
//   btn.classList.add('active');


//   const cards = document.querySelectorAll('.news_card');
  
//   cards.forEach(card => {
//       if (category === 'all' || card.classList.contains(category)) {
//           card.style.display = 'block';
//       } else {
//           card.style.display = 'none';
//       }
//   });
// }

// News Filter JS End



