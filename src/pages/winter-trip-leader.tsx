import TripLeader from '@/components/TripLeader'
import React, { useEffect, useState } from 'react'
import CompanyLogo from '../../public/assets/images/yensa-nua.png'
import Paul from '../../public/assets/images/meet-s-17.jpg'
import Layout from '@/components/shared/Layout'
import Loading from '@/components/Loader'

function WinterTripLeader() {
  const [isLoading, setIsLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },3000)
  },[])

    return (
      !isLoading ? <Loading/> :
      (
        <>
        <Layout>
           <TripLeader
            brand_img={CompanyLogo}
            img_model={Paul}
            name='Paul Ahiagbor'
            location='Atlanta, Georgia'
            statement='Meet Paige - our fabulous Trip Leader for our Argentina Group Trips. Paige was born and raised in the Washington, DC area and first traveled to - and fell in love with - Argentina during her junior year abroad. After taking a leap of faith and relocating to Buenos Aires in 2008, she worked in journalism and communications while nurturing her true passion: discovering the citys best food, drink, and cultural experiences. Paige is passionate about connecting people, telling stories, and spreading love over a delicious meal and fabulous bottle of wine. When she isnt doing that, you can find her working on her podcast, Bad Information, walking her dog Pocho, or decompressing on the beaches of Uruguay. Learn more about Paige below and follow her  '
            inspo='What’s more empowering than becoming aware of your own strengths and who you are as a person? And what better vehicle for this experience than travel? '
            inspo_name='Paul Ahiagbor'
            learn_more='learn more about Paul'
            learn_more_title_1='1. CAN YOU NAME WHAT IT WAS ABOUT BUENOS AIRES THAT MADE YOU FALL IN LOVE ENOUGH TO MOVE ACROSS THE WORLD?'
            learn_more_statement_1='There are so many things that captivated me about Buenos Aires. From the citys wild energy and dynamic atmosphere to its incredible people and culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and Im eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just "clicked" and I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here in another life, as strange as that sounds. The connection was instantaneous, deep, and transformative. Oh, and the fantastic wine and overwhelming amount of dogs didnt hurt either'
    
            learn_more_title_2='2. CAN YOU NAME WHAT IT WAS ABOUT BUENOS AIRES THAT MADE YOU FALL IN LOVE ENOUGH TO MOVE ACROSS THE WORLD?'
            learn_more_statement_2='There are so many things that captivated me about Buenos Aires. From the citys wild energy and dynamic atmosphere to its incredible people and culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and Im eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just "clicked" and I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here in another life, as strange as that sounds. The connection was instantaneous, deep, and transformative. Oh, and the fantastic wine and overwhelming amount of dogs didnt hurt eithed culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and Im eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just "clicked" and I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here in another life, as strange as that sounds. The connection was instantaneous, deep, and transformative. Oh, and the fantastic wine and overwhelming amount of dogs didnt hurt either'
            btn_text='travel with us'
            link='/group-trips/winter' 
            learn_more_title_3='3. CAN YOU NAME WHAT IT WAS ABOUT BUENOS AIRES THAT MADE YOU FALL IN LOVE ENOUGH TO MOVE A'
             learn_more_statement_3='There are so many things that captivated me about Buenos Aires. From the citys wild energy and dynamic atmosphere to its incredible people and culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and Im eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just "clicked" and I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here in another life, as strange as that sounds. The connection was instantaneous, deep, and transformative. Oh, and the fantastic wine and overwhelming amount of dogs didnt hurt eitherild energy and dynamic atmosphere to its incredible people and culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and Im eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just clicke dand I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here inr' 
             which_page='meet paul on our winter trip experience' 
             />
        </Layout>
        </>
      )
      )
}

export default WinterTripLeader
