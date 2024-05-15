import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Apartment {
  @PrimaryColumn()
  id: string;

  @Column()
  rooms: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
