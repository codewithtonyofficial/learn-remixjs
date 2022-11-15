import {
  Form,
  useActionData,
  useTransition as useNavigation,
} from "@remix-run/react";

function NewNote() {
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmiting = navigation.state === "submitting";
  return (
    <Form
      method="post"
      className="max-w-md mx-auto p-4 bg-slate-200 rounded-md mt-12"
    >
      {data?.message && <p>{data.message}</p>}
      <p className="mt-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </p>
      <p className="mt-6">
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Content
        </label>
        <textarea
          name="content"
          rows="5"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        ></textarea>
      </p>
      <div className="mt-6">
        <button
          disabled={isSubmiting}
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white
        rounded-lg"
        >
          {isSubmiting ? "Adding..." : "Add Note"}
        </button>
      </div>
    </Form>
  );
}

export default NewNote;
