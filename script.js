const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancleBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyAre = [0]

const showPanel = () => {
    addTransactionPanel.style.display = 'none'
  
    addTransactionPanel.style.display = 'flex'
    
}
const closePanel = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs()

}


const checkForm = () => {
    if(nameInput.value === '' || amountInput.value === '' || categorySelect.value === 'none')
    {
        console.log(`eror`);
    } else {
        console.log(`git`);
    }
}



const clearInputs = () => {
    nameInput.value ='' 
    amountInput.value = ''
    categorySelect.selectedIndex = 'none'
}



saveBtn.addEventListener('click', checkForm)
cancleBtn.addEventListener('click', closePanel)
addTransactionBtn.addEventListener('click', showPanel)



