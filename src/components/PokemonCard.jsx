export const PokemonCard=({data})=>{

    return(
        <div className="card" >
            <div className="image">
                <img src={data.sprites.other.dream_world.front_default}  alt="" />
            </div>
            <div className="card-content">
                <h1 >{data.name}</h1>
            </div>
            <div className="Type-container">
                <p>
                   { data.types.map((curE)=>{
                       return curE.type.name
                   }).join(", ")}
                </p>
            </div>

            <div className="pokemon-info">
                <div className="info">
                    <p>
                        <span>Height : </span>{data.height}
                    </p>
                </div>
                <div className="info">
                    <p>
                    <span>Weight : </span>{data.weight}
                    </p>
                   
                </div>
                <div className="info">
                    <p>
                        <span>Speed :</span>{data.stats[5].base_stat}
                    </p>
                </div>
            </div>
            <div className="pokemon-info">
                <div className="info">
                    <p>
                        {data.base_experience}
                    </p>
                    <br />
                    <span>Experience </span>
                </div>
                <div className="info">
                    <p>
                        {data.stats[1].base_stat}
                    </p>
                    <br />
                    <span>Attack </span>
                   
                </div>
                <div className="info">
                    <p>
                       {data.abilities.map((abilitiInfo)=>{
                       return abilitiInfo.ability.name
                       }).slice(0,1)}
                    </p>
                    <br />
                    <span>Abilities </span>
                </div>
            </div>

        </div>
    )

}