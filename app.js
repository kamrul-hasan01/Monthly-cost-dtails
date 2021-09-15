const monthlyIncomeButton =()=>{

    const monthlyIncome = document.getElementById('monthly-income-input')
    const monthlyIncomeValue = monthlyIncome.value;
    monthlyIncome.value = ""

  

    const monthlyIncomeSet = document.getElementById('monthly-income');
    const  oldMonney = monthlyIncomeSet.innerText;
    console.log(oldMonney)
    monthlyIncomeSet.innerText= parseInt(monthlyIncomeValue) + parseInt(oldMonney);
}
const addCost=()=>{
    const costDtails = document.getElementById("cost-dtails")
    const costAmount = document.getElementById("cost-amount")

    const costDtailsValue = costDtails.value;
    const costAmountValue = costAmount.value;
    costDtails.value=" ";
    costAmount.value= " ";
   
//  li create and cost add 
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    li.innerHTML=`<p>${costDtailsValue}</p> <p>= ${costAmountValue} tk</p>`
    document.getElementById("ul-parrent").appendChild(li);

    const oldTotalCost = document.getElementById("total-cost").innerText
    const newTotalCost = parseInt(costAmountValue)+parseInt(oldTotalCost);
    document.getElementById("total-cost").innerText = newTotalCost;

    


    document.getElementById('li-total-cost').innerText =newTotalCost;

   
    const totalMoney = document.getElementById ('monthly-income').innerText
    console.log( parseInt(totalMoney))
const availableMoeny = parseInt(totalMoney) -newTotalCost;

document.getElementById('availeble-money').innerText= availableMoeny;
}