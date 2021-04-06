// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches2';
var urlsToCache = [
    '/pwa-test/',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});

// push 通知の待ち受け
self.addEventListener('push', function(event) {
  const title = 'Push されました！';
  const options = {
    body: event.data.text(),
    icon: 'icon-192x192.png',
    badge: 'icon-512x512.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
