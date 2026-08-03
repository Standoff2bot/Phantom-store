(function () {
  "use strict";

  var grid = document.getElementById("product-grid");
  var emptyState = document.getElementById("empty-state");
  var searchInput = document.getElementById("search");
  var tabs = document.querySelectorAll(".tab");
  var manifestLine = document.getElementById("manifest-line");
  var wordmark = document.querySelector(".wordmark");
  var heroTitle = document.querySelector(".hero-title");
  var heroSub = document.querySelector(".hero-sub");
  var yearEl = document.getElementById("year");
  var contactLink = document.getElementById("contact-link");

  var activeFilter = "all";
  var query = "";

  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatPrice(product) {
    if (!product.price) return "Free";
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: product.currency || "USD",
        minimumFractionDigits: product.price % 1 === 0 ? 0 : 2
      }).format(product.price);
    } catch (e) {
      return product.currency + " " + product.price;
    }
  }

  function applySiteConfig() {
    if (!window.SITE_CONFIG) return;
    document.title = SITE_CONFIG.name + " — Software Catalog";
    if (wordmark) wordmark.innerHTML = escapeHTML(SITE_CONFIG.name) + '<span class="dot">.</span>';
    if (heroTitle && SITE_CONFIG.tagline) heroTitle.textContent = SITE_CONFIG.tagline;
    if (contactLink && SITE_CONFIG.contactEmail) {
      contactLink.href = "mailto:" + SITE_CONFIG.contactEmail;
      contactLink.textContent = SITE_CONFIG.contactEmail;
    }
  }

  function cardHTML(p, index) {
    var badgeClass = p.category === "original" ? "cat-original" : "cat-fork";
    var badgeLabel = p.category === "original" ? "Original" : "Free fork";
    var versionText = p.version ? " · v" + escapeHTML(p.version) : "";
    var buttonLabel = p.action === "download" ? "Get it free" : "Buy";
    var icon = p.icon || (p.name || "").slice(0, 2).toUpperCase();

    return (
      '<article class="card" style="--stagger:' + (index % 9) + '">' +
        '<div class="card-meta">' +
          '<span class="card-id">' + String(index + 1).padStart(2, "0") + "</span>" +
          '<span class="card-license">' + escapeHTML(p.license || "") + "</span>" +
        "</div>" +
        '<div class="card-icon" aria-hidden="true">' + escapeHTML(icon) + "</div>" +
        '<h3 class="card-title">' + escapeHTML(p.name) + "</h3>" +
        '<p class="card-badge ' + badgeClass + '">' + badgeLabel + versionText + "</p>" +
        '<p class="card-desc">' + escapeHTML(p.description || "") + "</p>" +
        '<div class="card-footer">' +
          '<span class="card-price">' + formatPrice(p) + "</span>" +
          '<a class="card-btn" href="' + escapeHTML(p.link || "#") + '" target="_blank" rel="noopener noreferrer">' + buttonLabel + "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function matchesQuery(p, q) {
    if (!q) return true;
    var haystack = (p.name + " " + p.description).toLowerCase();
    return haystack.indexOf(q) !== -1;
  }

  function render() {
    var products = window.PRODUCTS || [];
    var q = query.trim().toLowerCase();

    var filtered = products.filter(function (p) {
      var matchesFilter = activeFilter === "all" || p.category === activeFilter;
      return matchesFilter && matchesQuery(p, q);
    });

    grid.innerHTML = filtered.map(cardHTML).join("");
    emptyState.hidden = filtered.length !== 0;
  }

  function setFilter(filter) {
    activeFilter = filter;
    tabs.forEach(function (tab) {
      var isActive = tab.dataset.filter === filter;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
    render();
  }

  function updateManifestLine() {
    var count = (window.PRODUCTS || []).length;
    manifestLine.textContent = "catalog v1.0 — " + count + (count === 1 ? " package listed" : " packages listed");
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setFilter(tab.dataset.filter);
    });
  });

  searchInput.addEventListener("input", function (e) {
    query = e.target.value;
    render();
  });

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applySiteConfig();
  updateManifestLine();
  render();
})();
