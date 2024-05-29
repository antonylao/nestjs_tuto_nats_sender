import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NatsSenderService {
  constructor(
    @Inject("NATS_SENDER")
    private readonly nats: ClientProxy
  ) { }

  emit(pattern: string, data: any): void {
    this.nats.emit(pattern, data)
  }

  async send(pattern: string, data: any): Promise<any> {
    return await firstValueFrom(
      this.nats.send(pattern, data)
    )
  }

}
