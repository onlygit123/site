const ranobeList = [
  {
    id: 1,
    title: "Власть книжного червя",
    english: "Ascendance of a Bookworm",
    kind: "Ранобэ",
    year: 2015,
    score: 8.86,
    popularity: 1,
    image:
      "https://avatars.mds.yandex.net/i?id=2bca539426f1db37733919a69ce18219063e4c46-12625448-images-thumbs&n=13",
    volumes: 33,
    status: "Онгоинг",
    author: "Мия Кадзуки",
    genres: "Исекай, Фэнтези, Драма",
    description:
      "Девушка, обожавшая книги, перерождается в мире, где книги доступны лишь знати, и решает создать их сама.",
  },
  {
    id: 2,
    title: "Класс превосходства",
    english: "Classroom of the Elite",
    kind: "Ранобэ",
    year: 2015,
    score: 8.77,
    popularity: 2,
    image: "https://i.ebayimg.com/images/g/vBsAAOSwrS9nalWu/s-l1600.jpg",
    volumes: 25,
    status: "Онгоинг",
    author: "Сёго Кинугаса",
    genres: "Психология, Школа, Драма",
    description:
      "Киётака Аянокодзи скрывает свои способности в элитной школе, где ученики соревнуются за превосходство.",
  },
  {
    id: 3,
    title: "Re:Zero. Жизнь с нуля в альтернативном мире",
    english: "Re:Zero - Starting Life in Another World",
    kind: "Ранобэ",
    year: 2012,
    score: 8.62,
    popularity: 3,
    image:
      "https://avatars.mds.yandex.net/get-mpic/12718223/2a0000019987e274de0d74dfd1f6922e7029/orig",
    volumes: 35,
    status: "Онгоинг",
    author: "Таппэй Нагацуки",
    genres: "Исекай, Драма, Триллер",
    description:
      "Субару переносится в другой мир и обнаруживает, что после смерти возвращается в прошлое, чтобы изменить судьбу.",
  },
  {
    id: 4,
    title: "Монолог фармацевта",
    english: "The Apothecary Diaries",
    kind: "Ранобэ",
    year: 2011,
    score: 8.81,
    popularity: 4,
    image:
      "https://avatars.mds.yandex.net/i?id=da190de6767bc7bdd6aaddfe97029aa66466bfa2-4351283-images-thumbs&n=13",
    volumes: 14,
    status: "Онгоинг",
    author: "Нацу Хюга",
    genres: "Исторический, Детектив, Драма",
    description:
      "Маомао использует свои знания в медицине, чтобы раскрывать тайны императорского дворца.",
  },
  {
    id: 5,
    title: "Сага о Винланде",
    english: "Vinland Saga",
    kind: "Ранобэ",
    year: 2005,
    score: 8.64,
    popularity: 5,
    image:
      "https://avatars.mds.yandex.net/i?id=0c4630278dc4443faee63eaf43178c7066a9193a-3237927-images-thumbs&n=13",
    volumes: 13,
    status: "Онгоинг",
    author: "Макото Юкимура",
    genres: "Исторический, Экшен, Драма",
    description:
      "Торфинн, сын убитого воина, ищет мести и позже стремится к мирной жизни в Винланде.",
  },
  {
    id: 6,
    title: "Повелитель",
    english: "Overlord",
    kind: "Ранобэ",
    year: 2010,
    score: 8.48,
    popularity: 6,
    image:
      "https://avatars.mds.yandex.net/i?id=cddc01020c7750784e55a0c89a4ffe168929eef9-4510207-images-thumbs&n=13",
    volumes: 16,
    status: "Онгоинг",
    author: "Куганэ Маруяма",
    genres: "Исекай, Фэнтези, Экшен",
    description:
      "Игрок в виртуальной реальности остаётся в игре после её закрытия и становится могущественным королём-нежитью.",
  },
  {
    id: 7,
    title: "Реинкарнация Безработного",
    english: "Mushoku Tensei: Jobless Reincarnation",
    kind: "Ранобэ",
    year: 2014,
    score: 8.68,
    popularity: 7,
    image:
      "https://i.pinimg.com/originals/6e/ca/9f/6eca9f10d4c9c116829a66971d6ea59e.jpg",
    volumes: 26,
    status: "Завершён",
    author: "Рифудзин на Магонотэ",
    genres: "Исекай, Фэнтези, Приключения",
    description:
      "34-летний неудачник перерождается в мире меча и магии, решив прожить новую жизнь как можно лучше.",
  },
  {
    id: 8,
    title: "Врата Штейна",
    english: "Steins;Gate",
    kind: "Ранобэ",
    year: 2009,
    score: 8.83,
    popularity: 8,
    image:
      "https://avatars.mds.yandex.net/i?id=c5ea415496b3658cfdc0e5964e686cd2c6f7fcb8-5180512-images-thumbs&n=13",
    volumes: 3,
    status: "Завершён",
    author: "5pb. & Nitroplus",
    genres: "Научная фантастика, Триллер",
    description:
      "Окабэ Ринтаро изобретает машину времени и пытается исправить прошлое, чтобы спасти друзей.",
  },
  {
    id: 9,
    title: "Судзумэ, закрывающая двери",
    english: "Suzume",
    kind: "Ранобэ",
    year: 2022,
    score: 8.37,
    popularity: 9,
    image:
      "https://avatars.mds.yandex.net/i?id=07ce73e4436d14e760169b89968f1225fa9c52dd-13275216-images-thumbs&n=13",
    volumes: 2,
    status: "Завершён",
    author: "Макото Синкай",
    genres: "Приключения, Фэнтези",
    description:
      "Школьница Судзумэ путешествует по Японии, закрывая двери, ведущие в потусторонний мир.",
  },
  {
    id: 10,
    title: "Коносуба",
    english: "KonoSuba: God's Blessing on This Wonderful World!",
    kind: "Ранобэ",
    year: 2013,
    score: 8.25,
    popularity: 10,
    image:
      "https://avatars.mds.yandex.net/get-mpic/4314340/2a000001917845cab2e9e20afc373057531f/orig",
    volumes: 17,
    status: "Онгоинг",
    author: "Нацумэ Акацуки",
    genres: "Исекай, Комедия, Фэнтези",
    description:
      "Казума погибает и перерождается в фэнтезийном мире с бесполезной богиней Аквой.",
  },
  {
    id: 11,
    title: "Нет игры — нет жизни",
    english: "No Game No Life",
    kind: "Ранобэ",
    year: 2012,
    score: 8.55,
    popularity: 11,
    image:
      "https://avatars.mds.yandex.net/get-mpic/13851176/2a000001999f9f440af33c351fe3e44cd358/orig",
    volumes: 12,
    status: "Онгоинг",
    author: "Ю Камия",
    genres: "Исекай, Комедия, Фэнтези",
    description:
      "Брат и сестра-геймеры попадают в мир, где всё решается через игры.",
  },
  {
    id: 12,
    title: "Волчица и пряности",
    english: "Spice and Wolf",
    kind: "Ранобэ",
    year: 2006,
    score: 8.82,
    popularity: 12,
    image: "https://i.ebayimg.com/images/g/ckUAAOSwJ0VnT678/s-l1600.jpg",
    volumes: 24,
    status: "Завершён",
    author: "Исуна Хасэкура",
    genres: "Фэнтези, Экономика, Приключения",
    description:
      "Торговец Лоуренс встречает богиню-волчицу Холо и отправляется с ней в путешествие.",
  },
  {
    id: 13,
    title: "Сага о Тане Злой",
    english: "The Saga of Tanya the Evil",
    kind: "Ранобэ",
    year: 2013,
    score: 8.13,
    popularity: 13,
    image: "https://ir.ozone.ru/s3/multimedia-1-a/8256609298.jpg",
    volumes: 12,
    status: "Онгоинг",
    author: "Карло Дзэн",
    genres: "Исекай, Военное, Фэнтези",
    description:
      "Бизнесмен перерождается девочкой-магом в альтернативной Европе времён войны.",
  },
  {
    id: 14,
    title: "86: Восемьдесят шесть",
    english: "86",
    kind: "Ранобэ",
    year: 2017,
    score: 8.43,
    popularity: 14,
    image: "https://i.ebayimg.com/images/g/W0MAAeSwXQJpsTs5/s-l1600.jpg",
    volumes: 13,
    status: "Онгоинг",
    author: "Асато Асато",
    genres: "Научная фантастика, Драма, Меха",
    description:
      "Война с дронами Легиона и дискриминация народа 86-го сектора глазами юных пилотов.",
  },
  {
    id: 15,
    title: "Гримгар пепла и иллюзий",
    english: "Grimgar of Fantasy and Ash",
    kind: "Ранобэ",
    year: 2013,
    score: 7.95,
    popularity: 15,
    image:
      "https://i0.wp.com/m.media-amazon.com/images/I/81Ef2Q1DcVL.jpg?ssl=1",
    volumes: 19,
    status: "Онгоинг",
    author: "Ао Дзюмондзи",
    genres: "Исекай, Фэнтези, Драма",
    description:
      "Группа незнакомцев просыпается в мире, похожем на RPG, и пытается выжить без воспоминаний.",
  },
  {
    id: 16,
    title: "Лог Горизонт",
    english: "Log Horizon",
    kind: "Ранобэ",
    year: 2011,
    score: 8.26,
    popularity: 16,
    image: "https://i.ebayimg.com/images/g/WFwAAeSwRqVo4oUb/s-l1600.jpg",
    volumes: 11,
    status: "Онгоинг",
    author: "Мамору Торано",
    genres: "Исекай, Фэнтези, Стратегия",
    description:
      "30 000 игроков застревают в виртуальной MMORPG и пытаются построить новое общество.",
  },
  {
    id: 17,
    title: "Так я стал пауком, ну и что?",
    english: "So I'm a Spider, So What?",
    kind: "Ранобэ",
    year: 2015,
    score: 8.05,
    popularity: 17,
    image:
      "https://avatars.mds.yandex.net/i?id=5f0983d3e302aa009169f1dbdf1c6876_l-3475740-images-thumbs&n=13",
    volumes: 16,
    status: "Онгоинг",
    author: "Окина Баба",
    genres: "Исекай, Комедия, Фэнтези",
    description:
      "Школьница перерождается в паука-монстра и пытается выжить в опасном подземелье.",
  },
  {
    id: 18,
    title: "Мой следующий жизненный цикл как злодейки",
    english: "My Next Life as a Villainess: All Routes Lead to Doom!",
    kind: "Ранобэ",
    year: 2014,
    score: 7.82,
    popularity: 18,
    image:
      "https://avatars.mds.yandex.net/i?id=5369e89f41a08617ed1536514790e6e9_l-5864997-images-thumbs&n=13",
    volumes: 12,
    status: "Онгоинг",
    author: "Сатору Ямагути",
    genres: "Исекай, Романтика, Комедия",
    description:
      "Девушка перерождается в злодейку отомэ-игры и пытается избежать плохих концовок.",
  },
  {
    id: 19,
    title: "Королевство Термун",
    english: "Tearmoon Empire",
    kind: "Ранобэ",
    year: 2018,
    score: 7.69,
    popularity: 19,
    image:
      "https://n.cdn.cdek.shopping/images/shopping/Z4ZuU4ovbTBv9eDh.jpg?v=1",
    volumes: 13,
    status: "Онгоинг",
    author: "Нодзому Мотицуки",
    genres: "Исекай, Комедия, Фэнтези",
    description:
      "Принцесса казнена и возвращается во времени, чтобы исправить империю с помощью дневника.",
  },
  {
    id: 20,
    title: "Палач и её образ жизни",
    english: "The Executioner and Her Way of Life",
    kind: "Ранобэ",
    year: 2019,
    score: 7.75,
    popularity: 20,
    image:
      "https://n.cdn.cdek.shopping/images/shopping/VNoypMxNN37pGNy8.jpg?v=1",
    volumes: 8,
    status: "Онгоинг",
    author: "Мато Сато",
    genres: "Исекай, Экшен, Фэнтези",
    description:
      "Девушка-палач убивает призванных героев, пока не встречает девушку с необычной способностью.",
  },
  {
    id: 21,
    title: "Бофури: Не хочу получать боль, поэтому вложу всё в защиту",
    english: "Bofuri: I Don't Want to Get Hurt, so I'll Max Out My Defense",
    kind: "Ранобэ",
    year: 2017,
    score: 7.88,
    popularity: 21,
    image:
      "https://n.cdn.cdek.shopping/images/shopping/uikO5p152QgE5g12.jpg?v=1",
    volumes: 17,
    status: "Онгоинг",
    author: "Юмикан",
    genres: "Исекай, Комедия, Фэнтези",
    description:
      "Мэйпл вкладывает все очки в защиту и становится непобедимым танком в VRMMO.",
  },
  {
    id: 22,
    title: "Кума Кума Кума Беар",
    english: "Kuma Kuma Kuma Bear",
    kind: "Ранобэ",
    year: 2014,
    score: 7.55,
    popularity: 22,
    image:
      "https://n.cdn.cdek.shopping/images/shopping/YcruSmrjOsAn99ug.jpg?v=1",
    volumes: 20,
    status: "Онгоинг",
    author: "Куманэ",
    genres: "Исекай, Комедия, Приключения",
    description:
      "Девушка получает мощный костюм медведя и наслаждается жизнью в игровом мире.",
  },
  {
    id: 23,
    title: "В стране Лидейл",
    english: "In the Land of Leadale",
    kind: "Ранобэ",
    year: 2019,
    score: 7.45,
    popularity: 23,
    image:
      "https://avatars.mds.yandex.net/i?id=45c7ab30c5cfe606f09addd4f24855a4_l-5103338-images-thumbs&n=13",
    volumes: 8,
    status: "Онгоинг",
    author: "Кэня",
    genres: "Исекай, Фэнтези, Приключения",
    description:
      "Девушка перерождается в мире своей любимой VRMMO спустя 200 лет после игровых событий.",
  },
  {
    id: 24,
    title: "По милости богов",
    english: "By the Grace of the Gods",
    kind: "Ранобэ",
    year: 2017,
    score: 7.28,
    popularity: 24,
    image:
      "https://n.cdn.cdek.shopping/images/shopping/GXWPdGpavUpxCPkH.jpg?v=1",
    volumes: 11,
    status: "Онгоинг",
    author: "Рой",
    genres: "Исекай, Фэнтези, Повседневность",
    description:
      "Офисный работник перерождается с благословениями богов и открывает прачечную с приручёнными слаймами.",
  },
];

