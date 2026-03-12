import Home from './src/home.js'
import Search from './src/search.js'
import Anime from './src/anime.js'

export default {
  async fetch(request) {

    const url = new URL(request.url)
    const path = url.pathname

    if (path === "/latest") {
      const data = await Home.latest_series()
      return Response.json(data)
    }

    if (path === "/search") {
      const q = url.searchParams.get("q")
      const data = await Search.default_search(q)
      return Response.json(data)
    }

    return new Response("Worker running")
  }
}
