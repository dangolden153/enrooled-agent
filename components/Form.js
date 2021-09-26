import React from 'react'

const Form = ({ submitText, method = 'POST', action, children }) => {
    return (
        <div className='form-wrapper d-flex flex-column w-100 align-items-between'>
            <form className='form-between d-flex flex-column w-100 align-content-between' method={method} action={action}>
                {children}
                <div className="form-btn-wrapper d-flex flex-row w-100 justify-content-end">
                    <button type="submit" className='btn btn-form'>{submitText}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
