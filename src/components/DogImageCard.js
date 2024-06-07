import React from 'react';
import { Card, CardMedia } from '@mui/material';

const DogImageCard = ({ imageUrl }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="Dog"
      />
    </Card>
  );
};

export default DogImageCard;

