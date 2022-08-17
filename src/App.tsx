import { Route } from "wouter"
import "./App.css"

import YachtContext, { YachtContextProvider } from "./utils/yachts-context"
import { ContextType } from "./utils/yachts-context"
import YachtCatalog from "./components/YachtCatalog"
import { useContext, useEffect } from "react"
import YachtFullCard from "./components/YachtFullCard"
import useFetch from "./hooks/useFetch"

function App() {
  const { yachtsList, locations, countries, regions, isFetching, getData } =
    useFetch()

  useEffect(() => {
    getData()
  }, [])

  return (
    <YachtContextProvider>
      <div className="App">
        <Route path="/">
          <YachtCatalog
            data={{ yachtsList, locations, countries, regions, isFetching }}
          />
        </Route>
        <Route path="/yachts/:id">
          {(params) => <YachtFullCard yachtsList={yachtsList} id={params.id} />}
        </Route>
      </div>
    </YachtContextProvider>
  )
}

export default App
