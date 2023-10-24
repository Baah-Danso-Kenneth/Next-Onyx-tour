import Image from 'next/image';
import TiyacImage from '../../../public/assets/images/tiyac.png';
import KenteImage from '../../../public/assets/images/kente.png';
import EffectImage from '../../../public/assets/images/touch.png';
import AnimeImage from '../../../public/assets/images/anime.png';


function Brand() {
  return (
    <div className='brand-container'>
        <div className="brand-elements">
           <Image src={TiyacImage} alt="img-1"/>
           <Image src={KenteImage} alt="img-2"/>
           <Image src={EffectImage} alt="img-3"/>
           <Image src={AnimeImage} alt="img-4"/>
        </div>
    </div>
  )
}

export default Brand
