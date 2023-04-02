import './PadGroup.css';
import React from "react";
import Drumpad from './Drumpad';

class PadGroup extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="PadGroup">
            <div className='row my-1'>
                <div className='col-4  gx-2'>
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="W" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="E" />
                </div>
            </div>
            <div className='row my-1'>
                <div className='col-4 gx-2'>
                    <Drumpad label="A" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="S" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="D" />
                </div>
            </div>
            <div className='row my-1'>
                <div className='col-4 gx-2'>
                    <Drumpad label="Z" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="X" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="C" />
                </div>
            </div>
            
        </div> 
        );
    }
}

export default PadGroup;