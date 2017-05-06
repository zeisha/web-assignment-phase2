/**
 * Created by Z-Shabani on 5/6/2017.
 */
{
    var d = new Date();
     function gLeapYear(y) {
         if((y%4==0)&&((y%100 != 0) || (y%400 == 0)))
             return true;
         else
             return false;
     }
     
     function sLeapYear(y) {
         var ary=[1, 5, 9, 13, 17, 22, 26, 30];
         var result= false;
         var b = y %33;
         if(include(ary, b)){
             result=true;
         }
         return result;
     }

    function include(arr,obj) {
        return (arr.indexOf(obj) != -1);
    }


}
