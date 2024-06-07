import React from 'react';
import { Grid } from '@mui/material';
import DogImageCard from './DogImageCard';

const ImageGrid = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <DogImageCard imageUrl={image.url} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;

