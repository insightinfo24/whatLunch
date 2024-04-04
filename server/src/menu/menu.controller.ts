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

  @Get(':id')
  changeExclude(@Param('id') id: number): Promise<Menu> {
    return this.menuService.changeExclude(id);
  }

  @Post()
  insertMenu(@Body() menu: Menu) {
    return this.menuService.insert(menu);
  }

  @Patch()
  updateMenu(@Body('id') id: number, @Body('contents') contents: string) {
    return this.menuService.update(id, contents);
  }

  @Delete(':id')
  deleteMenu(@Param('id') id: number): Promise<void> {
    return this.menuService.delete(id);
  }
}
