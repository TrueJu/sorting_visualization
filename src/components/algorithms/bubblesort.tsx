import {good_check_color, currently_checking_color, default_color, changeUpdateAnimation} from './animation-config';

function bubbleSort() {
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
        }, i * 600)
    }

    setTimeout(() => {
        if(!flawless) {
            bubbleSort();
        } else {
            //finished
            document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
            document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

            changeUpdateAnimation(true)

            for(let i=0;i<dataBlockElements.length;i++) {
                dataBlockElements[i].style.backgroundColor = default_color;
            }
        }
    }, (dataBlocks.length + 1) * 600);
}

export default bubbleSort;