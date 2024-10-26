import Logo from '../../assets/Logo1.svg'
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Api } from '../../services/Api';

import {
  Container,
  FormContainer,
  Form,
  Input,
  SocialIcons,
  ToggleContainer,
  TogglePanel,
  Toggle,
  Link,
  Body
} from './styles';

import { Button } from '../../components/Button';
import { Erros } from '../../components';

export function Cadastro() {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object({
    name: yup.string().required('O nome é Obrigatorio'),
    email: yup.string().email('email invalido').required('email invalido'),
    password: yup.string().min(6, 'Senha com no minimo 6 caracteres').required(),
    confirmPassword: yup.string().required('senha deve ser igual').oneOf([yup.ref('password')], 'as senhas devem ser iguais').required(),

  }).required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
 const navigate = useNavigate()
  const onSubmit = async (data) => {
    try {
      const {status} = await Api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        validateStatus: () => true,
      }
    );
      if(status === 200 || status === 201){
        setTimeout(() => {
          navigate('/Login')
        }, 3000);
        toast.success('Conta Criada');
      }
      else if(status === 400){
        toast.error('Email cadastrado! Faça login')
      }
      else{
        throw new Error();
      }

    }catch(error) {
      toast.error('Falha no Sistema')
      };
  };
  function telaInicial(){
    navigate('/')
  }
    return (
      <Body>
         <button className='btn' onClick={telaInicial} >Voltar Para Home</button>
      <Container >

        <ToggleContainer>
          <Toggle>
            <TogglePanel >
              <img src={Logo} alt="" />
              <p>Já possui conta? Login.</p>
              <Link to='/Login' >Login</Link>
            </TogglePanel>
          </Toggle>
        </ToggleContainer>

        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastrar</h2>
            <SocialIcons>
              <a href="#"><FaGooglePlusG fontSize={24} /></a>
              <a href="#"><FaFacebookF fontSize={24} /></a>
              <a href="#"><FaGithub fontSize={24} /></a>
              <a href="#"><FaLinkedinIn fontSize={24} /></a>
            </SocialIcons>
            <Input {...register("name")} type="text" placeholder="Name" />
            <Erros>{errors.name?.message}</Erros>

            <Input {...register("email")} type="email" placeholder="Email" />
            <Erros>{errors.email?.message}</Erros>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
              <Input {...register("password")} type={showPassword ? 'text' : 'password'} placeholder="Senha" />
              <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: 10, cursor: 'pointer', color: 'rgba(151, 88, 166, 1)' }}>
                {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Ícone de visualização */}
              </span>
            </div>
            <Erros>{errors.password?.message}</Erros>

            <Input {...register("confirmPassword")} type="password" placeholder="Confirme a Senha" />
            <Erros>{errors.confirmPassword?.message}</Erros>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </FormContainer>
      </Container>
      </Body>
    );
  

}


