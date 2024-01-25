import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_KjUOTxpouYppo9Ng5UJyamdaD8xBhIN3LJWEJA1FyX6VZH6DnC2BhI0Cgoy0gAot";

/**
 * Fetches all cat breeds
 * @returns {Promise<AxiosResponse<any>>}
 */
function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds');
  }
  
  /**
   * Fetches a cat by breed
   * @param {string} breedId
   * @returns {Promise<AxiosResponse<any>>}
   */
  function fetchCatByBreed(breedId) {
    const query = new URLSearchParams({ breed_ids: breedId });
    return axios.get(`https://api.thecatapi.com/v1/images/search?${query}`);
  }
  
  export { fetchBreeds, fetchCatByBreed };