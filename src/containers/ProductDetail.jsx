import React from 'react';
import ProductInfo from '@components/ProductInfo';
import close from '@icons/icon_close.png';
import Image from 'next/image';

import '@styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<Image src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
};

export default ProductDetail;
