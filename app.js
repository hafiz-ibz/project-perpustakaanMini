const BOOKS = {
  B001: {
    id: 'B001',
    title: 'Matematika kejuruan',
    author: 'Ai Tusi Fatimah',
    rating: 4.8,
    reviews: 120,
    category: 'Technology',
    categoryKey: 'technology',
    publisher: 'Tim Penulis',
    year: '2023',
    isbn: '978-602-123-456-1',
    cover: 'assets/matematika-kejuruan.jpg',
    description: 'Buku ini membahas konsep matematika yang diterapkan dalam dunia kejuruan dan teknologi, cocok untuk siswa yang ingin memahami aplikasi numerik dalam praktik kerja nyata.'
  },
  B002: {
    id: 'B002',
    title: 'Fisika dasar 1',
    author: 'Dr. Martha Rianna, S.Si',
    rating: 5.0,
    reviews: 98,
    category: 'Fisika',
    categoryKey: 'fisika',
    publisher: 'Penerbit Edu',
    year: '2022',
    isbn: '978-602-987-654-2',
    cover: 'assets/buku ajar fisika dasar 1.jpg',
    description: 'Fisika Dasar 1 menjelaskan prinsip-prinsip dasar mekanika, gerak, dan energi dengan pendekatan yang mudah dipahami untuk pemula.'
  },
  B003: {
    id: 'B003',
    title: 'ENSIKLOPEDIA SAINS',
    author: 'BIP',
    rating: 4.7,
    reviews: 76,
    category: 'Materi',
    categoryKey: 'materi',
    publisher: 'BIP',
    year: '2021',
    isbn: '978-602-111-222-3',
    cover: 'assets/ensiklopedia sains.jpg',
    description: 'Ensiklopedia Sains memberikan gambaran luas tentang konsep-konsep ilmiah dari berbagai bidang seperti biologi, kimia, fisika, dan lingkungan.'
  },
  B004: {
    id: 'B004',
    title: 'Fisika Modern',
    author: 'Prof Dr. Tono Djudin',
    rating: 4.9,
    reviews: 88,
    category: 'Fisika',
    categoryKey: 'fisika',
    publisher: 'Pusat Ilmu',
    year: '2024',
    isbn: '978-602-963-333-4',
    cover: 'assets/pengantar fisika modern.jpg',
    description: 'Buku ini memperkenalkan teori-teori fisika modern seperti relativitas, kuantum, dan fenomena gelombang dalam bahasa yang terstruktur.'
  },
  B005: {
    id: 'B005',
    title: 'Desain/Pembelajaran IPA',
    author: 'Sri Faizah Linsari Jainab',
    rating: 4.8,
    reviews: 134,
    category: 'Materi',
    categoryKey: 'materi',
    publisher: 'Penerbit Pendidikan',
    year: '2020',
    isbn: '978-602-444-555-5',
    cover: 'assets/desain-pembelajaran-ipa.jpg',
    description: 'Buku ini membahas strategi merancang pembelajaran IPA yang menarik, relevan, dan efektif untuk meningkatkan pemahaman siswa.'
  },
  B006: {
    id: 'B006',
    title: 'IPS',
    author: 'M. Iqbal Birsyada',
    rating: 4.7,
    reviews: 111,
    category: 'IPS',
    categoryKey: 'ips',
    publisher: 'Pusaka Edu',
    year: '2023',
    isbn: '978-602-666-777-6',
    cover: 'assets/ips.jpg',
    description: 'Ilmu Pengetahuan Sosial membahas kehidupan sosial, budaya, ekonomi, dan sejarah dalam konteks kehidupan sehari-hari.'
  },
  B007: {
    id: 'B007',
    title: 'KIMIA DASAR',
    author: 'Hardjono Sastrohamidjojo',
    rating: 4.8,
    reviews: 101,
    category: 'Materi',
    categoryKey: 'materi',
    publisher: 'Lab Kimia',
    year: '2022',
    isbn: '978-602-777-888-7',
    cover: 'assets/kimia dasar.jpg',
    description: 'Kimia Dasar memperkenalkan konsep atom, larutan, reaksi, dan stoikiometri dasar yang menjadi fondasi bagi ilmu kimia lanjutan.'
  },
  B008: {
    id: 'B008',
    title: 'SEJARAH INDONESIA II',
    author: 'Ai Tusi Fatimah',
    rating: 4.9,
    reviews: 141,
    category: 'Sejarah',
    categoryKey: 'sejarah',
    publisher: 'Histori Nusantara',
    year: '2021',
    isbn: '978-602-878-999-8',
    cover: 'assets/sejarah indonesia.jpg',
    description: 'Buku ini membahas perjalanan sejarah Indonesia pada masa kolonial hingga kemerdekaan dengan narasi yang ringkas dan informatif.'
  },
  B009: {
    id: 'B009',
    title: 'Bahasa Indonesia',
    author: 'Nurul Dwi Lestari',
    rating: 4.9,
    reviews: 120,
    category: 'Bahasa Indonesia',
    categoryKey: 'bahasa-indonesia',
    publisher: 'Tim Penulis',
    year: '2024',
    isbn: '978-602-333-444-9',
    cover: 'assets/bahasa-indonesia.jpg',
    description: 'Buku Bahasa Indonesia merupakan buku yang membahas berbagai materi mengenai bahasa Indonesia, mulai dari penggunaan bahasa yang baik dan benar, tata bahasa, hingga kemampuan memahami dan menyusun berbagai jenis teks.'
  }
};

