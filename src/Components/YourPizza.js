import React from 'react'

const YourPizza= (props)=>{
    const{name, size, pepperoni, chicken, sausage, greenPeppers, bacon} = props.completedOrder
    return(
        <div className='completed-orders'>
            <h1>Name:{name}</h1>
            <p>Size: {size}</p>
            <h4>Your Toppings:</h4>
            <ol>
                <li>Pepperoni:{pepperoni ? 'yes' : 'not selected'}</li>
                <li>Chicken:{chicken ? 'yes' : 'not selected'}</li>
                <li>Sausage:{sausage ? 'yes' : 'not selected'}</li>
                <li>GreenPeppers:{greenPeppers ? 'yes' : 'not selected'}</li>
                <li>Bacon:{bacon ? 'yes' : 'not selected'}</li>
            </ol>
        </div>
    )
}

export default YourPizza