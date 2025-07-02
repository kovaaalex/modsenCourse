function twoSum(first, second){
    if(second === 0) throw new Error('The second is null');
}
try {
    console.log(twoSum(2,1));
    console.log(twoSum(2,0)); 
} catch (error) {
    console.error(error.message);
}