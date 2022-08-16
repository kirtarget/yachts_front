import axios from "axios"
import { useState } from "react"
import { useContext } from "react"
import YachtContext from "../utils/yachts-context"

function useFetch() {
  const ctx = useContext(YachtContext)

  const [yachtsList, setYachtsList] = useState(ctx.yachts)
  const [locations, setLocations] = useState(ctx.locations)
  const [countries, setCountries] = useState(ctx.countries)
  const [regions, setRegions] = useState(ctx.regions)
  const [isFetching, setIsFetching] = useState(false)

  async function getData() {
    const instance = axios.create({
      baseURL: "https://yachts-back.herokuapp.com",
    })
    setIsFetching(true)
    const yachts = await instance.get("/api/yachts")
    setYachtsList(yachts.data)

    const location = await instance.get("/api/locations")
    setLocations(location.data)

    const region = await instance.get("/api/region")
    setRegions(region.data)

    const countries = await instance.get("/api/country")
    setCountries(countries.data)

    setIsFetching(false)
  }
  return { yachtsList, locations, countries, regions, isFetching, getData }
}

export default useFetch
