import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';
import categoriesRepository from '../../repositories/categories';

const Video = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitle = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    categories: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then(((categoriesResponse) => {
        setCategories(categoriesResponse);
      }));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoryId = categories.find((category) => category.title === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="name"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          type="url"
          name="url"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
};

export default Video;
