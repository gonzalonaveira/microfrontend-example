import {PRODUCT_CATEGORY_API} from '../env';

const productCategoryService = () => {
    const getAll = async () => {
        console.log('Product Category');
        const response = await fetch(PRODUCT_CATEGORY_API)
        if (response.status !== 200) {
            return {
                status: response.status,
                message: response.statusText,
            }
        }

        return response.json();
    }

    return {
        getAll
    }
}
export default productCategoryService();