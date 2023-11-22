# React + JavaScript Todolist


TodoList를 만들어 보았습니다.
# [:rocket: Go To Demo Page!!](https://aurorapark.github.io/todolist/)
* 모바일 환경에서 보시는게 적합합니다.

![img](https://user-images.githubusercontent.com/47839204/284803850-8e5dfdb2-a47d-45bb-b940-1b225fbaf747.png)


## 만들게 될 투두리스트 앱 소개
### Introducing the TodoList app I'll be making


### 1. 헤더

#### <개발 기능>
    - 헤더 상단 고정 
    - + 버튼 클릭시 입력 폼 팝업

#### <추가 아이디어>   
    - 햄버거 메뉴로 여러 TodoList 추가 가능

### 2. Read

#### <개발 기능>
    - LocalStorage에 저장된 TodoList 보여줌

### 3. Create

#### <개발 기능>
    - useState를 이용하여 입력받은 텍스트를 todoItem에 저장

#### <추가 아이디어>
    - 그룹 화 기능 추가

### 4. Update

#### <개발 기능>

    - Edit 버튼 클릭 시 수정 모드로 진입
    - 수정 후 버튼 클릭 시 뷰 모드로 진입 & 저장 내용 변경
    - 수정 후 엔터 입력 시 뷰 모드로 진입 & 저장 내용 변경

### 5. Delete

#### <개발 기능>
    - material UI 이용하여 휴지통 아이콘 추가
    - 버튼 클릭시 해당 todoItem 삭제

### 6. 기타 
    - useEffect 이용하여 todos 에 변동이 있을 때마다 아이템을 새로 보여준다.