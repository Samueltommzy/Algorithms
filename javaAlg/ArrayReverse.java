package javaAlg;
import java.util.*;

public class ArrayReverse {
    public static void main(String[] args){
        //Test
        int[] N = {1,2,3};
        System.out.println(reverseArr(N));
    }
    /**
     * Reverse an array
     * @param arr
     * @return reversed Array
     */
    public static List<Integer> reverseArr(int[] arr) {
        List<Integer> ls = new ArrayList<>();
        int[] temp =  arr.clone();
        int iter = (int) Math.floor(arr.length)/2;
        for(int i =0;i<iter;i++){
            int diff = arr.length -i-1;
            arr[i] = temp[diff];
            arr[diff] = temp[i];
        }
        for(int s: arr){
            ls.add(s);
        }
        return ls;    
    }
}
