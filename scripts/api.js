import { url, options } from "./constants.js";
import { renderCards, renderLoader } from "./ui.js";
//*data çekme işlemleri
export class API {
  constructor() {
    this.songs = [];
    this.search = [];
  }
  //*popüler müzikleri getir
  async getPopular() {
    try {
      //* api isteği atar
      const res = await fetch(url, options);
      const data = await res.json();
      //* class ta tuttuğumuz değişkeni günceller
      this.songs = data.tracks;
      // console.log(this.songs);
    } catch (err) {
      console.log("Popular verileri alırken hata oluştu", err);
    }
  }

  //* aratılan içeriğe erişme
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=TR&offset=0&limit=20`,
      options
    );
    const data = await res.json();
    //*bize gelen dizi işlenip
    //* objelerin içindeki track katmanını kaldırıcaz
    // console.log("eski hali", data.tracks.hits);
    const newData = data.tracks.hits.map((song) => ({
      ...song.track
    }));
renderCards(newData)
  }
}
