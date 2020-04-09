package javaAlg;
import java.util.*;

public class UniqueString {
    public static void main(String[] args){
        //Test
        String a = "samuel";
        String b = "aamuela";
        System.out.println("This is a unique String: " + isUnique(a));
        System.out.println("This is a unique String: " + isUnique(b));
    }
    /**
     * This method returns true if string s has all unique characters otherwise returns false 
     * @param s
     * @return Boolean
     */
    public static boolean isUnique(String s){
        if(s.length()==1){
            return true;
        }  
        Hashtable<Character,Integer> hs = new Hashtable<>();
        for(int i =0;i<s.length();i++){
            Character l = s.charAt(i);
            if(hs.containsKey(l)){
               hs.put(l, hs.get(l)+1);
            }
            else{
                hs.put(l,1);
            }
            if(hs.get(l)>1){
                return false;
            }
        }
        return true;
    }
}