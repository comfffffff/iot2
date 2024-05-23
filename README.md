# iot

## 4-1

setInterval의 매개변수로서 익명 함수와 숫자가 전달되었다

## 4-2

4-1에서 setInterval의 매개변수인 익명 함수를 cbFunc라는 함수로서

명시적으로 정의한 뒤 매개변수로서 전달하였다.

## 4-3

배열의 메서드로서 map 메서드를 호출하고 이의 첫번째 매개변수로 익명함수를 전달한다.

## 4-4

배열의 메서드의 인자를 jQuery의 방식대로 순서를 바꾸어 전달하였다.

## 4-5

배열의 map 메서드를 임의로 구현하였다.

## 4-6

제어권을 넘겨받을 코드에서 call/apply 메서드의 첫번째 인자에

콜백 함수 내부에서의 this가 될 대상을 명시적으로 바인딩한다.

## 4-7

콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출된다.

## 4-8

this를 다른 변수에 담아 콜백 함수로 활용할 함수에서 이 변수를 사용하게 하고

이를 클로저로 만드는 방식을 사용한다.

## 4-9

4-8에서 this를 사용하지 않았다. 작성한 함수를 this를 활용해 재활용할 수 없다는 단점이 있다

## 4-10

4-8의 func를 실행할 결과를 담아 콜백으로 사용하였다.

## 4-11

bind 메서드를 이용해 메모리를 낭비하는 4-8의 방식의 단점을 보완하였다

## 4-12

콜백 지옥은 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기의

정도가 과도해지는 현상이다.

## 4-13

익명의 콜백 함수를 모두 기명함수로 전환하면서 콜백 지옥을 해결하였다.

## 4-14

ES6의 Promise를 이용해 비동기 작업을 동기적으로 표현하였다.

## 4-15

4-14의 반복되는 내용을 함수화하여 간결하게 표현하였다.

## 4-16

ES6의 Generator를 활용하여 동기적으로 표현하였다.

## 4-17

ES2017에 추가된 async/await을 활용해 간단하게 표현하였다.

## 5-1

내부 함수는 외부 함수의 변수에 접근하여 값을 증가시키고 출력한다.

## 5-2

외부 함수 outer는 내부 함수 inner를 호출해 변수 a를 증가시키고 그 값을 반환한다. 

outer2는 이렇게 증가된 값을 출력한다.

## 5-3

외부 함수 outer는 내부 함수 inner를 반환한다. 

한편, outer2는 반환된 inner를 참조하여 호출될 때마다 변수 a를 증가시키고 그 값을 출력한다.

## 5-4

즉시 실행 함수는 클로저를 사용하여 두 가지 작업을 수행한다. 

먼저, setInterval을 통해 일정 시간마다 변수 a를 증가시키고 이를 출력한 뒤

버튼 클릭 이벤트 핸들러에서 변수 count를 증가시키고 그 값을 출력하는 기능을 제공한다.

## 5-5

내부 상태 관리를 위해 클로저를 사용한다. 

각 실행 문맥에서는 변수가 증가하고, 특정 조건에 따라 참조가 해제된다.

## 5-6

클로저를 활용해 리스트 아이템을 클릭할 때마다 해당 과일 이름이 알림으로 표시되도록 한다.

## 5-7

리스트 아이템을 클릭할 때 클로저를 사용해 각 과일 이름을 알림으로 표시한다. 

또한, alertFruit 함수를 직접 호출해 특정 과일을 알림으로 표시한다.

## 5-8

클릭 이벤트 핸들러에서 각 과일 이름을 알림으로 표시하기 위해 

bind 메서드를 사용하여 클로저를 생성한다.

## 5-9

alertFruitBuilder 함수를 사용해 클로저를 반환하고, 

이를 클릭 이벤트 핸들러에 적용하여 각 과일 이름을 알림으로 표시한다.

## 5-10

alertFruitBuilder 함수를 사용해 클로저를 반환하고, 

이를 클릭 이벤트 핸들러에 적용하여 각 과일 이름을 알림으로 표시한다.

## 5-11

createCar 함수는 클로저를 활용해 연료량, 출력, 이동 거리 속성을 캡슐화한다. 

이함수는 임의의 거리를 이동하면서 연료를 소비하고, 

연료 부족 시 이동 불가 메시지를 출력하는 run 메서드를 포함한 car 객체를 생성한다.

## 5-12

createCar 함수는 클로저를 사용해 연료량, 출력, 이동 거리 속성을 캡슐화한다. 

이 함수는 Object.freeze를 통해 반환된 객체의 변경을 막으며, 

임의의 거리를 이동하고 연료를 소비하는 run 메서드를 가진 car 객체를 생성한다.

## 5-13

add 함수는 모든 인수의 합을 반환한다. add.bind는 부분 적용을 통해 초기 인수로 1, 2, 3, 4, 5를 고정하고, 

추가 인수로 6, 7, 8, 9, 10을 받아 전체 합을 계산해 출력한다.

## 5-14

partial 함수는 부분 적용을 통해 초기 인수와 추가 인수를 결합하여 원래 함수를 호출한다. 

예를 들어, addPartial 함수는 초기 인수 1, 2, 3, 4, 5와 추가 인수 6, 7, 8, 9, 10을 합산한다. 

또한, dog.greet 메서드는 dog 객체의 name 속성을 활용하여 인사말 문자열을 생성한다.

## 5-15

partial2 함수는 _를 자리 표시자로 사용하여 부분 적용을 처리한다.

부분 인수에서 _를 만나면 이후 인수로 대체하는 방식이다. 

이를 통해 addPartial은 지정된 위치에 새로운 값을 삽입해 전체 합을 계산한다. 

또한, dog.greet는 자리 표시자를 사용하여 인사말 문자열을 생성한다.

## 5-16

debounce 함수는 이벤트 발생 후 지정된 시간 동안 추가 이벤트가 발생하지 않을 때만 실행되는 함수를 

반환한다. 이를 통해 mousemove 이벤트는 지정된 지연 시간 후에 moveHandler를 호출하고, 

mousewheel 이벤트는 wheelHandler를 호출한다.

## 5-17

curry3 함수는 인수를 하나씩 받아서 최종적으로 두 인수를 가진 함수를 반환한다. 

이를 통해 getMaxWith10은 10과 주어진 인수 중 큰 값을 반환하고,

getMinWith10은 10과 주어진 인수 중 작은 값을 반환한다.