import { PokeMon } from "../../pages/Home/types";
import "./styles.css"

interface PokeDexprops {
    data?: PokeMon;
    next?: any
    previous?: any
    randon?: any
}
  
export const PokeDex = ({ randon,previous, next, data, ...rest }: PokeDexprops) => {

    return (
     <div className="pokeDexCard">
        <section className="pokedex-superior">
            <div className="circulo-maior"></div>
            <div className="tres-pontos">
                <div className="ponto-vermelho"></div>
                <div className="ponto-amarelo"></div>
                <div className="ponto-verde"></div>
            </div>
        </section>
        <section className="pokedex-centro">
            <div className="poke-image-container">
                <div className="dot-div">
                    <div className="red-dot"></div>
                    <div className="red-dot"></div>
                </div>
                <div className="poke-image">
                    <img alt="" className="visual-pokemon" src={data?.sprites.front_default}></img>
                </div>
                <div className="poke-image-bottom">
                <div className="red-dot"></div>
                <div className="tres-iguais">&equiv;</div>
                </div>
            </div>
            <div className="controllers">
                <button className="yellow-controller"></button>
                <button className="blue-controller"></button>
            </div>
        </section>
        <section className="pokedex-inferior">
            <button onClick={randon} className="analogico"></button>
            <div className="poke-stats">
                <p className="infos-pokedex">Name: <strong>{data?.name}</strong></p>
                <p className="infos-pokedex">Type: <strong>{data?.types[0].type.name}</strong></p>
                <p className="infos-pokedex">Height: <strong>{data?.height}"</strong></p>
                <p className="infos-pokedex">Weight: <strong>{data?.weight}Ibs</strong></p>
            </div>
            <div className="directions">
            <button className="arrow-left" onClick={previous}></button>
            <button className="arrow-top" onClick={next}></button>
            <div className="arrow-center"></div>
            <button className="arrow-right" onClick={next}></button>
            <button className="arrow-bottom" onClick={previous}></button>
            </div>
        </section>
     </div>      
    )
}