const ITEMS_PER_PAGE = 24;
let currentSort = "popularity";
let currentOrder = "desc";
let currentPage = 1;
let searchQuery = "";
let filteredRanobe = [...ranobeList];

function pluralize(n, forms) {
  const abs = Math.abs(n);
  if (abs % 100 >= 11 && abs % 100 <= 19) return forms[2];
  const lastDigit = abs % 10;
  if (lastDigit === 1) return forms[0];
  if (lastDigit >= 2 && lastDigit <= 4) return forms[1];
  return forms[2];
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[b.length][a.length];
}

function filterRanobeByQuery(query) {
  if (!query.trim()) return [...ranobeList];
  const lowerQuery = query.trim().toLowerCase();
  const exactMatches = [];
  const fuzzyMatches = [];
  for (let ranobe of ranobeList) {
    const titleLow = ranobe.title.toLowerCase();
    const engLow = (ranobe.english || "").toLowerCase();
    if (titleLow.includes(lowerQuery) || engLow.includes(lowerQuery)) {
      exactMatches.push(ranobe);
    } else {
      const maxDist = lowerQuery.length <= 3 ? 1 : 2;
      const titleDistance = levenshteinDistance(
        lowerQuery,
        titleLow.slice(0, lowerQuery.length + 2),
      );
      const engDistance = levenshteinDistance(
        lowerQuery,
        engLow.slice(0, lowerQuery.length + 2),
      );
      const minDist = Math.min(titleDistance, engDistance);
      if (minDist <= maxDist) {
        fuzzyMatches.push(ranobe);
      }
    }
  }
  return [...exactMatches, ...fuzzyMatches];
}