const STORAGE_KEYS = {
  user: 'library_user',
  favorites: 'library_favorites',
  schedule: 'library_schedule'
};

function getStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.user);
    return raw ? JSON.parse(raw) : { name: 'M.Rafli' };
  } catch {
    return { name: 'M.Rafli' };
  }
}

function setUserName(name) {
  const user = getStoredUser();
  user.name = name || user.name || 'M.Rafli';
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || '[]');
  } catch {
    return [];
  }
}

function toggleFavorite(bookId) {
  const favorites = new Set(getFavorites());
  if (favorites.has(bookId)) {
    favorites.delete(bookId);
  } else {
    favorites.add(bookId);
  }
  localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...favorites]));
  return favorites.has(bookId);
}

function getBookById(bookId) {
  return BOOKS[bookId] || BOOKS.B009;
}

function buildBookTitleText(book) {
  return `${book.title} - ${book.author}`;
}

function filterVisibleCards(cards, query, categoryFilter) {
  cards.forEach((card) => {
    const bookId = card.dataset.bookId;
    const book = getBookById(bookId);
    const title = (book.title || '').toLowerCase();
    const author = (book.author || '').toLowerCase();
    const category = (book.category || '').toLowerCase();
    const rawText = `${title} ${author} ${category}`;
    const matchesQuery = !query || rawText.includes(query);
    const matchesCategory = !categoryFilter || book.categoryKey === categoryFilter;
    const parent = card.closest('a') || card;
    parent.style.display = matchesQuery && matchesCategory ? '' : 'none';
  });
}

function initializeLoginPage() {
  const btnMasuk = document.getElementById('btn-masuk');
  const usernameInput = document.getElementById('username-email');
  const passwordInput = document.getElementById('password');

  if (btnMasuk) {
    btnMasuk.addEventListener('click', () => {
      const username = (usernameInput?.value || '').trim();
      const password = (passwordInput?.value || '').trim();

      if (!username || !password) {
        alert('Silakan isi username/email dan password terlebih dahulu.');
        return;
      }

      setUserName(username.includes('@') ? username.split('@')[0] : username);
      window.location.href = 'dashboard.html';
    });
  }
}

function initializeDashboardPage() {
  const user = getStoredUser();
  const displayName = user.name || 'M.Rafli';

  const namaPengguna = document.getElementById('nama-pengguna');
  const sapaanPengguna = document.getElementById('sapaan-pengguna');
  if (namaPengguna) namaPengguna.textContent = displayName;
  if (sapaanPengguna) sapaanPengguna.textContent = `Halo, ${displayName}`;

  const searchInput = document.getElementById('input-pencarian');
  const cards = [...document.querySelectorAll('.buku-item')];

  const applyFilter = () => {
    const query = (searchInput?.value || '').trim().toLowerCase();
    filterVisibleCards(cards, query, '');
  };

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  cards.forEach((card) => {
    const bookId = card.dataset.bookId;
    if (!bookId) return;

    const clickable = card.closest('a') || card;
    clickable.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = `detail-buku.html?book_id=${bookId}`;
    });
  });

  document.querySelectorAll('.kategori-box').forEach((card) => {
    card.addEventListener('click', () => {
      const categoryId = card.dataset.categoryId || '';
      window.location.href = `buku.html?category=${categoryId}`;
    });
  });

  const notifButton = document.getElementById('btn-notifikasi');
  if (notifButton) {
    notifButton.addEventListener('click', () => {
      window.location.href = 'notif.html';
    });
  }
}

