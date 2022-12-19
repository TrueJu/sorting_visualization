import React, { useState, useEffect } from "react";

import Highlight from 'react-highlight';



type articleProps = {
    title: string,
    description: string,
    sourceCodes: Array<any>,
    id: string,
    animationElement: JSX.Element
}

const articles = [
    {
        "title": "Bubble Sort",
        "description": "Bubble sort is a simple sorting algorithm that repeatedly iterates through a list of items, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is completely sorted. The algorithm gets its name from the way smaller elements \"bubble\" to the top of the list, while larger elements sink to the bottom. Bubble sort has a time complexity of O(n^2) in the worst case, which makes it less efficient than other sorting algorithms for large lists. However, it is simple to implement and can be useful in certain situations where the list is nearly sorted or the cost of comparison is high.",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "1",
        animationElement: 
        <div>
            d
        </div>
    },
    {
        "title": "merge sort",
        "description": "test content 2",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"], ["C#", "csharp", "var jhdf = 23;<br>run();"]],
        "id": "2",
        animationElement: <div>animation el</div>
    },
    {
        "title": "merge sort quick",
        "description": "test content 3",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "3",
        animationElement: <div>animation el</div>
    },
    {
        "title": "heap sort",
        "description": "test content 4",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "3",
        animationElement: <div>animation el</div>
    }
];

const Articles = () => {
    const [visibleArticle, setVisibleArticle] = useState(<Article key={0} title={articles[0].title} description={articles[0].description} sourceCodes={articles[0].sourceCodes} id={articles[0].id} animationElement={articles[0].animationElement} />);

    return (
        <div className="flex justify-between items-start flex-col mt-20 w-full gap-14 p-3">
            <div className="w-full">
                <h2 className="mb-2 text-center ss:text-left w-full">Choose an algorithm to learn more about it</h2>
                <input type="text" id="algorithmSearchInput" onInput={(searchPhraseEvent:any) => {
                                            console.log(searchPhraseEvent.target.value.toLowerCase())
                                            for(let i=0;i<articles.length;i++) {
                                                if(articles[i].title.toLowerCase().replace(' ', '').includes(searchPhraseEvent.target.value.toLowerCase().replace(' ', ''))) {
                                                    setVisibleArticle(<Article key={i} title={articles[i].title} description={articles[i].description} sourceCodes={articles[i].sourceCodes} id={articles[i].id} animationElement={articles[i].animationElement} />);
                                                    i = articles.length;
                                                }
                                            }
                                        }} placeholder="Try merge sort.." className="rounded bg-transparent border border-white p-2 w-full max-w-xs ml-[50%] ss:ml-[0px] translate-x-[-50%] ss:translate-x-[0px]" />
                <button id="invisClickMe"></button>
            </div>
            {visibleArticle}
        </div>
    )
}

function bubbleSort() {
    const good_check_color = "#00a716";
    const currently_checking_color = "#e80f1b";
    const default_color = "#00b862";

    const dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");
    const dataBlocks:any = [0,1,2,3,4,5];

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
    }

    let flawless = true;

    for(let i=0;i<dataBlocks.length;i++) {
        flawless = true;

        setTimeout(async () => {
            let datablock = dataBlocks[i];

            if(i!==dataBlocks.length-1) {
                let next_datablock = dataBlocks[i+1];

                datablock.style.backgroundColor = currently_checking_color;

                await new Promise(resolve => setTimeout(resolve, 400));
                
                if(parseInt(datablock.innerHTML) > parseInt(next_datablock.innerHTML)) {
                    flawless = false;

                    let translate1 = dataBlocks[i].dataset.translate;
                    let translate2 = dataBlocks[i+1].dataset.translate;

                    datablock.style.transform = `translateX(${translate2}px)`;
                    datablock.setAttribute("data-pos", `${i+1}`);
                    datablock.setAttribute("data-translate", translate2);

                    next_datablock.style.transform = `translateX(${translate1}px)`;
                    next_datablock.setAttribute("data-pos", `${i}`);
                    next_datablock.setAttribute("data-translate", translate1);
                    

                    datablock.style.backgroundColor = i===dataBlocks.length-2 ? good_check_color : default_color;


                    for(let i=0;i<dataBlockElements.length;i++) {
                        dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
                    }
                    i--
                } else {
                    datablock.style.backgroundColor = good_check_color;
                }
            } else {
                datablock.style.backgroundColor = good_check_color;
            }
        }, i * 500)
    }

    setTimeout(() => {
        if(!flawless) {
            bubbleSort();
        } else {
            //finished
        }
    }, (dataBlocks.length + 1) * 500);
}
  

const Article = ({ title="default", description="...", sourceCodes=[], id, animationElement }:articleProps) => {
    const sourceCodeElements = [];

    for(let i=0;i<sourceCodes.length;i++) {
        sourceCodeElements.push(<SourceCodeElement title={sourceCodes[i][0]} sourcecode={sourceCodes[i][2]} language={sourceCodes[i][1]} />);
    }

    useEffect(() => {
        const dataBlocks = document.querySelectorAll<HTMLElement>(".data-blocks");

        for(let i=0;i<dataBlocks.length;i++) {
            dataBlocks[i].style.transform = `translateX(${dataBlocks[i].dataset.translate}px)`;
        }
    });

    return(//border border-red-700
        <div className="  w-full" id={id}>
            <h2 className={`text-3xl cursor-pointer text-${Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? 'red' : 'blue'}-gradient font-bold w-fit mb-5`}>{title}</h2>
            <div>
                {description}
            </div>
            <div className="mt-5 mb-5 flex gap-[10px] w-full justify-center">
                <div className="w-[445px] h-[48px]">
                    <div id="1" data-pos="0" data-translate="0" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">1</div>
                    <div id="8" data-pos="1" data-translate="75" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">8</div>
                    <div id="4" data-pos="2" data-translate="150" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">4</div>
                    <div id="6" data-pos="3" data-translate="225" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">6</div>
                    <div id="3" data-pos="4" data-translate="300" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">3</div>
                    <div id="9" data-pos="5" data-translate="375" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">9</div>
                </div>
            </div>
            <button onClick={bubbleSort}>sort</button>
            <div>
                {sourceCodeElements}
            </div>
        </div>
    )
}

const SourceCodeElement = ({title, sourcecode="Err: 404", language="javascript"}:{sourcecode:string, title:string, language:string}) =>
    <div className="mb-5">
        <h2>{title}</h2>
        
        <Highlight className={language}>
            {sourcecode}
        </Highlight>
    </div>

export default Articles