
import { createDisplayItems, type ItemsCategory } from '../types/types'
import { airing_today, now_playing, popular, popularShows, trendingShows, upcoming } from '../modules/ApiLinks'
import DisplayItems from '../components/DisplayItems'

const Home = () => {
  const chooseWhatToDisplay: ItemsCategory[] = [
    createDisplayItems(now_playing, "Naw Playing"),
    createDisplayItems(popular, "Popular"),
    createDisplayItems(upcoming, "Upcoming"),
    createDisplayItems(trendingShows, "Trending Shows"),
    createDisplayItems(popularShows, "Oppular Shows"),
    createDisplayItems(airing_today, "On Air Today"),
  ]

  return (
    <div>
      <DisplayItems displayTags={chooseWhatToDisplay}/>
    </div>
  )
}

export default Home
