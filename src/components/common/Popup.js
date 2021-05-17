import React from 'react'
import { TagRow } from './'


function Popup(props) {



    return (props.trigger) ? (

        <div className='pop-window'>
            <div className="popup-inner" tabindex="0" onBlur={() => props.setTrigger(false)}>
                {/* the setTrigger in here is the pointer of setPopupState. Thus changing the set Trigger is actually changing the setPopupState itself. 
                Meaning: setPopupState(false) */}
                {props.arrayMessage.map(message => (
                    <div className='inner-layout'>

                        <div className='tag'><TagRow tags={message.categories} /></div>
                        <h1 className='title'>{message.title}</h1>
                        {/* <div className='image'>{message.image}</div>
                        <div className='description'>{message.description}</div> */}
                        <div className='article' dangerouslySetInnerHTML={{ __html: message.detail }} />

                    </div>

                ))}
                <button className='close-button' onClick={() => props.setTrigger(false)}>close</button>
            </div>
        </div>
    ) : "";
}

export default Popup
