import axios from 'axios';
import { toast } from 'react-hot-toast';

export async function getDataByAxios(
  ENDPOINT,
  paginationPage = 1,
  searchText = ''
) {
  try {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const MY_THEMOVIEDB_API_KEY = '6dfafd08c001fd3262dc3fe23504fa05';
    let URL = BASE_URL + ENDPOINT + `?api_key=${MY_THEMOVIEDB_API_KEY}`;

    if (searchText) {
      URL = URL + `&query=${searchText.trim()}`;
    }
    if (paginationPage) {
      URL = URL + `&page=${paginationPage}`;
    }
    const resp = await axios.get(URL);
    return resp;
  } catch (error) {
    toast.error(error.message);
  }
}
