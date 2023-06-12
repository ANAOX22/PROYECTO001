import { combineReducers } from "redux";
import {materiales } from './materiales'
import { muebles } from './muebles'

export const reducersDos = combineReducers({
    materiales,
    muebles
})