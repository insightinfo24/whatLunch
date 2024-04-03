import { Menu } from './menu.entity';
import { MenuService } from './menu.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Patch(':id')
  changeExclude(@Param() id: number): Promise<void> {
    return this.menuService.changeExclude(id);
  }

  @Post()
  insertMenu(@Body() menu: Menu) {
    console.log(menu);
    return this.menuService.insert(menu);
  }

  @Delete(':id')
  deleteMenu(@Param() id: number): Promise<void> {
    return this.menuService.delete(id);
  }
}
