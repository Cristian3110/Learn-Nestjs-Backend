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

  //todo: realizar actualizar y eliminar
}
