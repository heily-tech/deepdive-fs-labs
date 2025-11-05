import React from 'react'


function Form({ value, setValue, handleSubmit }) {
    const inputStyle = {
        flex: '10', 
        padding: '5px', 
        border: "none", 
        borderRadius: "7px 0px 0px 7px", 
        width: "98.5%", 
        height: "17px", 
        boxShadow: "-1px 5px 18px rgb(0 0 0 / 10%)"
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
          <form onSubmit={handleSubmit} className='flex pt-2'>
                <input
                    type="text"
                    name="value"
                    className="w-full px-3 py-2 mr-4 text-gray-500 border rounded"
                    // style={inputStyle}
                    placeholder='Input'
                    value={value}
                    onChange={handleChange} />
                <input
                    type="submit"
                    value="submit"
                    className="p-1 text-blue-400 border-2 border-blue-200 rounded hover:text-white hover:bg-blue-200"
                    // style={{ flex: '1', border: 'none', borderRadius: '0px 7px 7px 0px' }} 
                    />
            </form>
        </div>
    )
}

export default Form
