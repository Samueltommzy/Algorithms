package javaAlg;

public class StringCompression {
    public static void main(String[] args) {
        //Test
        String str = "aabcccccddaaaa";
        System.out.println(compressString(str));
        //output a2b1c5d2a4 
    }
    /**
     * This method performs string compression based on count of repeated characters
     * @param str
     * @return String
     */
    public static String compressString(String str){
        int oldStrLen = str.length();
        StringBuilder newStr = new StringBuilder();
        int consecStrCount = 0;

        for(int i = 0;i<oldStrLen;i++){
            consecStrCount++;
            if(i+1>=oldStrLen||str.charAt(i)!=str.charAt(i+1)){
                newStr.append(str.charAt(i));
                newStr.append(consecStrCount);
                consecStrCount = 0;
            }
        }
        return newStr.length()>oldStrLen?str:newStr.toString();
    }
}