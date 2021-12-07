import React from "react";
import Button from "./button/Button";

const FormCreateAnime = ({addAnime}) => {
  const [values, setValues] = React.useState({
    title: "Anime Title",
    image: "DemonSlayer.png",
    description: "Description of the anime",
  });

  const createAnime = (event) => {
    event.preventDefault();
    const anime = {
      title: values.title,
      image: values.image,
      description: values.description,
      year: values.year,
    };
    addAnime(anime);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name:: ", name, " value:: ", value);
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h3>Anime Form</h3>
      <form onSubmit={createAnime}>
        <input
          type="text"
          placeholder="Anime title"
          value={values.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Anime image"
          value={values.image}
          name="image"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Anime description"
          name="description"
          onChange={handleInputChange}
          value={values.description}
        />
        <input
          type="text"
          placeholder="Anime year"
          value={values.year}
          name="year"
          onChange={handleInputChange}
        />

        <Button type="submit">Add Anime</Button>
      </form>
    </div>
  );
};

export default FormCreateAnime;
