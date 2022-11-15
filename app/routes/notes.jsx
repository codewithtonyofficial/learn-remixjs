import { json, redirect } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import NewNote from "~/components/NewNotes";

import NoteList from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main className="max-w-7xl mx-auto">
      <NewNote />
      <section>
        <NoteList notes={notes} />
      </section>
    </main>
  );
}

export async function loader() {
  const notes = await getStoredNotes();
  if (!notes || notes.length === 0) {
    throw json(
      { message: "Could not find notes" },
      {
        status: 404,
        statusText: "Not Found",
      }
    );
  }
  return notes;
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };
  if (noteData.title.trim().length < 5) {
    return { message: "Title must be 5 charachters long." };
  }
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  return redirect("/notes");
}

export function CatchBoundary() {
  const coughtResponse = useCatch();
  const message = coughtResponse.data?.message || "Data not found.";
  return (
    <main className="max-w-md mx-auto">
      <NewNote />
      <p className="text-red-400">{message}</p>
    </main>
  );
}

export function meta() {
  return {
    title: "All Notes",
    description: "All notes page",
  };
}
