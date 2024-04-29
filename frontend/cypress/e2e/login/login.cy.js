/// <reference types="Cypress"/>

describe('Teste Funcional de Login', ()=>{
    it('Deve realizar login  com sucesso', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get(':nth-child(3) > .custom-input').type("valid_user")
        cy.get(':nth-child(5) > .custom-input').type("valid_password")
        cy.get('.button-login').click()
    });
})

describe('Teste Funcional de Login', ()=>{
    it('Não deve realizar login - Senha inválida', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get(':nth-child(3) > .custom-input').type("valid_user")
        cy.get(':nth-child(5) > .custom-input').type("valid_password")
        cy.get('.button-login').click()
    });
})

describe('Teste Funcional de Login', ()=>{
    it('Não deve realizar login - Usuário inválida', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get(':nth-child(3) > .custom-input').type("valid_user")
        cy.get(':nth-child(5) > .custom-input').type("valid_password")
        cy.get('.button-login').click()
    });
})