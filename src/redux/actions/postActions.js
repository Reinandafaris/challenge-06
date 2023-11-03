import axios from 'axios';
import { setPostDetails, setPosts, setSearchResults } from '../reducers/postReducers';
import { toast } from 'react-toastify';

const token = localStorage.getItem('token');

// Function to get all the posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/v1/movie/popular`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a post
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/v1/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setPostDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to search for movies
export const searchMovies = (search) => async (dispatch) => {
  if (search.trim() === '') {
    return;
  }

  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/v1/search/movie?page=1&query=${search}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setSearchResults(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
