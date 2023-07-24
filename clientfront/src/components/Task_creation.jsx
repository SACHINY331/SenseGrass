import  { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addtask } from '../service/api.jsx';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    title: '',
    discription: '',
    duedate: '',
    status:'',
   
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const Addtask = () => {
    const [ttask, setttask] = useState(initialValue);
    const { title,discription,duedate,status } = ttask;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setttask({ ...ttask, [e.target.name]: e.target.value })
    }

    const addtaskDetails = async () => {
        await addtask(ttask);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add Task</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">discription</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='discription' value={discription} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Duedate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='duedate' value={duedate} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" />
            </FormControl>
           
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addtaskDetails()}>Add Task</Button>
            </FormControl>
        </Container>
    )
};

export default Addtask;