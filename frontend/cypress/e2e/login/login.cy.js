/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        emailInput: () => cy.get('input.custom-input[name="email"][placeholder="Email"]'),
        passwordInput: () => cy.get('input.custom-input[type="password"][placeholder="Senha"]'),
        loginButton: () => cy.get('button.button-login'),
        sidebarLoginButton: () => cy.get('button.login-button'),
        emailErrorMessage: () => cy.get('span#emailErrorLogin'),
        passErrorMessage: () => cy.get('span#passErrorLogin'),
        toast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
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

describe('Teste Funcional de Login com Erro - Email', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'viniciusexample.com',
        password: '#Teste123',
    }
    it('Email inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.email = 'viniciusexample.com';
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.emailErrorMessage().should('have.text', 'E-mail inválido');
    });
    it('Email vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.email = '';
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.emailErrorMessage().should('have.text', 'E-mail inválido');
    });
})

describe('Teste Funcional de Login com Erro - Senha', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'vinicius@example.com',
        password: '',
    }
    it('Senha vazia', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.passErrorMessage().should('have.text', 'Senha é obrigatório');
    });
})

describe('Teste Funcional de Login com Erro', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'vinis@example.com',
        password: 'ste1%T23',
    }
    it('Dados Inválidos', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'E-mail e/ou senha incorreto!');
    });
})

describe('Teste Funcional de Login com Sucesso', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'vinicius@example.com',
        password: '#Teste123',
    }
    it('Deve realizar login com sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Logado!');
    });
})