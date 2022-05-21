export default function Hero(){
    return (
        <section className="bg-gray-900 h-3/4">
            <div className="px-4 pt-12 pb-0 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                    <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                        <div>
                            <div className="relative w-full max-w-lg">
                                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                                <div className="relative">
                                <img
                                    className="object-cover object-center mx-auto w-96 rounded-lg shadow-2xl"
                                    alt="hero"
                                    src="https://wickedblocks.dev/assets/images/placeholders/squareCard.png"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                        <span className="mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase">
                            {" "}
                            Your tagline{" "}
                        </span>
                        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                            Medium length display headline.
                        </h1>
                        <p className="mb-6 text-base leading-relaxed text-left text-gray-500">
                            Free and Premium themes, UI Kit's, templates and landing pages built
                            with Tailwind CSS, HTML &amp; Next.js.
                        </p>
                        <div className="mt-0 lg:mt-6 max-w-7xl flex flex-row gap-2">
                            <div className="mt-3 rounded-lg sm:mt-0">
                                <button className="items-center block px-8 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Get bundle
                                </button>
                            </div>
                            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                <button className="items-center block px-8 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    See features
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}