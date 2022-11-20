import './Pokecard.css'

const Pokecard = (props) => {
    
    const IMG_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.props.id}.png`
    return (
        <div className="individual">
            <p><b>{props.props.name}</b></p>
            <img src={IMG_SRC} alt={props.props.name}/>
            <p>Type: {props.props.type}</p>
            <p>EXP: {props.props.base_experience}</p>
        </div>
    )
}

export default Pokecard;