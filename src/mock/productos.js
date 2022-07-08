export const productos = [
    {
        id: 1,
        title: 'Remera Gris',
        price: 2000,
        stock: 4,

        image: 'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf78.png',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 2,
        title: 'Remera Seleccion Argentina',
        price: 2200,
        stock: 10,

        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/440/495/products/argentina-vamos-argentina-adelante1-03d5fe4c7350410db815922346590160-640-0.png',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 3,
        title: 'Remera Gris clara',
        price: 1800,
        stock: 10,

        image: 'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf77.png',
        category: 'remeras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 4,
        title: 'Camisa Celeste',
        price: 5000,
        stock: 4,

        image: 'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bf59.png',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 5,
        title: 'Camisa Oscura',
        price: 4800,
        stock: 4,

        image: 'https://assets.stickpng.com/images/580b57fbd9996e24bc43bf55.png',
        category: 'camisas',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 6,
        title: 'Gorra Roja',
        price: 300,
        stock: 20,

        image: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra1C_r0cz4b.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
    {
        id: 7,
        title: 'Gorra Azul',
        price: 300,
        stock: 5,

        image: 'https://res.cloudinary.com/ericwaje/image/upload/v1619372706/gorra4C_nyvjj6.jpg',
        category: 'gorras',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

];


//atento con esto
export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        //filter devuelve objeto
        const productosFiltrados = productos.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 1000);
    });
};

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        //find objeto
        const IdentificarProducto = productos.find(
            (prod)=> prod.id === Number(id)
        )
        //estoy comparando stream con number
        setTimeout(() => {
            resolve(IdentificarProducto);
        }, 1000);
    });
};