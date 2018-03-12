// 변수 선언 - "use strict"
// => 변수를 선언할 때 var을 생략하면,
//    어디에서 변수를 선언하고 사용하는지 불분명하기 때문에
//    긴 코드를 유지보수할 때 변수를 다루기가 어렵다.
//    타입 정보를 적지 못하더라도 최소한 변수를 선언한 후에 
//    사용하는 것이 유지보수에 좋기 때문에
//    자바스크립트에서는 "use strict"라는 특별한 명령을 제공한다.
// 

// 비록 일반 문자열로 작성한 것이지만,
// 자바스크립트 엔진은 이 문자열이 한 줄로 선언된 코드를 만나면,
// 변수 선언을 엄격하게 검사한다.
//
"use strict"

var name = "홍길동" // OK

name2 = "임꺽정" // 예외 발생!







