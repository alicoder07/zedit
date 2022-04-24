import Avatar from '../image/bg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Mainbar(){
    return (
        <div className="mainbar">
            <div className={'mainbar__left'}>
                <h3 className={'mainbar__goal'}>
                    Biz bilan <b>AJDAR MUTAXASSIS</b> bo`ling
                </h3>
                <h2 className='mainbar__name'>ZED IT Academy</h2>
                <p className={'mainbar__text'}>
                    Zamonaviy kasblardan birini egallab, frilanserlik yoki ko`zga ko`ringan kompaniyalarning 
                    yetakchi mutaxassisi bo`lishingiz uchun ajoyib imkoniyat
                </p>
                <div className='mainbar-button__blok'>
                    <a className={'mainbar__button'} href={'https://t.me/zedit_info'}>
                        ALOQAGA CHIQISH
                    </a>
                </div>
            </div>
            <div className={'mainbar__right'}>
                <LazyLoadImage effect={'blur'} src={Avatar} className={'mainbar__avatar'} alt={'Markaz asoschisi'}/>
            </div>
        </div>
    )
}
export default Mainbar 