import { useEffect, useState } from "react"
// import { PokemonCard } from "./PokemonCard";
import "../index.css"
import { PokemonCard } from "./PokemonCard";

export const Pokemon = ()=>{
    const API = "https://pokeapi.co/api/v2/pokemon/?limit=20"

    const [pokemon, setPokemon]=useState([]);
    const [loading,setLoading]= useState(true)
    const [search,setSearch] = useState("")

    const fetchPokemon=async ()=>{

        try{

            const response= await fetch(API)
            const data =await response.json()
            // console.log(data.results)
    
            {
                const detailedPokemonData=data.results.map( async(curE,index)=>{
                    const res = await fetch(curE.url)
                    const data = await res.json()
                    // console.log(data.name)
                    return data
                    
                });

                console.log(detailedPokemonData)   

                const detailResponse = await Promise.all(detailedPokemonData)
                console.log(detailResponse);
                setPokemon(detailResponse)
                setLoading(false)
                
            }
        }
        catch(errorr){
            console.log(errorr)
        }

       
    };

    useEffect(()=>{
        fetchPokemon()
    },[])

    const SearchData = pokemon.filter((currPkemon)=>{
               return currPkemon.name.toLowerCase().includes(search.toLowerCase())
    })
    if(loading){
        return(
            <h1>Loading...............</h1>
        )
    }
    return(
    <>
        <h1 className="heading">Pokemon Card Data</h1>
        <div className="search-container">
            <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <section className="cart-container">

                
                
                {SearchData.map((curE) => (
                   <PokemonCard key={curE.id} data={curE}/>
                ))}
        </section>
    </>
        
    )
}