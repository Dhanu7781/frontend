function outter()
{
   let count = 0;
   console.log(count);
         return function()
         {
            return ++count
         }
        
           
    
}


const increment = outter()
console.log(increment());


