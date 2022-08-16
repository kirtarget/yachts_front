import React from "react"
export type ContextType = {
  yachts: {
    id: number
    name: string
    buildYear: number
    locationId: number
    mainPictureUrl: string
  }
}

const YachtContext = React.createContext({
  yachts: [
    {
      _id: "62ccd1768b7729215281a176",
      buildYear: 2003,
      id: 479287,
      locationId: 51,
      mainPictureUrl:
        "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/main.png",
      name: "Jadran",
    },
  ],
  locations: [
    {
      _id: "62e83a3d29d30c2c19868003",
      id: 51,
      name: {
        textEN: "ACI Marina Pula",
        textRU: "ACI Марина, Пула",
        _id: "62e83a3d29d30c2c19868004",
      },
      regionId: 512259,
    },
  ],
  countries: [
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
  ],
  regions: [
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
  ],
  setCountries: () => {},
})

export default YachtContext
