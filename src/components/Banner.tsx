const Banner = () => (
    <div className="flex items-center flex-wrap w-full">
        <h1 className="text-3xl lg:text-5xl font-bold w-1/2 text-left leading-normal">
			In depth<br />
			<span className="text-blue-gradient leading-normal">visualization</span><br />
			of sorting algorithms
		</h1>
		<div className="w-1/2 flex items-center justify-center">
			<img src="../src/assets/stop_watch.svg" alt="" className="w-36 lg:w-64 ss:w-40 relative z-[1]" />
			<div className="bg-blue-gradient lg:w-52 lg:h-40 ss:w-32 ss:h-28 w-28 h-24 blur-3xl -translate-x-4 rotate-12 opacity-40 absolute"></div>
		</div>
		<div className="break"></div>
		<p className="text-gray-300 text-center mt-10 w-full">Explore the intriguing world of sorting algorithms used in modern day software and on the web.<br />
		<b>Space</b> and <b>time</b> complexity are provided for each algorithm, as well as the source-code for over a dozen of programming languages.</p>
    </div>
)

export default Banner