import Logo from '../../assets/Logo1.svg'
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn,FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Api } from '../../services/Api';
import { useNavigate } from 'react-router-dom';

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

import { useUser } from '../../hooks/UserContext';

import { Button,Erros } from '../../components';


export function Login() {
   const {putUserData} = useUser();
   const navigate = useNavigate();

  const [VerPassword, setVerPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setVerPassword(!VerPassword);
  };




  const schema = yup.object({
    email: yup.string().email('email invalido').required('email invalido'),
    password: yup.string().min(6, 'Senha com no minimo 6 caracteres').required(),
  }).required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
   const {data: userData} = await toast.promise(
     Api.post('/session', {
      email: data.email,
      password: data.password
    }),
    {
      pending:'Verificando seus dados',
      success: { render(){
        setTimeout(() => {
          if(userData.admin){
            navigate('/pedidos')
          }else{
            navigate('/Home')
          }
          
        }, 2000);
        return 'Seja Bem-vindo(a)'
      },
      
   },
   error:'Email ou senha esta Incorreto'
  }
  
  )
    putUserData(userData)
  
  };


function telaInicial(){
  navigate('/')
}

  return (
    <Body>
      <button className='btn' onClick={telaInicial} >Voltar Para Home</button>
      <Container>
    
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <SocialIcons>
            <a href="#"><FaGooglePlusG fontSize={24} /></a>
            <a href="#"><FaFacebookF fontSize={24} /></a>
            <a href="#"><FaGithub fontSize={24} /></a>
            <a href="#"><FaLinkedinIn fontSize={24} /></a>
          </SocialIcons>
          <Input {...register("email")} type="email" placeholder="Email" />

          <Erros>{errors.email?.message}</Erros>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width:'100%' }}>
            <Input {...register("password")} type={VerPassword ? 'text' : 'password'} placeholder="Senha" />
          <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: 10, cursor: 'pointer', color: 'rgba(151, 88, 166, 1)' }}>
              {VerPassword ?  <FaEye /> :<FaEyeSlash /> } {/* Ícone de visualização */}
            </span>
          </div>

          <Erros>{errors.password?.message}</Erros>
          <a href="#">Esqueceu sua senha?</a>
          <Button type="submit">Login</Button>
        </Form>

      </FormContainer>
      <ToggleContainer>
        <Toggle>
          <TogglePanel>
            <img src={Logo} alt="" />
            <p>Não possui conta? Cadastre-se.</p>
            <Link to ="/Cadastro">Cadastrar</Link>
          </TogglePanel>
        </Toggle>
      </ToggleContainer>
    </Container>
    </Body>
  );
}


