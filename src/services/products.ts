
async function getStaticPaths() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  const products = await response.json();

  return products.map((product) => ({
    params: { product: product.id.toString() },
  }));
}

const getProductDetails = async (id: string) => {
  try {
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getAllProducts = async () => {
  try {
    const url = `https://fakestoreapi.com/products/`;
    const response = await fetch(url);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export {getProductDetails, getStaticPaths, getAllProducts}