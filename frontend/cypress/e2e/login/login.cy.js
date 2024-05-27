/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        emailInput: () => cy.get('input.custom-input[name="email"][placeholder="Email"]'),
        passwordInput: () => cy.get('input.custom-input[type="password"][placeholder="Senha"]'),
        loginButton: () => cy.get('button.button-login'),
        sidebarLoginButton: () => cy.get('button.login-button')
    }

    typeEmail(text) {   //digita no input email
        if(!text) return;
        this.elements.emailInput().type(text);
    }

    typePassword(text) {    // digita no input senha
        if(!text) return;
        this.elements.passwordInput().type(text);
    }

    clickLogin() {  // clica no botao login pra abrir a barra lateral
        this.elements.sidebarLoginButton().click();
    }

    clickSubmit() { // clica no login pra efetuar o login
        this.elements.loginButton().click();
    }
}

const registerForm = new RegisterForm()



describe('Teste Funcional ade Login', ()=>{
    it('Deve realizar login  acom sucesso', ()=>{
        cy.visit("/")
        cy.get('.bg-transparent').click()
        cy.get(":nth-child(2) > .custom-input").type("valid_user");
        cy.get(":nth-child(4) > .custom-input").type("valid_password");
        cy.get('.button-login').click()
    });
})

describe('Teste Funcional de Login', ()=>{
    it('Não deve realizar login - Senha inválida', ()=>{
        cy.visit("/")
        cy.get('.bg-transparent').click()
        cy.get(':nth-child(2) > .custom-input').type("valid_user")
        cy.get(":nth-child(4) > .custom-input").type("valid_password");
        cy.get('.button-login').click()
    });
})

describe('Teste Funcional de Login', ()=>{
    it('Não deve realizar login - Usuário inválida', ()=>{
        cy.visit("/")
        cy.get('.bg-transparent').click()
        cy.get(':nth-child(2) > .custom-input').type("valid_user")
        cy.get(":nth-child(4) > .custom-input").type("valid_password");
        cy.get('.button-login').click()
    });
})
/*
describe('Teste Funcional de Login', ()=>{
    const input = {
        email: 'teste@email.com',
        pass: '#Teste123'
    }
    it('Deve realizar login com sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin()
        registerForm.typeEmail(input.email)
        registerForm.typePassword(input.pass)
        registerForm.clickSubmit()
    });
})*/