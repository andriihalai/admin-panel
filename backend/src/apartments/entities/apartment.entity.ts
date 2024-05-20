import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Factory } from 'nestjs-seeder';

@Entity()
export class Apartment {
  @Factory((faker) => faker.string.uuid())
  @PrimaryColumn()
  id: string;

  @Factory((faker) => faker.number.int({ min: 1, max: 5 }))
  @Column()
  rooms: number;

  @Factory((faker) => faker.lorem.words({ min: 1, max: 10 }))
  @Column()
  name: string;

  @Factory((faker) => faker.number.float({ min: 100, max: 5000 }))
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Factory((faker) => faker.lorem.words({ min: 1, max: 150 }))
  @Column()
  description: string;

  @BeforeInsert()
  generateId() {
    this.id = uuidv4();
  }
}
