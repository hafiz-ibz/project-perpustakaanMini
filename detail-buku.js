const params = new URLSearchParams(window.location.search);

const bookId = params.get("book_id");

const detailBuku = document.getElementById("detail-buku");
const tombolBaca = document.getElementById("btn-baca-buku");
const tombolFavorit = document.getElementById("btn-favorit");

if (bookId) {
    detailBuku.setAttribute("data-book-id", bookId);

    tombolBaca.setAttribute("data-book-id", bookId);

    tombolFavorit.setAttribute("data-book-id", bookId);
}

//17