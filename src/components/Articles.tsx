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
        "title": "test",
        "description": "test content 1",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "1",
        animationElement: <div>animation el</div>
    },
    {
        "title": "test",
        "description": "test content 2",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "2",
        animationElement: <div>animation el</div>
    },
    {
        "title": "test",
        "description": "test content 3",
        "sourceCodes": [["Javascript", "javascript", "var jhdf = 10;<br>run();"], ["Kotlin", "kotlin", "var jhdf = 33;<br>run();"]],
        "id": "3",
        animationElement: <div>animation el</div>
    }
];

const Articles = () => {
    const articlesHolder = [];

    for(let i=0;i<articles.length;i++) {
        articlesHolder.push(<Article key={i} title={articles[i].title} description={articles[i].description} sourceCodes={articles[i].sourceCodes} id={articles[i].id} animationElement={articles[i].animationElement} />);
    }

    return (
        <div id="articles_wrapper" className="flex justify-between items-start flex-col mt-32 w-full gap-14">
            {articlesHolder}
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