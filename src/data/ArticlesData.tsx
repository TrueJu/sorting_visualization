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
        "sourceCodes": [["Javascript", "javascript", `function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}
    
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
          
const sortedArray = mergeSort([5, 2, 1, 4, 3]);
console.log(sortedArray); // [1, 2, 3, 4, 5]`], ["Kotlin", "kotlin", `fun mergeSort(array: IntArray): IntArray {
    if (array.size <= 1) {
        return array
    }

    val middle = array.size / 2
    val left = array.copyOfRange(0, middle)
    val right = array.copyOfRange(middle, array.size)

    return merge(mergeSort(left), mergeSort(right))
}

fun merge(left: IntArray, right: IntArray): IntArray {
    val result = IntArray(left.size + right.size)
    var leftIndex = 0
    var rightIndex = 0
    var resultIndex = 0

    while (leftIndex < left.size && rightIndex < right.size) {
        if (left[leftIndex] < right[rightIndex]) {
            result[resultIndex++] = left[leftIndex++]
        } else {
            result[resultIndex++] = right[rightIndex++]
        }
    }

    while (leftIndex < left.size) {
        result[resultIndex++] = left[leftIndex++]
    }

    while (rightIndex < right.size) {
        result[resultIndex++] = right[rightIndex++]
    }

    return result
}

fun main(args: Array<String>) {
    val sortedArray = mergeSort(intArrayOf(5, 2, 1, 4, 3))
    println(sortedArray.joinToString()) // [1, 2, 3, 4, 5]
}`], ["Java", "java", `import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] array = {5, 2, 1, 3, 4};
        int[] sortedArray = mergeSort(array);
        System.out.println(Arrays.toString(sortedArray)); // [1, 2, 3, 4, 5]
    }

    public static int[] mergeSort(int[] array) {
        if (array.length <= 1) {
            return array;
        }

        int middle = array.length / 2;
        int[] left = Arrays.copyOfRange(array, 0, middle);
        int[] right = Arrays.copyOfRange(array, middle, array.length);

        return merge(mergeSort(left), mergeSort(right));
    }

    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int leftIndex = 0;
        int rightIndex = 0;
        int resultIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result[resultIndex++] = left[leftIndex++];
            } else {
                result[resultIndex++] = right[rightIndex++];
            }
        }

        while (leftIndex < left.length) {
            result[resultIndex++] = left[leftIndex++];
        }

        while (rightIndex < right.length) {
            result[resultIndex++] = right[rightIndex++];
        }

        return result;
    }
}`], ["C#", "csharp", `using System;

namespace MergeSort {
    class Program {
        static void Main(string[] args) {
            int[] array = { 5, 2, 1, 4, 3 };
            int[] sortedArray = MergeSort(array);
            Console.WriteLine(string.Join(", ", sortedArray)); // 1, 2, 3, 4, 5
        }

        static int[] MergeSort(int[] array) {
            if (array.Length <= 1) {
                return array;
            }

            int middle = array.Length / 2;
            int[] left = new int[middle];
            Array.Copy(array, 0, left, 0, middle);
            int[] right = new int[array.Length - middle];
            Array.Copy(array, middle, right, 0, array.Length - middle);

            return Merge(MergeSort(left), MergeSort(right));
        }

        static int[] Merge(int[] left, int[] right) {
            int[] result = new int[left.Length + right.Length];
            int leftIndex = 0;
            int rightIndex = 0;
            int resultIndex = 0;

            while (leftIndex < left.Length && rightIndex < right.Length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result[resultIndex++] = left[leftIndex++];
                }
                else {
                    result[resultIndex++] = right[rightIndex++];
                }
            }

            while (leftIndex < left.Length) {
                result[resultIndex++] = left[leftIndex++];
            }

            while (rightIndex < right.Length) {
                result[resultIndex++] = right[rightIndex++];
            }

            return result;
        }
    }
}`], ["Rust", "rust", `fn merge_sort(array: &mut [i32]) {
    if array.len() > 1 {
        let middle = array.len() / 2;
        merge_sort(&mut array[..middle]);
        merge_sort(&mut array[middle..]);
        merge(array);
    }
}

fn merge(array: &mut [i32]) {
    let left = array[..array.len() / 2].to_vec();
    let right = array[array.len() / 2..].to_vec();

    let mut left_index = 0;
    let mut right_index = 0;
    let mut result_index = 0;

    while left_index < left.len() && right_index < right.len() {
        if left[left_index] < right[right_index] {
            array[result_index] = left[left_index];
            left_index += 1;
        } else {
            array[result_index] = right[right_index];
            right_index += 1;
        }
        result_index += 1;
    }

    while left_index < left.len() {
        array[result_index] = left[left_index];
        left_index += 1;
        result_index += 1;
    }

    while right_index < right.len() {
        array[result_index] = right[right_index];
        right_index += 1;
        result_index += 1;
    }
}

fn main() {
    let mut array = [5, 2, 1, 4, 3];
    merge_sort(&mut array);
    println!("{:?}", array); // [1, 2, 3, 4, 5]
}`], ["Perl", "perl", `sub merge_sort {
    my ($array) = @_;

    return $array if @$array <= 1;

    my $middle = int(@$array / 2);
    my @left = @{$array}[0..$middle-1];
    my @right = @{$array}[$middle..$#$array];

    return merge(merge_sort(\@left), merge_sort(\@right));
}

sub merge {
    my ($left, $right) = @_;

    my @result;
    my $left_index = 0;
    my $right_index = 0;

    while ($left_index < @$left && $right_index < @$right) {
        if ($left->[$left_index] < $right->[$right_index]) {
            push @result, $left->[$left_index++];
        } else {
            push @result, $right->[$right_index++];
        }
    }

    push @result, @{$left}[$left_index..$#$left];
    push @result, @{$right}[$right_index..$#$right];

    return \@result;
}

my $sorted_array = merge_sort([5, 2, 1, 4, 3]);
print join(', ', @$sorted_array), "\\n"; # 1, 2, 3, 4, 5`]],
        "timeAndSpace": ["n", "n*log(n)", "n*log(n)", "n*log(n)"],
        "id": "3",
        "animationScript": "notAnimated"
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

export default articles;