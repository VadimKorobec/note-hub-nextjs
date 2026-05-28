import axios from "axios";
import { Note } from "../types/note";

interface NoteListResponse{
    notes: Note[];
    total: number;
}

axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";

export const getNotes = async() => {
    const res = await axios.get<NoteListResponse>('/notes');
    return res.data;
} 