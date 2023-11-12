import Layout from '@/components/Layout'
import SeasonPage from '@/components/SeasonPage'
import HeroImage from '../../../public/assets/images/summer-time.jpg'

function Summer() {
  const information=[
    {id:1, title:"onyx summer tour", info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus minus inventore officiis earum! Provident laudantium ut quae, corporis, enim laborum placeat molestias architecto nobis ad veniam beatae id eveniet ex quidem dicta! Omnis nisi fuga sequi autem sunt modi sapiente commodi aspernatur at, tempora natus molestiae tenetur praesentium doloribus!",days:"7days  6nights",src:HeroImage}
  ]
  return (
    <Layout>
      {information.map(({id,title,info,src,days})=>{
        return(
          <SeasonPage key={id} title={title} info={info} src={src} season='Summer time' days={days}/>
        )
      })}
    </Layout>
  )
}

export default Summer
