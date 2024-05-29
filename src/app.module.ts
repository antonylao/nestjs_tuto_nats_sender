import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsSenderModule, NatsSenderService } from '@app/nats_sender';

@Module({
  imports: [
    //on crée une libraire avec nest generate library nats_sender, et on l'importe ici
    NatsSenderModule,
    //* plus besoin de ca vu qu on a importé NatsSenderModule
    // ClientsModule.register([
    //   {
    //     //nom du client
    //     name: 'NATS_SENDER',
    //     transport: Transport.NATS,
    //     options: {
    //       servers: ['nats://localhost:4222'],
    //     }
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
