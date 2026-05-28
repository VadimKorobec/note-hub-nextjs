import { Note } from "@/src/types/note"

import styles from './NoteItem.module.css'

interface NoteItemProps{
    item:Note
}

const NoteItem = ({item}:NoteItemProps) => {
    return <li>
        <p>{item.title }</p>
    </li>
}

export default NoteItem