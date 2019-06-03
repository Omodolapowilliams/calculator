
    function dis(view){
        frm.txt.value=frm.txt.value+view;
    }
    function fnsin(){
        frm.txt.value=Math.sin(frm.txt.value);
    }
    function fncos(){
        frm.txt.value=Math.cos(frm.txt.value);
    }
    function fntan(){
        frm.txt.value=Math.tan(frm.txt.value);
    }
    function equalto(){
        console.log('value', frm.txt.value);
        const result=frm.txt.value;
        arrayOfResult=result.split(' ');
        console.log(arrayOfResult);
    }
    function evaluate(){
        // checkForBracket()
        checkForMultiplication()
        checkForDivision()
        checkForAddition()
        checkForSubtraction()
    }

    function checkForMultiplication(){
        for (let index = 0; index < arrayOfResult.length; index++) {
           if (arrayOfResult==='*'){
              const ans= arrayOfResult[index-1] * arrayOfResult[index+1];
           }
            arrayOfResult.splice(index-1,3,ans);
            index=index-2;
        }
        
    }

    function checkForDivision(){
        for(index=0; index<arrayOfResult.length; index++){
        if(arrayOfResult==='/')
        {
            const ans=arrayOfResult[index-1] / arrayOfResult[index+1];
            arrayOfResult.splice(index-1,3,ans);
            index=index-2;
        }
        }
            
    }

    function checkForAddition(){
        for (let index = 0; index < arrayOfResult.length; index++) {
            if(arrayOfResult==='+'){

                const ans= arrayOfResult[index-1] + arrayOfResult[index+1];

                arrayOfResult.splice(index-1,3,ans);
                index=index-2;
        
            }
        }
    }

    function checkForSubtraction(){
        for (let index = 0; index < arrayOfResult.length; index++) {
            if(arrayOfResult==='-'){

                const ans= arrayOfResult[index-1] - arrayOfResult[index+1];

                arrayOfResult.splice(index-1,3,ans);
                index=index-2;
        
            }
        }
    }