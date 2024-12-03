import React, { useRef } from 'react';

function FocusInput() {
 
  const inputRef = useRef(null);

  const inputRef2 = useRef(null);
  const formRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleRef2 = () => {
    inputRef2.current.focus();
  };

  const handleForm = () => {
    formRef.current.focus();
  };
  return (
    <div>
    <h5>useRef Hook</h5>
      <input ref={inputRef} type="text" className='me-2'/>
        <form ref={formRef}>
            <input type="text" placeholder='form'/>
        </form>
        <hr />

      <input ref={inputRef2}type="text" className='me-2' />
      <div className='btn btn-primary p-1 me-2' onClick={handleForm}>Form</div>
      <div className='btn btn-primary p-1 me-2' onClick={handleRef2}>Second Input</div>
      <div className='btn btn-primary p-1 me-2' onClick={handleFocus}>First Input</div>
    </div>
    );
}

export default FocusInput;