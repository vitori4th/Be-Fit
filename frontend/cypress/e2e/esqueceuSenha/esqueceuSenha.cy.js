/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        emailInput: () => cy.get('input#emailRecoveryPass'),
        sendButton: () => cy.get('button#submitEmailRecovery'),
        esqueciButton: () => cy.get('#esqueciButton'),
        loginButton: () => cy.get('button#profileButton'),
        emailErrorMessage: () => cy.get('span.sub-info.w-full.flex.justify-start.text-red-700'),
        toast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
    }

    typeEmail(text) {   //digita no input email 
        if(!text) return;
        this.elements.emailInput().type(text);
    }

    clickLogin() {  // clica no botao login pra abrir a barra lateral
        this.elements.loginButton().click();
    }

    clickEsqueci() { // clica no login pra efetuar o login
        this.elements.esqueciButton().click();
    }

    clickSubmit() { // clica no login pra efetuar o login
        this.elements.sendButton().click();
    }
}

const registerForm = new RegisterForm()

describe('Teste Funcional de Esqueceu a Senha', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'silvaaaexample.com',
    }
    it('Email inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickEsqueci();
        registerForm.typeEmail(input.email);
        registerForm.clickSubmit();
        registerForm.elements.emailErrorMessage().should('have.text', 'Email inválido');
    });
    it('Email Válido e Enviado', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.email = 'vitoriathdasilva@gmail.com';
        registerForm.clickLogin();
        registerForm.clickEsqueci();
        registerForm.typeEmail(input.email);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Email enviado!');
    });
})
