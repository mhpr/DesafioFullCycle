import { Get, Controller, Body, Post } from '@nestjs/common';
import { Transaction } from './transactions.entity';
import { TransactionService } from './transactions.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  getTransactions(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }

  @Post()
  async create(@Body() entitytData: Transaction): Promise<any> {
    return this.transactionService.create(entitytData);
  }
}
