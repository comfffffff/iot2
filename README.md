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