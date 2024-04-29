import React, { useState } from 'react';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import visible from '../../../public/icons/visible.png';
import './cadastro.css';

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

  const handleCadastroClick = () => {
    if (nome.trim() === '' || email.trim() === '' || dataNascimento.trim() === '' || cpf.trim() === '' || telefone.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Por favor, preencha todos os campos para se cadastrar.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }

    // Aqui você pode continuar com a lógica de cadastro
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
            <input type="password" className="custom-input" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            <div className="right-icon">
              <Image src={visible} alt="Icone" width={13.33} height={10.67} className="input-icon relative left-[60%]" />
            </div>
          </div>
          <p className="sub-info mt-2 mb-2">Confirmar Senha</p>
          <div className="custom-input-container">
            <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="password" className="custom-input" placeholder="Confirmar Senha" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <div className="right-icon">
              <Image src={visible} alt="Icone" width={13.33} height={10.67} className="input-icon relative left-[60%]" />
            </div>
          </div>
          <button className="button-cad border border-green-800 rounded-md duration-500 mt-10 hover:border-green-600 hover:text-green-600" onClick={handleCadastroClick}>Cadastrar</button>
          <button className="button-login border border-green-800 rounded-md hover:bg-green-800 duration-500 mt-2" onClick={onClose}>Voltar</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroModal;