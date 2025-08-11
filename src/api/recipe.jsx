// サーバーにaxiosでリクエスト
import axios from "axios";

const ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL

const recipeApi = {
  async get(id) {
    const result = await axios.get(`${ENDPOINT_URL}/${id}`);
    return result.data;
  },
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async post(recipe) {
    const result = await axios.post(ENDPOINT_URL, recipe);
    return result.data;
  },
	async delete(id) {
		const result = await axios.delete(`${ENDPOINT_URL}/${id}`);
		return result.data
	}
};

export default recipeApi
