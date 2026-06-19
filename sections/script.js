 // ---------- BASE DE DATOS DE RECURSOS (Geociencias / Petróleo y gas) ----------
    const resources = [
      { id: 1, title: "Fundamentos de Estratigrafía de Secuencias", category: "geologia", description: "Análisis de cuencas sedimentarias aplicadas a yacimientos petrolíferos.", author: "Dr. Manuel Rojas", year: "2023", icon: "fa-layer-group", badge: "Geología", colorBadge: "bg-emerald-100 text-emerald-800" },
      { id: 2, title: "Interpretación Sísmica 3D para Hidrocarburos", category: "sismica", description: "Métodos avanzados de procesamiento sísmico y atributos.", author: "Ing. Laura Méndez", year: "2024", icon: "fa-chart-line", badge: "Geofísica", colorBadge: "bg-indigo-100 text-indigo-800" },
      { id: 3, title: "Petrofísica de Arenas y Carbonatos", category: "petrofisica", description: "Porosidad, permeabilidad, saturación y modelos petrofísicos.", author: "Dr. Carlos Sánchez", year: "2022", icon: "fa-cubes", badge: "Petrofísica", colorBadge: "bg-amber-100 text-amber-800" },
      { id: 4, title: "Geoquímica de la Materia Orgánica", category: "geoquimica", description: "Madurez térmica, kerógeno y potencial de generación.", author: "Dra. Adriana Ponce", year: "2023", icon: "fa-flask", badge: "Geoquímica", colorBadge: "bg-purple-100 text-purple-800" },
      { id: 5, title: "Modelado de Reservorios Fracturados", category: "petrofisica", description: "Simulación numérica de fallas y fracturas naturales.", author: "Dr. Jorge Figueroa", year: "2024", icon: "fa-chart-simple", badge: "Reservorios", colorBadge: "bg-orange-100 text-orange-800" },
      { id: 6, title: "Sísmica de Reflexión Aplicada", category: "sismica", description: "Fundamentos y estudios de caso en cuencas venezolanas.", author: "Prof. Elena Suárez", year: "2021", icon: "fa-waveform", badge: "Sísmica", colorBadge: "bg-sky-100 text-sky-800" },
      { id: 7, title: "Geología Estructural en Campos Petroleros", category: "geologia", description: "Fallamiento, pliegues y trampas estructurales.", author: "MSc. Ricardo Linares", year: "2022", icon: "fa-draw-polygon", badge: "Estructural", colorBadge: "bg-emerald-100 text-emerald-800" },
      { id: 8, title: "Evaluación de Formaciones: Well Logging", category: "petrofisica", description: "Registros eléctricos, sónicos y nuclear-magnéticos.", author: "Ing. Sofía Herrera", year: "2023", icon: "fa-table-cells-large", badge: "Registros", colorBadge: "bg-amber-100 text-amber-800" },
      { id: 9, title: "Geoquímica de Fluidos y Crudos", category: "geoquimica", description: "Cromatografía, biomarcadores y correlación petróleo-petróleo.", author: "Dr. Alberto Ferrer", year: "2024", icon: "fa-droplet", badge: "Geoquímica", colorBadge: "bg-purple-100 text-purple-800" },
      { id: 10, title: "Sísmica de Alta Resolución", category: "sismica", description: "Exploración somera y estudios ambientales.", author: "Geof. Cristina Padrón", year: "2023", icon: "fa-microphone-lines", badge: "Geofísica", colorBadge: "bg-indigo-100 text-indigo-800" },
      { id: 11, title: "Sedimentología de Ambientes Deltaicos", category: "geologia", description: "Facies y arquitectura de reservorios clásticos.", author: "Dra. Mariana Gómez", year: "2022", icon: "fa-water", badge: "Sedimentología", colorBadge: "bg-teal-100 text-teal-800" },
      { id: 12, title: "Termocronología en Cuencas Petroleras", category: "geoquimica", description: "Huellas de fisión y (U-Th)/He aplicado a exploración.", author: "Dr. Leonardo Paz", year: "2023", icon: "fa-temperature-high", badge: "Geocronología", colorBadge: "bg-fuchsia-100 text-fuchsia-800" },
      { id: 13, title: "Introducción a la Inversión Sísmica", category: "sismica", description: "Impedancia acústica y elasticidad.", author: "MSc. Tomás Rincón", year: "2024", icon: "fa-chart-scatter", badge: "Procesamiento", colorBadge: "bg-slate-200 text-slate-700" },
      { id: 14, title: "Análisis de Testigos Corona", category: "petrofisica", description: "Extracción y caracterización de núcleos.", author: "Ing. Natalia Urdaneta", year: "2021", icon: "fa-hard-drive", badge: "Núcleos", colorBadge: "bg-yellow-100 text-yellow-800" },
      { id: 15, title: "Geología del Petróleo: Sistemas Petroleros", category: "geologia", description: "Roca madre, migración, sello y trampa.", author: "Dr. Héctor Briceño", year: "2023", icon: "fa-oil-can", badge: "Sistemas Petroleros", colorBadge: "bg-emerald-100 text-emerald-800" },
      { id: 16, title: "Geoquímica Isotópica Aplicada", category: "geoquimica", description: "Isótopos estables en correlación de crudos.", author: "Dra. Verónica Castillo", year: "2024", icon: "fa-atom", badge: "Isótopos", colorBadge: "bg-purple-100 text-purple-800" },
      { id: 17, title: "Atributos Sísmicos y AVO", category: "sismica", description: "Anomalías de amplitud vs offset para detección de hidrocarburos.", author: "Geof. Luis Ávila", year: "2022", icon: "fa-chart-gantt", badge: "Interpretación", colorBadge: "bg-indigo-100 text-indigo-800" },
      { id: 18, title: "Reservorios No Convencionales", category: "petrofisica", description: "Shale gas, tight sands y CBM.", author: "MSc. Gabriela Rivas", year: "2023", icon: "fa-industry", badge: "No convencionales", colorBadge: "bg-amber-100 text-amber-800" },
      { id: 19, title: "Cartografía Geológica Digital", category: "geologia", description: "Herramientas GIS y mapeo de estructuras.", author: "Prof. Andrés Barrios", year: "2024", icon: "fa-map", badge: "Mapeo", colorBadge: "bg-emerald-100 text-emerald-800" },
      { id: 20, title: "Mecánica de Rocas y Geomecánica", category: "petrofisica", description: "Esfuerzos, estabilidad y fracturamiento hidráulico.", author: "Dr. Raúl Montilla", year: "2022", icon: "fa-ruler-combined", badge: "Geomecánica", colorBadge: "bg-amber-100 text-amber-800" },
      { id: 21, title: "Geoquímica de Superficie", category: "geoquimica", description: "Prospección geoquímica de hidrocarburos.", author: "Dra. Marisol Duarte", year: "2021", icon: "fa-globe", badge: "Exploración", colorBadge: "bg-purple-100 text-purple-800" },
      { id: 22, title: "Interpretación Estructural 2D/3D", category: "sismica", description: "Volúmenes sísmicos y mapeo de fallas.", author: "Geof. Xavier Mora", year: "2023", icon: "fa-cube", badge: "Estructural", colorBadge: "bg-indigo-100 text-indigo-800" },
      { id: 23, title: "Petrofísica No Convencional: Lutitas", category: "petrofisica", description: "Propiedades de formaciones arcillosas.", author: "MSc. Carolina Tovar", year: "2024", icon: "fa-charging-station", badge: "Shale", colorBadge: "bg-amber-100 text-amber-800" },
      { id: 24, title: "Estratigrafía de Cuencas Venezolanas", category: "geologia", description: "Cuenca de Maracaibo, Barinas y Apure.", author: "Dr. Gregorio Silva", year: "2023", icon: "fa-mountain-city", badge: "Regional", colorBadge: "bg-emerald-100 text-emerald-800" }
    ];

    // variables globales
    let currentCategory = "todos";
    let currentSearch = "";
    let groupedFilesByCategory = {};
    let selectedLetter = null;
    const categoryJsonMap = {
      "unidades-estratigraficas": "assets/1-UNIDADES ESTRATIGRAFICAS/index.json",
      "afiches-posters": "assets/2-AFICHES, POSTERS/index.json",
      "glosario-estructuras": "assets/3-GLOSARIO DE ESTRUCTURAS/index.json",
      "mapas-clasicos": "assets/4-MAPAS CLASICOS/index.json",
      "menes-aguas-termales-impregnaciones": "assets/5-MENES, AGUAS TERMALES E IMPREGNACIONES/index.json",
      "excursiones": "assets/6-EXCURSIONES/index.json",
      "campos-petroliferos": "assets/7-CAMPOS PETROLIFEROS/index.json",
      "glosario-terminos-estratigraficos": "assets/8-GLOSARIO Y TERMINOS ESTRATIGRAFICOS/index.json",
      "simbolos-itologicos-y-de-pozos": "assets/9-SIMBOLOS ITOLOGICOS Y DE POZOS/index.json",
    };

    // referencias DOM
    const booksContainer = document.getElementById("booksContainer");
    const searchInput = document.getElementById("searchInput");
    const resultCountSpan = document.getElementById("resultCount");
    const resultCountWrapper = document.getElementById("resultCountWrapper");
    const searchBar = document.getElementById("searchBar");
    const unitGroupsSection = document.getElementById("unitGroupsSection");
    const letterButtonsContainer = document.getElementById("letterButtons");
    const letterFilesSection = document.getElementById("letterFilesSection");
    const letterFilesList = document.getElementById("letterFilesList");
    const selectedLetterTitle = document.getElementById("selectedLetterTitle");
    const selectedLetterCount = document.getElementById("selectedLetterCount");
    const unitGroupsTitle = document.getElementById("unitGroupsTitle");
    const unitGroupsSubtitle = document.getElementById("unitGroupsSubtitle");
    const clearUnitLetterBtn = document.getElementById("clearUnitLetterBtn");
    const noResultsMsg = document.getElementById("noResultsMsg");
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    const categoryButtons = document.querySelectorAll(".cat-filter");

    async function loadGroupedFiles() {
      const entries = Object.entries(categoryJsonMap);
      for (const [cat, url] of entries) {
        try {
          const res = await fetch(encodeURI(url));
          groupedFilesByCategory[cat] = res.ok ? await res.json() : {};
        } catch (e) {
          console.error(e);
          groupedFilesByCategory[cat] = {};
        }
      }
      renderBooks();
    }

    loadGroupedFiles();

    // Función para filtrar libros según categoría y búsqueda (título, autor, descripción)
    function filterResources() {
      let filtered = resources.filter(res => {
        // filtro por categoría
        if (currentCategory !== "todos" && res.category !== currentCategory) return false;
        // filtro búsqueda
        if (currentSearch.trim() !== "") {
          const searchTerm = currentSearch.toLowerCase();
          const inTitle = res.title.toLowerCase().includes(searchTerm);
          const inAuthor = res.author.toLowerCase().includes(searchTerm);
          const inDesc = res.description.toLowerCase().includes(searchTerm);
          const inBadge = res.badge.toLowerCase().includes(searchTerm);
          if (!(inTitle || inAuthor || inDesc || inBadge)) return false;
        }
        return true;
      });
      return filtered;
    }

    function isUnitCategory() {
      return currentCategory === "unidades-estratigraficas" || currentCategory === "afiches-posters" || currentCategory === "glosario-estructuras" || currentCategory === "mapas-clasicos" || currentCategory === "menes-aguas-termales-impregnaciones" || currentCategory === "excursiones" || currentCategory === "campos-petroliferos" || currentCategory === "glosario-terminos-estratigraficos" || currentCategory === "simbolos-itologicos-y-de-pozos";
    }

    function getActiveFilesByLetter() {
      return groupedFilesByCategory[currentCategory] || {};
    }

    const categoryDisplayMap = {
      "unidades-estratigraficas": "Unidades Estratigráficas",
      "afiches-posters": "Afiches / Posters",
      "glosario-estructuras": "Glosario de Estructuras",
      "mapas-clasicos": "Mapas Clásicos",
      "menes-aguas-termares-impregnaciones": "Menes, Aguas Termales e Impregnaciones",
      "menes-aguas-termales-impregnaciones": "Menes, Aguas Termales e Impregnaciones",
      "excursiones": "Excursiones",
      "campos-petroliferos": "Campos Petrolíferos",
      "glosario-terminos-estratigraficos": "Glosario y Términos Estratigráficos",
      "simbolos-itologicos-y-de-pozos": "Símbolos litológicos y de pozos",
    };

    function renderLetterButtons() {
      letterButtonsContainer.innerHTML = "";
      const filesByLetter = getActiveFilesByLetter();
      const letters = Object.keys(filesByLetter).sort();
      if (letters.length === 0) {
        letterButtonsContainer.innerHTML = '<p class="text-gray-500 col-span-full">Cargando lista...</p>';
        return;
      }

      letters.forEach(letter => {
        const count = filesByLetter[letter]?.length || 0;
        const button = document.createElement("button");
        button.type = "button";
        button.className = `text-sm rounded-2xl border px-3 py-2 font-medium transition ${selectedLetter === letter ? "bg-[#1e4a6b] text-white shadow-md" : "bg-white text-gray-700 border-gray-200 hover:bg-sky-50"}`;
        button.innerHTML = `${letter} <span class="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full">${count}</span>`;
        button.addEventListener("click", () => handleLetterClick(letter));
        letterButtonsContainer.appendChild(button);
      });
    }

    function parseLeadingNumber(path) {
      const name = path.split('/').pop();
      const m = name.match(/^\s*([0-9]+)[-_.]/);
      return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY;
    }

    function renderFilesList(files, titleText = 'Archivos disponibles', emptyMessage = 'No hay archivos para esta categoría.') {
      selectedLetterTitle.innerText = titleText;
      const sorted = files.slice().sort((a, b) => {
        const na = parseLeadingNumber(a);
        const nb = parseLeadingNumber(b);
        if (na !== nb) return na - nb;
        const naName = a.split('/').pop();
        const nbName = b.split('/').pop();
        return naName.localeCompare(nbName, undefined, { numeric: true, sensitivity: 'base' });
      });

      selectedLetterCount.innerText = `${sorted.length} archivo${sorted.length === 1 ? '' : 's'}`;
      if (sorted.length === 0) {
        letterFilesList.innerHTML = `<p class="text-gray-500">${emptyMessage}</p>`;
      } else {
        letterFilesList.innerHTML = "";
        sorted.forEach(path => {
          const name = path.split("/").pop();
          const displayName = name.replace(/^\s*[0-9]+[-_.\s]*/, '');
          const link = document.createElement("a");
          link.href = encodeURI(path);
          link.target = "_blank";
          link.rel = "noreferrer noopener";
          link.className = "block rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 hover:bg-sky-50 transition";
          link.textContent = displayName;
          letterFilesList.appendChild(link);
        });
      }
      letterFilesSection.classList.remove("hidden");
    }

    function renderLetterFiles(letter) {
      selectedLetterTitle.innerText = `Unidades con letra ${letter}`;
      const filesByLetter = getActiveFilesByLetter();
      const files = filesByLetter[letter] || [];
      renderFilesList(files, `Unidades con letra ${letter}`, 'No hay archivos para esta letra.');
    }

    function handleLetterClick(letter) {
      selectedLetter = letter;
      clearUnitLetterBtn.classList.remove("hidden");
      renderLetterButtons();
      renderLetterFiles(letter);
    }

    function clearUnitLetterSelection() {
      selectedLetter = null;
      clearUnitLetterBtn.classList.add("hidden");
      letterFilesSection.classList.add("hidden");
      selectedLetterTitle.innerText = "Archivos por letra";
      selectedLetterCount.innerText = "";
      renderLetterButtons();
    }

    // Renderizar las tarjetas con diseño moderno (Tailwind + Fontawesome)
    function renderBooks() {
      // Si estamos en la vista de unidades/áreas específicas, usar el render existente
      if (isUnitCategory()) {
        // actualizar título según categoría activa
        if (unitGroupsTitle) unitGroupsTitle.innerText = categoryDisplayMap[currentCategory] || 'Recursos';
        if (unitGroupsSubtitle) unitGroupsSubtitle.innerText = 'Selecciona una letra o grupo para ver los PDF disponibles.';
        searchBar.classList.add("hidden");
        resultCountWrapper.classList.add("hidden");
        booksContainer.classList.add("hidden");
        noResultsMsg.classList.add("hidden");
        unitGroupsSection.classList.remove("hidden");
        const filesByLetter = getActiveFilesByLetter();
        // caso especial: AFICHES, POSTERS, GLOSARIO DE ESTRUCTURAS, MAPAS CLASICOS, MENES, EXCURSIONES, CAMPOS PETROLIFEROS, GLOSARIO Y TERMINOS o SIMBOLOS ITOLOGICOS Y DE POZOS -> mostrar todos los archivos directamente
        if (currentCategory === 'afiches-posters' || currentCategory === 'glosario-estructuras' || currentCategory === 'mapas-clasicos' || currentCategory === 'menes-aguas-termales-impregnaciones' || currentCategory === 'excursiones' || currentCategory === 'campos-petroliferos' || currentCategory === 'glosario-terminos-estratigraficos' || currentCategory === 'simbolos-itologicos-y-de-pozos') {
          letterButtonsContainer.classList.add('hidden');
          clearUnitLetterBtn.classList.add('hidden');
          const files = filesByLetter['Todos'] ? filesByLetter['Todos'] : Object.values(filesByLetter).flat();
          if (files.length > 0) {
            renderFilesList(files, categoryDisplayMap[currentCategory] || 'Archivos disponibles');
          } else {
            letterFilesList.innerHTML = '<p class="text-gray-500">No hay archivos para esta categoría.</p>';
            letterFilesSection.classList.remove('hidden');
          }
        } else {
          letterButtonsContainer.classList.remove('hidden');
          renderLetterButtons();
          if (selectedLetter) {
            renderLetterFiles(selectedLetter);
          } else {
            clearUnitLetterBtn.classList.add("hidden");
            letterFilesSection.classList.add("hidden");
            selectedLetterTitle.innerText = "Archivos por letra";
            selectedLetterCount.innerText = "";
          }
        }
        return;
      }


      // Si la categoría activa es 'todos', mostrar las áreas con el mismo estilo de tarjetas
      if (currentCategory === 'todos') {
        searchBar.classList.add("hidden");
        resultCountWrapper.classList.add("hidden");
        unitGroupsSection.classList.add("hidden");
        noResultsMsg.classList.add("hidden");
        booksContainer.classList.remove("hidden");
        booksContainer.innerHTML = "";

        // mapa de iconos y colores por categoría para mejorar apariencia
        const areaIconMap = {
          'unidades-estratigraficas': 'fa-layer-group',
          'afiches-posters': 'fa-image',
          'glosario-estructuras': 'fa-book-open',
          'mapas-clasicos': 'fa-map',
          'menes-aguas-termales-impregnaciones': 'fa-water',
          'excursiones': 'fa-route',
          'campos-petroliferos': 'fa-oil-can',
          'glosario-terminos-estratigraficos': 'fa-file-contract',
          'simbolos-itologicos-y-de-pozos': 'fa-map-marker-alt'
        };
        const areaBadgeColor = 'bg-gray-100 text-gray-700';

        const catBtns = Array.from(document.querySelectorAll('.cat-filter')).filter(b => b.getAttribute('data-cat') !== 'todos');
        catBtns.forEach(b => {
          const cat = b.getAttribute('data-cat');
          const span = b.querySelector('span');
          const title = span && span.innerText ? span.innerText : (categoryDisplayMap[cat] || cat);
          // contador basado en groupedFilesByCategory cuando aplique
          let count = 0;
          if (groupedFilesByCategory[cat]) {
            const val = groupedFilesByCategory[cat];
            if (Array.isArray(val)) count = val.length;
            else if (typeof val === 'object') count = Object.values(val).flat().length;
          }

          const iconClass = areaIconMap[cat] || 'fa-layer-group';

          const card = document.createElement('div');
          card.className = "glass-card bg-white/80 backdrop-blur-sm p-5 flex flex-col hover-lift transition-all duration-300 border border-gray-100/70 rounded-2xl";
          card.innerHTML = `
            <div class="flex items-start justify-between">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9eef5] to-[#c2e0f0] flex items-center justify-center text-[#1f5e7e] shadow-inner">
                <i class="fas ${iconClass} text-xl"></i>
              </div>
              <span class="badge-geo ${areaBadgeColor} text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Área</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mt-4 line-clamp-2">${title}</h3>
            <p class="text-gray-500 text-sm mt-2 line-clamp-3 flex-grow">Abrir la sección de ${title} para ver los archivos y recursos disponibles.</p>
            <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
              <div class="flex items-center gap-1 text-xs text-gray-500">
                <i class="fas fa-folder-open"></i>
                <span>${count} archivo${count === 1 ? '' : 's'}</span>
              </div>
              <div class="flex items-center gap-1 text-xs text-gray-400">
                <i class="fas fa-arrow-right"></i>
              </div>
            </div>
            <div class="mt-3 flex gap-2">
              <button class="text-xs bg-slate-100 hover:bg-slate-200 transition rounded-full px-3 py-1 text-slate-700 flex items-center gap-1"><i class="fas fa-eye"></i> Ver</button>
              <button class="text-xs bg-[#eef2ff] hover:bg-[#e0e7ff] transition rounded-full px-3 py-1 text-[#2c7da0] flex items-center gap-1"><i class="fas fa-folder"></i> Abrir</button>
            </div>
          `;

          card.style.cursor = 'pointer';
          card.addEventListener('click', () => {
            handleCategoryClick(cat);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
          // evitar que los botones internos disparen la navegación general
          const innerButtons = card.querySelectorAll('button');
          innerButtons.forEach(btn => btn.addEventListener('click', ev => ev.stopPropagation()));

          booksContainer.appendChild(card);
        });

        return;
      }

      searchBar.classList.remove("hidden");
      resultCountWrapper.classList.remove("hidden");
      unitGroupsSection.classList.add("hidden");
      selectedLetter = null;
      letterFilesSection.classList.add("hidden");
      clearUnitLetterBtn.classList.add("hidden");

      const filtered = filterResources();
      resultCountSpan.innerText = filtered.length;
      
      if (filtered.length === 0) {
        booksContainer.classList.add("hidden");
        noResultsMsg.classList.remove("hidden");
        return;
      }
      
      booksContainer.classList.remove("hidden");
      noResultsMsg.classList.add("hidden");
      
      // limpiar contenedor
      booksContainer.innerHTML = "";
      
      filtered.forEach(book => {
        // asignar un ícono adicional por si acaso, pero usamos el de Fontawesome
        const iconClass = book.icon ? book.icon : "fa-book";
        // colores dinámicos para badge
        const badgeColor = book.colorBadge || "bg-gray-100 text-gray-700";
        
        const card = document.createElement("div");
        card.className = "glass-card bg-white/80 backdrop-blur-sm p-5 flex flex-col hover-lift transition-all duration-300 border border-gray-100/70 rounded-2xl";
        card.innerHTML = `
          <div class="flex items-start justify-between">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9eef5] to-[#c2e0f0] flex items-center justify-center text-[#1f5e7e] shadow-inner">
              <i class="fas ${iconClass} text-xl"></i>
            </div>
            <span class="badge-geo ${badgeColor} text-xs font-semibold px-3 py-1 rounded-full shadow-sm">${book.badge}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mt-4 line-clamp-2">${book.title}</h3>
          <p class="text-gray-500 text-sm mt-2 line-clamp-3 flex-grow">${book.description}</p>
          <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
            <div class="flex items-center gap-1 text-xs text-gray-500">
              <i class="fas fa-user-pen"></i>
              <span>${book.author}</span>
            </div>
            <div class="flex items-center gap-1 text-xs text-gray-400">
              <i class="far fa-calendar-alt"></i>
              <span>${book.year}</span>
            </div>
          </div>
          <div class="mt-3 flex gap-2">
            <button class="text-xs bg-slate-100 hover:bg-slate-200 transition rounded-full px-3 py-1 text-slate-700 flex items-center gap-1"><i class="fas fa-eye"></i> Vista previa</button>
            <button class="text-xs bg-[#eef2ff] hover:bg-[#e0e7ff] transition rounded-full px-3 py-1 text-[#2c7da0] flex items-center gap-1"><i class="fas fa-download"></i> recurso</button>
          </div>
        `;
        booksContainer.appendChild(card);
      });
    }
    
    // Actualizar UI del sidebar (estilo activo)
    function updateActiveCategoryButton() {
      categoryButtons.forEach(btn => {
        const btnCat = btn.getAttribute("data-cat");
        const iconSpan = btn.querySelector("i");
        if (btnCat === currentCategory) {
          btn.classList.add("active-category", "bg-[#1e4a6b]", "text-white", "shadow-md");
          btn.classList.remove("hover:bg-sky-50", "text-gray-700");
          if (iconSpan) iconSpan.classList.add("text-white");
        } else {
          btn.classList.remove("active-category", "bg-[#1e4a6b]", "text-white", "shadow-md");
          btn.classList.add("text-gray-700", "hover:bg-sky-50");
          if (iconSpan) iconSpan.classList.remove("text-white");
        }
      });
    }
    
    // Manejadores de eventos
    function handleCategoryClick(category) {
      currentCategory = category;
      updateActiveCategoryButton();
      renderBooks();
    }
    
    function handleSearchInput() {
      currentSearch = searchInput.value;
      renderBooks();
    }
    
    function resetFilters() {
      currentCategory = "todos";
      currentSearch = "";
      searchInput.value = "";
      updateActiveCategoryButton();
      renderBooks();
    }
    
    // Asignar eventos a cada botón de categoría
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const category = btn.getAttribute("data-cat");
        handleCategoryClick(category);
      });
    });
    
    searchInput.addEventListener("input", handleSearchInput);
    if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", resetFilters);
    if (clearUnitLetterBtn) clearUnitLetterBtn.addEventListener("click", clearUnitLetterSelection);
    
    // Inicializar vista
    function inicializarBiblioteca() {
        // Manejo de la pantalla de carga
        window.addEventListener('load', () => {
            const loader = document.getElementById('loading-screen');
            if (loader) {
                loader.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => loader.remove(), 500);
            }
        });

        // Verificar tanto localStorage como sessionStorage para el rol del usuario
        const role = localStorage.getItem('userRole') || sessionStorage.getItem('userRole');
        const userName = localStorage.getItem('userName') || sessionStorage.getItem('userName');

        const logoutBtn = document.getElementById('logoutBtn');

        if (role) {
            if (userName) {
                document.getElementById('welcomeUser').classList.remove('hidden');
                document.getElementById('welcomeUser').classList.add('flex');
                
                const firstName = userName.trim().split(' ')[0];
                document.getElementById('userName').innerHTML = `<span class="sm:hidden">${firstName}</span><span class="hidden sm:inline">${userName}</span>`;
            }
            logoutBtn.classList.remove('hidden');
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('userName');
                localStorage.removeItem('userRole');
                sessionStorage.removeItem('userRole');
                window.location.href = '../index.html';
            });
        } else {
            // Si no hay rol, el usuario no ha iniciado sesión. Redirigir a la página de login.
            alert('Por favor, inicia sesión para acceder a los recursos.');
            window.location.href = '../index.html';
            return; // Detener la ejecución para evitar renderizar la página
        }

        if (role === 'admin' || role === 'Administrador' || role === 'supervisor') {
            const adminBtn = document.getElementById('adminPanelBtn');
            if (adminBtn) adminBtn.classList.remove('hidden');
        }

        updateActiveCategoryButton();
        renderBooks();
    }
    
    inicializarBiblioteca();
