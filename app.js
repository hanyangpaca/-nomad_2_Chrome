
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");


// document -> HTML -> 순으로 찾아 들어가는거다.
// document 로 찾으려면 login-form input 이런 식으로 해야한다. 

function onLoginSubmit() {
    event.preventDefault();
    console.log(loginInput.value);
}

// 이 방식으로 input 창에 넣은 value를 구할 수 있다.
// console 은 버튼 클릭시 loginInput.value를 찾으니까.

// 4.1 Form Submission
// 변수.length 를 통해 string 의 길이를 구할 수가 있다. 
// length를 legnth 라고 써서 고생했다 ㅇㄴ 
/* 
 이러한 것들은 유저에게 값을 넘기는거라 best는 아니다.그러니 굳이 여기서 조건을 쓸게 아니라
 그냥 HTML을 통해서 Maxlength를 15로 막으면 된다.
function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Pls write your name");
    } else if (username.length > 10 ) {
        alert("Your name is too long.");
    }
}

*/

// input의 유효성 검사를 위해서는 input이 form 안에 있어야한다. 
// 무슨 말인지 모르겠지만 일단 메모했다. 
// form 이 submit 되고 있기 때문에 페이지가 새로고침이 된다.
// form 에서 엔터 누르고 input이 없으면 자동 새로고침이 된다.
// form 의 버튼 눌러도 자동으로 새로고침 된다. 즉 click이 관건이 아니라 form submit이 중요하다.

// 4.2 Events

loginForm.addEventListener("submit",onLoginSubmit);

// 이렇게 하면 submit value를 EL 를 통해서 감지하게 된다. 
// 새로고침은 안 고쳐진다. form 은 기본적으로 새로고침을 내장하고 있다.
// 이러한 기본 액션을 막아야하는 게 일이다. 근데 간단하다. 
// 모든 EventListener 는 첫 정보에 대한것을 받는다.

// tomat.preventDefault() 를 통해 form 에 내장된 기본적인 액션을 막을수가 있다.
/* function onLoginBtnClick(event) {
    event.preventDefault();
} 와 같은 방식으로 활용 가능하다. 
*/

// 그러니까 js 함수에서 argument 자체에 event에 대한 정보가 담겨있는거다.
// 뭔 말이냐면 어찌되었던 addEventListner 에서는 첫 인자에서 이벤트 정보를 담는데 극 argument가 있으면 ar에 담긴다.

// 4.3 Event part Two

const link = document.querySelector("a");
// 그냥 링크 설정이라 a 해도 상관없다. (?)

function handleLinkClick(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username)
}

link.addEventListener("click",handleLinkClick)
// alert 때문에 clicked 를 확인할때 까지 아무것도 실행 되지 않는다.
// EventListener가 있으면 함수를 실행하는 건 JS의 몫인데, 우리가 거기서 기본 행동을 막고 싶고
// 기본 정보 ( 클릭 정보 ) 를 알고 싶을때를 위해서 함수는 실행하는 동시에 object ( undefined ) 한 object를 넣는다.
// 그러한 object는 Event의 내용물을 담고 있다. ( 확인하는 방법이 전 강의에서 나왔다. )
// 함수 ()에 Event 라는 변수 넣고 Console.log로 event 확인하면 된다.


