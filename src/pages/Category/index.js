import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
// import { Link } from 'react-router-dom';

const Video = () => {
  const [categories, setCategories] = useState([]);

  const initialValue = {
    title: '',
    description: '',
    color: '#000000',
  };

  const [category, setCategory] = useState(initialValue);

  const setValue = (key, value) => {
    setCategory({
      ...category,
      [key]: value,
    });
  };

  const handleSubmitCategory = (event) => {
    event.preventDefault();
    setCategories([...categories, category]);
    setCategory(initialValue);
  };

  const handleChange = ({ target }) => {
    setValue(target.getAttribute('name'), target.value);
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const parsedResponse = await response.json();
            setCategories([...parsedResponse]);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmitCategory}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={category.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((cat) => (
          <li key={`${cat.id}`}>
            {cat.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default Video;
