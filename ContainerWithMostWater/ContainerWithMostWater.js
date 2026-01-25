var maxArea = function(height) {
    let area=0;
    let l=0,r=height.length-1;
       while(l<r)
    {   
 
        if(height[l]<height[r]){

             area=Math.max(area, height[l]*(r-l))

            l++;
        }
        else{
            area =Math.max(area,height[r]*(r-l));
             r--;
        }

    }

    return area;
};

    const result=maxArea([1,8,6,2,5,4,8,3,7]);
    console.log(result,"result")




