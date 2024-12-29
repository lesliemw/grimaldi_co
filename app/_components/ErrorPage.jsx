export default function ErrorPage() {
  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center font-themeFont justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center font-themeFont">
          Sorry, the page you are looking for could not be found.
        </p>
        <a className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  mt-6 cursor-pointer">
          Go back
        </a>
      </div>
    </div>
  );
}
