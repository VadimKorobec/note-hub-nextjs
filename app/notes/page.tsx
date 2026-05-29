"use client";

import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/src/lib/api";
import { Note } from "@/src/types/note";

import { useState } from "react";

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const handleClick = async () => {
    const res = await getNotes();
    if (res.notes) {
      setNotes(res.notes);
    }
  };

  return (
    <section>
      <h1>Notes List</h1>
      <button onClick={handleClick}>Get my notes</button>
      {notes.length > 0 && <NoteList notes={notes} />}
    </section>
  );
};

export default NotesPage;
