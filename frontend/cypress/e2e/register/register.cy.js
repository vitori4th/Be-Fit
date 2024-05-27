/// <reference types="Cypress"/>

class RegisterForm{
    elements = {
        nameInput: () => cy.get('input.custom-input[placeholder="Nome"][name="name"]'),
        lastNameInput: () => cy.get('input.custom-input[placeholder="Nome"][name="lastname"]'),
        emailInput: () => cy.get('input#EmailRegister.custom-input'),
        dateOfBirthInput: () => cy.get('input.custom-input[placeholder="Data de Nascimento"][name="dateBirth"]'),
        cpfInput: () => cy.get('input.custom-input[placeholder="CPF"][name="cpf"]'),
        phoneInput: () => cy.get('input.custom-input[placeholder="Telefone"][name="cellphone"]'),
        passwordInput: () => cy.get('input#PassRegister.custom-input'),
        confirmPasswordInput: () => cy.get('input.custom-input[placeholder="Confirmar Senha"][name="confirmPassword"]'),
        sidebarLoginButton: () => cy.get('button.login-button'),
        sidebarRegisterButton: () => cy.get('button.button-cad'),
        submitButton: () => cy.get('button#register'),
        nameErrorMessage: () => cy.get('span#nameError'),
        lastNameErrorMessage: () => cy.get('span#lastnameError'),
        emailErrorMessage: () => cy.get('span#emailError'),
        dataErrorMessage: () => cy.get('span#dataError'),
        cpfErrorMessage: () => cy.get('span#cpfError'),
        telErrorMessage: () => cy.get('span#telError'),
        passErrorMessage: () => cy.get('span#passError'),
        confirmPassErrorMessage: () => cy.get('span#confirmPassError'),
        toast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
    }

    typeName(text) {
        if (!text) return;
        this.elements.nameInput().type(text);
      }
    
    typeLastName(text) {
        if (!text) return;
        this.elements.lastNameInput().type(text);
      }
    
    typeEmail(text) {
        if (!text) return;
        this.elements.emailInput().type(text);
      }
    
    typeDateOfBirth(text) {
        if (!text) return;
        this.elements.dateOfBirthInput().type(text);
      }
    
    typeCpf(text) {
        if (!text) return;
        this.elements.cpfInput().type(text);
      }
    
    typePhone(text) {
        if (!text) return;
        this.elements.phoneInput().type(text);
      }
    
    typePassword(text) {
        if (!text) return;
        this.elements.passwordInput().type(text);
      }
    
    typeConfirmPassword(text) {
        if (!text) return;
        this.elements.confirmPasswordInput().type(text);
      }

    clickLogin() {  // clica no botao login pra abrir a barra lateral
        this.elements.sidebarLoginButton().click();
    }
    
    clickRegister() {  // clica no botao login pra abrir a barra lateral
        this.elements.sidebarRegisterButton().click();
    }

    clickSubmit() { // clica no login pra efetuar o login
        this.elements.submitButton().click();
    }
}

const registerForm = new RegisterForm()

describe('Teste Funcional de Cadastro com Sucesso', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igorr',
        lastName: 'Viniciuus',
        email: 'igorr@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '90308880000',
        phone: '99888001313',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Deve realizar login com sucesso', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Usuário Cadastrado com Sucesso!');
    });
})

describe('Teste Funcional de Cadastro com Erro', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '90300000000',
        phone: '99900001313',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Usuário já existe', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Ocorreu um erro');
    });
})

describe('Teste Funcional de Cadastro com Erro - Nome', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: '',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '72315457889',
        phone: '11945781245',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Nome Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.nameErrorMessage().should('have.text', 'Nome é obrigatório');
    });
})

describe('Teste Funcional de Cadastro com Erro - Sobrenome', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: '',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '72315457889',
        phone: '11945781245',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Sobrenome Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.lastNameErrorMessage().should('have.text', 'Sobrenome é obrigatório');
    });
})

describe('Teste Funcional de Cadastro com Erro - Email', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius',
        dateOfBirth: '1990-01-01',
        cpf: '72315457889',
        phone: '11945781245',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Email Inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.emailErrorMessage().should('have.text', 'E-mail inválido');
    });

    it('Email Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.email = '';
        // altera o email pra vazio
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.emailErrorMessage().should('have.text', 'E-mail inválido');
    });
})

describe('Teste Funcional de Cadastro com Erro - Data', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: ' ',
        cpf: '72315457889',
        phone: '11945781245',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Data Vazia', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.toast().should('have.text', 'Ocorreu um erro');
    });
})

describe('Teste Funcional de Cadastro com Erro - Cpf', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '',
        phone: '11945781245',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Cpf Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.cpfErrorMessage().should('have.text', 'CPF deve ter 11 dígitos');
    });
    it('Cpf Inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.cpf = '44';
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.cpfErrorMessage().should('have.text', 'CPF deve ter 11 dígitos');
    });
})

describe('Teste Funcional de Cadastro com Erro - Telefone', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '72315457889',
        phone: '',
        password: '#Teste123',
        confirmPassword: '#Teste123'
    }
    it('Telefone Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.telErrorMessage().should('have.text', 'Telefone deve ter 11 dígitos');
    });
    it('Telefone Inválido', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.phone = '44';
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.telErrorMessage().should('have.text', 'Telefone deve ter 11 dígitos');
    });
})

describe('Teste Funcional de Cadastro com Erro - Senha', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '72315457889',
        phone: '11945781245',
        password: '',
        confirmPassword: ''
    }
    it('Senha Vazia', ()=>{
        cy.visit("/")
        input.password = '';
        // Clique no botão de login na barra lateral para abrir o formulário de login 
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.passErrorMessage().should('have.text', 'Senha deve ter no mínimo 8 caracteres');
    });
    it('Senha sem Letra Maiúscula', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.password = 'abc3#defghij';
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.passErrorMessage().should('have.text', 'Senha precisa ter letra maiúscula');
    });
    it('Senha sem Número', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.password = 'abA@cdefghij';
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.passErrorMessage().should('have.text', 'Senha precisa ter número');
    });
    it('Senha sem Especial', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.password = 'abA8cdefghij';
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.passErrorMessage().should('have.text', 'Senha precisa ter especial');
    });
    input.password = '#Teste123'; // colocando a senha correta agora
    it('Confirmar Senha Vazio', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.confirmPassword = ''
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.confirmPassErrorMessage().should('have.text', 'Confirmação de senha é obrigatória');
    });
    it('Senhas não Coincidem', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.confirmPassword = 'teste333'
        registerForm.clickLogin();
        registerForm.clickRegister();
        registerForm.typeName(input.name);
        registerForm.typeLastName(input.lastName);
        registerForm.typeEmail(input.email);
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.confirmPassErrorMessage().should('have.text', "As senhas não coincidem");
    });
})












/*describe('Teste Funcional de Cadastro', ()=>{
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
})*/
