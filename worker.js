import Home from "./src/home.js"
import Search from "./src/search.js"

export default {
  async fetch(request) {

    const url = new URL(request.url)
    const path = url.pathname

    if (path === "/latest") {
      const data = await Home.latest_series()
      return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json" }
      })
    }

    if (path === "/search") {
      const q = url.searchParams.get("q")
      const data = await Search.default_search(q)

      return new Response(JSON.stringify(data), {
        headers: { "content-type": "application/json" }
      })
    }

    return new Response("API Running")
  }
}
