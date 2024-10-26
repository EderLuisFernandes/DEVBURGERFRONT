import { Container, Banner, Title, ProdutsContainer, CategoryMenu, CategoryButton } from './style'
import { Api } from '../../services/Api'
import { useState, useEffect } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { CardProduct } from '../../components/CardProduct'
import { useNavigate, useLocation } from 'react-router-dom'



export function Menu() {

    const [categories, setCategories] = useState([])
    const [products, setProduct] = useState([])
    const [filterRedProducts, setFilterRedProducts] = useState([])
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search)
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');

        if (categoryId) {
            return categoryId
        } else {
            return 0
        }

    })

    useEffect(() => {
        async function loadCategorie() {
            const { data } = await Api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];
            setCategories(newCategories)

        }

        async function loadProducts() {
            const { data } = await Api.get('/products')

            const newProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price), ...product,
            }));

            setProduct(newProducts)
        }

        loadCategorie();
        loadProducts();

    }, []);

    useEffect(() => {

        if (activeCategory === 0) {
            setFilterRedProducts(products)
        } else {
            const newFilterProducts = products.filter(product =>
                product.category_id === activeCategory
            )

            setFilterRedProducts(newFilterProducts)
        }

    }, [products, activeCategory])



    return <>
        <Container>

            <Banner>
                <h1>O MELHOR<br /> HAMBURGUER <br /> ESTA AQUI!
                    <span>Esse cardápio está irresistível!</span></h1>
            </Banner>

            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate({
                                pathname: '/Cardapio',
                                search: `?categoria=${category.id}`,

                            }, {
                                replace: true
                            },
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <Title>HAMBÚRGUERES - CARDÁPIO</Title>
            <ProdutsContainer>


                {filterRedProducts.map(product => (
                    <CardProduct product={product} key={product.id} />

                ))}


            </ProdutsContainer>

        </Container>
    </>
}