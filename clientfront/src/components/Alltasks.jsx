import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { gettask, deletetask } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Alltasks = () => {
    const [tasks, settasks] = useState([]);
    
    useEffect(() => {
        getAlltasks();
    }, []);

    const deletetaskData = async (id) => {
        await deletetask(id);
        getAlltasks();
    }

    const getAlltasks = async () => {
        let response = await gettask();
        settasks(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Discription</TableCell>
                    <TableCell>Duedate</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {tasks.map((task) => (
                    <TRow key={task.id}>
                        <TableCell>{task._id}</TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.discription}</TableCell>
                        <TableCell>{task.duedate}</TableCell>
                        <TableCell>{task.status}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${task._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deletetaskData(task._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default Alltasks;