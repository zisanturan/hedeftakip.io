document.addEventListener("DOMContentLoaded", () => {
  const hedefSayisiElement = document.getElementById("hedefSayisi");
  const kalanTutarElement = document.getElementById("kalanTutar");
  const hedefAzaltButton = document.getElementById("hedefAzalt");
  const hedefArtirButton = document.getElementById("hedefArtir");
  const hedefSayisiKey = "hedefSayisi";
  const hedefPaketFiyati = 63; // Her paketin fiyatı

  let hedefSayisi = localStorage.getItem(hedefSayisiKey)
    ? parseInt(localStorage.getItem(hedefSayisiKey))
    : 1500;

  const guncelleHedefSayisi = () => {
    hedefSayisiElement.textContent = hedefSayisi;
    if (hedefSayisi === 0) {
      alert("Hedefe ulaştınız!");
    }
  };

  // Sayfa yüklendiğinde localStorage'dan hedefSayisi'ni alarak güncelle
  if (localStorage.getItem(hedefSayisiKey)) {
    hedefSayisi = parseInt(localStorage.getItem(hedefSayisiKey));
  }

  guncelleHedefSayisi();

  // Sayfa yüklendiğinde, eğer hedefSayisi 1400 ise kalanTutarı 90000 TL olarak ayarla
  if (hedefSayisi === 1400) {
    const kalanTutar = 88200;
    kalanTutarElement.textContent = `${kalanTutar} TL`;
  }

  hedefAzaltButton.addEventListener("click", () => {
    if (hedefSayisi > 0) {
      hedefSayisi -= 1;
      const kalanTutar = hedefSayisi * hedefPaketFiyati; // Yeni kalan tutarı hesapla
      localStorage.setItem(hedefSayisiKey, hedefSayisi); // Her azaltma işlemi sonrası hedefSayisi'ni localStorage'a kaydet
      guncelleHedefSayisi();
      kalanTutarElement.textContent = `${kalanTutar} TL`;
    }
  });

  hedefArtirButton.addEventListener("click", () => {
    hedefSayisi += 1;
    const kalanTutar = hedefSayisi * hedefPaketFiyati; // Yeni kalan tutarı hesapla
    localStorage.setItem(hedefSayisiKey, hedefSayisi); // Her artırma işlemi sonrası hedefSayisi'ni localStorage'a kaydet
    guncelleHedefSayisi();
    kalanTutarElement.textContent = `${kalanTutar} TL`;
  });
});
