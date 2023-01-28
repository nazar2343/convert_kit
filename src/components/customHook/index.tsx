import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { getCurrency } from '../reduxToolkit/reduxSlice/currencySlice';

export const useFetch = ({ url }: any) => {
	// const [usd, setUsd] = useState(0 as number);
	// const [gbp, setGbp] = useState(0 as number);
	// const [eur, setEur] = useState(0 as number);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true as boolean);
	const [error, setError] = useState('' as string);

	const dispatch = useAppDispatch();

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setError(data.error);
				dispatch(getCurrency(data));
				setLoading(false);
			});
	}, [url]);

	return { data, loading, error };
};
