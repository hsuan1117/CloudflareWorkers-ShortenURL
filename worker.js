/*Credit: https://github.com/xyTom/Url-Shorten-Worker*/

async function handleRequest(request) {
    if (request.method === "OPTIONS") {
        return new Response(``, {
            headers: {
                "content-type": "text/html;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
        })
    }

    const requestURL = new URL(request.url)
    const path = requestURL.pathname.split("/")[1]

    if (!path) {
        return new Response.redirect("https://hsuan.app", 302)
    }
    const location = await LINKS.get(path)
    if (location) {
        return Response.redirect(location, 302)
    }
    return new Response.redirect("https://hsuan.app", 302)
}


addEventListener("fetch", async event => {
    event.respondWith(handleRequest(event.request))
})
