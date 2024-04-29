import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Importar a biblioteca Axios
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import visible from '../../../public/icons/visible.png';
import google from '../../../public/icons/google.png';
import facebook from '../../../public/icons/facebook.png';
import CadastroModal from '../cadastro/cadastro';

import '../login/login.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenCadastro, setIsOpenCadastro] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    if (!email.trim() || !password.trim()) {
      alert('Por favor, preencha todos os campos para fazer login.');
      return;
    }
  
    try {
      const response = await axios.post('/sessions', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      alert('Ocorreu um erro ao Logar. Por favor, tente novamente mais tarde.');
    }
  };

  const handleCadastroClick = () => {
    setIsOpenCadastro(true);
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content delay-[2000ms]" onClick={(e) => e.stopPropagation()}>
        <div className="bloco-login ml-10 mb-15">
          <h2 className="title-login font-bold">Login</h2>
          <p className="sub-info mt-8 mb-2">Email</p>
          <div className="custom-input-container">
            <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="text" className="custom-input" placeholder="Email" value={email} onChange={handleEmailChange} />
          </div>
          <p className="sub-info mt-2 mb-2">Senha</p>
          <div className="custom-input-container">
            <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
            <input type="password" className="custom-input" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            <div className="right-icon">
              <Image src={visible} alt="Icone" width={13.33} height={10.67} className="input-icon relative left-[60%]" />
            </div>
          </div>
          <button className="button-login border border-green-800 rounded-md hover:bg-green-800 duration-500 mt-10" onClick={handleLoginClick}>Login</button>
          <button className="button-cad border border-green-800 rounded-md duration-500 mt-2 hover:border-green-600 hover:text-green-600" onClick={handleCadastroClick}>Cadastre-se</button>
          <div className="flex items-center justify-center mt-2 mt-10 mr-12">
            <hr className="flex-grow border-t-1 border-black mr-2" />
            <p className="text-black text-sm">ou faça login</p>
            <hr className="flex-grow border-t-1 border-black ml-2" />
          </div>
          <div className="flex justify-center mt-2 mr-12">
            <button onClick={() => { /* lógica para lidar com o clique do Google */ }}>
              <Image src={google} alt="Google Icon" className="w-6 h-6 mr-4" />
            </button>
            <button onClick={() => { /* lógica para lidar com o clique do Facebook */ }}>
              <Image src={facebook} alt="Facebook Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpenCadastro && <CadastroModal isOpen={isOpenCadastro} onClose={() => setIsOpenCadastro(false)} />}
    </div>
  );
};

export default LoginModal;
