import {good_check_color, currently_checking_color, default_color, changeUpdateAnimation} from './animation-config';

function mergeSort() {
    let dataBlockElements = document.querySelectorAll<HTMLElement>(".data-blocks");
    let dataBlocks:any = [0,1,2,3,4,5];

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlocks[parseInt(`${dataBlockElements[i].dataset.pos}`)] = dataBlockElements[i];
    }

    function merge(A:Array<number>, temp:Array<number>, from:number, mid:number, to:number) {
        let k = from;
        let i = from;
        let j = mid + 1;
      
        // loop till no elements are left in the left and right runs
        while (i <= mid && j <= to) {
            if (A[i] < A[j]) {
                temp[k++] = A[i++];
            } else {
                temp[k++] = A[j++];
            }
        }
      
        // copy remaining elements
        while (i < A.length && i <= mid) {
            temp[k++] = A[i++];
        }
      
        /* no need to copy the second half (since the remaining items
           are already in their correct position in the temporary array) */
      
        // copy back to the original array to reflect sorted order
        for (i = from; i <= to; i++) {
            A[i] = temp[i];
        }
    }


    let low = 0;
    let high = A.length - 1;

    // sort array `A[]` using a temporary array `temp`
    const temp = A.slice();

    // divide the array into blocks of size `m`
    // m = [1, 2, 4, 8, 16…]
    for (let m = 1; m <= high - low; m = 2 * m) {
        for (let i = low; i < high; i += 2 * m) {
            const from = i;
            const mid = i + m - 1;
            const to = Math.min(i + 2 * m - 1, high);

            merge(A, temp, from, mid, to);
        }
    }

    
    console.log(A);

    document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
    document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

    changeUpdateAnimation(true);

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlockElements[i].style.backgroundColor = default_color;
    }
}

const A = [5, 7, -9, 3, -4, 2, 8];


export default mergeSort;