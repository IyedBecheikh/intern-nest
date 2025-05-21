
export default function Home() {
  return (
    <section className="py-22">
    <h1 className="text-4xl font-bold text-center ">
        Find Your Next Remote Internship or Entry-Level Job
    </h1>
    <p className="text-center text-lg mt-4">
       Curated opportunities for students, new grads, and early-career professionals
    </p>
    <form className="mt-8 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search for internships or jobs"
          className="border border-gray-300 rounded-md px-4 py-2 w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Search
        </button>
    </form>
    </section>
  );
}
  