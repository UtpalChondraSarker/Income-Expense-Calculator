 function getInputValue(inputId){
    const userIncome=document.getElementById(inputId);
    const userIncomeText=userIncome.value;
    const previousIncomeText=parseFloat(userIncomeText);
    userIncome.value='';
    return previousIncomeText;
 }
 function getInputResult(){
      
 }
 
 document.getElementById('button-btn').addEventListener('click',function(){
        // const userIncome=document.getElementById('user-income');
        // const userIncomeText=userIncome.value;
        // const previousIncomeText=parseFloat(userIncomeText);
        // userIncome.value='';
       const previousIncomeText= getInputValue('user-income')

  //food expense
        // const expenseFood=document.getElementById('food-expense');
        // const expenseFoodText=expenseFood.value;
        // const previousExpenseFood=parseFloat(expenseFoodText);
        // expenseFood.value='';
        const previousExpenseFood=getInputValue('food-expense')

        // rent expense
        // const expenseRent=document.getElementById('rent-expense');
        // const expenseRentText=expenseRent.value;
        // const previousExpenseRent=parseFloat(expenseRentText);
        // expenseRent.value='';
        const previousExpenseRent=getInputValue('rent-expense')
        
        //cloth-expense
        // const expenseCloths=document.getElementById('cloth-expense')
        // const expenseClothsText=expenseCloths.value;
        // const previousExpenseCloths=parseFloat(expenseClothsText);
        // expenseCloths.value='';
        const previousExpenseCloths=getInputValue('cloth-expense')
        const total=previousExpenseFood+previousExpenseRent+previousExpenseCloths;

         //total-expense
        const outPutResult=document.getElementById('total-expense');
        outPutResult.innerText=total; 
        //total-balance
        
       const totalBalanceOutput=document.getElementById('total-balance');
       const totalBalance=previousIncomeText-total;
        totalBalanceOutput.innerText=totalBalance;
        
        
    })
    
        
        
       

        
    

