import React, { useState } from "react";

type CardProps = {
    img: string,
    title: string,
    content: string,
    animated: boolean
}

const catalogue = [
    {
        "name": "Bubble sort",
        "content": "Bubble sort is sometimes referred to as sinking sort. This simple algorithm performs poorly in real world use and is used primarily as an educational tool.",
        "animated": true
    },
    {
        "name": "Quicksort",
        "content": "Quicksort was developed by british computer scientist Tony Hoare in 1959. It is still a commonly used algorithm for sorting.",
        "animated": true
    },
    {
        "name": "Merge sort",
        "content": "Merge sort is an efficient, general-purpose, algorithm.",
        "animated": false
    },
    {
        "name": "Selection sort",
        "content": "Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations",
        "animated": false
    },
    {
        "name": "Insertion sort",
        "content": "Insertion sort is a simple sorting algorithm that is efficient for small data values",
        "animated": false
    },
    {
        "name": "Heap sort",
        "content": "Altough the use of Heap sort is limited it is nevertheless a well used algorithm due to it's efficiency",
        "animated": false
    },
    {
        "name": "Counting sort",
        "content": "Counting sort is efficient if the range of input data is not significantly greater than the number of objects to be sorted.",
        "animated": false
    },
    {
        "name": "Radix sort",
        "content": "Radix sort is sometimes referred to as digital sort. In the modern era, radix sorts are most commonly applied to collections of binary strings and integers.",
        "animated": false
    },
    {
        "name": "Bucket sort",
        "content": "Bucket sort is sometimes referred to as bin sort. It is mostly used when the data contains floating-point values.",
        "animated": false
    },
    {
        "name": "Shellsort",
        "content": "Shellsort can be implemented using little code and does not use the call stack. For similar reasons, in the past, Shellsort was used in the Linux kernel.",
        "animated": false
    },
    {
        "name": "Comb sort",
        "content": "Comb sort is a relatively simple sorting algorithm originally designed by Włodzimierz Dobosiewicz and Artur Borowy in 1980.",
        "animated": false
    },
    {
        "name": "Pigeonhole sort",
        "content": "Pigeonhole sort has limited use as requirements are rarely met.",
        "animated": false
    },
    {
        "name": "Cycle sort",
        "content": "Unlike nearly every other sort, items are never written elsewhere in the array simply to push them out of the way of the action. Each value is either written zero times, if it's already in its correct position, or written one time to its correct position.",
        "animated": false
    },
    {
        "name": "Cocktail sort",
        "content": "Cocktail sort is sometimes referred to as bidirectional bubble-, cocktail shaker-, shaker sort. It is used primarily as an educational tool.",
        "animated": false
    },
    {
        "name": "Strand sort",
        "content": "This algorithm is called strand sort because there are strands of sorted elements within the unsorted elements that are removed one at a time.",
        "animated": false
    },
    {
        "name": "Bitonic sort",
        "content": "Bitonic sort is sometimes referred to as bitonic mergesort. The algorithm was devised by Ken Batcher. It is best suited for parallel implementation.",
        "animated": false
    },
    {
        "name": "Pancake sorting",
        "content": "The pancake sorting problem was first posed by Jacob E. Goodman. It is seen more often as an educational device. The goal of an implementation is to sort the sequence in as few reversals as possible. ",
        "animated": false
    },
    {
        "name": "Binary insertion sort",
        "content": "Binary insertion sort employs a binary search to determine the correct location to insert new elements.",
        "animated": false
    },
    {
        "name": "Bogosort",
        "content": "Bogosort is sometimes referred to as permutation-, slow- or stupid sort. It is not considered useful for sorting, but may be used for educational purposes, to contrast it with more efficient algorithms.",
        "animated": false
    },
    {
        "name": "Gnome sort",
        "content": "Gnome sort is nicknamed stupid sort. Gnome sort was originally proposed by Iranian computer scientist Hamid Sarbazi-Azad in 2000 and later named by Dick Grune.",
        "animated": false
    },
    {
        "name": "Sleep sort",
        "content": "This sorting algorithm is a perfect demonstration of multi-threading and scheduling done by OS.",
        "animated": false
    },
    {
        "name": "Stooge sort",
        "content": "Stooge sort is notable for its exceptionally bad time complexity and thus a canonical example of a fairly inefficient sort.",
        "animated": false
    },
    {
        "name": "Tag sort",
        "content": "Tag sort is not a distinct sorting algorithm, but an idea when we need to avoid swapping of large objects or need to access elements of a large array in both original and sorted orders, as in a relational database.",
        "animated": false
    },
    {
        "name": "Tree sort",
        "content": "A tree sort is an algorithm that builds a binary search tree from the elements to be sorted. Its typical use is sorting elements online. Take posts as an example, the set of elements seen so far are available in sorted order.",
        "animated": false
    },
    {
        "name": "Cartesian sort",
        "content": "Cartesian Sort is an Adaptive Sorting as it sorts the data faster if data is partially sorted. There are very few sorting algorithms that make use of this fact.",
        "animated": false
    },
    {
        "name": "Odd-even sort",
        "content": "Odd-even sort is sometimes referred to as brick-, odd-even transposition- or parity sort",
        "animated": false
    },
    {
        "name": "Timsort",
        "content": "Timsort is a hybrid derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.",
        "animated": false
    }
];

