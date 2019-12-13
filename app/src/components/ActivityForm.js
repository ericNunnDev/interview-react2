import React from 'react';
import { Button, Input } from 'reactstrap';

const ActivityForm = props => {
    return (
        <>
        <form>
            <label>Enter Activity: </label>
            <Input
                type='text'
                onChange={props.handleChange}
            />
            <br />
            <Button color='success' size='lg'>Start</Button>
            <Button color='danger' size='lg'>Stop</Button>
        </form>
        </>
    )}
 
export default ActivityForm;