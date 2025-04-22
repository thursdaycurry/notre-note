## `localStorage`란

`localStorage`는 Window의 인터페이스로 Storage 객체에 접근하게 해준다. 데이터는 브라우저 세션에 저장된다. `localStorage`는 `sessionStorage`와 비슷하지만 전자는 expiration이 되지 않는다면 후자는 페이지가 닫히는 시점(세션이 끝날 때)에 수명이 끝난다는 차이가 있다. 단, private / incognito 모드로 브라우저를 켜고 닫을 때는 `localStorage`도 초기화된다.

`localStorage`에는 key/value 페어 구조이며 UTF-16 문자열 형식으로 저장된다. UTF-16 문자열은 문자당 2바이트를 사용한다.

`localStorage`는 도큐먼트의 프로토콜에 특정된다. HTTP로 로드된 사이트와 HTTPS로 로드된 사이트, 이 두 사이트의 localStorage는 다른 객체다.

## `indexedDB`란

## 무엇을 써야하나
간단한 string 저장은 `localStorage`를 쓰고, 객체로 관리가 필요한 복잡한 데이터는 `indexedDB`를 쓰면 좋다.