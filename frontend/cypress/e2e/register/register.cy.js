/// <reference types="Cypress"/>

describe('Teste Funcional de Cadastro', ()=>{
    it('Deve cadastrar com sucesso', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get('.button-cad').click()
        cy.get('.bloco-cad > :nth-child(3) > .custom-input').type("name_user3")
        cy.get('.bloco-cad > :nth-child(5) > .custom-input').type("valid_email3@gmail.com")
        cy.get(':nth-child(7) > .custom-input').type("2004-04-26")
        cy.get(':nth-child(9) > .custom-input').type("173")
        cy.get(':nth-child(11) > .custom-input').type("123456789123")
        cy.get(':nth-child(13) > .custom-input').type("TesteSenhaForte123@3")
        cy.get('.bloco-cad > :nth-child(15)').type("TesteSenhaForte123@3")
        cy.get('.bloco-cad > .button-login').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Sucesso')
    });
})

describe('Teste Funcional de Cadastro', ()=>{
    it('Não deve cadastrar', ()=>{
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
        cy.get('.Toastify__toast-body > :nth-child(2)')
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'erro')
    });
})

describe('Teste Funcional de Cadastro', ()=>{
    it('Não deve cadastrar Falta Dados', ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.bg-transparent').click()
        cy.get('.button-cad').click()
        cy.get('.bloco-cad > :nth-child(3) > .custom-input').type("name_user")
        cy.get('.bloco-cad > :nth-child(5) > .custom-input').type("valid_email@gmail.com")
        cy.get(':nth-child(7) > .custom-input').type("2004-04-29")
        cy.get(':nth-child(9) > .custom-input').type("123457")
        cy.get(':nth-child(13) > .custom-input').type("TesteSenhaForte123@")
        cy.get('.bloco-cad > :nth-child(15)').type("TesteSenhaForte123@")
        cy.get('.bloco-cad > .button-login').click()
        cy.get('.Toastify__toast-body > :nth-child(2)')
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', 'Preencha')
    });
})
