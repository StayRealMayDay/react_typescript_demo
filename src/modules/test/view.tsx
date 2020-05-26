import React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import { IRootState} from '../../store';
import {Button} from 'antd';

function Test(){
    const name = useSelector((state: IRootState) => (state.test), shallowEqual);
    console.log(name)
    const dispatch = useDispatch();
    const click = () => {
        dispatch({type: "XXX"})
    }

    return <div>
        This is a test
        <button onClick={click}> dispatch </button>
        <Button type={"primary"}>sss</Button>
    </div>
}

export default Test;