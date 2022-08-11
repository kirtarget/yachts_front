import YachtItem from "./YachtItem"
import axios from "axios"
import { useState, useEffect } from "react"

const YachtCatalog = (props) => {
  const [yachtsList, setYachtsList] = useState([
    {
      _id: "62ccd1768b7729215281a176",
      buildYear: 2003,
      checkInPeriods: [],
      deposit: 1500,
      flagsId: [],
      id: 479287,
      locationId: 51,
      mainPictureUrl:
        "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/main.png",
      name: "Jadran",
      pictures: [
        {
          catalogPhoto: true,
          layoutPicture: false,
          mainPicture: true,
          src: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/main.png",
        },
        {
          catalogPhoto: true,
          layoutPicture: true,
          mainPicture: false,
          src: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/layout.png",
        },
        {
          catalogPhoto: true,
          layoutPicture: false,
          mainPicture: false,
          src: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/layout1.png",
        },
        {
          catalogPhoto: true,
          layoutPicture: false,
          mainPicture: false,
          src: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/layout2.png",
        },
        {
          catalogPhoto: true,
          layoutPicture: false,
          mainPicture: false,
          src: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/n.png",
        },
      ],
      picturesURL: [],
      seasonSpecificData: [],
      standardYachtEquipment: [],
      __v: 0,
    },
  ])
  const [locations, setLocations] = useState([
    {
      _id: "62e83a3d29d30c2c19868003",
      id: 51,
      lat: 44.8726,
      lon: 13.84513,
      name: {
        textEN: "ACI Marina Pula",
        textRU: "ACI Марина, Пула",
        _id: "62e83a3d29d30c2c19868004",
      },
      regionId: 512259,
      __v: 0,
    },
  ])
  const [countries, setCountries] = useState([
    {
      _id: "62e85737c02d619858580628",
      id: 1,
      code: "HRV",
      name: {
        textEN: "Croatia",
        textRU: "Хорватия",
        _id: "62e85737c02d619858580629",
      },
      __v: 0,
    },
  ])
  const [regions, setRegions] = useState([
    {
      _id: "62e859d14738e04874961a13",
      id: 512259,
      countryId: 1,
      name: {
        textEN: "Istra",
        textRU: "Истра",
        _id: "62e859d14738e04874961a14",
      },
      __v: 0,
    },
  ])
  const [isFetching, setIsFetching] = useState(true)
  const getYachtsHTTP = async () => {
    try {
      const yachts = await axios.get("http://localhost:3100/api/yachts")
      setYachtsList(yachts.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const getLocations = async () => {
    const location = await axios.get("http://localhost:3100/api/locations")
    setLocations(location.data)
  }
  const getRegion = async () => {
    const region = await axios.get("http://localhost:3100/api/region")
    setRegions(region.data)
  }
  const getCountries = async () => {
    const countries = await axios.get("http://localhost:3100/api/country")
    setCountries(countries.data)
  }
  useEffect(() => {
    getYachtsHTTP()
    getLocations()
    getCountries()
    getRegion()
    setIsFetching(false)
  }, [])

  let filteredList = yachtsList

  if (isFetching) return <div></div>

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
            location={locationProp.name.textRU}
            img={yacht.mainPictureUrl}
            x
            region={regionProp.name.textRU}
            country={countryProp.name.textRU}
          />
        )
      })}
    </div>
  )
}

export default YachtCatalog
