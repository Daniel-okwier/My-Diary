import api from "./api"

export const createEntry = async (data) => {

  const res = await api.post("/entries", data)

  return res.data

}

export const getEntries = async () => {

  const res = await api.get("/entries")

  return res.data

}

export const getEntryById = async (id) => {

  const res = await api.get(`/entries/${id}`)

  return res.data

}