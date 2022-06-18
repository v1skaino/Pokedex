import { useEffect, useState } from "react";
import { PokeDex } from "../../components/pokeDex/pokeDex"
import api from "../../services/api";
import "./styles.css"
import { PokeMon } from "./types";

const Home = () => {

    const [collection, setCollection] = useState<PokeMon>()
    const [number, setNumber] = useState<number>(1)

    async function nextPoke() {
        setNumber(number + 1)
        getPoke()
    }

    async function randomPoke() {
        setNumber(Math.floor(Math.random() * 898 + 1))
        getPoke()
    }

    async function previousPoke() {
        setNumber(number - 1)
        getPoke()
    }

    async function getPoke() {
        await api
            .get(`/pokemon/${number.toString()}`)
            .then(response => {
                setCollection(response.data)
            })
            .catch(() => {
                console.log("erro")
            });
      };

      useEffect(() => {
        getPoke()
      }, [])

      
    return(
        <div className="home-container">
            <PokeDex data={collection} randon={randomPoke} next={nextPoke} previous={previousPoke}/>
        </div>
    )
}

export default Home