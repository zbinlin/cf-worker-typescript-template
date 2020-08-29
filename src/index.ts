import handleEvent from "./handler";

self.addEventListener("fetch", (event: FetchEvent): void => {
    event.respondWith(handleEvent(event));
});
