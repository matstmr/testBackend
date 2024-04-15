import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Pays extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  nom: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continentCode: string;
}