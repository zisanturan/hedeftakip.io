document.addEventListener("DOMContentLoaded", () => {
  const hedefSayisiElement = document.getElementById("hedefSayisi");
  const kalanTutarElement = document.getElementById("kalanTutar");
  const hedefAzaltButton = document.getElementById("hedefAzalt");
  const hedefArtirButton = document.getElementById("hedefArtir");
  const hedefSayisiKey = "hedefSayisi";
  const kalanTutarKey = "kalanTutar"; // Yeni eklenen kalan tutar anahtarı
  const hedefPaketFiyati = 63; // Her paketin fiyatı

  let hedefSayisi = localStorage.getItem(hedefSayisiKey)
    ? parseInt(localStorage.getItem(hedefSayisiKey))
    : 1500;
  let kalanTutar = localStorage.getItem(kalanTutarKey)
    ? parseInt(localStorage.getItem(kalanTutarKey))
    : hedefSayisi * hedefPaketFiyati; // Yeni kalan tutar hesaplanıyor

  const guncelleHedefSayisi = () => {
    hedefSayisiElement.textContent = hedefSayisi;
    if (hedefSayisi === 0) {
      alert("Hedefe ulaştınız!");
    }
  };

  // Sayfa yüklendiğinde localStorage'dan hedefSayisi ve kalanTutar'ı alarak güncelle
  if (localStorage.getItem(hedefSayisiKey)) {
    hedefSayisi = parseInt(localStorage.getItem(hedefSayisiKey));
  }
  if (localStorage.getItem(kalanTutarKey)) {
    kalanTutar = parseInt(localStorage.getItem(kalanTutarKey));
  }

  guncelleHedefSayisi();
  kalanTutarElement.textContent = `${kalanTutar} TL`;

  hedefAzaltButton.addEventListener("click", () => {
    if (hedefSayisi > 0) {
      hedefSayisi -= 1;
      kalanTutar = hedefSayisi * hedefPaketFiyati; // Yeni kalan tutarı hesapla
      localStorage.setItem(hedefSayisiKey, hedefSayisi);
      localStorage.setItem(kalanTutarKey, kalanTutar); // Yeni kalan tutarı localStorage'a kaydet
      guncelleHedefSayisi();
      kalanTutarElement.textContent = `${kalanTutar} TL`;
    }
  });

  hedefArtirButton.addEventListener("click", () => {
    hedefSayisi += 1;
    kalanTutar = hedefSayisi * hedefPaketFiyati; // Yeni kalan tutarı hesapla
    localStorage.setItem(hedefSayisiKey, hedefSayisi);
    localStorage.setItem(kalanTutarKey, kalanTutar); // Yeni kalan tutarı localStorage'a kaydet
    guncelleHedefSayisi();
    kalanTutarElement.textContent = `${kalanTutar} TL`;
  });
});
