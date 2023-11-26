import { options } from "../static";

export default class PopularService {
  async getPopular(type, page=1){
    try {
      const result = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=ru&page=${page}`, options);
       if (!result.ok) {
        throw new Error("Данные не найдены");
      }
      const data = await result.json();
      const array = data.results.filter(movie => movie.poster_path != null)
      return {
        type, 
        array, 
        totalPages: data.total_pages
      }
    } catch (error) {
      throw error;
    }
  }
  
}