import { options } from "../static";

export default class UpcomingService {
  async getUpcoming(){
    try {
      const result = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=ru', options);
      if (!result.ok) {
        throw new Error("Данные не найдены");
      }
      const data = await result.json();
      const arrayWithPhoto = data.results.filter(movie => movie.backdrop_path != null)
      return arrayWithPhoto
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
  
}