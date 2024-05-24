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
        successToast: () => cy.get('.Toastify__toast-body > :nth-child(2)'),
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
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'viiu77s@example.com',
        dateOfBirth: '1998-01-01',
        cpf: '903',
        phone: '999',
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
        registerForm.elements.successToast().should('have.text', 'Usuário Cadastrado com Sucesso!');
    });
})

describe('Teste Funcional de Cadastro com Erro - Usuário já existe', ()=>{
    after(() => {
        cy.clearAllLocalStorage()
    })
    const input = {
        name: 'Igor',
        lastName: 'Vinicius',
        email: 'vinicius@example.com',
        dateOfBirth: '1990-01-01',
        cpf: '223',
        phone: '319',
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
        registerForm.elements.successToast().should('have.text', 'Ocorreu um erro ao cadastrar o usuário.');
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
        cpf: '723',
        phone: '119',
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
        registerForm.elements.nameErrorMessage().should('have.text', 'Username required');
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
        cpf: '723',
        phone: '119',
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
        registerForm.elements.lastNameErrorMessage().should('have.text', 'Username required');
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
        cpf: '723',
        phone: '119',
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
        registerForm.elements.emailErrorMessage().should('have.text', 'Invalid email');
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
        registerForm.elements.emailErrorMessage().should('have.text', 'Invalid email');
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
        cpf: '723',
        phone: '119',
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
        registerForm.typeDateOfBirth(input.dateOfBirth);
        registerForm.typeCpf(input.cpf);
        registerForm.typePhone(input.phone);
        registerForm.typePassword(input.password);
        registerForm.typeConfirmPassword(input.confirmPassword);
        registerForm.clickSubmit();
        registerForm.elements.dataErrorMessage().should('have.text', 'Invalid Date format');
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
        phone: '119',
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
        registerForm.elements.cpfErrorMessage().should('have.text', 'CPF must have 11 digits');
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
        registerForm.elements.cpfErrorMessage().should('have.text', 'CPF must have 11 digits');
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
        cpf: '723',
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
        registerForm.elements.telErrorMessage().should('have.text', 'Phone must have 11 digits');
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
        registerForm.elements.telErrorMessage().should('have.text', 'Phone must have 11 digits');
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
        cpf: '723',
        phone: '119',
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
        registerForm.elements.passErrorMessage().should('have.text', 'Password min 8 characters');
    });
    it('Senha sem Requisitos', ()=>{
        cy.visit("/")
        // Clique no botão de login na barra lateral para abrir o formulário de login
        input.password = '1$345678';
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
        registerForm.elements.passErrorMessage().should('have.text', 'Password requires uppercase, number, special char');
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
        registerForm.elements.confirmPassErrorMessage().should('have.text', 'Confirm password required');
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
        registerForm.elements.confirmPassErrorMessage().should('have.text', "Passwords don't match");
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
