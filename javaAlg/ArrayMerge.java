package javaAlg;
import java.util.*;
public class ArrayMerge {
    public static void main(String[] args){
        //Test
        int[] arr1 = new int[7];
        arr1[0] = 2;
        arr1[2] = 7;
        arr1[5] = 10;
        int[] arr2 = {5,8,12,14};
        System.out.println(mergeArr(arr1, arr2));
    }
    
    /**
     * This method merges an array of size n into another array of size m+n
     * @param arr1 - Array of size m+n
     * @param arr2 - Array of size n
     * @return Sorted set of integers
     */
    public static SortedSet<Integer> mergeArr(int[] arr1,int[] arr2) {
        int count = 0;
        for(int i = 0;i<arr1.length;i++){
           if(arr1[i]== 0){
            count = count + 1;
            arr1[i] = arr2[count-1];
           }
        }
        SortedSet<Integer> finalArr = new TreeSet<Integer>();
        for(int s : arr1){
            finalArr.add(s);
        }
        return finalArr;
    }
}