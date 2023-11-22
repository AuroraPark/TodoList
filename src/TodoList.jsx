import TodoItem from "./TodoItem";
import { useState } from "react";
import { List } from "@mui/material";

const initialData = [
    { id: 1, text: "TodoList 만들기", completed: false },
    { id: 2, text: "TodoList 추가하기", completed: false },
    { id: 3, text: "TodoList 삭제하기", completed: true },
]
export default function TodoList() {
    // useState 를 이용하여 상태를 간편하게 변경할 수 있으며,
    // 컴포넌트가 렌더링 될때마다 새로운 상태로 업데이트할 수 있음
    const [todos, setTodos] = useState(initialData);

    // filter 기능을 이용한 삭제 기능 추가
    // id가 같은것을 제외하고 다시 보여준다.
    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        });
    }

    // map을 이용하여 체크 박스에 체크 기능 추가
   // 선택된 id와 같은 t의 completed 속성을 반대로 바꿔준다.
   // 아닌것은 그대로 t를 출력
   const checkTodo = (id) => {
    setTodos((prevTodos) =>{
        return prevTodos.map((t) => {
            if (t.id === id) {
                return {...t, completed:!t.completed };
            }
            return t;
        })
    })
}

    return (
        // Material UI의 List를 이용하여 쉽게 리스트를 가지고옴.
        // map을 이용하여 todos의 array를 하나씩 불러와 TodoItem으로 보내준다.
        // 이때 키값으로 todo.id를 이용한다.
        // Todo Item에서는 todo 값을 {todo}로 받아 사용해야 한다.
        // 생성한 deleteTodo(), checkTodo() 에 todo.id를 넣어 TodoItem으로 보내준다.
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} 
                deleteTodo={() => deleteTodo(todo.id)}
                checkTodo={()=>checkTodo(todo.id)} />
            )}

        </List>
    );
}