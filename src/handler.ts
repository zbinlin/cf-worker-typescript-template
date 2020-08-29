/**
 * Respond with hello worker text
 * @param {FetchEvent} event
 */
export default async function handleEvent(event: FetchEvent): Promise<Response> {
    const { request } = event;
    const { url } = request;
    return new Response(`Hello worker! ${url}`, {
        headers: {
            "content-type": "text/plain",
        },
    });
}

