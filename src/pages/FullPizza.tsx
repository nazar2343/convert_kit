import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string;
		title: string;
		price: number;
	}>();
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					'https://626d16545267c14d5677d9c2.mockapi.io/items/' + id
				);
				setPizza(data);
			} catch (error) {
				alert('Помилка при полученні сторінки');
				navigate('/');
			}
		}
		fetchPizza();
	}, []);

	if (!pizza) {
		return <>Загрузка...</>;
	}

	return (
		<div className='container'>
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} UAH</h4>
			<Link to='/'>
				<button className='button button--outline button--add'>
					<span>Назад</span>
				</button>
			</Link>
		</div>
	);
};

export default FullPizza;
