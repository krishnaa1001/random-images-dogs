import axios from 'axios';

const DOG_API_URL = 'https://api.thedogapi.com/v1';
const DOG_API_SEARCH = `${DOG_API_URL}/images/search`;
const DOG_API_BREEDS = `${DOG_API_URL}/breeds`;

export const fetchRandomDogImages = async (count = 1) => {
  try {
    const response = await axios.get(DOG_API_SEARCH, {
      params: { limit: count }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching dog images:', error);
    throw error;
  }
};

export const fetchDogBreeds = async () => {
  try {
    const response = await axios.get(DOG_API_BREEDS);
    return response.data;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    throw error;
  }
};

export const fetchDogImagesByBreed = async (breedId, count = 1) => {
  try {
    const response = await axios.get(DOG_API_SEARCH, {
      params: { breed_id: breedId, limit: count }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching dog images by breed:', error);
    throw error;
  }
};