function sortRanobe(ranobeList, sortType, order) {
  const arr = [...ranobeList];
  if (sortType === "popularity") {
    return arr.sort((a, b) =>
      order === "desc"
        ? a.popularity - b.popularity
        : b.popularity - a.popularity,
    );
  }
  if (sortType === "score") {
    return arr.sort((a, b) =>
      order === "desc" ? b.score - a.score : a.score - b.score,
    );
  }
  if (sortType === "title") {
    return arr.sort((a, b) => {
      const comp = a.title.localeCompare(b.title, "ru");
      return order === "desc" ? comp : -comp;
    });
  }
  if (sortType === "year") {
    return arr.sort((a, b) =>
      order === "desc" ? b.year - a.year : a.year - b.year,
    );
  }
  return arr;
}

function updateDataAndRender() {
  const working = filterRanobeByQuery(searchQuery);
  filteredRanobe = sortRanobe(working, currentSort, currentOrder);
  currentPage = 1;
  renderCurrentPage();
  renderPagination();
}

function renderCurrentPage() {
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const pageItems = filteredRanobe.slice(startIdx, endIdx);
  const gridContainer = document.getElementById("ranobe-grid-container");

  if (!pageItems.length) {
    gridContainer.innerHTML =
      '<div class="empty-state">Ничего не найдено. Попробуйте другое слово.</div>';
    return;
  }

  let cardsHtml = "";
  for (let ranobe of pageItems) {
    const firstLetter = ranobe.title.charAt(0).toUpperCase();
    const englishName = ranobe.english || "—";
    cardsHtml += `
      <div class="ranobe-card" data-id="${ranobe.id}">
        <div class="card-poster">
          <img src="${ranobe.image}" alt="${ranobe.title}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="poster-fallback" style="display: none;">${firstLetter}</div>
        </div>
        <div class="card-info">
          <div class="card-title" title="${ranobe.title}">${ranobe.title}</div>
          <div class="card-eng" title="${englishName}">${englishName}</div>
          <div class="card-meta">
            <span class="kind">${ranobe.kind}</span>
            <span class="year">📅 ${ranobe.year}</span>
            <span class="score">⭐ ${ranobe.score.toFixed(1)}</span>
          </div>
        </div>
      </div>
    `;
  }
  gridContainer.innerHTML = cardsHtml;

  document.querySelectorAll(".ranobe-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.getAttribute("data-id"));
      const ranobe = ranobeList.find((r) => r.id === id);
      if (ranobe) openDetailModal(ranobe);
    });
  });
}

