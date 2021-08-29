let count = 0 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveCount = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveCount= " - " + count 
    saveEl.textContent += saveCount
    count = 0
    countEl.textContent = count
}




