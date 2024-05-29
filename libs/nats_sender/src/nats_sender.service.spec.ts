import { NatsSenderService } from './nats_sender.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NatsSenderService', () => {
  let service: NatsSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NatsSenderService],
    }).compile();

    service = module.get<NatsSenderService>(NatsSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
