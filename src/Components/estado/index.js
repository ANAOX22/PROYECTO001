import { combineReducers, createStore } from 'redux'
import { reducersDos } from './reducers'

const LISTA_CUSOS = [
    'HTML ',
    'CSS ',
    'JS ',
]

const LISTA_ALUNOS = [
    'pedro ',
    'carlos ',
    'juan ',
]
const LISTA_PRODUTOS = [
    'CEBOLA ',
    'TOMATE ',
    'PERA ',
]

const cursos =(state= LISTA_CUSOS)=>{
    return state
}
const alunos =(state= LISTA_ALUNOS)=>{ 
    return state
}



const produtos =(state=LISTA_PRODUTOS, action)=>{
    //console.log('estado/index.js' ,action ,state)
    if(action.type === 'ADD_PRODUTOS'){
        state.push(action.produtos)
    }
    if (action.type === 'REMOVE_PRODUTOS'){
        state.pop()
    }
    //console.log('estado/index.js=>', state)

    return state
}





const reducers = combineReducers ({cursos, alunos, produtos, reducersDos})

export const estado = createStore ( reducers )