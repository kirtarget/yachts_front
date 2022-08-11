import styles from "./YachtItem.module.css"

const YachtItem = (props) => {
  // if (props.location[0]) {
  //   location = props.location[0].name.textRU
  //   region = props.regions.filter((c) => props.location[0].regionId === c.id)
  // }
  // let countryName = country[0].name.textRU
  // let regionName = region[0].name.textRU
  /*
  buildYear: 2003
checkInPeriods: []
deposit: 1500
flagsId: []
id: 479287
locationId: 51
mainPictureUrl: "https://ws.nausys.com/CBMS-external/rest/yachtModel/27047922/pictures/main.png"
name: "Jadran"
pictures: (5) [{…}, {…}, {…}, {…}, {…}]
picturesURL: []
seasonSpecificData: []
standardYachtEquipment: []
*/
  // console.log(props.location[0])
  return (
    <div className={styles.mainpage__cardlist}>
      <div className={styles.mainpage__card}>
        <div className={styles.mainpage__image}>
          <div className={styles.mainpage__name}>{props.country}</div>
          <img src={props.img} />
        </div>

        <div className={styles.mainpage__location__country}>{props.name}</div>
        <div className={styles.mainpage__location__region}>
          Регион: {props.region}
        </div>
        <div className={styles.mainpage__location}>{props.location}</div>
      </div>
    </div>
  )
}

export default YachtItem
