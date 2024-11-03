import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/income')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getAllIncomeReport() {
    return [];
  }

  @Post()
  createIncomeReport() {
    return [];
  }

  @Put(':id')
  updateIncomeReport() {
    return [];
  }

  @Delete(':id')
  deleteIncomeReport() {
    return [];
  }

}
