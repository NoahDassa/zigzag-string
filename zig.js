

 Write the code that will take a string and make this conversion given a number of rows:
 
 
 
 
 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let index = 0;
    let string = s;
    let count;
    let letter;
    
    if((numRows >= s.length) || (numRows === 1)){
        return string;
    }

    string = "";
    for(i=0; i<numRows; i++){
        index = i;
        count=0;
        if((i === 0) || (i === numRows - 1)){
            while(index < s.length){
                letter=s[index];
                string = `${string}${letter}`;
                index += (2*numRows -2);
            }
        } else {  
            while(index < s.length){
                letter=s[index];
                string = `${string}${letter}`;
                index += ((2*numRows -2)-(2*i));
                if(index < s.length){
                    letter=s[index];
                    string = `${string}${letter}`;
                    index += (2*i);
                }
            }
        }
    }            
    
        
    return string;
 
};
