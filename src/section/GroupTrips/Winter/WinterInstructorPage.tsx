import React from 'react'
import BrandImage from '../../../../public/assets/images/loder-loader.png';
import LeaderDetailPage from '@/components/LeaderDetailPage';
import LeaderImg from '../../../../public/assets/images/instructor.jpg'

function WinterInstructorPage() {

  return (
    <div>
        <LeaderDetailPage 
         brand={BrandImage}
         instructor={LeaderImg}
         name='Brandy Asiedu'
         location='Bogoaoso, Assylum down'
         statement1='Brandy - our fabulous Trip Leader for our Argentina Group Trips. Paige was born and raised in the Washington, DC area and first traveled to - and fell in love with - Argentina during her junior year abroad. After taking a leap of faith and relocating to Buenos Aires in 2008, she worked in journalism and communications while nurturing her true passion: discovering the city best food, drink, and cultural experiences.'
         statement2='Houston is passionate about connecting people, telling stories, and spreading love over a delicious meal and fabulous bottle of wine. When she isnt doing that, you can find her working on her podcast, Bad Information, walking her dog Pocho, or decompressing on the beaches of Uruguay. Learn more about Paige below and follow her here. '
        link='/group-trip/winter/'
        title="learn more about Houston"
        type1="1.can you name what it was ABOUT BUENOS AIRES THAT MADE YOU FALL IN LOVE ENOUGH TO MOVE ACROSS THE WORLD?"
        type2="2.can you name what it was YOUR OWN PODCAST? CAN YOU TELL US MORE ABOUT IT AS A CREATIVE PROJECT?"
        type3="3.can you name what it was WOMEN WHO WANT TO TRAVEL SOLO?"
        type1_message="There are so many things that captivated me about Buenos Aires. From the city's wild energy and dynamic atmosphere to its incredible people and culture, I was hooked the moment I got off the plane. My experience studying abroad gave me a glimpse into the adventurous, independent woman that I was becoming, and I'm eternally grateful to Argentina for that. I was on my way to becoming the best version of myself here - everything just  and I was overcome with this desire and need to continue exploring, enjoying, and experiencing everything I could. On some level, I almost felt like I had lived here in another life, as strange as that sounds. The connection was instantaneous, deep, and transformative. Oh, and the fantastic wine and overwhelming amount of dogs didn't hurt, either ;) "
        type2_message="Bad Information was a bit of happenstance, a bit of planning, and a lot of unexpected magic. While the idea initially revolved around discussing Argentina's pop culture, once my co-host Caroline (another expat from the U.S.) and I started to find our groove, we realized that it was the perfect space to explore the ups and downs of bicultural living. Bad Information is 'a love letter to the country that drives us mad,' which truly is the most apt description: we tackle everything from friendships and learning Spanish to therapy and sex and what living abroad means to us. It's been so rewarding to hear the feedback from our growing audience of listeners - foreigners in Argentina, Argentines abroad, people dating Argentines, and many more - and to know that our experiences, humor, and perspective are valued and celebrated by others. I never thought that I'd be at the helm of such an enriching and fun project alongside one of my closest friends - it's like living the dream! As we grow older, it's easy to forget that we're capable of learning new skills and exploring new spaces, so Bad Information has been particularly special in that regard."
         type3_message="What's more empowering than becoming aware of your own strengths and who you are as a person? And what better vehicle for this experience than travel? Leaving behind the expectations and preconceived notions we have to explore new territories on our own is a surefire way to connect with ourselves on a deeper level. The added benefit of going solo means we aren't encumbered or inhibited by people that know us in our mode. As a result, we're more likely to go with the flow, dive headfirst into new experiences, and stay open to whatever might cross our path. I think this mindset is the most important thing to bring along on your trip, no matter where you go! The journey inward is just as important as the one you're taking to a new destination."
         meet="Meet hulio"  
         />

    </div>
  )
}

export default WinterInstructorPage
