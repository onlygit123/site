const mangaList = [
  {
    id: 1,
    title: "Ван-Пис",
    english: "One Piece",
    kind: "Манга",
    year: 1997,
    score: 9.22,
    popularity: 1,
    image: "https://i.ebayimg.com/images/g/p4wAAOSw9IZfsfPc/s-l1600.jpg",
    chapters: 1100,
    volumes: 107,
    status: "Онгоинг",
    author: "Эйитиро Ода",
    genres: "Сёнэн, Приключения, Экшен",
    description:
      "Монки Д. Луффи собирает команду пиратов и отправляется на поиски легендарного сокровища Ван-Пис, чтобы стать Королём пиратов.",
  },
  {
    id: 2,
    title: "Магическая битва",
    english: "Jujutsu Kaisen",
    kind: "Манга",
    year: 2018,
    score: 8.93,
    popularity: 2,
    image:
      "https://avatars.mds.yandex.net/get-mpic/4448884/img_id94803548678172754.jpeg/orig",
    chapters: 247,
    volumes: 26,
    status: "Онгоинг",
    author: "Гэгэ Акутами",
    genres: "Сёнэн, Сверхъестественное, Экшен",
    description:
      "Юдзи Итадори проглатывает проклятый палец и становится сосудом для Сукуны, после чего вступает в мир магов и проклятий.",
  },
  {
    id: 3,
    title: "Человек-бензопила",
    english: "Chainsaw Man",
    kind: "Манга",
    year: 2018,
    score: 8.88,
    popularity: 3,
    image:
      "https://www.1c-interes.ru/upload/resize_src/bd/bdca85d4bfbe32deef220beabe2ae81c.jpg",
    chapters: 170,
    volumes: 18,
    status: "Онгоинг",
    author: "Тацуки Фудзимото",
    genres: "Сёнэн, Тёмное фэнтези, Экшен",
    description:
      "Дэндзи сливается с демоном-бензопилой и становится охотником на демонов, пытаясь выжить в жестоком мире.",
  },
  {
    id: 4,
    title: "Атака Титанов",
    english: "Attack on Titan",
    kind: "Манга",
    year: 2009,
    score: 9.02,
    popularity: 4,
    image:
      "https://avatars.mds.yandex.net/i?id=25a8da6e8a2c4018ebb34c3cef3e78426d38f311-5452154-images-thumbs&n=13",
    chapters: 139,
    volumes: 34,
    status: "Завершён",
    author: "Хадзимэ Исаяма",
    genres: "Сёнэн, Драма, Экшен",
    description:
      "Человечество борется за выживание против гигантских титанов, а Эрен Йегер раскрывает тайны их происхождения.",
  },
  {
    id: 5,
    title: "Клинок, рассекающий демонов",
    english: "Demon Slayer",
    kind: "Манга",
    year: 2016,
    score: 8.75,
    popularity: 5,
    image: "https://ir.ozone.ru/s3/multimedia-1-s/7007592556.jpg",
    chapters: 205,
    volumes: 23,
    status: "Завершён",
    author: "Коёхару Готогэ",
    genres: "Сёнэн, Историческое, Экшен",
    description:
      "Танджиро становится охотником на демонов, чтобы спасти сестру и отомстить за семью.",
  },
  {
    id: 6,
    title: "Моя геройская академия",
    english: "My Hero Academia",
    kind: "Манга",
    year: 2014,
    score: 8.52,
    popularity: 6,
    image:
      "https://avatars.mds.yandex.net/i?id=a3b2e0f4a1376b0a98f11525ceaabf67a1897154-4518735-images-thumbs&n=13",
    chapters: 403,
    volumes: 40,
    status: "Завершён",
    author: "Кохэй Хорикоси",
    genres: "Сёнэн, Супергерои, Экшен",
    description:
      "Изуку Мидория получает суперсилу от Всемогущего и учится в академии героев.",
  },
  {
    id: 7,
    title: "Ванпанчмен",
    english: "One Punch Man",
    kind: "Манга",
    year: 2012,
    score: 8.86,
    popularity: 7,
    image: "https://ir.ozone.ru/s3/multimedia-1-d/7327804585.jpg",
    chapters: 200,
    volumes: 30,
    status: "Онгоинг",
    author: "ONE, Юсукэ Мурата",
    genres: "Сёнэн, Комедия, Экшен",
    description:
      "Сайтама способен победить любого одним ударом и ищет достойного противника.",
  },
  {
    id: 8,
    title: "Наруто",
    english: "Naruto",
    kind: "Манга",
    year: 1999,
    score: 8.42,
    popularity: 8,
    image:
      "https://avatars.mds.yandex.net/i?id=908efd2a4bcbe878da5067ae4f8d616ea2f82ff2-7543737-images-thumbs&n=13",
    chapters: 700,
    volumes: 72,
    status: "Завершён",
    author: "Масаси Кисимото",
    genres: "Сёнэн, Приключения, Экшен",
    description:
      "Наруто Узумаки мечтает стать Хокаге, лидером своей деревни, и преодолевает множество испытаний.",
  },
  {
    id: 9,
    title: "Блич",
    english: "Bleach",
    kind: "Манга",
    year: 2001,
    score: 8.38,
    popularity: 9,
    image:
      "https://avatars.mds.yandex.net/i?id=fb012d751f82701e63b9c483ac9e59e3d6608db8-4234193-images-thumbs&n=13",
    chapters: 686,
    volumes: 74,
    status: "Завершён",
    author: "Тайто Кубо",
    genres: "Сёнэн, Сверхъестественное, Экшен",
    description:
      "Ичиго Куросаки становится Жнецом душ и защищает людей от злых духов.",
  },
  {
    id: 10,
    title: "Токийский гуль",
    english: "Tokyo Ghoul",
    kind: "Манга",
    year: 2011,
    score: 8.27,
    popularity: 10,
    image:
      "https://avatars.mds.yandex.net/i?id=06975c91d47bf6d737a1e7b56007a84ed9d2274a-4855100-images-thumbs&n=13",
    chapters: 143,
    volumes: 14,
    status: "Завершён",
    author: "Суи Исида",
    genres: "Сэйнэн, Тёмное фэнтези, Драма",
    description:
      "Канеки Кен становится полугулем и пытается выжить в мире, где люди и гули враждуют.",
  },
  {
    id: 11,
    title: "Берсерк",
    english: "Berserk",
    kind: "Манга",
    year: 1989,
    score: 9.47,
    popularity: 11,
    image:
      "https://static.insales-cdn.com/images/products/1/4932/449155908/bqrqqqed-bw.jpg",
    chapters: 374,
    volumes: 42,
    status: "Онгоинг",
    author: "Кэнтаро Миура",
    genres: "Сэйнэн, Тёмное фэнтези, Эпик",
    description:
      "Гатс, наёмник с огромным мечом, сражается против демонических сил в жестоком средневековом мире.",
  },
  {
    id: 12,
    title: "Волейбол!!",
    english: "Haikyuu!!",
    kind: "Манга",
    year: 2012,
    score: 8.95,
    popularity: 12,
    image:
      "https://avatars.mds.yandex.net/i?id=a6b12663ac1af55ea404ee8752a2020545a5146e-12919190-images-thumbs&n=13",
    chapters: 402,
    volumes: 45,
    status: "Завершён",
    author: "Харуити Фурудатэ",
    genres: "Сёнэн, Спорт, Комедия",
    description:
      "Сёё Хината и Тобио Кагэяма объединяются, чтобы привести волейбольную команду к победе.",
  },
  {
    id: 13,
    title: "Баскетбол Куроко",
    english: "Kuroko's Basketball",
    kind: "Манга",
    year: 2008,
    score: 8.49,
    popularity: 13,
    image:
      "https://avatars.mds.yandex.net/i?id=c6926091f4b465c759aab5a58405db75_l-5394611-images-thumbs&n=13",
    chapters: 275,
    volumes: 30,
    status: "Завершён",
    author: "Тадатоси Фудзимаки",
    genres: "Сёнэн, Спорт, Драма",
    description:
      "Команда Сейрин с «призрачным» игроком Куроко и талантливым Кагами стремится к чемпионству.",
  },
  {
    id: 14,
    title: "Хантер х Хантер",
    english: "Hunter x Hunter",
    kind: "Манга",
    year: 1998,
    score: 9.21,
    popularity: 14,
    image:
      "https://avatars.mds.yandex.net/i?id=c5fdea572b3686756bc22bce5b51ff04bdba8846-5232623-images-thumbs&n=13",
    chapters: 400,
    volumes: 37,
    status: "Онгоинг",
    author: "Ёсихиро Тогаси",
    genres: "Сёнэн, Приключения, Фэнтези",
    description:
      "Гон Фрикс становится Охотником, чтобы найти отца, и погружается в опасные приключения.",
  },
  {
    id: 15,
    title: "Стальной алхимик",
    english: "Fullmetal Alchemist",
    kind: "Манга",
    year: 2001,
    score: 9.16,
    popularity: 15,
    image:
      "https://avatars.mds.yandex.net/i?id=e89bea9c06d1ed6ce7578c3f51d261143880c674-5331459-images-thumbs&n=13",
    chapters: 108,
    volumes: 27,
    status: "Завершён",
    author: "Хирому Аракава",
    genres: "Сёнэн, Приключения, Драма",
    description:
      "Братья Элрики ищут философский камень, чтобы восстановить свои тела после неудачного алхимического эксперимента.",
  },
  {
    id: 16,
    title: "Твоя апрельская ложь",
    english: "Your Lie in April",
    kind: "Манга",
    year: 2011,
    score: 8.89,
    popularity: 16,
    image:
      "https://avatars.mds.yandex.net/i?id=e09010d6f1e4456bad932018a6195514132abd61-10576924-images-thumbs&n=13",
    chapters: 44,
    volumes: 11,
    status: "Завершён",
    author: "Наоси Аракава",
    genres: "Сёнэн, Музыка, Драма",
    description:
      "Пианист Косэй возвращается к музыке благодаря встрече с жизнерадостной скрипачкой Каори.",
  },
  {
    id: 17,
    title: "Гинтама",
    english: "Gintama",
    kind: "Манга",
    year: 2003,
    score: 9.12,
    popularity: 17,
    image:
      "https://avatars.mds.yandex.net/i?id=d034706f2bdc52e7f89b2edb8d3aef1ece62ea7f-9461051-images-thumbs&n=13",
    chapters: 704,
    volumes: 77,
    status: "Завершён",
    author: "Хидэаки Сорати",
    genres: "Сёнэн, Комедия, Экшен",
    description:
      "Гинтоки и его друзья выполняют любые заказы в альтернативной Японии, захваченной инопланетянами.",
  },
  {
    id: 18,
    title: "Класс убийц",
    english: "Assassination Classroom",
    kind: "Манга",
    year: 2012,
    score: 8.53,
    popularity: 18,
    image: "https://ir.ozone.ru/s3/multimedia-1-n/9572592227.jpg",
    chapters: 180,
    volumes: 21,
    status: "Завершён",
    author: "Юсэй Мацуи",
    genres: "Сёнэн, Комедия, Драма",
    description:
      "Ученики класса 3-Е пытаются убить своего инопланетного учителя, который обещает уничтожить Землю.",
  },
  {
    id: 19,
    title: "Обещанная Страна Грёз",
    english: "The Promised Neverland",
    kind: "Манга",
    year: 2016,
    score: 8.84,
    popularity: 19,
    image:
      "https://avatars.mds.yandex.net/i?id=fa02f41cc4c0884847099f31732c9ab2bd0fdb20-5377805-images-thumbs&n=13",
    chapters: 181,
    volumes: 20,
    status: "Завершён",
    author: "Каиу Сирай",
    genres: "Сёнэн, Психологический триллер",
    description:
      "Дети из приюта узнают страшную правду и планируют побег, чтобы выжить.",
  },
  {
    id: 20,
    title: "Королевство",
    english: "Kingdom",
    kind: "Манга",
    year: 2006,
    score: 9.03,
    popularity: 20,
    image:
      "https://avatars.mds.yandex.net/i?id=1afd4db6dc2975cbf3633a1f5a8f96ad8ca80faf-5233368-images-thumbs&n=13",
    chapters: 780,
    volumes: 70,
    status: "Онгоинг",
    author: "Ясухиса Хара",
    genres: "Сэйнэн, Исторический, Экшен",
    description:
      "Синь стремится стать величайшим генералом Китая в эпоху Воюющих царств.",
  },
  {
    id: 21,
    title: "Вайолет Эвергарден",
    english: "Violet Evergarden",
    kind: "Манга",
    year: 2015,
    score: 8.72,
    popularity: 21,
    image:
      "https://avatars.mds.yandex.net/i?id=d9827bbccb413f2c2ce5b2d5da646a0f5e640b15-4079923-images-thumbs&n=13",
    chapters: 25,
    volumes: 4,
    status: "Завершён",
    author: "Кана Акацуки",
    genres: "Сёнэн, Драма, Фэнтези",
    description:
      "Бывшая солдатка Вайолет учится понимать человеческие чувства, работая автозапоминающей куклой.",
  },
  {
    id: 22,
    title: "Драконий жемчуг Супер",
    english: "Dragon Ball Super",
    kind: "Манга",
    year: 2015,
    score: 8.15,
    popularity: 22,
    image:
      "https://avatars.mds.yandex.net/i?id=61659bcbc4751825b44630d9822318e59c6b8094-5874305-images-thumbs&n=13",
    chapters: 90,
    volumes: 22,
    status: "Онгоинг",
    author: "Акира Торияма",
    genres: "Сёнэн, Экшен, Фэнтези",
    description:
      "Гоку и его друзья сражаются с новыми богами и врагами из других вселенных.",
  },
  {
    id: 23,
    title: "Несносные пришельцы",
    english: "Urusei Yatsura",
    kind: "Манга",
    year: 1978,
    score: 8.15,
    popularity: 23,
    image: "https://imo10.labirint.ru/books/966806/cover.jpg/484-0",
    chapters: 366,
    volumes: 34,
    status: "Завершён",
    author: "Румико Такахаси",
    genres: "Сёнэн, Комедия, Романтика",
    description:
      "Инопланетянка Лам влюбляется в Атару, и их эксцентричные приключения полны юмора и абсурда.",
  },
  {
    id: 24,
    title: "Re:Zero. Жизнь с нуля в альтернативном мире",
    english: "Re:Zero - Starting Life in Another World",
    kind: "Манга",
    year: 2014,
    score: 8.24,
    popularity: 110,
    image:
      "https://avatars.mds.yandex.net/get-mpic/7726747/2a00000192052f2df6531df1cf148c3f6504/optimize",
    chapters: 150,
    volumes: 35,
    status: "Онгоинг",
    author: "Таппэй Нагацуки",
    genres: "Сэйнэн, Исекай, Фэнтези, Драма, Психология",
    description:
      "Обычный парень Субару Нацуки внезапно попадает в фэнтези-мир, где обретает способность «Посмертное возвращение» — после каждой гибели он возвращается в прошлое, чтобы попытаться спасти дорогих ему людей.",
  },
];
const ITEMS_PER_PAGE = 24;
let currentSort = "popularity";
let currentOrder = "desc";
let currentPage = 1;
let searchQuery = "";
let filteredManga = [...mangaList];

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

