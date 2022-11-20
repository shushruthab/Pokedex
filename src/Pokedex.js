import Pokecard from "./Pokecard";
import './Pokedex.css'
const Pokedex = (characters) => {
    
    return (
        <div className="card">
            {characters.characters.map(c => (
                <Pokecard props={c}/>
            ))}
        </div>
    )
}

export default Pokedex;