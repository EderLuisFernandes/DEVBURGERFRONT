import { Container ,Img,EditIcons,Check,TableContaineres,Pesquisa} from "./styles"
import { useEffect, useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import { paths } from "../../../constants/path";
import Lupa from '../../../assets/lupa.png'

// import SearchIcon from '@mui/icons-material/Search';

import { formatPrice } from "../../../utils/formatPrice";

import { Api } from "../../../services/Api";

export function ListProduts(){

 const [products, setProducts] = useState([])
 const [buscarProdutos, setBuscarProdutos] = useState(' ')
 const navigate = useNavigate()

    useEffect(()=>{
        async function loadOrders() {
            const {data} = await Api.get('/products')

            setProducts(data)
            
        }
        loadOrders();
    },[]);

    function editarproduto(products){
      navigate(paths.EditProduct,{state:{products}})
    }

    function buscarProdutoss(event){
      setBuscarProdutos(event.target.value)
      console.log(setBuscarProdutos)
    }
    const productss = products.filter(product =>product.name.toLowerCase().includes(buscarProdutos.toLowerCase()))
     
return<>
    <Container>
    <Pesquisa>
      <input 
      type="search" 
      placeholder="Pesquisar produto" 
      onChange={buscarProdutoss}
      />
      <button   onClick={ () =>setBuscarProdutos(buscarProdutos)}>
     <img src={Lupa} alt='pesquisa'/>   
      </button>
      
    </Pesquisa>

    <div>
    <TableContaineres component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow className="header">
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align ="center" >Produto em ofertas</TableCell>
            <TableCell align ="center" >imagem do Produtos</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productss &&productss.map((products) => (
            <TableRow
              key={products.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {products.name}
              </TableCell>
              <TableCell >{formatPrice(products.price)}</TableCell>
              <TableCell align ="center" >{products.offer}
              <Check
               checked={products.offer === true}
               sx={{
                color: products.offer ? '#0e921b' : '#bebebe', 
                '&.Mui-checked': {
                  color: '#0e921b',
                },
              }}
               offer={true}
               />
              </TableCell>
              <TableCell align ="center"  ><Img src={products.url} alt='imagem-produtos'/></TableCell>
              <TableCell align ="center"><EditIcons onClick={()=> editarproduto(products)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContaineres>
    </div>
    </Container>
</>

}