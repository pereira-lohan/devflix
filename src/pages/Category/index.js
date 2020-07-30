import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
// import { Link } from 'react-router-dom';

const Video = () => {
  const [categories, setCategories] = useState([]);

  const initialValue = {
    name: '',
    description: '',
    color: '#000000'
  }

  const [category, setCategory] = useState(initialValue);

  const setValue = (key, value) => {
    setCategory({
      ...category,
      [key]: value
    });
  };

  const handleSubmitCategory = (event) =>{
    event.preventDefault();
    setCategories([...categories, category]);
    setCategory(initialValue);
  };

  const handleChange = ({target}) => {
    setValue(target.getAttribute('name'), target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmitCategory}>

        <FormField
          label='Nome da Categoria:'
          type='text'
          name='name'
          value={category.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type='text'
              name='description'
              value={category.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label='Cor:'
          type='color'
          name='color'
          value={category.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((cat, index) => (
          <li key={`${cat.name}${index}`}>
            {cat.name}
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
