import { Module } from '@nestjs/common';
import { NatsSenderService } from './nats_sender.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        //nom du client
        name: 'NATS_SENDER',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        }
      },
    ]),
  ],
  providers: [NatsSenderService],
  exports: [NatsSenderService],
})
export class NatsSenderModule { }
