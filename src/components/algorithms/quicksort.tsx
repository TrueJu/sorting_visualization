import {good_check_color, currently_checking_color, default_color, changeUpdateAnimation} from './animation-config';

async function quickSort() {
    let dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");
    let dataBlocks:any = [0,1,2,3,4,5];

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
    }

    async function partition(startIndex:number, endIndex:number) {
        // select the last element as a pivot from the array
        const pivot = parseInt(dataBlocks[endIndex].innerHTML);
      
        // elements smaller than the pivot element goes to the left of `pivotIndex`
        // elements greater than the pivot element goes to the right of `pivotIndex`
        // equal elements can go on either side of the pivotIndex
        let pivotIndex = startIndex;
      
        // if an element is less than or equal to the pivot, we will increase the 'pivotIndex' and we will place that element before the pivot.
        async function iPivotSwap() {
            return new Promise(resolve => {
                for (let i = startIndex; i < endIndex; i++) {
                    setTimeout(async () => {
                        dataBlocks[i].style.backgroundColor = currently_checking_color;
                        dataBlocks[endIndex].style.backgroundColor = "#0066ff"; //Pivot color

                        await new Promise(resolve => setTimeout(resolve, 400));

                        if(parseInt(dataBlocks[i].innerHTML) <= pivot) {
                            let dataBlocks1Transform = dataBlocks[i].dataset.translate;
                            let dataBlocks1Pos = dataBlocks[i].dataset.pos;
                            
                            let dataBlocks2Transform = dataBlocks[pivotIndex].dataset.translate;
                            let dataBlocks2Pos = dataBlocks[pivotIndex].dataset.pos;

                            dataBlocks[i].style.transform = `translateX(${dataBlocks2Transform}px)`;
                            dataBlocks[i].setAttribute("data-pos", `${dataBlocks2Pos}`);
                            dataBlocks[i].setAttribute("data-translate", dataBlocks2Transform);

                            dataBlocks[pivotIndex].style.transform = `translateX(${dataBlocks1Transform}px)`;
                            dataBlocks[pivotIndex].setAttribute("data-pos", `${dataBlocks1Pos}`);
                            dataBlocks[pivotIndex].setAttribute("data-translate", dataBlocks1Transform);

                            dataBlocks[i].style.backgroundColor = good_check_color;
                            dataBlocks[endIndex].style.backgroundColor = good_check_color;

                            dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");
                            dataBlocks = [0,1,2,3,4,5];

                            for(let i=0;i<dataBlockElements.length;i++) {
                                dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
                            }

                            pivotIndex++;
                        } else {
                            dataBlocks[i].style.backgroundColor = default_color;
                            dataBlocks[endIndex].style.backgroundColor = default_color;
                        }

                        if(i == endIndex -1 || i == endIndex ) { //loop endet
                            resolve(true);
                        }
                    }, i * 600);
                }
            });
        }

        await iPivotSwap();

        // swap pivotIndex with pivot element
        let dataBlocks1Transform = dataBlocks[pivotIndex].dataset.translate;
        let dataBlocks1Pos = dataBlocks[pivotIndex].dataset.pos;
        
        let dataBlocks2Transform = dataBlocks[endIndex].dataset.translate;
        let dataBlocks2Pos = dataBlocks[endIndex].dataset.pos;

        dataBlocks[pivotIndex].style.transform = `translateX(${dataBlocks2Transform}px)`;
        dataBlocks[pivotIndex].setAttribute("data-pos", `${dataBlocks2Pos}`);
        dataBlocks[pivotIndex].setAttribute("data-translate", dataBlocks2Transform);

        dataBlocks[endIndex].style.transform = `translateX(${dataBlocks1Transform}px)`;
        dataBlocks[endIndex].setAttribute("data-pos", `${dataBlocks1Pos}`);
        dataBlocks[endIndex].setAttribute("data-translate", dataBlocks1Transform);

        dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");
        dataBlocks = [0,1,2,3,4,5];

        for(let i=0;i<dataBlockElements.length;i++) {
            dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
        }
      
        return pivotIndex;
    }
      
    async function sub_quickSort() {
        //stack for storing start and end Index of the subarrays
        const s = [];
        const n = dataBlocks.length;
      
        //starting index of the given array
        let startIdx = 0;
        //ending index of the given array
        let endIdx = n - 1;
      
        //pushing the start and end index of the array into the stack
        s.push([startIdx, endIdx]);
      
        while (s.length > 0) {
            // removing the top pair from the array and get the starting
            // and ending index of the subarray
            startIdx = s[s.length - 1][0];
            endIdx = s[s.length - 1][1];
            s.pop();
        
            // partitioning the elements around pivot
            const pivotIdx = await partition(startIdx, endIdx);
        
            //push subarray indices to stack which has elements smaller than the current pivot
            if (pivotIdx - 1 > startIdx) {
                s.push([startIdx, pivotIdx - 1]);
            }
        
            //push subarray indices to stack which has elements greater than the current pivot
            if (pivotIdx + 1 < endIdx) {
                s.push([pivotIdx + 1, endIdx]);
            }
        }
    }

    await sub_quickSort();

    document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
    document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

    changeUpdateAnimation(true);

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlockElements[i].style.backgroundColor = default_color;
    }
}

export default quickSort;