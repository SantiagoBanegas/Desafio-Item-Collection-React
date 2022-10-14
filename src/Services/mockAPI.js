const data = [
    {
        id:1,
        tittle: "Libro Js",
        offer: true,
        price: 150,
        categoria: "nuevo",
        img: "https://http2.mlstatic.com/D_NQ_NP_920687-MLA31024027949_062019-O.webp",
        stock: 15,
        key:1,

        detail: "Guia completa para aprender JavasCript",
        autor:"Salvaggio",
        paginas: "Numero de paginas : 452"
    },

    {
        id:2,
        tittle: "Libro Js",
        price: 100,
        categoria: "usado",
        img:"https://http2.mlstatic.com/D_NQ_NP_653972-MLA30106327278_042019-O.webp",
        stock: 2,
        key:2,
        
        detail: "Guia completa para aprender JavasCript",
        autor:"Salvaggio",
        paginas: "Numero de paginas : 526"
    },

    {
        id:3,
        tittle: "Libro HTML-CSS-Js",
        price: 200,
        categoria: "nuevo",
        img:"https://images-na.ssl-images-amazon.com/images/I/41-0PQhm3iS._SY445_SX342_QL70_ML2_.jpg",
        stock: 10,
        key:3,

        detail: "Guia completa para aprender HTML-CSS-Js",
        autor:"Salvaggio",
        paginas: "Numero de paginas : 759"
    }
]

export default function getItems(){

    return new Promise((resolve, reject) => {
        
        setTimeout(( ) => {
            resolve(data)
        }, 2500);
    });

} 


export function getSinlgeItems(idItem){

    return new Promise((resolve, reject) => {
        
            let itemFind = data.find((item) => {
                return item.id === Number(idItem);
            });
            
            setTimeout(() =>{
            if (itemFind) resolve(itemFind);
            else reject(new Error("Item no encontrado"))},1500);
        });
} 

export function getItemsByCategoria(cat){

    return new Promise((resolve, reject) => {
        
        let itemFilter = data.filter((item) => {
            return item.categoria === cat;
        });
        // console.log("Encontramos:" ,itemFilter)
        if (itemFilter) resolve(itemFilter);
        else reject(new Error("Item no encontrado"));
    });
}
