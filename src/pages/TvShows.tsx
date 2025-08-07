import { createDisplayItems, type ItemsCategory } from '../types/types'
import { airing_today, popularShows, top_rated_shows, trendingShows } from '../modules/ApiLinks'
import DisplayItems from '../components/DisplayItems'

const TvShows = () => {
  const chooseWhatToDisplay: ItemsCategory[] = [
        createDisplayItems(trendingShows, "Trending Shows"),
        createDisplayItems(airing_today, "Watch On Tv"),
        createDisplayItems(popularShows, "Popular Tv Shows"),
        createDisplayItems(top_rated_shows, "Top Rated Shows"),
      ]

  return (
    <div>
      <DisplayItems displayTags={chooseWhatToDisplay}/>
    </div>
  )
}

export default TvShows
