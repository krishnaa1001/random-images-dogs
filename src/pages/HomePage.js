import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ImageGrid from '../components/ImageGrid';
import { fetchRandomDogImages, fetchDogImagesByBreed } from '../api/dogApi';

const HomePage = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (count, breedId) => {
    let fetchedImages;
    if (breedId) {
      fetchedImages = await fetchDogImagesByBreed(breedId, count);
    } else {
      fetchedImages = await fetchRandomDogImages(count);
    }
    setImages(fetchedImages);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dog Image Search
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <ImageGrid images={images} />
    </Container>
  );
};

export default HomePage;
