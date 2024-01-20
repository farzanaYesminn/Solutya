const BASE_URL = 'http://localhost:3000';

export const signUp = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();

        localStorage.setItem('token', data.token);

        return data;
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await fetch(`${BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });

        if (response.ok) {
            localStorage.removeItem('token');
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

    } catch (error) {
        console.error('Error logging out:', error.message);
        throw error;
    }
};

export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
};

export const addProduct = async (productData) => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding product:', error.message);
        throw error;
    }
};

export const updateProduct = async (productId, productData) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(productData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating product:', error.message);
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting product:', error.message);
        throw error;
    }
};