import Layout from '@/components/Layout'
import SeasonPage from '@/components/SeasonPage'
import HeroImage from '../../../public/assets/images/summer-time.jpg'
import SummerTripContent from '@/section/GroupTrips/Summer/SummerTripContent'
import SummerRecommnedation from '@/section/GroupTrips/Summer/SummerRecommnedation'
import SummerItenary from '@/section/GroupTrips/Summer/SummerItenary'
import HaveQuestion from '@/components/HaveQuestion'
import MeetTeam from '@/section/About/Team/MeetTeam'
import SummerLeader from '@/section/GroupTrips/Summer/SummerLeader'
import SummerAccomodation from '@/section/GroupTrips/Summer/SummerAccomodation'
import SummerKindWords from '@/section/GroupTrips/Summer/SummerKindWords'
import SummerWhatIncluded from '@/section/GroupTrips/Summer/SummerWhatIncluded'

function Summer() {
  const information=[
    {id:1, title:"onyx summer trip", info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus minus inventore officiis earum! Provident laudantium ut quae, corporis, enim laborum placeat molestias architecto nobis ad veniam beatae id eveniet ex quidem dicta! Omnis nisi fuga sequi autem sunt modi sapiente commodi aspernatur at, tempora natus molestiae tenetur praesentium doloribus!",days:"10days  8nights",src:HeroImage}
  ]
  return (
    <Layout>
      {information.map(({id,title,info,src,days})=>{
        return(
          <SeasonPage key={id} title={title} info={info} src={src} season='Summer trip' days={days}/>
        )
      })}
      <SummerTripContent/>
      <SummerRecommnedation/>
      <SummerItenary/>
      <SummerWhatIncluded/>
      <SummerKindWords/>
      <SummerAccomodation/>
      <SummerLeader/>
      <MeetTeam/>
      <HaveQuestion/>
    </Layout>
  )
}

export default Summer
