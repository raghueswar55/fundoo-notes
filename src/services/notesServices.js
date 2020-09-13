import axios from 'axios';
import { notesApiConstants } from '../apiConstants/notesApiConstants';

export function addNotes(note, token) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.addNotes, note, {
        headers: {Authorization: token,}
    })
}

export function getNotesList(token) {
    return axios.get(process.env.REACT_APP_API_BASE_URL + notesApiConstants.getNotesList, {
        headers: {Authorization: token,}
    })
}

export function updateNotes(note, token) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.updateNotes, note, {
        headers: {Authorization: token,}
    })
}
export function changeNoteColor(data, token) {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.changesColorNotes, data, {
        headers: {Authorization: token,}
    })
}
export const pinUnpinNotes = (data, token)=> {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.pinUnpinNotes, data, {
        headers: {Authorization: token,}
    })
}
export const archiveNotes = (data, token)=> {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.archiveNotes, data, {
        headers: {Authorization: token,}
    })
}
export const trashNotes = (data, token)=> {
    return axios.post(process.env.REACT_APP_API_BASE_URL + notesApiConstants.trashNotes, data, {
        headers: {Authorization: token,}
    })
}