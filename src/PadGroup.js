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
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
            </div>
            <div className='row my-1'>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
            </div>
            <div className='row my-1'>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
                <div className='col-4 gx-2'>
                    <Drumpad label="Q" />
                </div>
            </div>
            
        </div> 
        );
    }
}

export default PadGroup;