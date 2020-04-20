package javaAlg;

public class URLifyString {
    public static void main(String[] args){
        //Test
        String s = "Mr John Smith is here   ";
        int actualLength = 13;
        System.out.println(URLify(s, actualLength));
    }
    /**
     * This method returns all spaces in string s with "%20"
     * @param s
     * @param actualLength
     * @return String
     */
    public static String URLify(String s,int actualLength){
        String[] newStr = s.strip().split(" ");
        String finalStr = "";
        for(int i= 0;i<newStr.length-1; i++) {
            finalStr += newStr[i]+"%20";
        }
        finalStr = finalStr+newStr[newStr.length-1];
        return finalStr;
    }

}