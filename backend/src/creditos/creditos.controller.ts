// src/creditos/creditos.controller.ts
import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CreditosService } from './creditos.service';

@Controller('creditos')
export class CreditosController {
  constructor(private creditosService: CreditosService) {}

  @Get()
  getAllCreditos() {
    return this.creditosService.getAllCreditos();
  }

  @Post()
  createCredito() {
    return this.creditosService.createCredito();
  }

  @Put(':id')
  updateCredito() {
    return this.creditosService.updateCredito();
  }

  @Delete(':id')
  deleteCredito() {
    return this.creditosService.deleteCredito();
  }
}
