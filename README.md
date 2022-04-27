#Vue.js 강의 수강일지.
***
###[2022-03-30]
- 개발환경 설치
  - node.js, git 설치
  - lite-server 설치
- 라이트 서버는 자동으로 코드의 변화를 감지해서 자동으로 재실행해주는 역할도 한다.
###[2022-03-31]
- 느낀점 : ES5.. ES6에 대하여 더 익숙해져야 하는것이 아닌가...?
- 스케폴딩 완료
- 검색폼 구현 
###[2022-04-18]
- MVVM 모델
  - MVC와 다르게 뷰모델로 되어있음
  - View Model 은 구조상으로 모델과 뷰 사이에 위치함.
  - 모델에서 데이터를 가지고 오는데 이 데이터는 뷰에서 사용하기 적합한 형태로 가지고 온다.
  - 뷰에서 조금더 적극적으로 사용할 수 있게 해줌,
  - 모델과 뷰모델은 1 : 1로 매칭되기 때문에 뷰가 많은경우에는 여러개의 뷰모델을 구성할 수 있다.
  - 뷰 모델은 데이터가 변경될때마다 즉시 화면에 반영이 된다.
###[2022-04-25]
  - Vue.js 설치방법
    1. CDN을 따와서 설치하는 방법
    2. NPM을 이용하여 설치하는 벙법 
  - hello world 출력 완료
###[2022-04-25]
  - v-model : 양방향 바인당을 지원하는 뷰데이터 모델
  - v-on : 이벤트 리스너 바인당
  - v-on:submit : 서브밋 이벤트를 리슨함.
  - dom과 바인딩할 함수를 Vue에 바인딩 할 수 있음.

----
1. lite-server 실행이 안되는 경우 
https://www.inflearn.com/questions/6967
