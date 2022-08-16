import YachtItem from "./YachtItem"
import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const YachtCatalog = () => {
  const { yachtsList, locations, countries, regions, isFetching, getData } =
    useFetch()

  useEffect(() => {
    getData()
  }, [])

  let filteredList = yachtsList

  if (isFetching) return <div>Загрузка...</div>

  return (
    <div>
      {filteredList.map((yacht) => {
        let [locationProp] = locations.filter((l) => yacht.locationId === l.id)
        let [regionProp] = regions.filter((r) => locationProp.regionId === r.id)
        let [countryProp] = countries.filter(
          (c) => regionProp.countryId === c.id
        )
        return (
          <YachtItem
            key={yacht.id}
            name={yacht.name}
            buildYear={yacht.buildYear}
            location={locationProp.name.textRU}
            img={yacht.mainPictureUrl}
            region={regionProp.name.textRU}
            country={countryProp.name.textRU}
          />
        )
      })}
    </div>
  )
}

export default YachtCatalog
