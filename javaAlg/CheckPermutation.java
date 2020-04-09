package javaAlg;
import java.util.*;

public class CheckPermutation {
    public static void main(String[] args){
        //Test
        String a = "samuela";
        String b = "aamuels";
        String c = "Andre";
        System.out.println(checkPerm(a,b));
        System.out.println(checkPerm(a,c));
    }
    /**
     * This method returns true if either of the strings is a permutation of the other else false
     * @param a
     * @param b
     * @return boolean
     */
    public static boolean checkPerm(String a, String b){
        if (a.length() != b.length()){
            return false;
        }
        for(int i= 0;i<a.length();i++){
            if(sortedStr(a).charAt(i)!= sortedStr(b).charAt(i)){
                return false;
            }
        }
        return true;
    }

    public static String sortedStr(String s){
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        return Arrays.toString(arr);
    }
}