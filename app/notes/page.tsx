import { getNotes } from "@/src/lib/api";

const NotesPage = async () => {
  const notes = await getNotes();
  console.log(notes)
  return <div>Notes page</div>;
};

export default NotesPage;
