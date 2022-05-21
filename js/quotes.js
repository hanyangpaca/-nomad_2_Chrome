
const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*(quotes.length))]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.~ 모듈을 활용해서 수학 관련 함수들을 사용할 수 있다.
// 그중에 하나가 random 모듈이다.
// round를 통해서 정수 반올림이 가능하다. Math.round(1.5)= 1 
// ceil 를 통해서 올림이 가능하다. Math.ceil(1.1) = 2, floor는 내림이다. 
// Math.floor(Math.random()*10) 이렇게 해야 값이 나온다. Math 모듈을 바탕으로 써야한다.
// quotes.length 를 쓰면 Array의 길이를 구할수가 있다.

