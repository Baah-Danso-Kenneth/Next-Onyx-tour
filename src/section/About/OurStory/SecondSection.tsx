import Image from 'next/image'
import React from 'react'
import PlayImage from '../../../../public/assets/images/playing_games.jpg';


function SecondSection() {
  return (
    <div className='second-container'>
        <div className="second-container-elements">
              <div className="text-section">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus neque et itaque libero quis eligendi qui molestiae accusamus! Itaque,
                     temporibus facere corrupti quod corporis maxime numquam quia odio magni iste.</p>
                <div className="btn-button">
                    <button>where we go</button>
                </div>
              </div>

              <div className="img-section">
                <Image src={PlayImage} alt='play-img'/>
              </div>
            </div> 
    </div>
  )
}

export default SecondSection
