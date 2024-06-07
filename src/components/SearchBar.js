import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography, MenuItem } from '@mui/material';
import { fetchDogBreeds } from '../api/dogApi';

const SearchBar = ({ onSearch }) => {
  const [count, setCount] = useState(1);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      const breedList = await fetchDogBreeds();
      setBreeds(breedList);
    };
    fetchBreeds();
  }, []);

  const handleSearch = () => {
    onSearch(count, selectedBreed);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6">Enter Number of Dog Images to Search or Select Breed</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type="number"
          label="Number of Images"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          inputProps={{ min: 1 }}
          style={{ width: '100%', height: '56px' }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          fullWidth
          label="Select Breed"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
          style={{ width: '100%', height: '56px' }}
        >
          <MenuItem value="">None</MenuItem>
          {breeds.map((breed) => (
            <MenuItem key={breed.id} value={breed.id}>
              {breed.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ height: '56px' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
