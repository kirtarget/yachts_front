import YachtItem from "./YachtItem"
import { useEffect, useState, useContext } from "react"
import useFetch from "../hooks/useFetch"
import YachtFullCard from "./YachtFullCard"
import { Route, Link } from "wouter"
import YachtContext from "../utils/yachts-context"

type CatalogProps = {
  yachtsList: any
  locations: any
  countries: any
  regions: any
  isFetching: boolean
}

const YachtCatalog = (props: any) => {
  const ctx = useContext(YachtContext)
  const [isCardShown, setIsCardShown] = useState(false)
  const [selectedYacht, setSelectedYacht] = useState(0)

  const onSelectHandler = (id: number) => {
    setSelectedYacht(id)
    setIsCardShown(true)
  }

  let filteredList = props.data.yachtsList

  if (props.data.isFetching) return <div>Загрузка...</div>

  return (
    <div>
      {isCardShown ? (
        <YachtFullCard yachtsList={props.data.yachtsList} />
      ) : (
        filteredList.map((yacht: any) => {
          let [locationProp] = props.data.locations.filter(
            (l: any) => yacht.locationId === l.id
          )
          let [regionProp] = props.data.regions.filter(
            (r: any) => locationProp.regionId === r.id
          )
          let [countryProp] = props.data.countries.filter(
            (c: any) => regionProp.countryId === c.id
          )
          return (
            <Link key={yacht.id} href={`/yachts/${yacht.id}`}>
              <YachtItem
                onClick={onSelectHandler.bind(yacht.id)}
                id={yacht.id}
                name={yacht.name}
                buildYear={yacht.buildYear}
                location={locationProp.name.textRU}
                img={yacht.mainPictureUrl}
                region={regionProp.name.textRU}
                country={countryProp.name.textRU}
              />
            </Link>
          )
        })
      )}
    </div>
  )
}

export default YachtCatalog
