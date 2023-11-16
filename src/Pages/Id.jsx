function Id() {
  return (
    <section className="flex justify-center items-center bg-[url('/background.jpg')] bg-cover py-8 min-h-screen w-full contrast-150">
      <div className="max-w-3xl md:max-w-5xl">
        <div className="m-4">
          <h1 className="text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl xl:text-5xl">
            Welcome to the Movie App Staging Website, where this website can
            help you find popular films
          </h1>
          <p className="mt-8 text-xl font-semibold text-center text-white md:text-2xl mb-7">
            Login now, to search for films
          </p>
          <div className="text-center">
            <a
              href="/login"
              className="px-3 py-1 font-bold text-white transition-all duration-300 bg-red-600 border-2 border-red-600 rounded-full md:px-6 md:py-2 hover:bg-red-700"
            >
              Login Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Id;
