/* ==========================================================================
   Worker TSA — Script partagé
   Chaque fonction vérifie la présence de ses éléments avant de s'exécuter,
   ce qui permet d'inclure ce même fichier sur toutes les pages sans erreur.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  initPasswordToggle();
  initLoginForm();
  initProfileSelection();
  initPhotoUploads();
  initCharCounters();
  initPrestataireForm();
});

/* ---------- Afficher / masquer le mot de passe ---------- */
function initPasswordToggle() {
  var toggle = document.getElementById("togglePassword");
  var input = document.getElementById("password");
  if (!toggle || !input) return;

  toggle.addEventListener("click", function () {
    var isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggle.textContent = isHidden ? "🙈" : "👁";
  });
}

/* ---------- Page 2 : Connexion ---------- */
function initLoginForm() {
  var form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // TODO : brancher sur Firebase Authentication (signInWithEmailAndPassword)
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Tentative de connexion :", email, password ? "••••••" : "");
    // window.location.href = "dashboard.html";
  });

  var otherEmailBtn = document.getElementById("otherEmailBtn");
  if (otherEmailBtn) {
    otherEmailBtn.addEventListener("click", function () {
      // TODO : brancher sur un autre fournisseur / compte
      console.log("Continuer avec un autre compte e-mail");
    });
  }
}

/* ---------- Page 3 : Choix du profil (Client / Prestataire) ---------- */
function initProfileSelection() {
  var cards = document.querySelectorAll(".profile-card");
  if (!cards.length) return;

  var continueBtn = document.getElementById("continueProfileBtn");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (c) { c.classList.remove("selected"); });
      card.classList.add("selected");
      var radio = card.querySelector("input[type=radio]");
      if (radio) radio.checked = true;
      if (continueBtn) continueBtn.disabled = false;
    });
  });

  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      var selected = document.querySelector(".profile-card.selected");
      if (!selected) return;
      var profil = selected.getAttribute("data-profile");
      // TODO : enregistrer le choix (Firestore) puis rediriger
      if (profil === "prestataire") {
        window.location.href = "page4-profil-prestataire.html";
      } else {
        // Redirection à définir vers le parcours client
        // window.location.href = "page-client-suivant.html";
        console.log("Profil sélectionné : client");
      }
    });
  }
}

/* ---------- Zones de téléversement de photos (aperçu local) ---------- */
function initPhotoUploads() {
  var slots = document.querySelectorAll("[data-upload]");
  if (!slots.length) return;

  slots.forEach(function (slot) {
    var input = slot.querySelector("input[type=file]");
    if (!input) return;

    slot.addEventListener("click", function (e) {
      if (e.target !== input) input.click();
    });

    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (evt) {
        var existingImg = slot.querySelector("img");
        if (!existingImg) {
          existingImg = document.createElement("img");
          slot.appendChild(existingImg);
        }
        existingImg.src = evt.target.result;
        slot.classList.add("has-image");
      };
      reader.readAsDataURL(file);
    });
  });
}

/* ---------- Compteurs de caractères pour les textarea ---------- */
function initCharCounters() {
  var textareas = document.querySelectorAll("textarea[maxlength]");
  if (!textareas.length) return;

  textareas.forEach(function (textarea) {
    var counter = document.querySelector('[data-count-for="' + textarea.id + '"]');
    if (!counter) return;

    var max = textarea.getAttribute("maxlength");
    var update = function () {
      counter.textContent = textarea.value.length + "/" + max;
    };
    textarea.addEventListener("input", update);
    update();
  });
}

/* ---------- Page 4 : Formulaire de profil prestataire ---------- */
function initPrestataireForm() {
  var form = document.getElementById("prestataireForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // TODO : envoyer les données vers Firestore + fichiers vers Cloud Storage
    console.log("Enregistrement du profil prestataire…");
    // window.location.href = "page-suivante-prestataire.html";
  });
}
