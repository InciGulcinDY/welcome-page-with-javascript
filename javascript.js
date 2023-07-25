function welcome(){
    let name = document.querySelector('#myName')
    let person = prompt("Please enter your name")
    name.innerHTML = person
}

function showTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.querySelector('#myClock').innerHTML =  `${h} :  ${m} : ${s}`
    setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
  }