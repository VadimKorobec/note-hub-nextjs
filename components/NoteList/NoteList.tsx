import { Note } from "@/src/types/note";
import NoteItem from "../NoteItem/NoteItem";

import styles from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({notes}:NoteListProps) => {
    return <ul>
      {notes.map((note)=> <NoteItem key={note.id} item={note}/> )}
  </ul>;
};

export default NoteList