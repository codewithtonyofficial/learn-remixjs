function NoteList({ notes }) {
  return (
    <ul className="flex flex-wrap">
      {notes.map((note, index) => (
        <li key={note.id} className="m-2 p-2 bg-indigo-400 rounded-md">
          <article>
            <header>
              <ul>
                <li className="text-slate-100 font-semibold">#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString("rn-us", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </li>
              </ul>
              <h2>{note.title}</h2>
            </header>
            <p>{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
