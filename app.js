import { API } from "./scripts/api.js";
import { renderCards, ele, renderPlayingInfo, renderLoader } from "./scripts/ui.js";

//* classın örneğini oluşturma
const api = new API();
document.addEventListener("DOMContentLoaded", async () => {
    renderLoader()
  await api.getPopular();
  renderCards(api.songs);
  // console.log(api);
  // searchRenderCards()
});

// müzik listesindeki tıklanma olaylarını izler
ele.list.addEventListener("click", (e) => {
  if (e.target.id === "play-btn") {
    //* oynat butonuna en yakın .card elemanı alma
    const parent = e.target.closest(".card");

    //* mü-ziğin bilgilerini ekrana basma
    renderPlayingInfo(parent.dataset);
  }
});

//*arama formu gönderildiğinde

ele.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //* aratılan kelimeye erişme
  const query = e.target[0].value;
  //* form boşsa fonk dursun
  if(!query)return ;
renderLoader()
  //*başlığı güncelleme
ele.title.innerHTML= `${query} için sonuçlar ..`
//* apiden sarkıları alma
api.searchMusic(query)
});
