import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";

function NoteDetailsPage() {
  const note = useLoaderData();
  return (
    <main className="max-w-7xl mx-auto mt-12">
      <header>
        <nav>
          <Link
            className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-400"
            to="/notes"
          >
            Back to all notes
          </Link>
        </nav>
        <h1 className="text-center text-4xl text-indigo-600 font-semibold">
          {note.title}
        </h1>
      </header>
      <p className="m-2 p-2 text-slate-800 text-center">{note.content}</p>
    </main>
  );
}

export async function loader({ params }) {
  const notes = await getStoredNotes();
  const noteId = params.noteId;
  const selectedNote = notes.find((note) => note.id === noteId);
  if (!selectedNote) {
    throw json(
      {
        message: "Could not find note for this id " + noteId,
      },
      {
        status: 404,
      }
    );
  }
  return selectedNote;
}

export function meta({ data }) {
  return {
    title: data.title,
    description: data.content,
  };
}

export default NoteDetailsPage;