function filterMangaByQuery(query) {
  if (!query.trim()) return [...mangaList];
  const lowerQuery = query.trim().toLowerCase();
  const exactMatches = [];
  const fuzzyMatches = [];
  for (let manga of mangaList) {
    const titleLow = manga.title.toLowerCase();
    const engLow = (manga.english || "").toLowerCase();
    if (titleLow.includes(lowerQuery) || engLow.includes(lowerQuery)) {
      exactMatches.push(manga);
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
        fuzzyMatches.push(manga);
      }
    }
  }
  return [...exactMatches, ...fuzzyMatches];
}

function sortManga(mangaList, sortType, order) {
  const arr = [...mangaList];
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
  const working = filterMangaByQuery(searchQuery);
  filteredManga = sortManga(working, currentSort, currentOrder);
  currentPage = 1;
  renderCurrentPage();
  renderPagination();
}

function renderCurrentPage() {
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const pageItems = filteredManga.slice(startIdx, endIdx);
  const gridContainer = document.getElementById("manga-grid-container");

  if (!pageItems.length) {
    gridContainer.innerHTML =
      '<div class="empty-state">Ничего не найдено. Попробуйте другое слово.</div>';
    return;
  }

  let cardsHtml = "";
  for (let manga of pageItems) {
    const firstLetter = manga.title.charAt(0).toUpperCase();
    const englishName = manga.english || "—";
    cardsHtml += `
      <div class="manga-card" data-id="${manga.id}">
        <div class="card-poster">
          <img src="${manga.image}" alt="${manga.title}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="poster-fallback" style="display: none;">${firstLetter}</div>
        </div>
        <div class="card-info">
          <div class="card-title" title="${manga.title}">${manga.title}</div>
          <div class="card-eng" title="${englishName}">${englishName}</div>
          <div class="card-meta">
            <span class="kind">${manga.kind}</span>
            <span class="year">📅 ${manga.year}</span>
            <span class="score">⭐ ${manga.score.toFixed(1)}</span>
          </div>
        </div>
      </div>
    `;
  }
  gridContainer.innerHTML = cardsHtml;

  document.querySelectorAll(".manga-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.getAttribute("data-id"));
      const manga = mangaList.find((m) => m.id === id);
      if (manga) openDetailModal(manga);
    });
  });
}

