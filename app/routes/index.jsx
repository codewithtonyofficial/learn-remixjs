import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content" className="max-w-7xl mx-auto mt-12">
      <h1 className="text-indigo-600 text-2xl text-center">
        A better way of keeping notes
      </h1>
      <p className="text-center text-lg">Try our early beta</p>
      <p id="cta" className="flex justify-center">
        <Link
          to="/notes"
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white
        rounded-lg"
        >
          Try Now
        </Link>
      </p>
    </main>
  );
}
