import './Card.css'

function Card ({card}) {
return (
    <div className="card">
     <img src={card.path_img} alt={card.name} />

     <div className="card-content">
        <div className='titlename'>
            <span className='name'>
                <h3>{card.name}</h3>
            </span>

            <span className='price'>
                <h3>{card.price}</h3>
            </span>
        </div>
        <p>{card.occupation}</p>
        <div className='bot'>
            <span className='plus'>
                <h3>{card.plus}</h3>
            </span>

            <span className='star'>
                {card.star}
            </span>

        </div>
     </div>
    </div>
)
}

export default Card