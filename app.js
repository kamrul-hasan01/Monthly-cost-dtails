// inner text set 
const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;

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
}
//  add  li to  ul 
function addLI(id, amount) {
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

    setInnerText('monthly-income', netIncome)
    const alMoney = getInnerValu('monthly-income') - getInnerValu('total-cost');

    setInnerText('availeble-money', alMoney)
    document.getElementById('monthly-income-input').value = '';

}
// cost dtails 
const addCost = () => {
    const costDtails = document.getElementById("cost-dtails").value;
    const newCost = getValue("cost-amount")

    addLI(costDtails, newCost);
    const oldTotalCost = getInnerValu('li-total-cost')
    const newTotalCost = newCost + oldTotalCost;
    setInnerText('total-cost', newTotalCost)
    setInnerText('li-total-cost', newTotalCost)
    const totalMoney = getInnerValu('monthly-income')
    const availableMoeny = totalMoney - newTotalCost;
    setInnerText('availeble-money', availableMoeny)
    document.getElementById('cost-dtails').value = '';
    document.getElementById('cost-amount').value = '';



}


// for inter button 
//  monthlyIncomeButton 
const saveButton = document.getElementById("save-button");

const incomeInputField = document.getElementById("monthly-income-input");
incomeInputField.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        saveButton.click();
    }
});
// cost add button 
const addButton = document.getElementById("add-button");

const costAmount = document.getElementById("cost-amount");
costAmount.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        addButton.click();
    }
});
// save user name and month 
// const saveChange = document.getElementById("save-change");

// const UserN = document.getElementById("user-name");
// UserN.addEventListener("keypress", function (event) {
//     // event.preventDefault();
//     if (event.key === "Enter") {
//         saveChange.click();
//     }
// });


// const UserM = document.getElementById("user-month");
// UserM.addEventListener("keypress", function (event) {
//     // event.preventDefault();
//     if (event.key === "Enter") {
//         saveChange.click();
//     }
// });



// monthly income modal 
const monthlyIncomeMOdal = () => {
    const user = document.getElementById('name').innerText;
    const month = document.getElementById('month').innerText;
    const encome = getValue('monthly-income-input');
    modaldtails(user, month, encome);

}

// modal show 
const modaldtails = (user, month, encome) => {
    document.getElementById('monthly-income-modal').innerHTML = ''
    const div = document.createElement("div");
    div.classList.add('modal-content')

    if (isNaN(encome) || encome < 0) {

        div.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${user}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
    </div>
    <div class="modal-body text-start">
      
        <p class="text-danger">Your monthly encome is not correct</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
   
    </div>
</div>
    `


    } else {

        div.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${user}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
            <h2>Month : ${month}</h2>
            <h3>Income: ${encome}</h3>
            <p class="text-danger">are you sure to add your money ?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary"
                onclick="monthlyIncomeButton()" data-bs-dismiss="modal">Yes</button>
        </div>
    </div>
        `

    }
    document.getElementById('monthly-income-modal').appendChild(div)

}


// cost modal 
const CostModal = () => {
    const costDtail = document.getElementById('cost-dtails').value;
    const amountCost = getValue('cost-amount');

    costModelDtails(costDtail, amountCost)



}
//  cost modal details 
const costModelDtails = (dtail, value) => {
    document.getElementById('cost-modal').innerHTML = ''
    const div = document.createElement("div");
    div.classList.add('modal-content')

    if (!dtail || (isNaN(value) || value < 0)) {

        div.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      
        <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
    </div>
    <div class="modal-body text-start">

        <p class="text-danger">Your your cost dtails or value  is not correct</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

    </div>
</div>
    `

    } else {

        div.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
 
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
            <h2>Details : ${dtail}.</h2>
            <h3>Amount: ${value} ৳</h3>
            <p class="text-danger">are you sure to add your uor cost ?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary"
                onclick="addCost()"" data-bs-dismiss="modal">Yes</button>
        </div>
    </div>
        `

    }
    document.getElementById('cost-modal').appendChild(div)

}

const change = name => {

    dynamicUserSet(name)

}

const dynamicUserSet = (user) => {




    document.getElementById('dynamic_user').innerHTML = ''
    const div = document.createElement("div");
    div.classList.add('modal-content');
    if (user === 'User Name') {
        div.innerHTML = `
    <div class="modal-header">

                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group">

                                            <input type="text" id="user-set" aria-label="First name"
                                                class="form-control" placeholder="Insert Full name ">
                                           

                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                       
                                        <button type="button" class="btn btn-primary" id="save-change" onclick="saveData('userName') "
    data-bs-dismiss="modal" > Save
                                            changes</button >
                                    </div > `
        document.getElementById('dynamic_user').appendChild(div);

    } else {
        div.innerHTML = `
        <div class="modal-header">
    
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="input-group">
    
                                                <input type="text" id="user-set" aria-label="First name"
                                                    class="form-control" placeholder="Insert months name ">
                                               
    
                                            </div>
    
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                           
                                            <button type="button" class="btn btn-primary" id="save-change" onclick="saveData('month') "
        data-bs-dismiss="modal" > Save
                                                changes</button >
                                        </div > `
        document.getElementById('dynamic_user').appendChild(div);

    }

    // save by enter
    const saveChange = document.getElementById("save-change");

    const UserN = document.getElementById("user-set");
    UserN.addEventListener("keypress", function (event) {
        // event.preventDefault();
        if (event.key === "Enter") {
            saveChange.click();
        }
    });


}
const saveData = (data) => {





    if (data === 'userName') {
        const userS = document.getElementById('user-set').value;
        if (userS) {
            setInnerText('name', userS)

        } else {
            document.getElementById('error-massege').innerText = ''
            msg = `Wrong user name `
            setInnerText('error-massege', msg)

        }






    }
    else if (data === 'month') {
        const userS = document.getElementById('user-set').value;


        const expr = userS.toLowerCase();

        switch (expr) {
            case 'january':
                setInnerText('month', userS)
                break;
            case 'february':

                setInnerText('month', userS)

                break;
            case 'march':

                setInnerText('month', userS)

                break;
            case 'april':

                setInnerText('month', userS)

                break;
            case 'may':

                setInnerText('month', userS)

                break;
            case 'june':

                setInnerText('month', userS)

                break;
            case 'july':

                setInnerText('month', userS)

                break;
            case 'augest':

                setInnerText('month', userS)

                break;
            case 'september':

                setInnerText('month', userS)

                break;
            case 'october':

                setInnerText('month', userS)

                break;
            case 'november':

                setInnerText('month', userS)

                break;
            case 'december':

                setInnerText('month', userS)

                break;
            default:

                document.getElementById('error-massege').innerText = '';
                msg = `${userS} month is invalid !! `;
                setInnerText('error-massege', msg);
        }
    }
}

