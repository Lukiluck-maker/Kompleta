const CACHE_NAME = 'kompleta-cache-v1';
const urlsToCache = [
  '/',
  '/Kompleta/', // Główna ścieżka strony
  '/Kompleta/index.html',
  '/Kompleta/style.css',
  '/Kompleta/script.js',
  '/Kompleta/audio/Wezwanie.m4a'
  '/Kompleta/images/Wezwanie.png'
  '/Kompleta/audio/Akt pokuty.m4a'
  '/Kompleta/images/Akt pokuty III.png'
  '/Kompleta/audio/Modlitwa do aktu pokuty.m4a'
  '/Kompleta/images/Modlitwa do aktu pokuty.png'
  '/Kompleta/images/Hymn.png'
  '/Kompleta/images/Psalm 4.png'
  '/Kompleta/images/Psalm 134.png'
  '/Kompleta/images/Responsorium krótkie.png'
  '/Kompleta/images/Pieśń Symeona.png'
  '/Kompleta/images/Modlitwa końcowa.png'
  '/Kompleta/images/Antyfona Witaj Królowo.png'
  '/Kompleta/audio/Hymn.m4a'
  '/Kompleta/audio/Antyfona 1. i psalm 4..m4a'
  '/Kompleta/audio/Antyfona 2. i psalm 134..m4a'
  '/Kompleta/audio/Responsorium krótkie.m4a'
  '/Kompleta/audio/Antyfona i pieśń Symeona.m4a'
  '/Kompleta/audio/Modlitwa końcowa.m4a'
  '/Kompleta/audio/Antyfona maryjna.m4a'
  '/Kompleta/images/Pieśni.png'
  '/Kompleta/images/Laus Deo.png'
  // Dodaj tutaj ścieżki do wszystkich plików audio, obrazów, czcionek, itp.
];

// Instalacja service workera
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Przechwytywanie żądań
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
