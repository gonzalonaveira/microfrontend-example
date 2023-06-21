import {PRODUCT_API, PRODUCT_BY_CATEGORY} from '../env';

const productService = () => {
    const getAll = async () => {
        console.log('Products');
        const response = await fetch(PRODUCT_API)
        if (response.status !== 200) {
            return {
                status: response.status,
                message: response.statusText,
            }
        }

        return response.json();
    }

    const getAllByCategory = async (category) => {

        console.log(`Products by Category: ${category}`);
        const response = await fetch(PRODUCT_BY_CATEGORY(category))
        if (response.status !== 200) {
            return {
                status: response.status,
                message: response.statusText,
            }
        }

        return response.json();

    }

    return {
        getAll,
        getAllByCategory
    }
}
export default productService();