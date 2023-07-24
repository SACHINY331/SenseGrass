import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { gettask, edittask } from '../service/api';

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
        margin-top: 20px
`;

const Edittask = () => {
    const [ttask, setttask] = useState(initialValue);
    const { title,discription,duedate,status} = ttask;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadtaskDetails();
    }, []);

    const loadtaskDetails = async() => {
        const response = await gettask(id);
        setttask(response.data);
    }

    const edittaskDetails = async() => {
        const response = await edittask(id,ttask);
        navigate('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setttask({...ttask, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Task</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='title' value={title} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">discription</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='discription' value={discription} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Duedate</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='duedate' value={duedate} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
           
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => edittaskDetails()}>Edit Task</Button>
            </FormControl>
        </Container>
    )
}

export default Edittask;