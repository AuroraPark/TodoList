import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TodoItem({ todo ,deleteTodo, checkTodo}) {
    // TodoList에서 생성된 initialData array를 하나씩 {todo}로 받아와
    // TodoItem 컴포넌트를 생성한다.
    
    // 기본적으로 labelId는 고유한 값을 가져야 하기때문에, 아래와같이 적용해 준다.
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        // ListItem을 이용하여 배치를 잡아주고, 
        // 아이템 내부에 체크박스<Checkbox>, 삭제버튼<DeleteIcon>, 수정버튼<EditIcon>을 배치한다.
        // 아이콘들은 IconButtton으로 감싸 효과 및 클릭 이벤트를 적용해 줄 수 있다.
        // 모든 부품들은 import 문을 작성해 주어야 한다.
        // Checkbox의 값은 checked 속성에서 지정할수 있다.{todo.completed}
        // ListItemText의 값은 primary 속성에서 지정할 수 있다.{todo.text}
        // 삭제기능: TodoList에서 deleteTodo()를 이용하여 onClick 이벤트에 적용시켜준다.
        // 체크리스트 수정 기능: TodoList 에서 checkTodo()를 이용하여 onChange 이벤트에 적용시켜준다.
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={deleteTodo} >
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding >

            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        onChange={(e) => checkTodo(todo.id)}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
                <IconButton aria-label="edit">
                    <EditIcon id={labelId} />
                </IconButton>
            </ListItemButton>

        </ListItem>
    );
}