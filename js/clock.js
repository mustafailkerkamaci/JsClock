// Kullanıcıdan isim isteyen fonksiyon
function askName() {
  const name = prompt("Lütfen adınızı girin:");
  const nameSpan = document.getElementById("myName");

  // Eğer isim yazmazsa "Ziyaretçi" yazsın
  if (name && name.trim() !== "") {
    nameSpan.textContent = name.trim();
  } else {
    nameSpan.textContent = "Ziyaretçi";
  }
}

// Saati güncelleyen fonksiyon
function showTime() {
  const clock = document.getElementById("myClock");
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // 2 haneli yaz (09:05:03 gibi)
  h = h.toString().padStart(2, "0");
  m = m.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");

  clock.textContent = `${h}:${m}:${s}`;
}

// Sayfa açılınca önce isim sor, sonra saati başlat
askName();
showTime();
setInterval(showTime, 1000);
