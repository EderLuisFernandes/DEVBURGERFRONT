import { useEffect,useState, React } from "react";
import { Container,Menu,LinkMenu } from "./styles";
import { Api } from "../../../services/Api";
import formatDate from "../../../utils/formatDate";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';;
import { status } from "./order-status";
import { Row } from "./rows";

export function Orders (){
    const [orders, setOrders] = useState([])
    const [filterreOrders, setFilterreOrders] = useState([])
    const [statusActive, setStatusActive] = useState(1)
    const [rows, setRows] = useState([])


    useEffect(()=>{
        async function loadOrders() {
            const {data} = await Api.get('/orders')

                setOrders(data)
                setFilterreOrders(data)
            
        }
        loadOrders();
    },[]);

    function createData(order) {
      
        return {
          name:order.user.name,
          orderId: order._id,
          date:formatDate(order.createdAt),
          status: order.status,
          products: order.products
        };
      }

      useEffect(()=>{
        const newRows = filterreOrders.map(ord => createData(ord))
        setRows(newRows)
      },[filterreOrders])


      useEffect(()=>{

        if(statusActive === 1){
          setFilterreOrders(orders)
        }else{
        const statusIndex = status.findIndex(sts => sts.id === statusActive )
        const newFilterOrders = orders.filter(
           order => order.status === status[statusIndex].value )

        setFilterreOrders(newFilterOrders)}
      },[orders])


      function handleStatus(status){
        if(status.id === 1){
          setFilterreOrders(orders)
        }else{
          const newOrders = orders.filter(order => order.status === status.value)
          setFilterreOrders(newOrders)
        }
        setStatusActive(status.id)
      }
          return<>
        <Container>
          <Menu>
          {status && status.map(status => <LinkMenu key={status.id} onClick={ () => handleStatus(status)} isActiveStatus={statusActive === status.id} >{status.label}</LinkMenu>)}
          </Menu>
        <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow component="th">
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell >Cliente</TableCell>
            <TableCell >Data do pedido</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row 
            key={row.orderId} 
            row={row} 
            setOrders={setOrders} 
            orders={orders} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    </>

}