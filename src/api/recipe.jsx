// サーバーにaxiosでリクエスト
import axios from "axios";

const ENDPOINT_URL = "http://localhost:8080/api/recipe";

const recipeApi = {
  async get(id) {
    const result = await axios.get(ENDPOINT_URL + "/" + id);
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
	async delete(recipe) {
		const result = await axios.delete(ENDPOINT_URL + "/" + recipe._id);
		return result.data
	}
};

export default recipeApi
