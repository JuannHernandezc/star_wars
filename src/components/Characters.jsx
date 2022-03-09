import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CHARACTERS } from '../graphql/Characters'
import Character from './Character'

const Characters = () => {
    const { loading, data } = useQuery(GET_CHARACTERS);
    const renderCharacters =() =>{
        return data.allPeople.edges.map(item => {
            return <Character key={item.node.id} title={item.node.name}/>
        });
    }
    return(
        <>
        {loading ? <p>Cargando los datos ...</p> : <ul>{ renderCharacters() }</ul> }
        </>
    )
} 
export default Characters