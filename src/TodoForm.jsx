import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Checkbox } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import {useState} from 'react';

export default function TodoForm({saveTodo, toggleVisible}){
    // 입력 받을 text는 비어있는 값으로 초기화 해준다.
    const [text, setText] = useState('');
    // 입력 받은 text 값을 text에 넣어준다.
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    // submit 버튼 클릭시 새로고침 되는 것을 막고,
    // text를 저장한뒤,
    // 텍스트란을 비워준다.
    // 추가란을 보이지 않게 한다.
    const handleSubmit = (event) => {
        event.preventDefault();
        saveTodo(text);
        setText('');
        toggleVisible();
    };
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <form onSubmit={handleSubmit}>
            <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment">
                    Add Todo Item..
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Checkbox disabled />
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="send" type='submit'>
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={handleTextChange}
                    value={text}
                />
            </FormControl>
        </form>
        </Box>
    );
}