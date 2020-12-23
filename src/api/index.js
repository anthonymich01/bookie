import axios from "axios"

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books"
const GOOGLE_API_KEY = "AIzaSyBDSEJGwpd38LRT9_b11ZtVPapiXwop66Y"

const api = axios.create({
  baseURL: GOOGLE_BOOKS_API_URL
})

export const getBooks = (q, limit, offset) => {
  return api.get("/v1/volumes", {
    params: {
      key: GOOGLE_API_KEY,
      q,
      maxResults: limit,
      startIndex: offset
    }
  })
}
