const Lunchs = [
    {
        id: 1,
        cantidadPersonas: '6 Personas',
        productosLunch: '42 Sandwiches de Copetín (Jamón y queso / Surtidos) 12 Jesuitas 1/2 Kg de masas',
        precio: '$1733',
    }, 
    {
        id: 2,
        cantidadPersonas: '10 Personas',
        productosLunch: '48 Sandwiches de Copetín (Jamón y queso / Surtidos) 26 Jesuitas 26 Saladitos 3/4 Kg de masas',
        precio: '$2801',
    },
    {
        id: 3,
        cantidadPersonas: '15 Personas',
        productosLunch: '85 Sandwiches de Copetín (Jamón y queso / Surtidos) 35 Jesuitas 35 Saladitos 1 Kg de masas',
        precio: '$4400',
    },
    {
        id: 4,
        cantidadPersonas: '20 Personas',
        productosLunch: '96 Sandwiches de Copetín (Jamón y queso / Surtidos) 50 Jesuitas 50 Saladitos 1 Kg de masas',
        precio: '$5436',
    },
    {
        id: 5,
        cantidadPersonas: '25 Personas',
        productosLunch: '120 Sandwiches de Copetín (Jamón y queso / Surtidos) 50 Jesuitas 50 Saladitos 1 1/2 Kg de masas',
        precio: '$6375',
    },
    {
        id: 6,
        cantidadPersonas: '50 Personas',
        productosLunch: '250 Sandwiches de Copetín (Jamón y queso / Surtidos) 100 Jesuitas 100 Saladitos 100 Croquetitas 150 Empanaditas 1 Torta de 5Kg',
        precio: '$17096',
    }
]

 export const getLunchs = () => {
    return new Promise((resolve) => {
        resolve(Lunchs)
    })
}



const Products = [
    // // // SANDWICHES TRIANGULARES
    {
        id: 1,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Jamón y queso',
        precioUnidad: '28'
    },
    {
        id: 2,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Mixto',
        precioUnidad: '34'
    },
    {
        id: 3,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Olímpico',
        precioUnidad: '39'
    },
    {
        id: 4,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Olímpico de Pollo',
        precioUnidad: '41'
    },
    {
        id: 5,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Surtidos',
        precioUnidad: '29'
    },
    {
        id: 6,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Vegetariano',
        precioUnidad: '41'
    },
    {
        id: 7,
        categoria: 'Sandwiches Triangulares',
        nombre: 'Bondiola/Pavita/Lomito',
        precioUnidad: '44'
    },
    // // // SANDWICHES DE de Copetín
    {
        id: 8,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Jamón y queso',
        precioUnidad: '22'
    },
    {
        id: 9,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Mixtos',
        precioUnidad: '27'
    },
    {
        id: 10,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Olímpico',
        precioUnidad: '29'
    },
    {
        id: 11,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Olímpico de Pollo',
        precioUnidad: '37'
    },
    {
        id: 12,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Surtidos',
        precioUnidad: '26'
    },
    {
        id: 13,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Vegetariano',
        precioUnidad: '37'
    },
    {
        id: 14,
        categoria: 'Sandwiches de Copetín',
        nombre: 'Bondiola/Pavita/Lomito',
        precioUnidad: '39'
    },
    // // // BOCADITOS CALIENTES
    {
        id: 15,
        categoria: 'Bocaditos Calientes',
        nombre: 'Villaroy',
        precioUnidad: '28'
    },
    {
        id: 16,
        categoria: 'Bocaditos Calientes',
        nombre: 'Arrolladitos Primavera',
        precioUnidad: '33'
    },
    {
        id: 17,
        categoria: 'Bocaditos Calientes',
        nombre: 'Empanaditas (Carne/Jamón y queso/Pollo)',
        precioUnidad: '22'
    },
    {
        id: 18,
        categoria: 'Bocaditos Calientes',
        nombre: 'Coquetitas',
        precioUnidad: '28'
    },
    {
        id: 19,
        categoria: 'Bocaditos Calientes',
        nombre: 'Brochet de Pollo o carne (tamaño de Copetín)',
        precioUnidad: '44'
    },
    {
        id: 20,
        categoria: 'Bocaditos Calientes',
        nombre: 'Brochet de Pollo o Carne (tamaño Grande)',
        precioUnidad: '150'
    },
    // // // // SALADITOS
    {
        id: 21,
        categoria: 'Saladitos',
        nombre: 'Jesuitas Rellenos',
        precioUnidad: '30'
    },
    {
        id: 22,
        categoria: 'Saladitos',
        nombre: 'Jesuitas Sin Relleno',
        precioUnidad: '28'
    },
    {
        id: 23,
        categoria: 'Saladitos',
        nombre: 'Pastelitos de Hojaldre',
        precioUnidad: '22'
    },
    {
        id: 24,
        categoria: 'Saladitos',
        nombre: 'Pebetes Rellenos',
        precioUnidad: '16'
    },
    {
        id: 25,
        categoria: 'Saladitos',
        nombre: 'Pebetes Olímpicos',
        precioUnidad: '21'
    },
    {
        id: 26,
        categoria: 'Saladitos',
        nombre: 'Pebetes Olímpicos de Pollo',
        precioUnidad: '47'
    },
    {
        id: 27,
        categoria: 'Saladitos',
        nombre: 'Medialunitas de Jamón y queso',
        precioUnidad: '22'
    },
    {
        id: 28,
        categoria: 'Saladitos',
        nombre: 'Medialunitas Sin Relleno',
        precioUnidad: '15'
    },
    {
        id: 29,
        categoria: 'Saladitos',
        nombre: 'Medialunitas Olímpicas',
        precioUnidad: '28'
    },
    {
        id: 30,
        categoria: 'Saladitos',
        nombre: 'Medialunita de Pavita',
        precioUnidad: '23'
    },
    {
        id: 31,
        categoria: 'Saladitos',
        nombre: 'Briox de Jamón y Queso',
        precioUnidad: '22'
    },
    {
        id: 32,
        categoria: 'Saladitos',
        nombre: 'Briox Olímpico',
        precioUnidad: '24'
    },
    {
        id: 33,
        categoria: 'Saladitos',
        nombre: 'Briox Olímpico de Lomito',
        precioUnidad: '30'
    },
    {
        id: 34,
        categoria: 'Saladitos',
        nombre: 'Brochet de Champiñones',
        precioUnidad: '19'
    },

    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(Products)
    })
}