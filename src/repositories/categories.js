import config from '../config';

const URL_CATEGORIES = `${config.BASE_URL}/categories`;

const getAllCategoriesWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (response) => {
    if (response.ok) {
      const parsedResponse = await response.json();

      return parsedResponse;
    }
    throw new Error('Não foi possível carregar os dados');
  });

const getAll = () => fetch(URL_CATEGORIES)
  .then(async (response) => {
    if (response.ok) {
      const parsedResponse = await response.json();

      return parsedResponse;
    }

    throw new Error('Não foi possível carregar os dados');
  });

export default {
  getAllCategoriesWithVideos,
  getAll,
};
