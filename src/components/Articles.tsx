import React, { useState, useEffect } from "react";

import Highlight from 'react-highlight';


type articleProps = {
    title: string,
    description: string,
    sourceCodes: Array<any>,
    timeAndSpace: Array<string>,
    id: string,
    animationScript: string,
    animationElement: JSX.Element
}

const articles = [
    {
        "title": "Bubble Sort",
        "description": "Bubble sort is a simple sorting algorithm that repeatedly iterates through a list of items, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is completely sorted. The algorithm gets its name from the way smaller elements \"bubble\" to the top of the list, while larger elements sink to the bottom. Bubble sort has a time complexity of O(n^2) in the worst case, which makes it less efficient than other sorting algorithms for large lists. However, it is simple to implement and can be useful in certain situations where the list is nearly sorted or the cost of comparison is high.",
        "sourceCodes": [["Javascript", "javascript", `function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let sortedArray = bubbleSort([5, 2, 1, 4, 3]);
console.log(sortedArray);  // Output: [1, 2, 3, 4, 5]`], ["Kotlin", "kotlin", `fun bubbleSort(arr: IntArray): IntArray {
    for (i in 0 until arr.size) {
        for (j in 0 until arr.size - i - 1) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                val temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

fun main() {
    val sortedArray = bubbleSort(intArrayOf(5, 2, 1, 4, 3))
    println(sortedArray.joinToString())  // Output: [1, 2, 3, 4, 5]
}`], ["Java", "java", `import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 1, 4, 3};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));  // Output: [1, 2, 3, 4, 5]
    }
}`], ["C#", "csharp", `using System;

public class Bubblesort {
    static void Main(string[] args) {
        int[] arr = { 5, 2, 1, 4, 3 };
        bubbleSort(arr);
        Console.WriteLine(string.Join(", ", arr));  // Output: 1, 2, 3, 4, 5
    }

    static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.Length; i++) {
            for (int j = 0; j < arr.Length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`], ["Rust", "rust", `fn bubble_sort(arr: &mut [i32]) {
    for i in 0..arr.len() {
        for j in 0..arr.len() - i - 1 {
            if arr[j] > arr[j + 1] {
                // Swap the elements
                arr.swap(j, j + 1);
            }
        }
    }
}

fn main() {
    let mut arr = [5, 2, 1, 4, 3];
    bubble_sort(&mut arr);
    println!("{:?}", arr);  // Output: [1, 2, 3, 4, 5]
}`], ["Perl", "perl", `sub bubble_sort {
    my @arr = @_;
    for my $i (0..$#arr) {
        for my $j (0..$#arr - $i - 1) {
            if ($arr[$j] > $arr[$j + 1]) {
                # Swap the elements
                my $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }
    return @arr;
}

my @sorted_array = bubble_sort(5, 2, 1, 4, 3);
print "@sorted_array\\n";  # Output: 1 2 3 4 5`]],
        "timeAndSpace": ["1", "n^2", "n^2", "n"],
        "id": "1",
        "animationScript": "bubblesort",
        "animationElement": <div className="mt-5 mb-5 flex gap-[10px] w-full justify-center">
            <div className="w-[445px] h-[48px]">
                <div data-pos="0" data-translate="0" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">1</div>
                <div data-pos="1" data-translate="75" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">8</div>
                <div data-pos="2" data-translate="150" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">4</div>
                <div data-pos="3" data-translate="225" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">9</div>
                <div data-pos="4" data-translate="300" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">6</div>
                <div data-pos="5" data-translate="375" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">3</div>
            </div>
        </div>
    },
    {
        "title": "Quicksort",
        "description": `Quicksort is a divide and conquer algorithm that is used for sorting a list of items. It works by selecting a pivot element from the list and partitioning the other elements into two sublists based on whether they are less than or greater than the pivot. The sublists are then recursively sorted using the same process. The pivot element is then placed in its correct position in the sorted list.\n
Quicksort has a time complexity of O(n log n), making it more efficient than other sorting algorithms such as bubble sort and insertion sort. It is also an in-place sorting algorithm, meaning it does not require additional memory to sort the list.\n
Quicksort is a popular choice for sorting due to its simplicity and efficiency. However, it can be less efficient in certain cases, such as when the list is already sorted or when the pivot element is not chosen optimally. In these cases, the algorithm can degrade to O(n^2) time complexity.`,
        "sourceCodes": [["Javascript", "javascript", `function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
        left.push(array[i]);
        } else {
        right.push(array[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

const sortedArray = quicksort([5, 2, 1, 4, 3]);
console.log(sortedArray); // [1, 2, 3, 4, 5]`], ["Kotlin", "kotlin", `class QuickSort {
    fun quicksort(array: List<Int>): List<Int> {
        if (array.size <= 1) {
            return array
        }

        val pivot = array[0]
        val left = mutableListOf<Int>()
        val right = mutableListOf<Int>()

        for (i in 1 until array.size) {
            if (array[i] < pivot) {
                left.add(array[i])
            } else {
                right.add(array[i])
            }
        }

        return quicksort(left) + pivot + quicksort(right)
    }
}

fun main() {
    val sortedArray = QuickSort().quicksort(listOf(5, 2, 1, 4, 3))
    println(sortedArray) // [1, 2, 3, 4, 5]
}`], ["Java", "java", `import java.util.List;
import java.util.ArrayList;

public class QuickSort {
    public static List<Integer> quicksort(List<Integer> array) {
        if (array.size() <= 1) {
            return array;
        }

        int pivot = array.get(0);
        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int i = 1; i < array.size(); i++) {
            if (array.get(i) < pivot) {
                left.add(array.get(i));
            } else {
                right.add(array.get(i));
            }
        }

        List<Integer> result = new ArrayList<>();
        result.addAll(quicksort(left));
        result.add(pivot);
        result.addAll(quicksort(right));

        return result;
    }

    public static void main(String[] args) {
        List<Integer> sortedArray = quicksort(List.of(5, 2, 1, 4, 3));
        System.out.println(sortedArray); // [1, 2, 3, 4, 5]
    }
}`], ["Python", "phython", `def quicksort(array):
    if len(array) <= 1:
        return array

    pivot = array[0]
    left = []
    right = []

    for i in range(1, len(array)):
        if array[i] < pivot:
            left.append(array[i])
        else:
            right.append(array[i])

    return quicksort(left) + [pivot] + quicksort(right)

sorted_array = quicksort([5, 2, 1, 4, 3])
print(sorted_array) # [1, 2, 3, 4, 5]`], ["C#", "csharp", `using System.Collections.Generic;

public class QuickSort
{
    public static List<int> Quicksort(List<int> array)
    {
        if (array.Count <= 1)
        {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++)
        {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else
            {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args)
    {
        var sortedArray = Quicksort(new List<int> { 5, 2, 1, 4, 3 });
        System.Console.WriteLine(string.Join(", ", sortedArray)); // 1, 2, 3, 4, 5
    }
}`], ["Rust", "rust", `fn quicksort(array: Vec<i32>) -> Vec<i32> {
    if array.len() <= 1 {
        return array;
    }

    let pivot = array[0];
    let mut left = Vec::new();
    let mut right = Vec::new();

    for i in 1..array.len() {
        if array[i] < pivot {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    [quicksort(left), vec![pivot], quicksort(right)].concat()
}

fn main() {
    let sorted_array = quicksort(vec![5, 2, 1, 4, 3]);
    println!("{:?}", sorted_array); // [1, 2, 3, 4, 5]
}`], ["Perl", "perl", `sub quicksort {
    my @array = @_;
    return @array if @array < 2;

    my $pivot = pop @array;
    my @lesser = grep { $_ < $pivot } @array;
    my @greater = grep { $_ >= $pivot } @array;

    return (quicksort(@lesser), $pivot, quicksort(@greater));
}

my @sorted = quicksort(5, 2, 1, 4, 3);
print "@sorted\n";  # prints "1 2 3 4 5"`]],
        "timeAndSpace": ["n", "n^2", "nlog(n)", "nlog(n)"],
        "id": "2",
        "animationScript": "quicksort",
        "animationElement": <div className="mt-5 mb-5 flex gap-[10px] w-full justify-center">
            <div className="w-[445px] h-[48px]">
                <div data-pos="0" data-translate="0" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">1</div>
                <div data-pos="1" data-translate="75" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">8</div>
                <div data-pos="2" data-translate="150" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">4</div>
                <div data-pos="3" data-translate="225" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">9</div>
                <div data-pos="4" data-translate="300" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">6</div>
                <div data-pos="5" data-translate="375" className="data-blocks p-3 w-[70px] bg-green-500 absolute text-center">3</div>
            </div>
        </div>
    }];

