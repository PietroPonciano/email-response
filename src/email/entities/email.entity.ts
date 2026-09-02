import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('emails')
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  messageId: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  subject: string;

  @Column('text')
  body: string;

  @Column({default: 'received'})
  status: string;

  @CreateDateColumn()
  receivedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  createdAt: Date | null;
}