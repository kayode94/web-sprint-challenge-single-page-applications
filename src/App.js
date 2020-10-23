import React,{useState} from "react";
import {Route, Link} from 'react-router-dom'
import PizzaHeader from './Components/PizzaHeader'
import OrderForm from './Components/OrderForm'
import YourPizza from './Components/YourPizza'
import schemaForm from './Components/Schema'
import * as yup from 'yup'


//Initial Pizza values
const initialOrderValues = {
  name: '',
  size: '',
  chicken: false,
  bacon: false,
  pepperoni: false,
  greenPeppers: false,
  sausage: false,
}
const initialPizzaValue = []

const initialFormErros={
  name: '',
  size: '',
}


const App = () => {
  //setting initial state
  const [orderValue, setOrderValues] = useState(initialOrderValues)
  const [pizzaValue, setPizzaValue] = useState(initialPizzaValue)
  const [formErros, setFormErros] = useState(initialFormErros)

  //Helper functions
  const onSubmit = () =>{
    setPizzaValue([...pizzaValue, orderValue])
    setOrderValues(initialOrderValues)

  }

  const pizzaUpdater = (name, value) =>{
    setOrderValues({...orderValue, [name]: value})
  }

  //Yup validation
  const onInputChange = (name, value) =>{
    yup.reach(schemaForm, name)
    .validate(value)
    .then(valid=>{
      setFormErros({...formErros, [name]: ''})
    })
    .catch(error=>{
      setFormErros({...formErros, [name]:error.errors[0]})
    })
    setOrderValues({...orderValue, [name]: value})
  }
  return (
    <div>
      <Link to ='/'>
        <h1>Home Page</h1>
      </Link>
      <Route exact path = '/'>
        <PizzaHeader/>
        <Link to ='/pizza'>
          <button>Build your own pizza</button>
        </Link>
      </Route>
      <Route path = '/pizza'>
      <OrderForm 
          orderValue={orderValue} 
          submit={onSubmit}
          updater={pizzaUpdater}
          errors={formErros}
          onInputChange={onInputChange}/>

          {pizzaValue.map((pizzaOrder)=>{
            return(
              <YourPizza completedOrder={pizzaOrder} key={pizzaOrder.name}/>
            )
          })}
      </Route>
    </div>
  );
};
export default App;
