import React from 'react'

const Form = ({ submitText, handleSubmit, children }) => {
    return (
        <div className='form-wrapper d-flex flex-column w-100 align-items-between'>
            <form onSubmit={handleSubmit} className='form-between d-flex flex-column w-100 align-content-between'>
                {children}
                <div className="form-btn-wrapper d-flex flex-row w-100 justify-content-center justify-content-lg-end">
                    <button type="submit" className='btn btn-form'>{submitText}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
