import courses from '../resources/courses.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import {useState} from 'react';

function Courses(){

    const [modalVisible, setModalVisible] = useState(false)
    const [current, setCurrent] = useState(courses[0])

    return (
        <div className="courses">
            <h3 className="title">Bizda mavjud kurslar</h3>
            <div className="courses__flex">
                {
                    courses.map(item => <div className="course-card text-center" key={item.id}>
                        <div className='image__block'>
                            <LazyLoadImage src={item.img} effect={'blur'} alt={item.name} className={'card__image'}/>
                        </div>
                        <h3 className="card__title">{item.name}</h3>
                        <p className="card__text">{item.text}</p>
                        <button className={'card__button'} onClick={()=>{setCurrent({...item}); setModalVisible(true)}}>
                            Batafsil
                        </button>
                    </div>)
                }
            </div>
            <Modal isOpen={modalVisible} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                toggle={()=>setModalVisible(!modalVisible)} >
                <ModalHeader>
                    <b className={'modal__title'}>{current.name}</b>
                    <button className={'close__button'} onClick={()=>setModalVisible(false)}>
                        <i className={"fa-solid fa-xmark"}></i>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className={'modal-img__block'}>
                        <LazyLoadImage src={current.img} effect={'blur'} alt={current.name} className={'modal__image'}/>
                    </div>
                    <p className="card__text">{current.textLonger}</p>
                    <h4 className='things__title'>Texnologiyalar:</h4>
                    <ul className={'modal__things'}>
                        {
                            current.inCourse.map((elem, index)=><li className={'modal__item'} key={index}>{elem}</li>)
                        }
                    </ul>
                    <div className='text-center'>
                        <button className='modal__button' onClick={()=>setModalVisible(false)}>
                            Chiqish
                        </button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default Courses