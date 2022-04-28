import SearchModel from "./models/SearchModel.js";
new Vue({
    // el : 화면 컴포넌드 아이디를 입력
    el: '#app',

    // data : 표현할 데이터와 키값을 입력
    data: {
        // msg: 'hello world'
        // query : 입력을 담당하는 데이터 할당.
          query : ''
        , searchResult : []
        , submitted : false
    }
    , methods : {
         onSubmit(e){
            this.search()
        }
        , onReset(e){
            // 데이터 안에 있는 변수 접근할때는 그냥 this.변수명으로 접근이 가능하다.
            this.query = "";
        }
        , onKeyup(e){
            // 내부에 있는 메서드에 접근할때도 그냥 this로 접근이 가능하다.
            if(!this.query.length) this.onReset()
        }
        , search(){
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data 
            })
        }
    }
})