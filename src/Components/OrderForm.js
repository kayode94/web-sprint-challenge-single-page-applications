import React from 'react'

const OrderForm = (props) =>{
    const {orderValue, updater, submit, errors, onInputChange}=props
    const change=(event=>{
        const {name, value, checked, type} = event.target
        type==='checkbox' ? updater(name, checked) : updater(name, value)
        type==='checkbox' ? onInputChange(name, checked) : onInputChange(name, value)
    })

    const submitForm = (event=>{
        event.preventDefault()
        submit()
    })
    
    return(
        <form onSubmit={submitForm}>
            <label>
                Name:{' '}
                <input 
                type='text'
                name='name'
                placeholder= 'Please enter your name'
                value={orderValue.name}
                onChange={change}/>
            </label>

            <label>
                Select a Size:{' '}
                <select onChange={change} value={orderValue.size} name='size'>
                    <option value=''>---Select a Size---</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra'>Extra Large</option>
                </select>
            </label>

            <h2>Please select your toppings</h2>
            <label>
                Chicken
                <input
                type='checkbox'
                name='chicken'
                checked={orderValue.chicken}
                onChange={change}/>
            </label>
            <label>
                Bacon
                <input
                type='checkbox'
                name='bacon'
                checked={orderValue.bacon}
                onChange={change}/>
            </label>
            <label>
                Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked={orderValue.pepperoni}
                onChange={change}/>
            </label>
            <label>
                GreenPeppers
                <input
                type='checkbox'
                name='greenPeppers'
                checked={orderValue.greenPeppers}
                onChange={change}/>
            </label>
            <label>
                Sausage
                <input
                type='checkbox'
                name='sausage'
                checked={orderValue.sausage}
                onChange={change}/>
            </label>
            <button>Place your Order</button>
            <div className='form-erros'>
                <p>{errors.name}</p>
                <p>{errors.size}</p>
            </div>

        </form>
    )
}

export default OrderForm