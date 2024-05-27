/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        emailInput: () => cy.get('input.custom-input[name="email"][placeholder="Email"]'),
        passwordInput: () => cy.get('input.custom-input[type="password"][placeholder="Senha"]'),
        loginButton: () => cy.get('button.button-login'),
        logoutButton: () => cy.get('#logoutButton'),
        profileButton: () => cy.get('button#profileButton'),
        sidebarLoginButton: () => cy.get('button.login-button'),
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
        this.elements.profileButton().click();
    }

    clickProfile() {  // clica no botao login pra abrir a barra lateral
        this.elements.sidebarLoginButton().click();
    }

    clickLogout() { // clica no login pra efetuar o login
        this.elements.logoutButton().click();
    }

    clickSubmit() { // clica no login pra efetuar o login
        this.elements.loginButton().click();
    }
}

const registerForm = new RegisterForm()

describe('Teste Funcional de Logout', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        email: 'silvaaa@example.com',
        password: '#Teste123',
    }
    it('Login com Sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.typeEmail(input.email);
        registerForm.typePassword(input.password);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Logado!');
    });
    it('Logout com Sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickProfile();
        registerForm.clickLogout();
        registerForm.elements.toast().should('have.text', 'Logout realizado com sucesso!');
    });
})