const Explore = () => {
    // Create array of JSX.Elements to initialize the explore section
    const initialCardListLength = 3;
    const initialCardList = [];

    for(let i=0;i<initialCardListLength;i++) {
        initialCardList.push(<Card key={i} img={`../src/assets/sort_icon_${/* index + */1}.svg`} title={catalogue[i].name} content={catalogue[i].content} animated={catalogue[i].animated} />);
    }

    const [cardList, setCardList] = useState([...initialCardList]);
    const [isCardListExpanded, setIsCardListExpanded] = useState(false);

    const toggleCardListExpand = () => {
        const tmpCardList = [];

        if(!isCardListExpanded) {
            // Add every catalogue entry which is not yet part of the cardList to the cardList using setCardList
            for(let i=initialCardListLength;i<catalogue.length;i++) {
                tmpCardList.push(<Card key={i} img={`../src/assets/sort_icon_${/* index + */1}.svg`} title={catalogue[i].name} content={catalogue[i].content} animated={catalogue[i].animated} />);
            }

            setCardList([...cardList, ...tmpCardList]);
            setIsCardListExpanded(true); // set isCardListExpandet to true - used to toggle "show more / less" btn
        } else {
            // Reinitialize the cardList to only show the startup cards
            for(let i=0;i<initialCardListLength;i++) {
                tmpCardList.push(<Card key={i} img={`../src/assets/sort_icon_${/* index + */1}.svg`} title={catalogue[i].name} content={catalogue[i].content} animated={catalogue[i].animated} />);
            }

            setCardList(tmpCardList);
            setIsCardListExpanded(false); // set isCardListExpandet to false - used to toggle "show more / less" btn
        }
    };

    return (
        <div className="mt-32 w-full">
            <div> {/* Div used as wrapper for p if there would ever be other children such as filter */}
                <p className="text-dimText uppercase font-bold">Explore catalogue (<span>{cardList.length}</span>)</p>
            </div>
            <br />
            <div id="card-container" className="flex items-start justify-between flex-wrap">
                { cardList }
            </div>
            <button onClick={toggleCardListExpand} className="mt-8 text-dimText hover:text-white transition-all ss:text-left w-full">{ isCardListExpanded ? "Show less" : "Show more" }</button>
        </div>
    )
}

const Card = ({ img, title="default", content="default", animated=false }:CardProps) =>
    <div onClick={() => {
        document.getElementById("algorithmSearchInput").value = title;

        const changeEvent = new Event('input', { bubbles: true });
        document.getElementById("algorithmSearchInput").dispatchEvent(changeEvent);
    }} className="shadow-xl shadow-[#ffffff09] overflow-hidden border-[1px] rounded-xl xs:w-full ss:w-60 sm:w-72 xsm:w-96 md:w-[400px] xmd:w-80 p-6 pb-3 mt-5 cursor-pointer hover:bg-[#ffffff03] group transition-all">
        <div className="w-24 h-20 -ml-6 -mt-6 -mb-[56px] blur-2xl opacity-10 bg-blue-gradient"></div>
        <img src={img} alt="Sorting Icon" className="w-12 absolute" />
        <h2 className="ml-24 text-2xl cursor-pointer text-blue-gradient font-bold">{title}</h2>
        {/* <p className="text-green-500 w-full font-bold text-[8px] -mb-[28px] text-right -translate-y-[98px] translate-x-8 rotate-[30deg]">{animated ? "Animated" : ""}</p> */}
        <p className="mt-9 cursor-pointer">{content}</p>
        <hr className="card-hr" />
        <button className="pt-3 group-hover:font-bold group-hover:ml-[50%] group-hover:-translate-x-1/2 transition-all ease-out duration-500">Check it out!</button>
    </div>;

export default Explore