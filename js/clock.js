
const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
 
getClock();
setInterval(getClock, 1000);

// padstart, padend 존재
// string(number) 하면 문자형 정보가 된다.
// `` 을 통해서 innerText를 쉽게 구현할 수 있다. ( ? )
// 시간을 1초 단위로 업데이트 해서 시계를 만드는거다. 
// date.getHours.. 등으로 hours, minutes 등의 시간 받아오기 -> 초 단위로 실행하고 텍스트에 반영해서 시계 

