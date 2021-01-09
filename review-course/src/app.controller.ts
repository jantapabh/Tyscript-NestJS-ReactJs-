import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//App controller เรียก app service แล้วใน app service มี getHello ที่แสดงข้อความว่า Hello world
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