function renderPagination() {
  const totalPages = Math.ceil(filteredRanobe.length / ITEMS_PER_PAGE);
  const paginationDiv = document.getElementById("pagination-controls");
  if (totalPages <= 1) {
    paginationDiv.innerHTML = "";
    return;
  }
  let pagHtml = `<button class="page-btn" id="prev-page-btn" ${currentPage === 1 ? "disabled" : ""}>Назад</button>`;
  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, startPage + 6);
  if (endPage - startPage < 6) startPage = Math.max(1, endPage - 6);
  for (let i = startPage; i <= endPage; i++) {
    pagHtml += `<button class="page-btn ${i === currentPage ? "active-page" : ""}" data-page="${i}">${i}</button>`;
  }
  pagHtml += `<button class="page-btn" id="next-page-btn" ${currentPage === totalPages ? "disabled" : ""}>Вперёд</button>`;
  paginationDiv.innerHTML = pagHtml;

  document.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const newPage = parseInt(btn.getAttribute("data-page"));
      if (!isNaN(newPage) && newPage !== currentPage) {
        currentPage = newPage;
        renderCurrentPage();
        renderPagination();
      }
    });
  });
  document.getElementById("prev-page-btn")?.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCurrentPage();
      renderPagination();
    }
  });
  document.getElementById("next-page-btn")?.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCurrentPage();
      renderPagination();
    }
  });
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearSearchBtn = document.getElementById("clearSearchBtn");

