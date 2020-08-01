import config from '../config';

const URL_VIDEOS = `${config.BASE_URL}/videos`;

const create = (objetoDoVideo) => fetch(URL_VIDEOS, {
  method: 'POST,',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objetoDoVideo),
})
  .then(async (response) => {
    if (response.ok) {
      const parsedResponse = await response.json();

      return parsedResponse;
    }
    throw new Error('Não foi possível carregar os dados');
  });

export default {
  create,
};
