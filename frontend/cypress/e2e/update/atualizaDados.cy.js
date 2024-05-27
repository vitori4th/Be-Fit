/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        emailInput: () => cy.get('input.custom-input[name="email"][placeholder="Email"]'),
        passwordInput: () => cy.get('input.custom-input[type="password"][placeholder="Senha"]'),
        nameInput: () => cy.get('input.custom-input[placeholder="Nome"][name="name"]'),
        lastNameInput: () => cy.get('input.custom-input[placeholder="Nome"][name="lastname"]'),
        dateOfBirthInput: () => cy.get('input.custom-input[placeholder="Data de Nascimento"][name="dateBirth"]'),
        phoneInput: () => cy.get('input.custom-input[placeholder="Telefone"][name="cellphone"]'),
        passwordInput: () => cy.get('input.custom-input[type="password"][placeholder="Senha"]'),
        loginButton: () => cy.get('button.button-login'),
        logoutButton: () => cy.get('#logoutButton'),
        profileButton: () => cy.get('button#profileButton'),
        sidebarLoginButton: () => cy.get('button.login-button'),
        submitButton: () => cy.get('button#register'),
        nameErrorMessage: () => cy.get('span#nameError'),
        lastNameErrorMessage: () => cy.get('span#lastnameError'),
        dataErrorMessage: () => cy.get('span#dataError'),
        telErrorMessage: () => cy.get('span#telError'),
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

    clear() {
        this.elements.nameInput().clear();
        this.elements.lastNameInput().clear();
        this.elements.dateOfBirthInput().clear();
        this.elements.phoneInput().clear();
    }

    typeName(text) {
        if (!text) return;
        this.elements.nameInput().type(text);
      }
    
    typeLastName(text) {
        if (!text) return;
        this.elements.lastNameInput().type(text);
      }
    
    typeDateOfBirth(text) {
        if (!text) return;
        this.elements.dateOfBirthInput().type(text);
      }
    
    typePhone(text) {
        if (!text) return;
        this.elements.phoneInput().type(text);
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

describe('Teste Funcional de Atualização - Com Sucesso', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igoro',
        lastName: 'Jesus',
        email: 'silvaaa@example.com',
        password: '#Teste123',
        dateOfBirth: '2000-01-01',
        phone: '94511001313',
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
    it('Atualizado com Sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickProfile();
        registerForm.clear();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typePhone(input.phone);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Dados Atualizados com Sucesso!');
        registerForm.clickLogout();
    });
})

describe('Teste Funcional de Atualização - Com Erro', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igoro',
        lastName: 'Jesus',
        email: 'silvaaa@example.com',
        dateOfBirth: '',
        password: '#Teste123',
        phone: '94511001313',
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
    it('Atualizado com Erro - Nome Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.name = ' '; 
        registerForm.clickProfile();
        registerForm.clear();
        registerForm.typeLastName(input.lastName);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typePhone(input.phone);
        registerForm.clickSubmit();
        registerForm.elements.nameErrorMessage().should('have.text', 'Nome é obrigatório');
    });
    it('Atualizado com Erro - Sobrenome Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.name = 'Igor';
        input.lastName = '';
        registerForm.clickProfile();
        registerForm.clear();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typePhone(input.phone);
        registerForm.clickSubmit();
        registerForm.elements.lastNameErrorMessage().should('have.text', 'Sobrenome é obrigatório');
    });
    it('Atualizado com Erro - Data inválida', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.lastname = 'Jesus';
        registerForm.clickProfile();
        registerForm.clear();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typePhone(input.phone);
        registerForm.clickSubmit();
        registerForm.elements.dataErrorMessage().should('have.text', 'Formato de data inválido');
    });
    it('Atualizado com Erro - Telefone Inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.data = '2000-08-07';
        input.phone = '4568';
        registerForm.clickProfile();
        registerForm.clear();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typePhone(input.phone);
        registerForm.clickSubmit();
        registerForm.elements.telErrorMessage().should('have.text', 'Telefone deve ter 11 dígitos');
    });
})