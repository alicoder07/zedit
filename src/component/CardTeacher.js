import { LazyLoadImage } from "react-lazy-load-image-component"

function CardTeacher({item}){
    return (
        <div className={'teacher__card'}>
            <div className="teacher__image">
                <LazyLoadImage src={item.img} alt={item.name} effect={'blur'} className={'teacher__img'}/>
            </div>
            <div className={'teacher__info'}>
                <h3 className={'teacher__name'}>{item.name}</h3>
                <hr />
                <div className="d-flex teacher-in__flex">
                    <div className={'teacher__experience'}>
                        <div className="exp__right">
                            <i className={'fas fa-user-tie icon'}></i>
                        </div>
                        <div className="exp__left">
                            <h4>Mutaxassisligi</h4>
                            <h5 className={'smaller'}>{item.job}</h5>
                        </div>
                    </div>
                    <div className={'teacher__experience margin'}>
                        <div className="exp__right">
                            <i className={'fas fa-business-time icon'}></i>
                        </div>
                        <div className="exp__left">
                            <h4>Tajriba</h4>
                            <h5>{item.experience}</h5>
                        </div>
                    </div>
                </div>
                
                <hr />

                <p className={'teacher__about'}>{item.info}</p>
            </div>
        </div>
    )
}
export default CardTeacher