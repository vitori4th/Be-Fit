import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import '../esqueciSenha/esqueciSenha.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Defina o esquema de validação para recuperação de senha
const EsqueciSenhaSchema = z.object({
  email: z.string().email("Email inválido"),

})

type EsqueciSenhaSchema = z.infer<typeof EsqueciSenhaSchema>;

interface EsqueciSenhaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EsqueciSenhaModal: React.FC<EsqueciSenhaModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EsqueciSenhaSchema>({
    resolver: zodResolver(EsqueciSenhaSchema)
  });

  const handleRecuperarSenha = async (data: EsqueciSenhaSchema) => {
    try {
      console.log('emailll', data)
      toast.success("Email enviado!");
      const response = await axios.post('http://localhost:3333/password/forgot', {
        email: data.email,
      });
      // if (response.status === 200) {
      // } else {
      //   toast.error("Ocorreu um erro ao tentar enviar o email.");
      // }
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      // toast.error("Ocorreu um erro ao tentar alterar a senha.");
      // console.error(error);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <ToastContainer containerId={"forgotPassword"} />

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col justify-center items-center w-full max-w-md p-8">
          <h2 className="title-cad font-bold">Esqueci minha Senha</h2>
          <p className='text-center mx-auto p-text'>Insira o seu e-mail de cadastro que enviaremos o link para redefinição da sua senha.</p>
          <form onSubmit={handleSubmit(handleRecuperarSenha)}>
            <p className="sub-info mb-2">Email</p>
            <div className="custom-input-container">
              <Image src={mail} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input
                type="text"
                className="custom-input flex items-center"
                placeholder="Email"
                id='emailRecoveryPass'
                {...register('email')}
              />
            </div>
            {errors.email && <span className='sub-info w-full flex justify-start text-red-700'>{errors.email.message}</span>}
            <button
              className="button-login border border-green-800 rounded-md duration-500 mt-5 hover:border-green-600 hover:text-green-600"
              disabled={isSubmitting}
              type='submit'
              id='submitEmailRecovery'
            >
              Enviar
            </button>
          </form>
          <button className="button-return rounded-md hover:bg-gray-400 duration-500 mt-2" onClick={onClose}>Voltar</button>
        </div>

      </div>
    </div>
  );
};

export default EsqueciSenhaModal;
