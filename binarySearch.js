function binarySearch(arr,num){
    var mid=arr.length/2-1;
    mid=Math.floor(mid)
    var end=arr.length-1;
    var start=1;
    while(mid<end){
        if(arr[mid]==num){
            return mid;
        }
        else if(arr[mid]<num){
            start=mid
            mid=start+end/2
            mid=Math.floor(mid)
        }
        else if(arr[mid]>num){
            end=mid
            mid=start+end/2
            mid=Math.floor(mid)
        }
        
    }
    return false


}

var arr=[1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]
var num =92;
if (binarySearch(arr,num)==false){
    console.log("number is not in the array")
}
else{
    console.log("The number is in index :"+binarySearch(arr,num))

}