function renderPagination() {
  const totalPages = Math.ceil(filteredManga.length / ITEMS_PER_PAGE);
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

function pluralize(n, forms) {
  const abs = Math.abs(n);
  if (abs % 100 >= 11 && abs % 100 <= 19) return forms[2];
  const lastDigit = abs % 10;
  if (lastDigit === 1) return forms[0];
  if (lastDigit >= 2 && lastDigit <= 4) return forms[1];
  return forms[2];
}

const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");
const detailModalClose = document.getElementById("detailModalClose");

function openDetailModal(manga) {
  const posterHtml = `<img src="${manga.image}" alt="${manga.title}" onerror="this.src='https://placehold.co/200x300?text=No+Image'">`;
  const chaptersText = manga.chapters ? `${manga.chapters} глав` : "—";
  const volumesText = manga.volumes
    ? `${manga.volumes} ${pluralize(manga.volumes, ["том", "тома", "томов"])}`
    : "—";

  const modalHtml = `
    <div class="modal-header">
      <div class="modal-poster">${posterHtml}</div>
      <div class="modal-title-section">
        <h2>${manga.title}</h2>
        <h3>${manga.english || ""}</h3>
        <div class="modal-badges">
          <span class="badge">${manga.kind}</span>
          <span class="badge">${manga.year}</span>
          <span class="badge score-badge">⭐ ${manga.score.toFixed(1)}</span>
        </div>
      </div>
    </div>
    <div class="details-grid">
      <div class="detail-item"><span class="detail-label">Автор</span><span class="detail-value">${manga.author || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Объём</span><span class="detail-value">${chaptersText} / ${volumesText}</span></div>
      <div class="detail-item"><span class="detail-label">Статус</span><span class="detail-value">${manga.status || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Жанры</span><span class="detail-value">${manga.genres || "—"}</span></div>
      <div class="detail-item"><span class="detail-label">Тип</span><span class="detail-value">${manga.kind}</span></div>
      <div class="detail-item"><span class="detail-label">Рейтинг</span><span class="detail-value">${manga.score.toFixed(1)}/10</span></div>
    </div>
    <div class="description-box">
      <h4>Описание</h4>
      <p>${manga.description || "Описание отсутствует."}</p>
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
