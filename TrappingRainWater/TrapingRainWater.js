var trap = function(height) {
let trappedWater=0
let l=0,r=height.length-1;
let lmax=0,rmax=0;

while(l<r){
if(height[l]<height[r]){
    lmax=Math.max(lmax,height[l])
    trappedWater += lmax - height[l];
    l++;
}else{
         rmax=Math.max(rmax,height[r])
          trappedWater += rmax - height[r];
           r--;
}
    
}
return trappedWater;
};


result=trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(result)

