import { useEffect, useState, useRef } from 'react';

export const useFetchCurrency = ({ url }: any) => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(true as boolean);
	const [error, setError] = useState('' as string);

	const countsRef = useRef<HTMLElement | any>(0);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((response) => {
				countsRef.current = response.conversion_rates;
				setData(response.conversion_rates);
				setError(response.error);
				setLoading(false);
			});
	}, [url]);

	return { data, countsRef, loading, error };
};
