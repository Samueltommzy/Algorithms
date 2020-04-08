package javaAlg;
import java.util.*;
public class ArrayMissingEl {
    public static void main(String[] args){
        //Test
        int[] ms = {1,1,2,7};
        System.out.println( missingElements(ms));
    }
    /**
     * Returns the missing elements in an array 
     * @param arr
     * @return list of missing integers
     */
    public static List<Integer> missingElements(int[] arr){
        int max = maxEl(arr);
        List<Integer> ls = new ArrayList<Integer>();
        for(int i = 1;i<=max;i++){
            if(!checkEl(arr, i)){
                ls.add(i);
            }
        }
        return ls;
    }
    /**
     * Returns element with the maximum value in an array
     * @param arr
     * @return int
     */
    public static int maxEl(int[] arr){
        int max = arr[0];
        if(arr.length==0){
            return 0;
        }
        for(int i = 1;i<arr.length-1;i++){
            if((arr[i]> max) && arr[i]>arr[i+1]){
                max = arr[i];
            }
            else if((arr[i]<arr[i+1])&&(arr[i+1]>max)){
                max = arr[i+1];
            }
        }
        return max;
    }
    /**
     * Checks whether arr contains element d
     * @param arr
     * @param d
     * @return boolean
    */
    public static boolean checkEl(int[] arr,int d){
        List<Integer> ls = new ArrayList<Integer>();
        for(int s: arr){
            ls.add(s);
        }
        return ls.contains(d);
    }
}