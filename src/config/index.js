const BASE_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devlohanflix.herokuapp.com';

export default {
  BASE_URL,
};
