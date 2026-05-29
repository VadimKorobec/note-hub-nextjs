interface NoteDetailesProps {
  params: Promise<{ id: string }>;
}

const NoteDetailes = async ({ params }: NoteDetailesProps) => {
  const { id } = await params;
  console.log(id);
  return <>Note Detailes</>;
};

export default NoteDetailes;
