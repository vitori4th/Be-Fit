import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mail from '../../../public/icons/mail.png';
import pass from '../../../public/icons/pass.png';
import './recuperarSenha.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import UserService from '@/app/services/userService';
import api from '@/app/utils/api';
import { useSearchParams } from 'next/navigation';

// Defina o esquema de validação para recuperação de senha
const recuperarSenhaSchema = z.object({
  newPassword: z.string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .nonempty("Senha é obrigatória"),
  confirmPassword: z.string()
    .nonempty("Confirmação de senha é obrigatória")
})
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"]
  });

type RecuperarSenhaSchema = z.infer<typeof recuperarSenhaSchema>;

interface RecuperarSenhaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecuperarSenhaModal: React.FC<RecuperarSenhaModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecuperarSenhaSchema>({
    resolver: zodResolver(recuperarSenhaSchema)
  });

  const userServiceH = new UserService(api);
  const searchParams = useSearchParams()

  const tokenRecovery = searchParams.get("recovery")

  const handleRecuperarSenha = async (data: RecuperarSenhaSchema) => {
    try {
      if (tokenRecovery) {
        const response = await userServiceH.recoveryPassword(
          tokenRecovery,
          data.newPassword,
          data.confirmPassword
        );

        if (response) {
          toast.success("Senha Atualizada com Sucesso!");
          setTimeout(() => {
            onClose();
          }, 5000);
        } else {
          toast.error("Ocorreu um Erro ao Atualizar a senha.");
        }
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar alterar a senha.");
      console.error(error);
    }
  };

  return (
    <div className={`modal-bg modal-overlay ${isOpen ? 'active' : ''}`} >
      <ToastContainer containerId={"recoveryPassword"} />

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="title-cad font-bold">Redefinir Senha</h2>
          <form onSubmit={handleSubmit(handleRecuperarSenha)}>

            <p className="sub-info mt-2 mb-2">Nova Senha</p>
            <div className="custom-input-container">
              <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input
                type="password"
                className="custom-input flex items-center"
                placeholder="Nova Senha"
                {...register('newPassword')}
              />
            </div>
            {errors.newPassword && <span className='sub-info w-full flex justify-start text-red-700'>{errors.newPassword.message}</span>}

            <p className="sub-info mt-2 mb-2">Confirmar Nova Senha</p>
            <div className="custom-input-container">
              <Image src={pass} alt="Icone" width={13.33} height={10.67} className="input-icon" />
              <input
                type="password"
                className="custom-input flex items-center"
                placeholder="Confirmar Nova Senha"
                {...register('confirmPassword')}
              />
            </div>
            {errors.confirmPassword && <span className='sub-info w-full flex justify-start text-red-700'>{errors.confirmPassword.message}</span>}

            <button
              className="button-login border border-green-800 rounded-md duration-500 mt-5 hover:border-green-600 hover:text-green-600"
              disabled={isSubmitting}
              type='submit'
            >
              Alterar Senha
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenhaModal;
