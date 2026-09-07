const myLeads =  JSON.parse(localStorage.getItem('myLeads')) ||  [];
const inputEl = document.querySelector('.input-el');
const ulEl = document.querySelector('.listEl');

 renderList(myLeads);

function renderList(leads){
    let listItems = '';
    for(let i = 0 ; i < leads.length; i++){
        listItems += `
        <li>
          <a href= "${leads[i]}" target= "_blank">${leads[i]}</a>
          <button class='del-btn' data-index="${i}">x</button>
        </li>`;
    }
    ulEl.innerHTML = listItems;
}


document.querySelector('.input-btn').addEventListener('click',()=>{
    if(inputEl.value.trim()=== ''){
        return;
    }
    myLeads.push(inputEl.value);
    saveToStorage();
    renderList(myLeads);
    inputEl.value = '';
    
    });


document.querySelector('.save-tab-btn').addEventListener('click',()=>{
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        myLeads.push(tabs[0].url);
       saveToStorage();
        renderList(myLeads);
    })
    
})

document.querySelector('.delete-btn').addEventListener('click',()=>{
    myLeads.length = 0;
    localStorage.clear();
    renderList(myLeads);
})

ulEl.addEventListener('click', (e)=>{
    if(e.target.classList.contains('del-btn')){
        const index = e.target.dataset.index;
        myLeads.splice(index,1);
        saveToStorage();
        renderList(myLeads);

    }
})

function saveToStorage(){
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
}




    






        




