import SearchModel from "./models/SearchModel.js";
import KeywordModel from "./models/KeywordModel.js";
import HistoryModel from "./models/HistoryModel.js";

import FormComponent from "./components/FormComponent.js";
import ResultComponent from "./components/ResultComponent.js";
new Vue({
    // el : 화면 컴포넌드 아이디를 입력
    el: '#app',

    // data : 표현할 데이터와 키값을 입력
    data: {
        // msg: 'hello world'
        // query : 입력을 담당하는 데이터 할당.
          query : ''
        , searchResult : [] //검색결과가 들어가는 배열
        , submitted : false
        , tabs: ['추천검색어','최근검색어']
        , selectedTab : ''
        , keywords:[]
        , history:[]
    }
    , components: {
        'search-form' : FormComponent
        , 'search-result' : ResultComponent
    }
    , created(){
        this.selectedTab = this.tabs[0]
        this.fetchKeyword();
        this.fetchHistory();
    }
    , methods : {
         onSubmit(query){
            this.query = query
            this.search()
        }
        , onReset(e){
            // 데이터 안에 있는 변수 접근할때는 그냥 this.변수명으로 접근이 가능하다.
            this.query = "";
        }
        , search(){
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data 

            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        }
        , resetForm(){
            this.query = ''
            this.submitted = false
            this.searchResult = []
        }
        , onClickTab(tab){
            this.selectedTab = tab;
        }
        , fetchKeyword(){
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        }
        , fetchHistory(){
            HistoryModel.list().then(data => {
                this.history = data
            })
        }
        ,onClickKeyword(keyword){
            this.query = keyword;
            this.search()
        }
        ,onClickRemoveHistory(keyword){
            HistoryModel.remove(keyword)
            this.fetchHistory()
        }
    }
})