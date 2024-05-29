import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NatsSenderService } from '@app/nats_sender';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

    //* sans la librairie: permet de se servir du client
    // @Inject("NATS_SENDER")
    // private readonly nats: ClientProxy,
    private natsSenderService: NatsSenderService
  ) { }

  @Get()
  // envoi un message sans attendre de reponse
  // - test est le sujet defini dans ms-main: chat controller
  getHello(): any {
    this.natsSenderService.emit("test", { message: "coucou", message2: "ici" })
    return { message: "je n'attends pas de retour avec la fonction emit" }
    //* sans la librairie
    // return this.nats.emit("test", { message: "coucou", message2: "ici" })
  }

  @Post()
  async getHelloSend() {
    //la réponse qu on obtient est un peu comme une promesse, mais pas vraiment parce que async await ne fait rien
    // - dans ce cas, on ne peut pas interagir avec l'objet avec `res.winner = ...`
    //solution: firstValueFrom permet d'interagir avec l'objet res
    const res: any = await this.natsSenderService.send("test", { message: "j attends un retour" })
    //* sans la librairie
    // const res: any = await firstValueFrom(
    //   this.nats.send("test", { message: "j attends un retour" })
    // )
    console.log("🚀 ~ AppController ~ getHelloSend ~ res:", res)
    res.winner = "new winner"
    return res
  }
}
