import React, { useState } from "react";

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
        "title": "bubblesort",
        "description": "test content 1",
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
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
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
        <div className="flex justify-between items-start flex-col mt-32 w-full gap-14">
            <div className="w-full">
                <h2 className="mb-2">Choose an algorithm to learn more about it</h2>
                <input type="text" id="algorithmSearchInput" onInput={(searchPhraseEvent:any) => {
                                            console.log("fkjd")
                                            for(let i=0;i<articles.length;i++) {
                                                if(articles[i].title.toLowerCase().includes(searchPhraseEvent.target.value.toLowerCase())) {
                                                    setVisibleArticle(<Article key={i} title={articles[i].title} description={articles[i].description} sourceCodes={articles[i].sourceCodes} id={articles[i].id} animationElement={articles[i].animationElement} />);
                                                    i = articles.length;
                                                }
                                            }
                                        }} placeholder="Try merge sort.." className="rounded bg-transparent border border-white p-2 w-full max-w-xs" />
                <button id="invisClickMe"></button>
            </div>
            {visibleArticle}
        </div>
    )
}

const Article = ({ title="default", description="...", sourceCodes=[], id, animationElement }:articleProps) => {
    const sourceCodeElements = [];

    for(let i=0;i<sourceCodes.length;i++) {
        sourceCodeElements.push(<SourceCodeElement title={sourceCodes[i][0]} sourcecode={sourceCodes[i][2]} language={sourceCodes[i][1]} />);
    }

    return(
        <div className="border border-red-700 w-full" id={id}>
            <h2>{title}</h2>
            <div>
                {description}
            </div>
            <div>
                {animationElement}
            </div>

            <br/>

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