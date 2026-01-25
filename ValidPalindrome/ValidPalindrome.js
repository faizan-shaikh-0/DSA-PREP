var isPalindrome = function(s) {
    //step 1:->   use tow pointer l,r check and are ==same till l<r using while
    //step 2:->   and add logic of remove non-alphanumeric characters
    //step3:-> check condition of shift one element when its a non alphanumeric key 
    //step :3-> if complete loop return true else break loop return false 
    // check for empty string and return true 

    let l=0, r=s.length-1;
    while(l<r){
        ///[a-z0-9]/i.test(s[l])
        if(!/[a-z0-9]/i.test(s[l])){
            l++
        }else  if(!/[a-z0-9]/i.test(s[r])){
            r--
        }else{
         if (s[l].toLowerCase() === s[r].toLowerCase()) {
            console.log("l:-",s[l],"r:-",s[r])
            l++;
            r--;
        }
        else{
            return false
        }
        }
      
    }
    return true
   
};

    const result=isPalindrome("A man, a plan, a canal: Panama")
    console.log(result)