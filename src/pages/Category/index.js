import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
// import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);

  const initialValue = {
    title: '',
    description: '',
    color: '#000000',
  };

  const { values, handleChange, clearForm } = useForm(initialValue);

  const handleSubmitCategory = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);

    clearForm(initialValue);
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://devlohanflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const parsedResponse = await response.json();
          setCategories([...parsedResponse]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmitCategory}>

        <FormField
          label="Título da Categoria"
          type="text"
          name="name"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
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

export default Category;
