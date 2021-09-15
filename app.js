// inner text set 
const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;
    console.log("inner text set")

}

//  input value 
const getValue = id => {
    const gId = document.getElementById(id);
    const gvalue = parseInt(gId.value);
    return gvalue;
}
//  iner tex  
const getInnerValu = id => {
    const getId = document.getElementById(id)
    const idValue = getId.innerText;
    const value = parseInt(idValue);
    return value;
    // console.log(value)
    // if (isNaN(value)) {
    //     console.log("wrong input")
    //     return 1111;
    // }
    // else {
    //     return value;
    // }
}
//  add  li to  ul 
function addLI(id, amount) {
    console.log(id)
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    li.innerHTML = `<p>${id}</p> <p>= ${amount} tk</p>`
    document.getElementById("ul-parrent").appendChild(li);

}

// monthly income button 
const monthlyIncomeButton = () => {
    const newMonthlyIncome = getValue('monthly-income-input')
    const oldMonney = getInnerValu('monthly-income');
    const netIncome = newMonthlyIncome + oldMonney;
    if (!isNaN(netIncome)) {
        setInnerText('monthly-income', netIncome)
        const alMoney = getInnerValu('monthly-income') - getInnerValu('total-cost');
        console.log(alMoney)
        setInnerText('availeble-money', alMoney)
        document.getElementById('monthly-income-input').value = '';
    }
}
// cost dtails 
const addCost = () => {
    const costDtails = document.getElementById("cost-dtails").value;
    const newCost = getValue("cost-amount")
    if (costDtails && !isNaN(newCost)) {
        addLI(costDtails, newCost);
        const oldTotalCost = getInnerValu('li-total-cost')
        const newTotalCost = newCost + oldTotalCost;
        setInnerText('total-cost', newTotalCost)
        setInnerText('li-total-cost', newTotalCost)
        const totalMoney = getInnerValu('monthly-income')
        const availableMoeny = totalMoney - newTotalCost;
        setInnerText('availeble-money', availableMoeny)
    }
}


// for inter button 
const saveButton = document.getElementById("save-button");

const incomeInputField = document.getElementById("monthly-income-input");
incomeInputField.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        saveButton.click();
    }
});
const addButton = document.getElementById("add-button");

const costAmount = document.getElementById("cost-amount");
costAmount.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        addButton.click();
    }
});

