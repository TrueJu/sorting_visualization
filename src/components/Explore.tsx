const catalogue = [
    {
        "name": "Bubble sort",
        "content": "Bubble sort, sometimes referred to as sinking sort. It repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed."
    },
    {
        "name": "Quick sort",
        "content": "Bubble sort, sometimes referred to as sinking sort. It repeatedly steps through the input list element by element,"
    },
    {
        "name": "Bubble sort",
        "content": "Bubble sort, sometimes referred to as sinking sort. It repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed."
    }
];

const Explore = () => (
    <div className="mt-32 w-full">
        <div>
            <p className="text-dimText uppercase font-bold">Explore catalogue (<span>{catalogue.length}</span>)</p>
        </div>
        <br />
        <div id="card-container" className="flex items-start justify-between flex-wrap">
            {catalogue.map((entry, index) => (
                <Card key={index} img={`../src/assets/sort_icon_${/* index+ */1}.svg`} title={entry.name} content={entry.content} />
            ))}
        </div>
    </div>
)

type CardProps = {
    img: string,
    title: string,
    content: string
}
//1340px
const Card = ({ img, title="default", content="default" }:CardProps) =>
    <div className="shadow-xl shadow-[#ffffff08] overflow-hidden border-[1px] rounded-xl xs:w-full ss:w-60 sm:w-72 xsm:w-96 md:w-[400px] xmd:w-80 p-6 pb-3 mt-5 cursor-pointer hover:bg-[#ffffff03] group transition-all">
        <div className="w-24 h-20 -ml-6 -mt-6 -mb-[56px] blur-2xl opacity-10 bg-blue-gradient"></div>
        <img src={img} alt="Sorting Icon" className="w-12 absolute" />
        <h2 className="ml-24 text-2xl cursor-pointer text-blue-gradient font-bold">{title}</h2>
        <p className="mt-9 cursor-pointer">{content}</p>
        <hr className="card-hr" />
        <button className="pt-3 group-hover:font-bold group-hover:ml-[50%] group-hover:-translate-x-1/2 transition-all ease-out duration-500">Check it out!</button>
    </div>;

export default Explore