import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsIn, IsNumber } from 'class-validator';

export enum Type {
  DEBIT = 'debit',
  CREDIT = 'credit',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'Type cannot be empty' })
  @IsIn([Type.CREDIT, Type.DEBIT])
  @Column({
    type: 'simple-enum',
    enum: Type,
  })
  type: string;

  @IsNotEmpty({ message: 'Amount cannot be empty' })
  @IsNumber()
  @Column()
  amount: number;
}
