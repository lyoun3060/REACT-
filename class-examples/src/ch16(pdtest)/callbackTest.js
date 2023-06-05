//확장팩 Code Runner 설치, 
//(js바닐라, js기본, js실행)하는 방법  ctrl + alt + n
//비동기 통신 관련된, 콜백함ㅅ라, async, await, promis간단하게 설명할 예정
//axios, 비동기 통신 하는 방법 설명
//공공데이터 연동작업
// console.log('간단한 실행 테스트 확인.') //<-드래그 후 ctrl + alt + n

//동기 작업 : 순차적으로 작업을 진행하는 것(1번->2번->3번....)
//비동기 작업 : 자바스크립트에서는 스레드가 하나만 있음(메인스레드)
//멀티작업을 하는방법 -> 그냥 함수를 막 실햄항(non-blocking) / blocking = 어떤함수를 실행하면 다른함수는 막아두는것
//막 실행하는 대신 함수가 끝났다는 신호를 보내서(콜백함수) 상황을 보고 받음

function print(){
    console.log("hi 리액트");
}

function increase(number,callback){
    setTimeout(()=>{
        const result = number+1;
        if(callback){
            callback(result)
        }
    }, 2000)
}
//setTimeout(콜백함수, 시간(ms)) : 2번째 시간함수 지난뒤 매개변수 함수 실행
//(예제 1번)
// setTimeout(print, 3000);
//실행순서, (대기중이 먼저뜸 -> 3초뒤에 hi 리엑트 출력)

//(예제2번)
// increase(10, result=>{
//     console.log(result)
// })
//실행순서, (대기중이 먼저뜸 -> 3초뒤에 hi 리엑트 출력)

//(예제3번) - 콜백지옥 보여주기
// console.log('콜백지옥 시작')
// increase(0, result =>{
//     console.log(result);
//         increase(result, result =>{
//             console.log(result);
//                 increase(result, result =>{
//                     console.log(result);
//                         increase(result, result =>{
//                         console.log(result);
//                     })
//                 })
//         })
// })

// //(예제4 Promise 문법으로 변경하기)
//ex.4
function increase2(number){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result2 = number+10;
            if(result2>50){
                const error=new Error('테스트 에러');
                return reject(error);
            }
            resolve(result2);
        },2000);
    })
    return promise;
}


//Promise버전으로 비동기 함수 처리부분 비교
//increase2 함수의 반환타입은 Promise-> 성공 : resolfe, 실패 : reject반환
//결론= 인자값에 계속 콜백함수 형태로 중첩되게 들어가지 않고, then을 이용해서 구분지음
// increase2(10).then(number=>{
//     console.log(number);
//     return increase2(number);
// }).then(number=>{
//     console.log(number);
//     return increase2(number);
// }).then(number=>{
//     console.log(number);
//     return increase2(number);
// }).then(number=>{
//     console.log(number);
//     return increase2(number);
// }).catch(error=>{
//     console.log(error)
// })


//async, await문법을 같이 세트로 작업.
//es8버전이서 사용되는것(2017년도에 나온 문법)
//async = 함수의 앞부분에 표기, 비동기 작업할 때 사용
//await = Promise앞부분에 표기를 함
//increase2함수는 반환을 Promise타입을 반환
async function runTest(){
    try{
        let result = await increase2(10);
        console.log(result)

        result = await increase2(result)
        console.log(result)

        result = await increase2(result)
        console.log(result)

        result = await increase2(result)
        console.log(result)

        result = await increase2(result)
        console.log(result)
    } catch(e){
        console.log(e)
    }
}

runTest()

//결론, 비동기 함수 호출방법
//callback함수 스타일 -> Promise(resolve, reject)성공, 실패->async, await를 이용해서 비동기함수를 구현
//함수 앞에 async, await는 Promise를 반환하는 함수 앞에 붙인다
//axios: 통신 라이브러리 사용함, 이라이브러리는 반환을 Promise타입으로 반환함.
//더미 데이터를 axios를 이용해서 받아오고, 공공데이터를 이용해서 실행할것임(안드로이드때 공공데이터 사이트 접속해서 이용할것)

//순서1 ->yarn add axios



// 비동기 작업을위해서 , 콜백함수문제점을 es6문법을 좀 더 가족성있게 작업하게 됨

