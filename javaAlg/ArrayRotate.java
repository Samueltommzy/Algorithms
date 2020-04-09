package javaAlg;
import java.util.*;
public class ArrayRotate {
    public static void main(String[] args){
        //Test
        int[] x = {1,2,3,4,5,6,7,8};
        int n = x.length;
        System.out.println(rotateArr(x,n,3));
    }
     /**
     * This method rotates an array of size n by d elements
     * @param arr - The input array of integer
     * @param n - The size of the array
     * @param d - Element
     * @return  Array
     */
    public static List<Integer> rotateArr(int[] arr,int n,int d){
        List<Integer> ls = new ArrayList<Integer>();
        if(d==0){
            return ls;
        }
        int[] temp = arr.clone();
        for(int i =0;i<d;i++){
            arr[arr.length-d+i] = temp[i];
        }
        for(int i =0;i<arr.length-d;i++){
            arr[i] = temp[i+d];
        }
        for(int s: arr){
            ls.add(s);
        }
        return ls;
    }
}