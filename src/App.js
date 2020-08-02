import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Image from './components/Image';
import { Grid, GridTile, AppLayout, Heading, Intro } from './styles/AppStyles';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('/images?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <>
      <AppHeader />
      <AppLayout>
        <Heading>Cars gallery</Heading>
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vestibulum odio enim, id tempor velit aliquet quis.
        </Intro>
        <Grid>
          {images &&
            images.map((img) => (
              <GridTile key={img.id}>
                <Image img={img} />
              </GridTile>
            ))}
        </Grid>
      </AppLayout>
      <Form />
      <AppFooter />
    </>
  );
};

export default App;
