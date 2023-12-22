import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const productos = [
    {
      id: "1",
      titulo: 'MONITOR GAMER 27"',
      descripcion: "descripcion de producto A",
      precio: 1000,
      category: "Monitores",
      imagen: "https://www.fullh4rd.com.ar/img/productos/18/monitor-gamer-27-aoc-gaming-g2790vx-fhd-144hz-1ms-0.jpg"
    },
    {
      id: "2",
      titulo: 'MONITOR CURVO 34"',
      descripcion: 'Monitor Gaming Curvo MOBIUZ 34"',
      precio: 2000,
      category: "Monitores",
      imagen: "https://image.benq.com/is/image/benqco/ex3410r-front?$ResponsivePreset$&fmt=png-alpha"
    },
    {
      id: "3",
      titulo: "TECLADO GAMER",
      descripcion: "Teclado Gamer EVGA Z12 RGB color membrane",
      precio: 30000,
      category: "Teclados",
      imagen: "https://www.fullh4rd.com.ar/img/productos/8/teclado-gamer-evga-z12-rgb-color-membrane-sp-0.jpg"
    },
    {
      id: "4",
      titulo: "TECLADO MECANICO",
      descripcion: "Teclado Mecanico Patriot viper v730 Led",
      precio: 56000,
      category: "Teclados",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_690478-MLA73322323828_122023-O.webp"
    },
    {
      id: "5",
      titulo: "TECLADO MECANICO",
      descripcion: "Teclado Mecanico Inalambrico POP KEYS Logitech",
      precio: 173000,
      category: "Teclados",
      imagen: "https://gpsmundo.com/Image/0/750_750-920-010713_1.png"
    },
    {
      id: "6",
      titulo: "TECLADO PARTIDO",
      descripcion: "Teclado Partido Inalambrico Logitech ERGO K860",
      precio: 27000,
      category: "Teclados",
      imagen: "https://gpsmundo.com/Image/0/700_700-920-009166.png"
    },
    {
      id: "7",
      titulo: "MOUSE ADATA XPG",
      descripcion: "Mouse Adata XPG primer rgb",
      precio: 42000,
      category: "Mouse",
      imagen: "https://www.fullh4rd.com.ar/img/productos/14/mouse-adata-xpg-primer-rgb-0.jpg"
    },
    {
      id: "8",
      titulo: "MOUSE GAMER",
      descripcion: "Mouse Gamer G502 HERO K/DA Logitech",
      precio: 103000,
      category: "Mouse",
      imagen: "https://gpsmundo.com/Image/0/700_700-910-006096.png"
    }
  ];

  const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
      ;
    } else {
      reject("No se obtuvieron productos");
    }
  })

  mostrarProductos
    .then((resultado) => {
      // console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    })

    const productosFiltrados = productos.filter((producto) => producto.category == categoryId)

    return (
      <div>
      {
        categoryId ? <ItemList productos={productosFiltrados}/> : <ItemList productos={productos}/>
      }
      </div>
    )
};

export default ItemListContainer;
