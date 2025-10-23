export default function Form({handleSubmit, value, setValue}) {
    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    return <form style={ {display: 'flex'} } onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='value' 
            style={ {flex: '10', padding: '5px'} } 
            placeholder='Write to do.' 
            value={value} 
            onChange={handleChange}/>
          <input 
            type='submit' 
            value='Submit' 
            className='btn' 
            style={ {flex: '1'}} />
        </form>
}