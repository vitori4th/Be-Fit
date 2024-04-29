/// <reference types="Cypress"/>

describe('Teste Funcional de Cadastro', ()=>{
    it('Deve cadastrar com sucesso', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get('.button-cad').click()
        cy.get('.bloco-cad > :nth-child(3) > .custom-input').type("name_user")
        cy.get('.bloco-cad > :nth-child(5) > .custom-input').type("valid_email@gmail.com")
        cy.get(':nth-child(7) > .custom-input').type("2004-04-29")
        cy.get(':nth-child(9) > .custom-input').type("123457")
        cy.get(':nth-child(11) > .custom-input').type("12345678912")
        cy.get(':nth-child(13) > .custom-input').type("TesteSenhaForte123@")
        cy.get('.bloco-cad > :nth-child(15)').type("TesteSenhaForte123@")
        cy.get('.bloco-cad > .button-login').click()
    });
})
