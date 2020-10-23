describe('Able to add text to box', ()=>{
    it('running before each test', ()=>{
        cy.visit('http://localhost:3000/pizza')
    })
    
    it('name input should be working', ()=>{
        cy.get('input[name=name]').type('Kay')
        .should('have.value', 'Kay')
    })

    it('selecting a pizza size', ()=>{
        cy.get('select').select('Small')
    })
})

describe('Able to select multiple toppings', ()=>{
    it('select bacon', ()=>{
        cy.get('[name=bacon]')
    })

    it('select chicken', ()=>{
        cy.get('[name=chicken]')
    })

    it('select sausage', ()=>{
        cy.get('[name=sausage]')
    })

    it('select pepperoni', ()=>{
        cy.get('[name=pepperoni]')
    })
})

