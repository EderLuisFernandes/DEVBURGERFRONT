import { Container, Label, Input, ButtonStyle, LabelUpload, ReactSelects,ContainerInput } from './styles'
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import LogoImg from '../../../assets/logoimg.png';
import { Api } from "../../../services/Api";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Erros } from '../../Errors/index';
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from 'react-router-dom';


export function EditProduct() {

    const [fileName, setFileName] = useState(null)
    const [categorires, setCategorires] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const {products} = location.state

    console.log(products)

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o Nome do Produto'),
        price: Yup.string().required('Digite o Valor do Produto'),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool()

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
        registroProductFormData.append('offer', data.offer)
        await toast.promise(Api.put(`/products/${products.id}`, registroProductFormData),{
            pending: 'Editando novo produto...',
            success: 'Produto Editado com Sucesso',
            error:   'Falha ao Editar o produto'
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
                <Input type='text' {...register('name')} defaultValue={products.name}/>
                <Erros>{errors.name?.message}</Erros>
                <Label>Preço</Label>
                <Input type='number' {...register('price')} defaultValue={products.price}/>
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
                    defaultValue={products.category}
                    control={control}
                    render={({ field }) => {
                        return <>
                            <ReactSelects
                                {...field}
                                options={categorires}
                                getOptionLabel={cat => cat.name}
                                getOptionValue={categori_id => categori_id.id}
                                placeholder=""
                                defaultValue={products.category}
                            />
                        </>
                    }}
                >

                </Controller>
                <Erros>{errors.category?.message}</Erros>
                <ContainerInput>
                  <input type='checkbox' {...register('offer')} defaultChecked={products.offer} /> 
                  <p>Produtos em Ofertas?</p> 
                </ContainerInput>
                
                <ButtonStyle>Editar produto</ButtonStyle>
            </form>
        </Container>
    </>

}