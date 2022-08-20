import { Injectable } from '@nestjs/common';

import { Product } from './../../entities/product.entity';

@Injectable()
export class ProductService {
  /**Aquí es donde conectamos los servicios con las BD. En este caso
  simularemos con un array de objetos JSON
  **/
  //incializando en 1
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  //Nota: El payload es como el cuerpo de los datos enviados
  create(payload: any) {
    //contador
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}

//todo: realizar actualizar y eliminar
