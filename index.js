const billAmount = document.getElementById('bill');
const nop = document.getElementById('nop');
const btn5 = document.getElementById('5');
const btn10 = document.getElementById('10');
const btn15 = document.getElementById('15');
const btn25 = document.getElementById('25');
const btn50 = document.getElementById('50');
const customInput = document.getElementById('custom-bill');
const mainError = document.getElementById('mainerror');
const tipEl = document.getElementById("tip-per-person");
const totalTipEl = document.getElementById('total-tip');
const resetBtn = document.getElementById('reset');
let bill, shrbtw, tip, tipPerPerson;

mainError.innerHTML = "Can't be Zero";
function calculateTip(tipValue) {
    mainError.style.display = 'none';
    bill = +billAmount.value;
    shrbtw = +nop.value;
    tip = (((tipValue / 100) * bill) / shrbtw).toFixed(2);
    tipPerPerson = ((bill + (tipValue / 100) * bill) / shrbtw).toFixed(2);
    tipEl.innerHTML = `$${tip}`;
    totalTipEl.innerHTML = `$${tipPerPerson}`;
}

customInput.addEventListener('input' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        mainError.style.display = 'none';
        if(customInput.value != '' || customInput.value != 0) {
            calculateTip(customInput.value)
        }
    }
})

btn5.addEventListener('click' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        calculateTip(5)
    }
})

btn10.addEventListener('click' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        calculateTip(10);
    }
})

btn15.addEventListener('click' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        calculateTip(15);
    }
})

btn25.addEventListener('click' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        calculateTip(25);
    }
})

btn50.addEventListener('click' , () => {
    if(nop.value == '' || nop.value == 0 ) {
        mainError.style.display = 'inline';
    } else {
        calculateTip(50);
    }
})

resetBtn.addEventListener('click' , () => {
    tipEl.innerHTML = `$0.00`;
    totalTipEl.innerHTML = `$0.00`;
    billAmount.value = '';
    customInput.value = '';
    nop.value = '';
    mainError.style.display = 'none';
})