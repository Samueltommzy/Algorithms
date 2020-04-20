package javaAlg;

public class OneEditAwayCheck {
    public static void main(String[] args){
        //Test
        String s1 = "pales";
        String s2 = "pale";
        System.out.println(oneEditAway(s1,s2));
    }
    /**
     * This method checks whether two strings are one edit away
     * @param a
     * @param b
     * @return boolean
     */
    public static boolean oneEditAway(String a,String b){
        if(a.equals(b)){
            return false;
        }
        if(a.length()==b.length()){
            return oneEditReplace(a,b);
        }
        if(a.length()+1==b.length()){
            return oneEditInsert(a,b);
        }
        if(a.length()-1==b.length()){
            return oneEditInsert(b,a);
        }
        return false;
    } 

    public static boolean oneEditReplace(String a,String b){
        boolean f = false;
        for(int i = 0;i<a.length();i++){
            if(a.charAt(i)!=b.charAt(i)) {
                if(f){
                    return false;
                }
                f =true;
            }
        }
        return true;
    }
    public static boolean oneEditInsert(String a,String b){
        int index1 = 0;
        int index2 = 0;
        while (index2<b.length()&&index1<a.length()){
            if(a.charAt(index1)!=b.charAt(index2)){
                if (index1!=index2){
                    return false;
                }
                index2++;
            }
            else{
                index1++;
                index2++;
            }
        }
        return true;
    }
}