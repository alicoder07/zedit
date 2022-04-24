import { YMaps, Placemark, Map } from "react-yandex-maps"

function Location(){
  const fer = [40.391041, 71.786351]
    return (
        <div className={'location'} id={'contact'}>
            <h2 className={'title'}>Biz bilan aloqa</h2>
            <div className={'location__flex'}>
                <div className={'location__side'}>
                    <YMaps >
                        <Map defaultState={{ center: [...fer], zoom: 18 }} width={'100%'} height={'100%'}>
                        <Placemark geometry={fer}/>                  
                        </Map>
                    </YMaps>
                </div>
                <div className={'location__address'}>
                    <h4 className={'address__title'}>Manzil:</h4>
                    <h5 className={'address__text'}>Farg`ona shahar, Sanoat ko`chasi 8</h5>
                    <h4 className={'address__title'}>Mo`ljal:</h4>
                    <h5 className={'address__text'}>"Issiq non" ro`parasida</h5>
                    <h4 className={'address__title'}>Telefon raqami:</h4>
                    <h5 className={'address__text'}>+998 (94) 532-77-44</h5>
                    <h4 className={'address__title'}>Ish vaqti: </h4>
                    <h5 className={'address__text'}>Dushanba-Shanba, 9:00 - 18:00</h5>
                </div>
            </div>
        </div>
    )
}

export default Location