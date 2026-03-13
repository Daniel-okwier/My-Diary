import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api/ai",
  withCredentials: true
})

export const enhanceEntry = async (text, tone="reflective") => {
  const res = await API.post("/enhance", { text, tone })
  return res.data.enhanced
}

export const generateTitle = async (text) => {
  const res = await API.post("/title", { text })
  return res.data.title
}

export const generateSummary = async (text) => {
  const res = await API.post("/summary", { text })
  return res.data.summary
}

export const detectMood = async (text) => {
  const res = await API.post("/mood", { text })
  return res.data.mood
}