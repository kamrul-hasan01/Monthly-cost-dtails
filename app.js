const monthlyIncomeButton =()=>{

    const monthlyIncome = document.getElementById('monthly-income-input')
    const monthlyIncomeValue = monthlyIncome.value;
    monthlyIncome.value = ""
    
  

    const monthlyIncomeSet = document.getElementById('monthly-income');
    const  oldMonney = monthlyIncomeSet.innerText;
    console.log(oldMonney)
    monthlyIncomeSet.innerText= parseInt(monthlyIncomeValue) + parseInt(oldMonney);




}