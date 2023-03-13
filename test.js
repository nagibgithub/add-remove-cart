document.getElementById('back-col').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'gray';
        friend.style.color = 'white';
    }
});

document.getElementById('add-friend').addEventListener('click', function () {
    let fndSerial = 1;
    let serArr = [0];
    const fndSerialField = document.getElementsByClassName('fnd-serial');
    // console.log(fndSerialField);
    for (const serialNo of fndSerialField) {
        // console.log(serialNo.innerText)
        const fndSerialValue = serialNo.innerText;
        const fndSerialValueInt = parseInt(fndSerialValue);
        serArr.push(fndSerialValueInt);
    }
    fndSerial = Math.max(...serArr);
    fndSerial++

    const fndCart = document.getElementById('fnd-container');
    fndCart.innerHTML += `
    <div id="fnd-${fndSerial}">
    <div class=" friend bg-slate-500 text-gray-200 font-bold w-max m-2 p-2 flex rounded-lg drop-shadow-lg">
    <div>
    <h2 class="friend-name text-center text-lg">Friend - <span class="fnd-serial">${fndSerial}</span></h2>
    <p class="text-center">Lorem ipsum dolor sit amet.</p>
    </div>
    <button onclick="removeFndCart('fnd-${fndSerial}')" class="bg-red-600 p-1 rounded-lg m-2 border drop-shadow-lg">Close</button>
    </div>
    </div>
    `
    console.log(document.getElementById('fnd-container'));
});



const x = document.getElementsByClassName('fnd-list123')

const a = x[0].innerText;


// console.log(a);

const removeBtn = document.getElementById('remove-friend');
removeBtn.addEventListener('click', function(){
    // console.log('click to remove');
    document.getElementById('fnd-container').innerHTML = ``;
})

function removeFndCart(divId) {
    
    document.getElementById(divId).innerHTML = ``;
}