import './card.css';
import { FaCode } from 'react-icons/fa'


const Card = ({ datas }) => {
    const { id, icon, title, features } = datas;
    return (
        <div className="card" key={id}>
            <div className="card__inner">
                <div className="card__icon">{icon}</div>
                <div className='card__title'>{title}</div>
                <div className='card__features'>
                    {features.map((data,index)=>(
                        <p key={index}>{data}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
