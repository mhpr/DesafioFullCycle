import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transactions.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }

  async create(entity: Transaction): Promise<Transaction> {
    return await this.transactionRepository.save(entity);
  }

  async findById(id: number): Promise<Transaction> {
    const result = await this.transactionRepository.find({ where: { id: id } });
    return result[0];
  }
}
