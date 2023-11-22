import TodoItem from "./TodoItem";

const initialData = [
    {id: 1, text: "TodoList 만들기", completed: false},
    {id: 2, text: "TodoList 추가하기", completed: false},
    {id: 3, text: "TodoList 삭제하기", completed: true},
]
export default function TodoList(){
    return (
        <TodoItem />
    );
}