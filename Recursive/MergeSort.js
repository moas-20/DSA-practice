function mergeSort(arr =[]){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return Merge(sortedLeft,sortedRight)

}

function Merge(left = [] , right = []){
    let result = [];
    let i = j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++;
        }
        else{
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let x = [1,3,5,2,28,34,12];

console.log(mergeSort(x));
