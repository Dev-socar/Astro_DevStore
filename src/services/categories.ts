async function getStaticPaths() {
  const url = "https://fakestoreapi.com/products/categories";
  const response = await fetch(url);
  const categories = await response.json();

  return categories.map((category) => ({
    params: { category: category.replace(/\s+/g, "-") },
  }));
}

const getCategories = async () => {
  try {
    const url = "https://fakestoreapi.com/products/categories";
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getProductsByCategory = async (category: string) => {
  try {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const response = await fetch(url);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const iconCategory = {
  electronics: "icons/electronics.svg",
  jewelery: "icons/jewelery.svg",
  "men's clothing": "icons/men.svg",
  "women's clothing": "icons/women.svg",
};

export {iconCategory, getStaticPaths,getCategories, getProductsByCategory};
