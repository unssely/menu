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
                {card.price}
            </span>
        </div>
        <p>{card.occupation}</p>
        <div className=''></div>
     </div>
    </div>
)
}

export default Card