function performSearch() {
  searchQuery = searchInput.value;
  clearSearchBtn.style.display = searchQuery.trim() ? "block" : "none";
  updateDataAndRender();
}
function clearSearch() {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  updateDataAndRender();
}

searchButton.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") performSearch();
});
clearSearchBtn.addEventListener("click", clearSearch);
clearSearchBtn.style.display = "none";

const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");
const detailModalClose = document.getElementById("detailModalClose");

function openDetailModal(ranobe) {
  const posterHtml = `<img src="${ranobe.image}" alt="${ranobe.title}" onerror="this.src='https://placehold.co/200x300?text=No+Image'">`;
  const volumesText = ranobe.volumes
    ? `${ranobe.volumes} ${pluralize(ranobe.volumes, ["том", "тома", "томов"])}`
    : "—";

  const modalHtml = `
    <div class="modal-header">
      <div class="modal-poster">${posterHtml}</div>
      <div class="modal-title-section">
        <h2>${ranobe.title}</h2>
        <h3>${ranobe.english || ""}</h3>
        <div class="modal-badges">
          <span class="badge">${ranobe.kind}</span>
          <span class="badge">${ranobe.year}</span>
          <span class="badge score-badge">⭐ ${ranobe.score.toFixed(1)}</span>
        </div>
      </div>
    </div>
    <div class="details-grid">
      <div class="detail-item"><span class="detail-label">Автор</span><span class="detail-value">${ranobe.author || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Объём</span><span class="detail-value">${volumesText}</span></div>
      <div class="detail-item"><span class="detail-label">Статус</span><span class="detail-value">${ranobe.status || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Жанры</span><span class="detail-value">${ranobe.genres || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Тип</span><span class="detail-value">${ranobe.kind}</span></div>
      <div class="detail-item"><span class="detail-label">Рейтинг</span><span class="detail-value">${ranobe.score.toFixed(1)}/10</span></div>
    </div>
    <div class="description-box">
      <h4>Описание</h4>
      <p>${ranobe.description || "Описание отсутствует."}</p>
    </div>
  `;
  detailModalContent.innerHTML = modalHtml;
  detailModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  detailModal.classList.remove("active");
  document.body.style.overflow = "";
}

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) closeDetailModal();
});
detailModalClose.addEventListener("click", closeDetailModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detailModal.classList.contains("active"))
    closeDetailModal();
});

function initSortButtons() {
  const btns = document.querySelectorAll(".sort-btn");
  btns.forEach((btn) => {
    if (btn.getAttribute("data-sort") === currentSort) {
      btn.classList.add("active", currentOrder);
    }
    btn.addEventListener("click", () => {
      const sortValue = btn.getAttribute("data-sort");
      if (!sortValue) return;
      if (currentSort === sortValue) {
        currentOrder = currentOrder === "desc" ? "asc" : "desc";
      } else {
        currentSort = sortValue;
        currentOrder = "desc";
      }
      btns.forEach((b) => {
        b.classList.remove("active", "asc", "desc");
        if (b.getAttribute("data-sort") === currentSort) {
          b.classList.add("active", currentOrder);
        }
      });
      updateDataAndRender();
    });
  });
}

function initThemeToggle() {
  const themeSwitch = document.getElementById("themeSwitch");
  if (!themeSwitch) return;

  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  initSortButtons();
  updateDataAndRender();
});
