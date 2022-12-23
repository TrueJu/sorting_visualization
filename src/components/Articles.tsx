import React, { useState, useEffect } from "react";
import articles from '../data/ArticlesData';
import Highlight from 'react-highlight';
import {updateAnimation, changeUpdateAnimation, bubbleSort, quickSort} from './algorithms/import-handler';

type articleProps = {
    title: string,
    description: string,
    sourceCodes: Array<any>,
    timeAndSpace: Array<string>,
    id: string,
    animationScript: string
}

let shouldSearch = true;

const articleTitlesObj:any = {};
let searchString:string;
let slicedSearchString:string;
let articleTitleObjSlicedRef:any;   //TODO correct type
let artTitleObjSlRefLen:number;
let articleMatchRef:number;

for(let i=0;i<articles.length;i++) {
    let currentArticleTitle = articles[i].title.toLowerCase().replace(' ', '');
    let currentArticleTitleSliced = currentArticleTitle.slice(0,2);

    if(articleTitlesObj.hasOwnProperty(currentArticleTitleSliced)) {
        articleTitlesObj[currentArticleTitleSliced].push([currentArticleTitle, i]);
    } else {
        articleTitlesObj[currentArticleTitleSliced] = [[currentArticleTitle, i]];
    }
}

const Articles = () => {
    const [visibleArticle, setVisibleArticle] = useState(<Article key={0} title={articles[0].title} description={articles[0].description} animationScript={articles[0].animationScript} sourceCodes={articles[0].sourceCodes} timeAndSpace={articles[0].timeAndSpace} id={articles[0].id} />);
    
    return (
        <div className="flex justify-between items-start flex-col mt-20 w-full gap-14 p-3">
            <div className="w-full">
                <h2 className="mb-2 text-center ss:text-left w-full">Choose an algorithm to learn more about it</h2>
                <input type="text" id="algorithmSearchInput" onInput={(searchPhraseEvent:any) => {
                                            if(shouldSearch) {
                                                if(searchPhraseEvent.target.value.length >= 2) {
                                                    shouldSearch = false;
                                                    setTimeout(() => {
                                                        try {
                                                            searchString = searchPhraseEvent.target.value.toLowerCase().replaceAll(' ', '');
                                                            slicedSearchString = searchString.slice(0,2);
        
                                                            if(articleTitlesObj.hasOwnProperty(slicedSearchString)) {
                                                                articleTitleObjSlicedRef = articleTitlesObj[slicedSearchString];
                                                                artTitleObjSlRefLen = articleTitleObjSlicedRef.length;
                                                                
                                                                for(let i=0;i<artTitleObjSlRefLen;i++) {
                                                                    if(articleTitleObjSlicedRef[i][0].lastIndexOf(searchString) > -1) {
                                                                        articleMatchRef = articleTitleObjSlicedRef[i][1];
        
                                                                        setVisibleArticle(<Article key={articleMatchRef} title={articles[articleMatchRef].title} description={articles[articleMatchRef].description} animationScript={articles[articleMatchRef].animationScript} sourceCodes={articles[articleMatchRef].sourceCodes} timeAndSpace={articles[articleMatchRef].timeAndSpace} id={articles[articleMatchRef].id} />);
                                                                        i = artTitleObjSlRefLen;
                                                                    }
                                                                }
                                                            }
                                                            shouldSearch = true;
                                                        } catch (error) { /*TODO: Cleanup userinput so no errors are thrown - Not important, everything works great without a catch*/ 
                                                            shouldSearch = true;
                                                            //console.log(error);
                                                        }
                                                    }, 500);
                                                }
                                            }
                                        }} placeholder="Try merge sort.." className="rounded bg-transparent border border-white p-2 w-full max-w-xs ml-[50%] ss:ml-[0px] translate-x-[-50%] ss:translate-x-[0px]" />
                <button id="invisClickMe"></button>
            </div>
            {visibleArticle}
        </div>
    )
}

