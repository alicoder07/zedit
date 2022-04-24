import teachers from '../resources/teachers.json'
import CardTeacher from './CardTeacher'

function Teachers(){
    return (
        <div className={'teachers'}>
            <h3 className={'title'}>Bizning jamoamiz</h3>
            <div className='teachers__flex'>
                {
                    teachers.map( item => <CardTeacher item={item} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Teachers