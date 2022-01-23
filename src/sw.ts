import assets from '../assets.json';

const CACHE_NAME = 'cr-cache-v1';
const CACHE_URLS = [
    '/index.html',
    '/images/sprites.jpg',
    `${assets.main.js}`
];

self.addEventListener("install", (event: any) => {
    console.log("install");
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
          console.log("Opened cache");
          return cache.addAll(CACHE_URLS);
        })
        .catch(err => { 
          console.log(err);
          throw err;
        })
    );
});

self.addEventListener("activate", (event: any) => {
    console.log("activate");
});

self.addEventListener('fetch', (event: any) => { 
    event.respondWith( 
        caches.match(event.request) 
            .then(response => { 
                if (response) { 
                    return response; 
                }

                const fetchRequest = event.request.clone();

                return fetch(fetchRequest) 
                    .then(response => { 
                        if(!response || response.status !== 200 || response.type !== 'basic') { 
                            return response; 
                        } 

                        caches.open(CACHE_NAME) 
                            .then(cache => {
                                cache.put(event.request, response.clone()); 
                            });

                        return response; 
                    }); 
            })
    ); 
});
