package com.company;

import java.util.*;

public class Main {

    public static void main(String[] args) {
	    // write your code here
        int n = 0;
//        ArrayList<Integer> triplet = new ArrayList<>();
        int[] nums = new int[]{-1,0,1,2,-1,-4};
        List<List<Integer>> result = threeSumBackTracking(new ArrayList<>(),new ArrayList<>(),0,0, n,nums);
        System.out.println("Resultado: "+result);

    }

    public static void combinacionesSuma(int numero, ArrayList<Integer> numeros, int suma){
        if(suma == numero){
            System.out.println(numeros);
        }else{
            for (int i = 1; i <= numero; i++){
                suma+=i;
                if(suma <= numero){
                    numeros.add(i);
                    combinacionesSuma(numero, numeros, suma);
                    numeros.remove(numeros.indexOf(i));
                }
                suma-=i;
            }
        }
    }

    static int count = 1;
    static List<List<Integer>> correctTriplets = new ArrayList<>();

    public static List<List<Integer>> threeSumBackTracking(ArrayList<Integer> tripletIndex,ArrayList<Integer> triplet,Integer pos, int currentSum, int goalSum, int[] arrayNums){
//        if(triplet.size() == 3){
//            System.out.println(count+".- "+triplet);
//            count++;
//        }

        if(triplet.size() == 3 && currentSum == goalSum){
            Collections.sort(triplet);
            if(!correctTriplets.contains(triplet)){
                var newTriplet = (ArrayList<Integer>)triplet.clone();
                correctTriplets.add(newTriplet);
            }
        }
        else{
            for (int i = pos; i < arrayNums.length; i++){
                currentSum += arrayNums[i];
                if(triplet.size() < 3 && !tripletIndex.contains(i)){
                    int newPos = i+1;
                    tripletIndex.add(i);
                    triplet.add(arrayNums[i]);
                    threeSumBackTracking(tripletIndex,triplet,newPos,currentSum,goalSum,arrayNums);

                    tripletIndex.remove(tripletIndex.indexOf(i));
                    triplet.remove(triplet.lastIndexOf(arrayNums[i]));
                }
                currentSum-=arrayNums[i];
            }
        }

        return correctTriplets;
    }
}
