import { Body, Controller, Get, Post } from '@nestjs/common';
import { History } from './history.entity';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  findAll(): Promise<History[]> {
    return this.historyService.findAll();
  }

  @Post()
  insertHistory(@Body() history: History) {
    return this.historyService.insert(history);
  }
}