const Articles = () => {
    const [visibleArticle, setVisibleArticle] = useState(<Article key={0} title={articles[0].title} description={articles[0].description} animationScript={articles[0].animationScript} sourceCodes={articles[0].sourceCodes} timeAndSpace={articles[0].timeAndSpace} id={articles[0].id} animationElement={articles[0].animationElement} />);

    return (
        <div className="flex justify-between items-start flex-col mt-20 w-full gap-14 p-3">
            <div className="w-full">
                <h2 className="mb-2 text-center ss:text-left w-full">Choose an algorithm to learn more about it</h2>
                <input type="text" id="algorithmSearchInput" onInput={(searchPhraseEvent:any) => {
                                            console.log(searchPhraseEvent.target.value.toLowerCase())
                                            for(let i=0;i<articles.length;i++) {
                                                if(articles[i].title.toLowerCase().replace(' ', '').includes(searchPhraseEvent.target.value.toLowerCase().replace(' ', ''))) {
                                                    setVisibleArticle(<Article key={i} title={articles[i].title} description={articles[i].description} animationScript={articles[i].animationScript} sourceCodes={articles[i].sourceCodes} timeAndSpace={articles[i].timeAndSpace} id={articles[i].id} animationElement={articles[i].animationElement} />);
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

let updateAnimation = false;

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
        }, i * 600)
    }

    setTimeout(() => {
        if(!flawless) {
            bubbleSort();
        } else {
            //finished
            document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
            document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

            updateAnimation = true;

            for(let i=0;i<dataBlockElements.length;i++) {
                dataBlockElements[i].style.backgroundColor = default_color;
            }
        }
    }, (dataBlocks.length + 1) * 600);
}

function quickSort() {
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
        }, i * 600)
    }

    setTimeout(() => {
        if(!flawless) {
            quickSort();
        } else {
            //finished
            document.getElementById("runAnimationBtn")?.classList.toggle("hidden");
            document.getElementById("animationRunningBtn")?.classList.toggle("hidden");

            updateAnimation = true;

            for(let i=0;i<dataBlockElements.length;i++) {
                dataBlockElements[i].style.backgroundColor = default_color;
            }
        }
    }, (dataBlocks.length + 1) * 600);
}
  

const Article = ({ title="default", description="...", animationScript, sourceCodes=[], timeAndSpace, id, animationElement }:articleProps) => {
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

    updateAnimation = false;

    return(
        <div className="  w-full" id={id}>
            <h2 className={`text-3xl cursor-pointer text-${Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? 'red' : 'blue'}-gradient font-bold w-fit mb-5`}>{title}</h2>
            <p className="whitespace-pre-wrap">
                {description}
            </p><br/>
            {animationElement}
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