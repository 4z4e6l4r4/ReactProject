import React, {useState} from "react";
//Ürün ekle, sil, güncelle fonks. ürün adı, kategorisi, açıklaması, fiyatı, resim

function App() {
    const [ProductList, setProductList] = useState([]);
    const [ProductName, setProductName] = useState("");
    const [ProductCategory, setProductCategory] = useState("");
    const [ProductDescription, setProductDescription] = useState("");
    const [ProductPrice, setProductPrice] = useState(0);

    const AddProduct = () => {
        setProductList([...ProductList, {
            ProductName,
            ProductCategory,
            ProductDescription,
            ProductPrice
        }]);

        setProductName("");
        setProductCategory("");
        setProductDescription("");
        setProductPrice("");
    };

    const deleteProduct = (index) => {
    const NewProductList = ProductList.filter((productItem, indexItem) => index !== indexItem);
        setProductList(NewProductList);
    }
    
    const updateProduct = (item, index) => {
        setProductName(item.ProductName);
        setProductCategory(item.ProductCategory);
        setProductDescription(item.ProductDescription);
        setProductPrice(item.ProductPrice);

        deleteProduct(index);
    }

  return (
    <div className="App">
        <h1>Product List</h1>
        <br/>
        <input type="text" value={ProductName} onChange={(e) => setProductName(e.target.value)} placeholder="Name"/>
        <input type="text" value={ProductCategory}  onChange={(e) => setProductCategory(e.target.value)} placeholder="Category"/>
        <input type="text" value={ProductDescription}  onChange={(e) => setProductDescription(e.target.value)} placeholder="Description"/>
        <input type="text" value={ProductPrice}  onChange={(e) => setProductPrice(e.target.value)} placeholder="Price"/>
        <button className="addBtn" onClick={AddProduct}>Add Product</button>

        <ul className="list">
        {ProductList.map((item,index) => (
            <li key={index}>
                {item.ProductName}&nbsp;
                {item.ProductCategory}&nbsp;
                {item.ProductDescription}&nbsp;
                {item.ProductPrice}&nbsp;
                <button className="deleteBtn" onClick={() => deleteProduct(index)}>Delete</button>
                <button className="updateBtn" onClick={() => updateProduct(item, index)}>Update</button>
            </li>
        ) )                
                }
        </ul>

    </div>
  );
}

export default App;
