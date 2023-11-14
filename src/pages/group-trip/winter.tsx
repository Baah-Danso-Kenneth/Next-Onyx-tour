import Layout from '@/components/Layout'
import WinterComponents from '@/section/GroupTrips/Winter/WinterComponents'
import WinterItenaryComponent from '@/section/GroupTrips/Winter/WinterItenaryComponent'
import WinterWhatIncluded from '@/section/GroupTrips/Winter/WinterWhatIncluded'
import WinterRecommends from '@/section/GroupTrips/Winter/WinterRecommends'
import WinterAccomodation from '@/section/GroupTrips/Winter/WinterAccomodation'
import WinterLeader from '@/section/GroupTrips/Winter/WinterLeader'
import MeetTeam from '@/section/About/Team/MeetTeam'
import HaveQuestion from '@/components/HaveQuestion'
import StraightLayout from '@/components/StraightLayout'


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
