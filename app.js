(function () {
  "use strict";

  const EXPERTISE_DOMAINS = [
    {
      id: "travaux-publics",
      code: "01",
      title: "Travaux Publics",
      category: "genie-civil-mines",
      categoryLabel: "Génie Civil & Mines",
      cdcfSummary: "Voiries, réseaux divers (VRD), aménagement de pistes rurales et ouvrages d'art.",
      deliverables: [
        "Ouverture et reprofilage de pistes rurales",
        "Assainissement, dalots et ouvrages de franchissement",
        "Plateformes VRD et voiries communales"
      ],
      unitLabel: "Linéaire estimé (km)",
      unitSingular: "km",
      minQty: 1,
      maxQty: 50,
      defaultQty: 5,
      stepQty: 1,
      baseRateXof: 8500000,
      baseFixedXof: 4500000,
      baseWeeks: 6
    },
    {
      id: "batiments",
      code: "02",
      title: "Bâtiments",
      category: "genie-civil-mines",
      categoryLabel: "Génie Civil & Mines",
      cdcfSummary: "Construction, réhabilitation et travaux de finition pour bâtiments publics et privés.",
      deliverables: [
        "Gros œuvre, charpente et couverture technique",
        "Réhabilitation d’édifices publics et scolaires",
        "Second œuvre, revêtements et finitions"
      ],
      unitLabel: "Surface bâtie estimée (m²)",
      unitSingular: "m²",
      minQty: 50,
      maxQty: 2500,
      defaultQty: 250,
      stepQty: 50,
      baseRateXof: 185000,
      baseFixedXof: 3000000,
      baseWeeks: 8
    },
    {
      id: "forage-hydraulique",
      code: "03",
      title: "Forage & Hydraulique",
      category: "hydraulique-energie",
      categoryLabel: "Hydraulique & Énergie",
      cdcfSummary: "Installation d'équipements d'eau potable, pompes immergées et pompage solaire.",
      deliverables: [
        "Forages profonds et essais de pompage",
        "Fourniture et pose de pompes immergées solaires",
        "Châteaux d’eau et réseaux d’adduction villageoise"
      ],
      unitLabel: "Nombre de points / forages",
      unitSingular: "forage(s)",
      minQty: 1,
      maxQty: 20,
      defaultQty: 2,
      stepQty: 1,
      baseRateXof: 6800000,
      baseFixedXof: 2200000,
      baseWeeks: 4
    },
    {
      id: "exploitation-miniere",
      code: "04",
      title: "Exploitation Minière",
      category: "genie-civil-mines",
      categoryLabel: "Génie Civil & Mines",
      cdcfSummary: "Terrassement, préparation de sols et appui logistique aux opérations minières.",
      deliverables: [
        "Décapage, terrassement de masse et digues",
        "Aménagement de pistes de halage minier",
        "Appui logistique et mobilisation d’engins"
      ],
      unitLabel: "Superficie / emprise (hectares)",
      unitSingular: "ha",
      minQty: 1,
      maxQty: 40,
      defaultQty: 4,
      stepQty: 1,
      baseRateXof: 7200000,
      baseFixedXof: 5500000,
      baseWeeks: 6
    },
    {
      id: "electricite-industrielle",
      code: "05",
      title: "Électricité Industrielle",
      category: "hydraulique-energie",
      categoryLabel: "Hydraulique & Énergie",
      cdcfSummary: "Installations Haute/Basse Tension, postes de transformation et armoires électriques.",
      deliverables: [
        "Postes de transformation HTA / BT",
        "Conception et câblage d’armoires TGBT",
        "Réseaux de distribution et mise à la terre"
      ],
      unitLabel: "Puissance installée (kVA)",
      unitSingular: "kVA",
      minQty: 50,
      maxQty: 1000,
      defaultQty: 160,
      stepQty: 10,
      baseRateXof: 65000,
      baseFixedXof: 2800000,
      baseWeeks: 5
    },
    {
      id: "mecanique-industrielle",
      code: "06",
      title: "Mécanique Industrielle",
      category: "industrie-negoce",
      categoryLabel: "Industrie & Négoce",
      cdcfSummary: "Maintenance, réparation de motopompes, groupes électrogènes et engins de chantier.",
      deliverables: [
        "Révision de groupes électrogènes industriels",
        "Reconditionnement de motopompes et vérins",
        "Contrat de maintenance préventive de parc engins"
      ],
      unitLabel: "Nombre d'équipements / engins",
      unitSingular: "unité(s)",
      minQty: 1,
      maxQty: 25,
      defaultQty: 3,
      stepQty: 1,
      baseRateXof: 1450000,
      baseFixedXof: 950000,
      baseWeeks: 3
    },
    {
      id: "equipement-bureautique",
      code: "07",
      title: "Équipement Bureautique",
      category: "industrie-negoce",
      categoryLabel: "Industrie & Négoce",
      cdcfSummary: "Fourniture de matériel informatique, imagerie multifonction et mobilier de bureau.",
      deliverables: [
        "Postes informatiques professionnels et serveurs",
        "Copieurs multifonctions et consommables d’origine",
        "Aménagement de salles de réunion et mobilier"
      ],
      unitLabel: "Nombre de postes / lots bureau",
      unitSingular: "poste(s)",
      minQty: 5,
      maxQty: 150,
      defaultQty: 15,
      stepQty: 5,
      baseRateXof: 580000,
      baseFixedXof: 650000,
      baseWeeks: 2
    },
    {
      id: "commerce-import-export",
      code: "08",
      title: "Commerce Import-Export",
      category: "industrie-negoce",
      categoryLabel: "Industrie & Négoce",
      cdcfSummary: "Négoce général, approvisionnement de chantiers et fournitures industrielles diverses.",
      deliverables: [
        "Approvisionnement continu en matériaux et EPI",
        "Importation d’équipements techniques sur commande",
        "Logistique d’acheminement vers sites isolés"
      ],
      unitLabel: "Lots d'approvisionnement (tonnes / unités)",
      unitSingular: "lot(s)",
      minQty: 1,
      maxQty: 50,
      defaultQty: 5,
      stepQty: 1,
      baseRateXof: 1950000,
      baseFixedXof: 1200000,
      baseWeeks: 3
    }
  ];

  const SCALE_TIERS = [
    { id: "cible", label: "Intervention ciblée", description: "Opération ponctuelle ou lot technique unique", multiplier: 0.85, durationFactor: 0.8 },
    { id: "standard", label: "Chantier standard", description: "Déploiement complet conforme aux cahiers des charges courants", multiplier: 1.0, durationFactor: 1.0 },
    { id: "structurant", label: "Projet structurant", description: "Exécution multi-lots avec encadrement permanent sur site", multiplier: 1.32, durationFactor: 1.35 },
    { id: "lourd", label: "Infrastructure lourde", description: "Programme d’envergure régionale ou périmètre minier continu", multiplier: 1.75, durationFactor: 1.7 }
  ];

  const ZONES = [
    { id: "poro", label: "M'Bengué & Région du Poro (Korhogo)", mobilizationFactor: 1.0 },
    { id: "savanes", label: "District des Savanes (Bagoué, Tchologo)", mobilizationFactor: 1.08 },
    { id: "national", label: "Territoire National (Côte d'Ivoire)", mobilizationFactor: 1.18 }
  ];

  const state = {
    filter: "tous",
    domainId: EXPERTISE_DOMAINS[0].id,
    quantity: EXPERTISE_DOMAINS[0].defaultQty,
    scaleId: "standard",
    zoneId: "poro",
    priorityUrgent: false,
    hasSelectedDomain: false,
    attachedSimulation: null,
    submittedOnce: false,
    toastTimer: null
  };

  function formatXof(amount) {
    const rounded = Math.round(amount / 10000) * 10000;
    return new Intl.NumberFormat("fr-FR").format(rounded) + " F CFA";
  }

  function getDomain(id) {
    return EXPERTISE_DOMAINS.find((d) => d.id === id) || EXPERTISE_DOMAINS[0];
  }

  function computeSimulation() {
    const domain = getDomain(state.domainId);
    const scale = SCALE_TIERS.find((s) => s.id === state.scaleId) || SCALE_TIERS[1];
    const zone = ZONES.find((z) => z.id === state.zoneId) || ZONES[0];
    const urgencyMultiplier = state.priorityUrgent ? 1.15 : 1.0;

    const rawExecution =
      (domain.baseFixedXof + domain.baseRateXof * state.quantity) *
      scale.multiplier *
      urgencyMultiplier;

    const studiesCostXof = rawExecution * 0.12;
    const logisticsCostXof = rawExecution * (zone.mobilizationFactor - 0.92);
    const executionCostXof = rawExecution;
    const estimatedMedianXof = studiesCostXof + executionCostXof + logisticsCostXof;

    const qtyBonus = Math.floor(
      ((state.quantity - domain.minQty) / Math.max(1, domain.maxQty - domain.minQty)) * 6
    );
    const estimatedWeeks = Math.max(
      1,
      Math.round((domain.baseWeeks + qtyBonus) * scale.durationFactor * (state.priorityUrgent ? 0.78 : 1.0))
    );

    const hashNum =
      (Math.abs(
        domain.code.charCodeAt(1) * 31 +
        state.quantity * 17 +
        scale.id.length * 13 +
        zone.id.length * 7
      ) % 900) + 100;

    return {
      referenceId: `SIM-EKD-${domain.code}-${hashNum}`,
      domainId: domain.id,
      domainCode: domain.code,
      domainTitle: domain.title,
      scaleLabel: scale.label,
      zoneLabel: zone.label,
      quantity: state.quantity,
      unitLabel: domain.unitSingular,
      estimatedMinXof: estimatedMedianXof * 0.9,
      estimatedMaxXof: estimatedMedianXof * 1.12,
      estimatedMedianXof,
      studiesCostXof,
      executionCostXof,
      logisticsCostXof,
      estimatedWeeks
    };
  }

  function showToast(title, message) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-title").textContent = title;
    document.getElementById("toast-message").textContent = message;
    toast.hidden = false;

    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 6000);
  }

  function updateJourneyBar() {
    const stepsDone = {
      1: true,
      2: state.hasSelectedDomain || Boolean(state.attachedSimulation),
      3: Boolean(state.attachedSimulation) || state.submittedOnce,
      4: Boolean(state.attachedSimulation) || state.submittedOnce,
      5: state.submittedOnce,
      6: state.submittedOnce
    };
    document.querySelectorAll("#journey-bar .journey-step").forEach((el) => {
      const stepNum = Number(el.getAttribute("data-step"));
      const done = Boolean(stepsDone[stepNum]);
      el.classList.toggle("is-done", done);
      const badge = el.querySelector("span");
      if (badge) badge.textContent = done ? "✓" : `${stepNum}.`;
    });
  }

  function renderExpertiseCards() {
    const grid = document.getElementById("expertise-grid");
    const list =
      state.filter === "tous"
        ? EXPERTISE_DOMAINS
        : EXPERTISE_DOMAINS.filter((d) => d.category === state.filter);

    grid.innerHTML = "";
    list.forEach((domain) => {
      const card = document.createElement("article");
      card.className = "expertise-card" + (domain.id === state.domainId ? " is-selected" : "");

      const itemsHtml = domain.deliverables.map((item) => `<li>${item}</li>`).join("");
      card.innerHTML = `
        <div>
          <div class="expertise-meta">
            <span class="expertise-code mono">${domain.code}.</span>
            <span class="truncate">${domain.categoryLabel}</span>
          </div>
          <h3 class="expertise-title">${domain.title}</h3>
          <p class="expertise-summary">${domain.cdcfSummary}</p>
          <ul class="expertise-list">${itemsHtml}</ul>
        </div>
        <button type="button" class="expertise-btn" data-select-domain="${domain.id}">
          <span>Simuler ce domaine</span>
          <span aria-hidden="true">→</span>
        </button>
      `;
      grid.appendChild(card);
    });
  }

  function selectDomainAndScroll(domainId) {
    const domain = getDomain(domainId);
    state.domainId = domain.id;
    state.quantity = domain.defaultQty;
    state.hasSelectedDomain = true;
    renderExpertiseCards();
    syncSimulatorUI();
    updateJourneyBar();
    document.getElementById("simulateur").scrollIntoView({ behavior: "smooth" });
  }

  function syncSimulatorUI() {
    const domain = getDomain(state.domainId);
    document.getElementById("sim-domain").value = domain.id;
    document.getElementById("sim-domain-summary").textContent = domain.cdcfSummary;

    document.getElementById("sim-qty-label").textContent = `3. ${domain.unitLabel}`;
    const range = document.getElementById("sim-qty-range");
    range.min = domain.minQty;
    range.max = domain.maxQty;
    range.step = domain.stepQty;
    range.value = state.quantity;

    document.getElementById("sim-qty-display").textContent = `${state.quantity} ${domain.unitSingular}`;
    document.getElementById("sim-qty-min").textContent = `${domain.minQty} ${domain.unitSingular}`;
    document.getElementById("sim-qty-max").textContent = `${domain.maxQty} ${domain.unitSingular}`;

    document.querySelectorAll("#sim-scale-buttons .scale-btn").forEach((btn) => {
      const active = btn.getAttribute("data-scale") === state.scaleId;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.getElementById("sim-zone").value = state.zoneId;

    const btnStd = document.getElementById("cadence-standard");
    const btnUrg = document.getElementById("cadence-urgent");
    btnStd.classList.toggle("is-active", !state.priorityUrgent);
    btnStd.setAttribute("aria-pressed", String(!state.priorityUrgent));
    btnUrg.classList.toggle("is-active", state.priorityUrgent);
    btnUrg.setAttribute("aria-pressed", String(state.priorityUrgent));

    const sim = computeSimulation();
    document.getElementById("sim-ref-id").textContent = `Réf. ${sim.referenceId}`;
    document.getElementById("sim-median-xof").textContent = formatXof(sim.estimatedMedianXof);
    document.getElementById("sim-range-xof").textContent =
      `Fourchette : ${formatXof(sim.estimatedMinXof)} – ${formatXof(sim.estimatedMaxXof)}`;
    document.getElementById("sim-res-domain").textContent = `${sim.domainCode}. ${sim.domainTitle}`;
    document.getElementById("sim-res-studies").textContent = formatXof(sim.studiesCostXof);
    document.getElementById("sim-res-execution").textContent = formatXof(sim.executionCostXof);
    document.getElementById("sim-res-logistics").textContent = formatXof(sim.logisticsCostXof);
    document.getElementById("sim-res-weeks").textContent =
      `${sim.estimatedWeeks} semaine${sim.estimatedWeeks > 1 ? "s" : ""}`;
  }

  function initSelectsAndScale() {
    const simSelect = document.getElementById("sim-domain");
    const contactSelect = document.getElementById("contact-domain");
    EXPERTISE_DOMAINS.forEach((d) => {
      const opt1 = new Option(`${d.code}. ${d.title} — ${d.categoryLabel}`, d.id);
      const opt2 = new Option(`${d.code}. ${d.title}`, d.id);
      simSelect.add(opt1);
      contactSelect.add(opt2);
    });

    const scaleWrap = document.getElementById("sim-scale-buttons");
    SCALE_TIERS.forEach((tier) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "scale-btn" + (tier.id === state.scaleId ? " is-active" : "");
      btn.setAttribute("data-scale", tier.id);
      btn.setAttribute("aria-pressed", String(tier.id === state.scaleId));
      btn.innerHTML = `<span class="scale-btn-title">${tier.label}</span><span class="scale-btn-desc">${tier.description}</span>`;
      btn.addEventListener("click", () => {
        state.scaleId = tier.id;
        syncSimulatorUI();
      });
      scaleWrap.appendChild(btn);
    });

    const zoneSelect = document.getElementById("sim-zone");
    ZONES.forEach((z) => {
      zoneSelect.add(new Option(z.label, z.id));
    });
  }

  function bindEvents() {
    // Menu mobile
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.textContent = isOpen ? "☰" : "✕";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.hidden = true;
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    // Filtres expertises
    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.filter = tab.getAttribute("data-filter");
        document.querySelectorAll(".filter-tab").forEach((t) => {
          const active = t === tab;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", String(active));
        });
        renderExpertiseCards();
      });
    });

    // Clic sur cartes expertises et galerie
    document.getElementById("expertise-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-select-domain]");
      if (btn) selectDomainAndScroll(btn.getAttribute("data-select-domain"));
    });

    document.querySelectorAll("[data-jump-domain]").forEach((card) => {
      card.addEventListener("click", () => {
        selectDomainAndScroll(card.getAttribute("data-jump-domain"));
      });
    });

    // Fiche légale
    document.getElementById("copy-legal-btn").addEventListener("click", async () => {
      const text = [
        "Dénomination Sociale : ENTREPRISE KONE DAOUDA (EKD SARL)",
        "Gérant Statutaire : M. KONE Daouda",
        "Capital & Siège : 1.000.000 F CFA — M'Bengué (Korhogo, Côte d'Ivoire)",
        "Immatriculation : RCCM CI-KGO-2011-B-139 | Greffe TPI N° 036/11",
        "Fondation Notariée : Étude de Me SOUTH-DIOP Yvette, Notaire (11/10/2011)"
      ].join("\n");
      try {
        await navigator.clipboard.writeText(text);
        showToast("Références copiées", "Références légales et numéro RCCM copiés dans le presse-papiers.");
      } catch {
        showToast("Références légales", "RCCM CI-KGO-2011-B-139 — Greffe TPI N° 036/11.");
      }
    });

    document.getElementById("print-legal-btn").addEventListener("click", () => window.print());

    // Simulateur
    document.getElementById("sim-domain").addEventListener("change", (e) => {
      const domain = getDomain(e.target.value);
      state.domainId = domain.id;
      state.quantity = domain.defaultQty;
      state.hasSelectedDomain = true;
      renderExpertiseCards();
      syncSimulatorUI();
      updateJourneyBar();
    });

    document.getElementById("sim-qty-range").addEventListener("input", (e) => {
      state.quantity = Number(e.target.value);
      syncSimulatorUI();
    });

    document.getElementById("sim-qty-dec").addEventListener("click", () => {
      const d = getDomain(state.domainId);
      state.quantity = Math.max(d.minQty, state.quantity - d.stepQty);
      syncSimulatorUI();
    });

    document.getElementById("sim-qty-inc").addEventListener("click", () => {
      const d = getDomain(state.domainId);
      state.quantity = Math.min(d.maxQty, state.quantity + d.stepQty);
      syncSimulatorUI();
    });

    document.getElementById("sim-zone").addEventListener("change", (e) => {
      state.zoneId = e.target.value;
      syncSimulatorUI();
    });

    document.getElementById("cadence-standard").addEventListener("click", () => {
      state.priorityUrgent = false;
      syncSimulatorUI();
    });

    document.getElementById("cadence-urgent").addEventListener("click", () => {
      state.priorityUrgent = true;
      syncSimulatorUI();
    });

    document.getElementById("sim-reset-btn").addEventListener("click", () => {
      state.domainId = EXPERTISE_DOMAINS[0].id;
      state.quantity = EXPERTISE_DOMAINS[0].defaultQty;
      state.scaleId = "standard";
      state.zoneId = "poro";
      state.priorityUrgent = false;
      renderExpertiseCards();
      syncSimulatorUI();
    });

    // Transfert simulateur -> contact
    document.getElementById("sim-transfer-btn").addEventListener("click", () => {
      const sim = computeSimulation();
      state.attachedSimulation = sim;
      state.hasSelectedDomain = true;

      document.getElementById("contact-domain").value = sim.domainId;
      document.getElementById("contact-message").value =
        `Demande d'étude de devis rattachée à la simulation ${sim.referenceId}.\n` +
        `Domaine : ${sim.domainCode}. ${sim.domainTitle}\n` +
        `Ampleur : ${sim.scaleLabel} (${sim.quantity} ${sim.unitLabel})\n` +
        `Zone d'intervention : ${sim.zoneLabel}\n` +
        `Enveloppe indicative : ${formatXof(sim.estimatedMedianXof)} (Fourchette ${formatXof(sim.estimatedMinXof)} – ${formatXof(sim.estimatedMaxXof)}).`;

      document.getElementById("attached-quote-title").textContent =
        `Devis simulé associé — Réf. ${sim.referenceId}`;
      document.getElementById("attached-quote-meta").textContent =
        `${sim.domainCode}. ${sim.domainTitle} · ${sim.scaleLabel} · ${formatXof(sim.estimatedMedianXof)}`;
      document.getElementById("attached-quote-banner").hidden = false;

      updateJourneyBar();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      showToast("Estimation transférée", `Référence ${sim.referenceId} jointe au formulaire de contact.`);
    });

    document.getElementById("clear-attached-btn").addEventListener("click", () => {
      state.attachedSimulation = null;
      document.getElementById("attached-quote-banner").hidden = true;
      updateJourneyBar();
    });

    // Validation & envoi formulaire
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const org = document.getElementById("contact-org").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const phone = document.getElementById("contact-phone").value.trim();
      const domain = document.getElementById("contact-domain").value;
      const message = document.getElementById("contact-message").value.trim();

      const errors = {
        name: name.length < 2 ? "Veuillez saisir votre nom et prénom." : "",
        org: org.length < 2 ? "Veuillez indiquer votre organisme ou entreprise." : "",
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Adresse email professionnelle invalide." : "",
        phone: phone.replace(/\D/g, "").length < 8 ? "Numéro de téléphone invalide (min. 8 chiffres)." : "",
        domain: !domain ? "Veuillez sélectionner un domaine d'expertise." : "",
        message: message.length < 10 ? "Veuillez préciser votre besoin (10 caractères minimum)." : ""
      };

      document.getElementById("err-name").textContent = errors.name;
      document.getElementById("err-org").textContent = errors.org;
      document.getElementById("err-email").textContent = errors.email;
      document.getElementById("err-phone").textContent = errors.phone;
      document.getElementById("err-domain").textContent = errors.domain;
      document.getElementById("err-message").textContent = errors.message;

      if (Object.values(errors).some(Boolean)) return;

      const ref = state.attachedSimulation ? state.attachedSimulation.referenceId : null;
      state.submittedOnce = true;
      state.attachedSimulation = null;
      document.getElementById("attached-quote-banner").hidden = true;
      e.target.reset();
      updateJourneyBar();

      showToast(
        "Demande transmise avec succès",
        ref
          ? `Votre dossier (Réf. ${ref}) a été enregistré pour étude par la direction d'EKD SARL.`
          : "Votre demande a bien été transmise à l'équipe technique d'EKD SARL à M'Bengué."
      );
    });

    document.getElementById("toast-close").addEventListener("click", () => {
      document.getElementById("toast").hidden = true;
    });
  }

  initSelectsAndScale();
  renderExpertiseCards();
  syncSimulatorUI();
  updateJourneyBar();
  bindEvents();
})();