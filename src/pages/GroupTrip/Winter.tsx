import Layout from '@/components/Layout'
import WinterComponents from '@/section/GroupTrips/WinterComponents'
import WinterItenaryComponent from '@/section/GroupTrips/WinterItenaryComponent'
import WinterWhatIncluded from '@/section/GroupTrips/WinterWhatIncluded'
import WinterRecommends from '@/section/GroupTrips/WinterRecommends'
import WinterAccomodation from '@/section/GroupTrips/WinterAccomodation'
import WinterLeader from '@/section/GroupTrips/WinterLeader'
import MeetTeam from '@/section/About/Team/MeetTeam'
import HaveQuestion from '@/components/HaveQuestion'


function Winter() {
  return (
    <Layout>
       <WinterComponents/>
       <WinterItenaryComponent/>
       <WinterWhatIncluded/>
       <WinterRecommends/>
       <WinterAccomodation/>
       <WinterLeader/>
       <MeetTeam/>
       <HaveQuestion/>
    </Layout>
  )
}

export default Winter
