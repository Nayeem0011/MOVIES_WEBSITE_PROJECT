import type { ItemsCategory } from '../types/types'
import CategorySection from './CategorySection'

interface DisplayItemsProps{
    displayTags: ItemsCategory[]
}

const DisplayItems: React.FC<DisplayItemsProps> = ({displayTags}) => {
  return <div>
      {displayTags.map(({apiEndpoint, itemHeading})=>(
        <CategorySection key={apiEndpoint}
        apiEndpoint={apiEndpoint}
        itemHeading={itemHeading}/>
      ))}
    </div>
}

export default DisplayItems
