const CACHE_NAME = "cr-cache-v1";
const CACHE_URLS = [
	"/static/bundle.js",
	"/index.html",
	"/static/images/sprites.jpg",
];

this.addEventListener("install", (event) => {
	console.log("install");
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => {
				console.log("Opened cache");
				return cache.addAll(CACHE_URLS);
			})
			.catch((err) => {
				console.log(err);
				throw err;
			})
	);
});

this.addEventListener("activate", (event) => {
	console.log("activate");
});

this.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}

			console.log(response);

			const fetchRequest = event.request;

			return fetch(fetchRequest).then((response) => {
				if (!response || response.status !== 200 || response.type !== "basic") {
					return response;
				}

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, response.clone());
				});

				return response;
			});
		})
	);
});
