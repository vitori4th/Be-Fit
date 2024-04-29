import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import visible from '../../../public/icons/visible.png';
import './cadastro.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface CadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CadastroModal = ({ isOpen, onClose }: CadastroModalProps) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const notify = () => toast.success("Usuário Cadastrado com Sucesso!");

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDataNascimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataNascimento(event.target.value);
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const successLogin = () => {
    toast.success('Usuário cadastrado com sucesso!');
  };

  const handleCadastroClick = async () => {
    if (nome.trim() === '' || email.trim() === '' || dataNascimento.trim() === '' || cpf.trim() === '' || telefone.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      toast.error("Preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    try {
      const userData = {
        cellphone: telefone,
        cpf: Number(cpf),
        email,
        dateBirth: new Date(dataNascimento),
        lastname: 'Sobrenome',
        name: nome,
        password,
        confirmPassword,
      };
      
      console.log(userData);
      // Chamar a API para o registro do usuário
      const response = await axios.post('http://localhost:3333/users/', userData);

      // Verificar se o usuário foi registrado com sucesso
      if (response.status === 200) {
        toast.success("Usuário Cadastrado com Sucesso!");
        setTimeout(() => {
          onClose(); // Fechar o modal após um pequeno atraso
        }, 2000);
      } else {
        toast.error('Ocorreu um erro ao cadastrar o usuário.');
      }
    } catch (error) {
      // Se ocorrer um erro, exibir uma mensagem de erro
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
      console.error(error);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content delay-[2000ms]" onClick={(e) => e.stopPropagation()}>
        <div className="bloco-cad mb-[-20%] flex flex-col justify-center items-center">
          <h2 className="title-cad font-bold mt-[-30%]">Cadastro</h2>
          <p className="sub-info mt-8 mb-2">Nome</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="text" className="custom-input flex items-center" placeholder="Nome" value={nome} onChange={handleNomeChange} />
          </div>
          <p className="sub-info mt-2 mb-2">Email</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="text" className="custom-input flex items-center" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <p className="sub-info mt-2 mb-2">Data de Nascimento</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="date" className="custom-input flex items-center" placeholder="Data de Nascimento" value={dataNascimento} onChange={handleDataNascimentoChange} />
          </div>
          <p className="sub-info mt-2 mb-2">CPF</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="text" className="custom-input flex items-center" placeholder="CPF" value={cpf} onChange={handleCpfChange} />
          </div>
          <p className="sub-info mt-2 mb-2">Telefone</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="text" className="custom-input flex items-center" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} />
          </div>
          <p className="sub-info mt-2 mb-2">Senha</p>
      <div className="custom-input-container">
        <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          className="custom-input"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
        />
       
      </div>

      <p className="sub-info mt-2 mb-2">Confirmar Senha</p>
      <div className="custom-input-container">
        <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          className="custom-input"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        
      </div>
          <button className="button-login border border-green-800 rounded-md duration-500 mt-10 hover:border-green-600 hover:text-green-600" onClick={handleCadastroClick}>Cadastrar</button>
          <ToastContainer />
          <button className="button-return rounded-md hover:bg-gray-400 duration-500 mt-2" onClick={onClose}>Voltar</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CadastroModal;