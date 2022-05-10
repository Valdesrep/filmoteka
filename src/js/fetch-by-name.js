import notiflix from './notiflix';
import renderPopularFilmCards from './renderPopularFilmCards';
import getData from './getData';
import saveConfiguration from './saveConfiguration';
import configuration from './configuration';


let filmToFind;

const refs = {
  btnSrch: document.querySelector('.search-field__btn'),
  inpSrch: document.querySelector('.search-field__input'),
  container: document.querySelector('.movies'),
};

refs.btnSrch.addEventListener('click', onBtn);
refs.inpSrch.addEventListener('input', onInput);
function onInput() {
  filmToFind = refs.inpSrch.value.trim();
  return filmToFind;
}

async function onBtn(event) {
  event.preventDefault();
  MovieClear();
  notiflix.onLoadingleAdd();
  showGallery();
  notiflix.onLoadingRemove();
}

function MovieClear() {
  refs.container.innerHTML = '';
}
function showGallery() {
  renderNameFilms();
}
const options = {
  root: null,
  key: 'api_key=306e564986f0782b8ec4bf227b0f3c28',
  searchResults: {},
  base_url: 'none',
  poster_size: '',
  backdrop_sizes: [],
  genres: [],
  nameUrl: 'https://api.themoviedb.org/3/search/movie?',
  popularFilmsUrl: 'https://api.themoviedb.org/3/trending/movie/week?',
  configUrl: 'https://api.themoviedb.org/3/configuration?',
  genresUrl: 'https://api.themoviedb.org/3/genre/movie/list?',
};

options.root = document.querySelector('.movies');


async function renderNameFilms() {
  try {
    await saveConfiguration()
    const { data } = await getData(options.nameUrl + options.key + '&query=' + filmToFind);
    options.searchResults = data;
  } catch (error) {
    console.error('error is: ', error);
  }

  options.base_url = configuration.base_url;
  options.poster_size = configuration.poster_size;

  try {
    const { data } = await getData(options.genresUrl + options.key);
    options.genres = data.genres;
  } catch (error) {
    console.error('error is: ', error);
  }

  renderPopularFilmCards(options);
}