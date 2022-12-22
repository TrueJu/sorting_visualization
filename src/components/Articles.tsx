import React, { useState, useEffect } from "react";

import Highlight from 'react-highlight';


type articleProps = {
    title: string,
    description: string,
    sourceCodes: Array<any>,
    timeAndSpace: Array<string>,
    id: string,
    animationScript: string
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
        "animationScript": "bubblesort"
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "animationScript": "quicksort"
    },
    {
        "title": "Merge sort",
        "description": `Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. It works by dividing an array into two halves, sorting each half, and then merging them back together. This process is repeated until the entire array is sorted.\n
One of the key advantages of merge sort is that it is a stable sort, meaning that it preserves the relative order of elements with equal keys. It is also a divide and conquer algorithm, which means that it breaks down a problem into smaller subproblems, solves them, and then combines the solutions to the subproblems to solve the original problem. This makes it highly efficient and scalable.\n
Overall, merge sort is a reliable and efficient sorting algorithm that is well-suited for a wide range of applications.`,
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
        "id": "3",
        "animationScript": "mergesort"
    },
    {
        "title": "Selection sort",
        "description": `Selection sort is an algorithm for sorting a list of items in ascending order. It works by repeatedly selecting the minimum element from the unsorted portion of the list and appending it to the sorted portion.\n
To perform selection sort, the list is first divided into two sublists: a sorted sublist and an unsorted sublist. The algorithm begins by finding the minimum element in the unsorted sublist and swapping it with the first element in the sublist. It then repeats this process for the second element, then the third, and so on, until the entire list is sorted.\n
One of the main advantages of selection sort is its simplicity. It has a time complexity of O(n^2), which means it is relatively efficient for small lists, but becomes less efficient as the list size increases. It is also an in-place sorting algorithm, meaning it does not require additional memory to sort the list.\n
Despite its simplicity, selection sort is generally not used as a primary sorting algorithm due to its relatively slow performance compared to more efficient algorithms such as quicksort and mergesort. It is more often used as a learning tool or in situations where the list is small and the cost of using a more efficient algorithm is not justified.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "4",
        "animationScript": "selectionsort"
    },
    {
        "title": "Insertion sort",
        "description": `Insertion sort is a simple sorting algorithm that works by iterating through an array of items, and inserting each item into its correct position in the sorted array.\n
The algorithm begins by considering the first element in the array as being sorted. It then iterates through the rest of the array, and for each element it compares it to the elements that have already been sorted. If the element being considered is smaller than an element that has already been sorted, it is inserted into its correct position in the sorted array by shifting the larger element and all of the elements that come after it one position to the right. If the element being considered is larger than all of the elements that have already been sorted, it is simply appended to the end of the sorted array.\n
Insertion sort is a simple and easy-to-understand sorting algorithm, but it is not particularly efficient for large arrays. It has a time complexity of O(n^2) in the worst case, which means that it can take a long time to sort large arrays. However, it is useful in certain situations because it is simple to implement and it performs well on small arrays and arrays that are almost sorted.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "5",
        "animationScript": "insertionsort"
    },
    {
        "title": "Heap sort",
        "description": `Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort a list of elements. A binary heap is a complete binary tree that satisfies the heap property, which states that the value of each node in the tree is greater than or equal to the value of its children.\n
To sort a list using heap sort, the first step is to build a binary heap from the list. This is done by starting with an empty heap and inserting each element of the list into the heap one by one. As each element is inserted, the heap property is maintained by swapping the element with its parent if necessary.\n
Once the heap has been built, the sorting process begins by repeatedly removing the root node (which is the maximum element in the heap) and placing it at the end of the sorted list. The heap is then restructured to maintain the heap property, with the next maximum element becoming the new root. This process is repeated until the heap is empty, at which point the list is completely sorted.\n
Heap sort has a time complexity of O(n log n), making it more efficient than bubble sort and insertion sort for large lists. However, it is not as efficient as some other sorting algorithms, such as quicksort and merge sort.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "6",
        "animationScript": "heapsort"
    },
    {
        "title": "Counting sort",
        "description": `Counting sort is an efficient sorting algorithm that is used to sort a collection of items where the items are assumed to be integers in a specific range. It operates by creating an array of counters, with each element in the array representing a specific integer in the input range. The algorithm then counts the number of occurrences of each integer in the input array and stores this count in the corresponding counter in the counter array. Once the counts have been determined, the algorithm iterates through the counter array and generates the sorted output by adding each integer the appropriate number of times to the output array.\n
Counting sort has a time complexity of O(n+k), where n is the number of items in the input array and k is the range of integers. This makes it an efficient algorithm for sorting small collections of integers where the range of integers is known in advance. However, it is not a suitable algorithm for sorting larger collections or collections where the range of integers is not known in advance, as the size of the counter array would be too large.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "7",
        "animationScript": "countingsort"
    },
    {
        "title": "Radix sort",
        "description": `Radix sort is a sorting algorithm that sorts elements based on the individual digits or letters that make up the elements. It is a non-comparative sorting algorithm, meaning it does not compare the values of the elements to be sorted. Instead, it relies on the fact that each element can be represented as a sequence of digits or letters, and these digits or letters can be used to determine the sorted order of the elements.\n
To perform a radix sort, the elements to be sorted are first divided into groups based on the digit or letter being considered at that stage of the sort. For example, if the elements are integers and we are sorting based on the units digit, then all elements ending in 0 will be placed in one group, all elements ending in 1 will be placed in another group, and so on. Once the elements have been divided into groups, they are then reassembled in the correct order based on the value of the digit or letter being considered.\n
Radix sort is a stable sort, meaning that elements with the same value will remain in the same order relative to each other after the sort is complete. It is also an efficient sorting algorithm, with a time complexity of O(n * k), where n is the number of elements to be sorted and k is the maximum number of digits or letters in any element.\n
Radix sort is commonly used to sort large datasets, such as phone books or large databases, where the elements to be sorted are made up of multiple digits or letters. It is also useful for sorting elements that can be represented as strings, such as words or names.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "8",
        "animationScript": "radixsort"
    },
    {
        "title": "Bucket sort",
        "description": `Bucket sort is an efficient sorting algorithm that works by distributing the elements of a list into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort algorithm. Once all the buckets are sorted, the final sorted list is obtained by concatenating the buckets in order.\n
The basic idea behind bucket sort is to divide the input list into a fixed number of buckets, and then sort the elements within each bucket. This is especially effective when the input list is uniformly distributed, as it leads to an O(n) runtime in the best case. However, in the worst case, the runtime can degrade to O(n^2) if the elements are not uniformly distributed and the buckets are not evenly filled.\n
To implement bucket sort, it is necessary to define a function that distributes the elements of the input list into the appropriate buckets. This is typically done by mapping the elements to a numerical range and then using this mapping to determine which bucket each element should be placed in. The buckets can then be sorted using any sorting algorithm, such as quicksort or insertion sort. Finally, the elements in the buckets are concatenated to form the final sorted list.\n
Overall, bucket sort is a useful algorithm for sorting large lists of uniformly distributed elements, as it can achieve good performance in both the best and average cases. However, it is not well-suited for sorting lists with a non-uniform distribution of elements, as the performance can degrade significantly in these cases.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "9",
        "animationScript": "bucketsort"
    },
    {
        "title": "Shellsort",
        "description": `Shellsort, also known as the Shell's method, is an efficient sorting algorithm that is a variation of the insertion sort. It was developed by Donald Shell in 1959.\n
The key idea behind Shellsort is to arrange the elements in the array into a sequence of subarrays, called "gaps," and then sort each gap using an insertion sort. The idea is that the insertion sort is efficient for small arrays, and by sorting the gaps, we can partially sort the larger array, making it easier for the subsequent insertion sorts to work on.\n
To implement Shellsort, the first step is to choose a gap sequence. This is a sequence of integers that determines the size of the gaps between the elements in the array. There are several different gap sequences that can be used, and the choice of gap sequence can affect the performance of the Shellsort algorithm.\n
Once the gap sequence has been chosen, the algorithm begins by sorting the elements that are a certain number of gaps apart, using an insertion sort. This is done for each gap in the sequence. As the gap decreases, the elements become more and more sorted, until the gap becomes 1 and the entire array is sorted.\n
Shellsort is a relatively efficient sorting algorithm, with a time complexity of O(n^(3/2)). It is not as fast as some of the more advanced sorting algorithms, such as quicksort or mergesort, but it is relatively simple to implement and can be a good choice for small to medium-sized arrays.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "10",
        "animationScript": "shellsort"
    },
    {
        "title": "Comb sort",
        "description": `Comb sort is an algorithm for sorting lists that is based on the idea of a bubble sort, but with improved performance. It works by repeatedly comparing elements that are a certain distance apart from each other, known as the gap, and swapping them if they are out of order. This process is repeated with progressively smaller gap values until the list is fully sorted.\n
One of the key features of comb sort is its ability to quickly move elements that are far away from their correct position towards the front of the list. This is achieved by using a gap value that is larger than the gap used in a bubble sort, which allows the algorithm to make more efficient swaps and move elements further towards their correct position with each pass.\n
Comb sort is generally faster and more efficient than bubble sort, and is often used as a simple and easy-to-understand alternative to more complex sorting algorithms. However, it is not as efficient as other sorting algorithms such as quicksort or merge sort, and is generally not used in applications where performance is critical.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "11",
        "animationScript": "combsort"
    },
    {
        "title": "Pigeonhole sort",
        "description": `Pigeonhole sort is an efficient sorting algorithm that is based on the pigeonhole principle. This principle states that if there are n items, m pigeonholes and if n > m, then at least one pigeonhole must contain more than one item.\n
The pigeonhole sort algorithm works by dividing the input into a set of pigeonholes and then sorting the items within each pigeonhole. To do this, the algorithm first determines the minimum and maximum values in the input array. It then creates a set of pigeonholes, where each pigeonhole represents a range of values. For example, if the minimum value is 0 and the maximum value is 99, the algorithm might create 100 pigeonholes, each representing a range of 1.\n
Next, the algorithm iterates through the input array and places each item into the appropriate pigeonhole based on its value. For example, if the item is 42, it would be placed in the 42nd pigeonhole.\n
Once all of the items have been placed into their respective pigeonholes, the algorithm iterates through the pigeonholes and retrieves the items in each pigeonhole in order, creating a sorted output array.\n
Pigeonhole sort has a time complexity of O(n+m), where n is the number of items and m is the number of pigeonholes. This makes it more efficient than some other sorting algorithms, such as bubble sort, which has a time complexity of O(n^2). However, it is not as efficient as other sorting algorithms, such as quicksort, which has a time complexity of O(n log n).\n
Pigeonhole sort is best suited for situations where the input is small and the range of values is known in advance. It is not a good choice for large, unsorted data sets with a wide range of values.`,
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

public class QuickSort {
    public static List<int> Quicksort(List<int> array) {
        if (array.Count <= 1) {
            return array;
        }

        int pivot = array[0];
        var left = new List<int>();
        var right = new List<int>();

        for (int i = 1; i < array.Count; i++) {
            if (array[i] < pivot)
            {
                left.Add(array[i]);
            }
            else {
                right.Add(array[i]);
            }
        }

        var result = new List<int>();
        result.AddRange(Quicksort(left));
        result.Add(pivot);
        result.AddRange(Quicksort(right));

        return result;
    }

    static void Main(string[] args) {
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
        "id": "12",
        "animationScript": "pigeonholesort"
    }];

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

const good_check_color = "#00a716";
const currently_checking_color = "#e80f1b";
const default_color = "#00b862";
let updateAnimation = false;

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

            updateAnimation = true;

            for(let i=0;i<dataBlockElements.length;i++) {
                dataBlockElements[i].style.backgroundColor = default_color;
            }
        }
    }, (dataBlocks.length + 1) * 600);
}

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

    updateAnimation = true;

    for(let i=0;i<dataBlockElements.length;i++) {
        dataBlockElements[i].style.backgroundColor = default_color;
    }
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

    updateAnimation = false;

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