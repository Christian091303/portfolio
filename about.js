function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
}

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    const lightbox = btn.closest(".lightbox");
    if (lightbox) {
      lightbox.style.display = "none";
    }
  });
});

document.getElementById("lightbox").addEventListener("click", e => {
  if (e.target.id === "lightbox") {
    e.currentTarget.style.display = "none";
  }
});

document.querySelectorAll(".about-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
  });
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal"); 
    if (modal) {
      modal.style.display = "none"; 
    }
  });
});

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentModal = btn.closest('.modal');
    const nextModalId = btn.getAttribute('data-next');
    const nextModal = document.getElementById(nextModalId);

    if (currentModal) currentModal.style.display = "none";
    if (nextModal) {
      nextModal.style.display = "flex";
      nextModal.querySelector('.modal-content').scrollTop = 0;
    }
  });
});

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const currentModal = btn.closest('.modal');
    const backModalId = btn.getAttribute('data-back');
    const backModal = document.getElementById(backModalId);

    if (currentModal) currentModal.style.display = "none";
    if (backModal) {
      backModal.style.display = "flex";
      backModal.querySelector('.modal-content').scrollTop = 0;
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".intro, .about-card").forEach(el => {
  observer.observe(el);
});

const futureGoalsCard = document.getElementById('futureGoalsCard'); 
const futureGoalsSection = document.getElementById('future-goals');

if (futureGoalsCard && futureGoalsSection) {
  futureGoalsCard.addEventListener('click', () => {
    futureGoalsSection.scrollIntoView({ behavior: 'smooth' });
  });
}
