import { Container, Label, Input, ButtonStyle, LabelUpload, ReactSelects } from './styles'
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import LogoImg from '../../../assets/logoimg.png';
import { Api } from "../../../services/Api";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Erros } from '../../Errors/index';
import { toast } from 'react-toastify';
import { useNavigate, } from 'react-router-dom';

export function CadastrarProducts() {
    const [fileName, setFileName] = useState(null)
    const [categorires, setCategorires] = useState([])
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Nome do Produto'),
        price: Yup.string().required('Digite o Valor do Produto'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('requiered', 'Carregue um arquivo', value => {
            return value && value.length > 0
        }).test('fileSize', 'Carregue arquivo de ate 6MB',
            value => {
                return value && value[0]?.size <= 6 * 1024 * 1024;
            }),

    })

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });




    const onSubmit = async data => {
        const registroProductFormData = new FormData()

        registroProductFormData.append('name', data.name)
        registroProductFormData.append('price', data.price)

        registroProductFormData.append('category_id', data.category.id)
        registroProductFormData.append('file', data.file[0])
        await toast.promise(Api.post('/products', registroProductFormData),{
            pending: 'Criando novo produto...',
            success: 'Produto criado com Sucesso',
            error:   'Falha ao criar o produto'
        })
        

        setTimeout(()=>{
            navigate('/lista-produtos')
        },2000)
    }

    useEffect(() => {
        async function loadCategorires() {
            const { data } = await Api.get('/categories')

            console.log(data)
            setCategorires(data)

        }
        loadCategorires();
    }, []);



    return <>

        <Container>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <Input type='text' {...register('name')} />
                <Erros>{errors.name?.message}</Erros>
                <Label>Preço</Label>
                <Input type='number' {...register('price')} />
                <Erros>{errors.price?.message}</Erros>
                <LabelUpload>

                    {fileName ? fileName : <>
                        <div><img src={LogoImg} alt="" /></div> Carregue a imagem do produto </>}

                    <input
                        type="file"
                        accept='image/png, image/jpeg'
                        {...register('file')}
                        onChange={value => { setFileName(value.target.files[0]?.name) }}
                    />
                </LabelUpload>
                <Erros>{errors.file?.message}</Erros>


                <Label>Categoria</Label>
                <Controller
                    name='category'
                    control={control}
                    render={({ field }) => {
                        return <>
                            <ReactSelects
                                {...field}
                                options={categorires}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={categori_id => categori_id.id}
                                placeholder=""
                            />
                        </>
                    }}
                >

                </Controller>
                <Erros>{errors.category?.message}</Erros>
                <ButtonStyle>Adicionar produtos</ButtonStyle>
            </form>
        </Container>
    </>

}