const Article = ({ title="default", description="...", animationScript, sourceCodes=[], timeAndSpace, id }:articleProps) => {
    const sourceCodeElements = [];
    let windowLastClientWidth:number;

    for(let i=0;i<sourceCodes.length;i++) {
        sourceCodeElements.push(<SourceCodeElement title={sourceCodes[i][0]} sourcecode={sourceCodes[i][2]} language={sourceCodes[i][1]} />);
    }

    useEffect(() => {
        const dataBlocks = document.querySelectorAll<HTMLElement>(".data-blocks");

        windowLastClientWidth = document.body.clientWidth;

        for(let i=0;i<dataBlocks.length;i++) {
            dataBlocks[i].style.transform = `translateX(${dataBlocks[i].dataset.translate}px)`;
        }
    });

    window.addEventListener('resize', () => {
        if((windowLastClientWidth < 480 && document.body.clientWidth >= 480) || (windowLastClientWidth >= 480 && document.body.clientWidth < 480)) {
            const dataBlocks = document.querySelectorAll<HTMLElement>(".data-blocks");

            for(let i=0;i<dataBlocks.length;i++) {
                dataBlocks[i].setAttribute("data-translate", document.body.clientWidth < 480 ? String(i*50): String(i*75));
                dataBlocks[i].style.transform = `translateX(${dataBlocks[i].dataset.translate}px)`;
            }
        }

        windowLastClientWidth = document.body.clientWidth;
    });

    changeUpdateAnimation(false);

    return(
        <div className="  w-full" id={id}>
            <h2 className={`text-3xl cursor-pointer text-${Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? 'red' : 'blue'}-gradient font-bold w-fit mb-5`}>{title}</h2>
            <p className="whitespace-pre-wrap">
                {description}
            </p><br/>
            <div className="mt-5 mb-5 flex gap-[10px] w-full justify-center">
                <div className="w-[295px] h-[64px] xs:w-[445px] xs:h-[48px]">
                    <div data-pos="0" data-translate="0" className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">1</div>
                    <div data-pos="1" data-translate={document.body.clientWidth < 480 ? "50": "75"} className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">8</div>
                    <div data-pos="2" data-translate={document.body.clientWidth < 480 ? "100": "150"} className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">4</div>
                    <div data-pos="3" data-translate={document.body.clientWidth < 480 ? "150": "225"} className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">9</div>
                    <div data-pos="4" data-translate={document.body.clientWidth < 480 ? "200": "300"} className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">6</div>
                    <div data-pos="5" data-translate={document.body.clientWidth < 480 ? "250": "375"} className="data-blocks p-3 xs:py-3 py-5 w-[45px] xs:w-[70px] bg-green-500 absolute text-center">3</div>
                </div>
            </div>
            <button  onClick={() => {
                switch(animationScript) {
                    case "bubblesort":
                        document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
                        document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

                        if(updateAnimation) {
                            const dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");

                            for(let i=0;i<dataBlockElements.length;i++) {
                                dataBlockElements[i].innerHTML = String(Math.floor(Math.random() * (9 - 0 + 1) + 0));
                            }
                        }

                        bubbleSort();
                        break;
                    case "quicksort":
                        document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
                        document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

                        if(updateAnimation) {
                            const dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");

                            for(let i=0;i<dataBlockElements.length;i++) {
                                dataBlockElements[i].innerHTML = String(Math.floor(Math.random() * (9 - 0 + 1) + 0));
                            }
                        }

                        quickSort();
                        break;
                    default:
                        console.error("error");
                }
            }} type="button" id="runAnimationBtn" className="ml-[50%] translate-x-[-50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Run Animation
                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <button disabled type="button" id="animationRunningBtn" className="hidden ml-[50%] translate-x-[-50%] py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center">
                <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Animating...
            </button><br/><br/><br/>
            <p><b>Space complexity:&ensp;</b> {timeAndSpace[0]}<br/><b>Time complexity:&emsp;</b> {timeAndSpace[1]} (worst), {timeAndSpace[2]} (average), {timeAndSpace[3]} (best)</p>
            <br/><br/><br/>
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