export default function renderFilmCard({ root, base_url, poster_size, movie, genresList, page }) {
  const { id, title, poster_path, vote_average, release_date } = movie;
  root.insertAdjacentHTML(
    'beforeend',
    `
    <div class="movie" data-id="${id}">
      <img
        class="movie__cover"
        src="${base_url}${poster_size}${poster_path}"
        alt="${title}"
      />
      <h2 class="card-preview-info__name">${title}</h2>
      <div class="card-preview-info">
        <p class="card-preview-info__data">${genresList.slice(0, 2).join(', ')} | ${parseInt(release_date)}</p>
        <span class="card-preview-info__rating">${vote_average}</span>
      </div>
    </div>`,
  );
}