function initializeBukuPage() {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category') || '';
  const selectKategori = document.getElementById('select-kategori');
  const searchInput = document.getElementById('input-pencarian-buku');
  const cards = [...document.querySelectorAll('.buku-item')];

  if (selectKategori) {
    selectKategori.value = categoryParam;
  }

  const applyFilters = () => {
    const category = selectKategori?.value || '';
    const query = (searchInput?.value || '').trim().toLowerCase();
    filterVisibleCards(cards, query, category);
  };

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  if (selectKategori) {
    selectKategori.addEventListener('change', applyFilters);
  }

  cards.forEach((card) => {
    const bookId = card.dataset.bookId;
    if (!bookId) return;

    const clickable = card.closest('a') || card;
    clickable.addEventListener('click', (event) => {
      event.preventDefault();
      const destination = `detail-buku.html?book_id=${bookId}`;
      window.location.href = destination;
      renderPreviewBook(bookId);
    });
  });

  const previewBookId = params.get('book_id');
  if (previewBookId) {
    renderPreviewBook(previewBookId);
  } else if (cards.length) {
    renderPreviewBook(cards[0].dataset.bookId);
  }
}

function renderPreviewBook(bookId) {
  const book = getBookById(bookId);
  const titleEl = document.getElementById('detail-buku-title');
  const imageEl = document.querySelector('#detail-buku-gambar img');
  const emptyState = document.getElementById('detail-buku-kosong');

  if (titleEl) titleEl.textContent = book.title;
  if (imageEl) {
    imageEl.src = book.cover;
    imageEl.alt = book.title;
  }
  if (emptyState) {
    emptyState.style.display = 'none';
  }
}

function initializeDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const bookId = params.get('book_id') || 'B009';
  const book = getBookById(bookId);

  const elements = {
    title: document.getElementById('book-title'),
    author: document.getElementById('book-author'),
    rating: document.getElementById('book-rating'),
    reviews: document.getElementById('book-reviews'),
    category: document.getElementById('book-category'),
    publisher: document.getElementById('book-publisher'),
    year: document.getElementById('book-year'),
    isbn: document.getElementById('book-isbn'),
    description: document.getElementById('book-description'),
    cover: document.getElementById('book-cover'),
    detail: document.getElementById('detail-buku')
  };

  if (elements.detail) elements.detail.setAttribute('data-book-id', book.id);
  if (elements.title) elements.title.textContent = book.title;
  if (elements.author) elements.author.textContent = book.author;
  if (elements.rating) elements.rating.textContent = `${book.rating}`;
  if (elements.reviews) elements.reviews.textContent = `(${book.reviews} ulasan)`;
  if (elements.category) elements.category.textContent = book.category;
  if (elements.publisher) elements.publisher.textContent = book.publisher;
  if (elements.year) elements.year.textContent = book.year;
  if (elements.isbn) elements.isbn.textContent = book.isbn;
  if (elements.description) elements.description.textContent = book.description;
  if (elements.cover) {
    elements.cover.src = book.cover;
    elements.cover.alt = book.title;
  }

  const btnBaca = document.getElementById('btn-baca-buku');
  if (btnBaca) {
    btnBaca.addEventListener('click', () => {
      const user = getStoredUser();
      alert(`Buku "${book.title}" siap dibaca oleh ${user.name || 'pengguna'}.`);
      window.location.href = 'dashboard.html';
    });
  }

  const btnAturWaktu = document.getElementById('btn-atur-waktu');
  if (btnAturWaktu) {
    btnAturWaktu.addEventListener('click', () => {
      const schedule = { bookId: book.id, title: book.title, date: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEYS.schedule, JSON.stringify(schedule));
      alert(`Waktu baca untuk "${book.title}" sudah diatur.`);
      window.location.href = 'waktu.html';
    });
  }

  const btnFavorit = document.getElementById('btn-favorit');
  if (btnFavorit) {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(book.id);
    btnFavorit.textContent = isFavorite ? '♥' : '♡';
    btnFavorit.setAttribute('data-book-id', book.id);

    btnFavorit.addEventListener('click', () => {
      const isNowFavorite = toggleFavorite(book.id);
      btnFavorit.textContent = isNowFavorite ? '♥' : '♡';
      btnFavorit.title = isNowFavorite ? 'Hapus dari favorit' : 'Tambah ke favorit';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || '';

  if (page === 'login') initializeLoginPage();
  if (page === 'dashboard') initializeDashboardPage();
  if (page === 'buku') initializeBukuPage();
  if (page === 'detail') initializeDetailPage();
});
