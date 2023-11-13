import Layout from '@/components/Layout'
import SeasonPage from '@/components/SeasonPage'
import HeroImage from '../../../public/assets/images/winter-scence.jpg'
import WinterTripsContent from '@/components/WinterTripsContent'
import Recommend from '@/section/GroupTrips/Recommend'
import WinterPlace1 from '../../../public/assets/images/day-winter-1.jpg';
import Itenary from '@/components/Itenary'
import WinterComponents from '@/section/GroupTrips/WinterComponents'
import WinterItenaryComponent from '@/section/GroupTrips/WinterItenaryComponent'
import WinterWhatIncluded from '@/section/GroupTrips/WinterWhatIncluded'



function Winter() {
  return (
    <Layout>
       <WinterComponents/>
       <WinterItenaryComponent/>
       <WinterWhatIncluded/>
    </Layout>
  )
}

export default Winter
