'use strict'

// for function constructor
function Donator(nameDonator,amountDonator,age){
this.nameDonator=nameDonator;
this.amountDonator=amountDonator;
this.age=age;
donatorArr.push(this);
}
let donatorArr=[];


// for event Listener to add data on click
let inputForm =document.getElementById('myForm');
inputForm.addEventListener('submit',submiter)

function submiter(event) {
    
    event.preventDefault();

    
let Name=event.target.namefailed.value;
let Amount=event.target.amountFailed.value;
let Age=Math.floor(Math.random() * (60 - 20)) + 20;
 let newdonator = new Donator(Name,Amount,Age);
 setStorage() 
location.reload();
}

// for headar of table 

let tablediv=document.getElementById('tableDiv');
let table=document.createElement('table');
tablediv.appendChild(table);

table.className='tableClass';

function makeHeader() {
    
    let headRow=document.createElement('tr');
    table.appendChild(headRow);
    headRow.className='headRowClass';


    let th1=document.createElement('th');
    let th2=document.createElement('th');
    let th3=document.createElement('th');

    headRow.appendChild(th1);
    headRow.appendChild(th2);
    headRow.appendChild(th3);


    th1.textContent='Donator Name';
    th2.textContent='Donation Amount';
    th3.textContent='Age';
}
makeHeader();


function tableRender() {

    for (let i = 0; i < donatorArr.length; i++) {
      
        
    
    let dataRow=document.createElement('tr');
    table.appendChild(dataRow);
    dataRow.className='dataRowClass';

    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');

    dataRow.appendChild(td1);
    dataRow.appendChild(td2);
    dataRow.appendChild(td3);


    td1.textContent=donatorArr[i].nameDonator;
    td2.textContent=`${donatorArr[i].amountDonator} Dinar`;
    td3.textContent=donatorArr[i].age;
    }
}


let clearBtn=document.createElement('input');

clearBtn.type='button';
clearBtn.value='Clear Items'
clearBtn.className='clearBtnClass'

tablediv.appendChild(clearBtn);

clearBtn.addEventListener('click',clearItems)

function clearItems() {
    localStorage.clear();
    location.reload();
}



//for set Storage
function setStorage() {
    localStorage.setItem('donator',JSON.stringify(donatorArr))
}

//for get Storage
function getStorage() {
    let data=JSON.parse(localStorage.getItem('donator'));
    if (data !=null) {
        donatorArr=data;
        tableRender();
    }

}
getStorage()
