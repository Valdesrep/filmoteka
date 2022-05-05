export default function createHomeHeaderMarkup(img) {
  return `<div class="container">
    <nav>
      <div class="nav__wrap">
        <div class="logo">
          <svg width="24px" height="24px" class="logo__icon">
            <use xlink:href="/sprite.5ec50489.svg#logo"></use>
          </svg>
          <p class="logo__text">Filmoteka</p>
        </div>
        <ul class="nav__list list">
          <li class="nav__item nav__item--current">Home</li>
          <li class="nav__item">My library</li>
        </ul>
      </div>
      <div class="search-field">
        <span class="search-field__wrap">
          <input class="search-field__input" placeholder="Поиск фильмов" />
          <div class="search-field__icon--wrap">
            <svg width="12px" height="12px" class="search-field__icon">
              <use href="/sprite.5ec50489.svg#search"></use>
            </svg>
          </div>
        </span>
      </div>
    </nav>
  </div>`;
}
