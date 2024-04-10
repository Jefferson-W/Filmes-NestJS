import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    const obj = {
      nome: 'caio',
      idade: 1,
    };
    return obj;
  }
}
