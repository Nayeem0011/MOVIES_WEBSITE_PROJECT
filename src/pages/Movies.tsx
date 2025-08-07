
import { createDisplayItems, type ItemsCategory } from '../types/types'
import { now_playing, popular, top_rated_movies, upcoming } from '../modules/ApiLinks'
import DisplayItems from '../components/DisplayItems'

const Movies = () => {
  const chooseWhatToDisplay: ItemsCategory[] = [
      createDisplayItems(now_playing, "Movies Playing"),
      createDisplayItems(upcoming, "Upcoming"),
      createDisplayItems(popular, "Popular"),
      createDisplayItems(top_rated_movies, "Top Rated Movies"),
    ]

  return (
    <div>
      <DisplayItems displayTags={chooseWhatToDisplay}/>
    </div>
  )
}

export default Movies
