import React from 'react';
import { useFetchCurrency } from '../customHook/useFetchCurrency';

interface BlockProps {
	value: number;
	currency: any;
	onChangeValue: (value: number) => void;
	onChangeCurrency: React.Dispatch<React.SetStateAction<string>>;
}

const url =
	'https://v6.exchangerate-api.com/v6/2857749dfecf23aa3c2a4261/latest/USD';

export const Block: React.FC<BlockProps> = ({
	value,
	currency,
	onChangeValue,
	onChangeCurrency,
}) => {
	const { data } = useFetchCurrency({ url });

	return (
		<div className='block'>
			<input
				value={value}
				onChange={(e) => onChangeValue(+e.target.value)}
				type='number'
				placeholder={'0'}
			/>
			<select
				className='currencies'
				value={currency}
				onChange={(e) => onChangeCurrency(e.target.value)}
			>
				{Object.keys(data).map((cur: any) => (
					<option
						key={cur}
						className={currency === cur ? 'active' : ''}
						value={cur}
						onClick={() => onChangeCurrency(cur)}
					>
						{cur}
					</option>
				))}
			</select>
		</div>
	);
};
