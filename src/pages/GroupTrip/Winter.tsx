import Layout from '@/components/Layout'
import SeasonPage from '@/components/SeasonPage'
import HeroImage from '../../../public/assets/images/winter-scence.jpg'


function Winter() {
    const information=[
    {id:1, title:"onyx winter trip", info:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus minus inventore officiis earum! Provident laudantium ut quae, corporis, enim laborum placeat molestias architecto nobis ad veniam beatae id eveniet ex quidem dicta! Omnis nisi fuga sequi autem sunt modi sapiente commodi aspernatur at, tempora natus molestiae tenetur praesentium doloribus!",days:"7days  6nights",src:HeroImage}
  ]
  return (
    <Layout>
      {information.map(({id,title,info,src,days})=>{
        return(
          <SeasonPage key={id} title={title} info={info} src={src} season='winter trip' days={days}/>
        )
      })}
    </Layout>
  )
}

export default Winter
