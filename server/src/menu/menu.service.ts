import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private menuRepository: Repository<Menu>,
  ) {}

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(id: number): Promise<Menu> {
    return this.menuRepository.findOne({ where: { id } });
  }

  async changeExclude(id: number) {
    const changeMenu = await this.menuRepository.findOne({
      where: { id: id },
    });
    console.log(id, changeMenu);
    changeMenu.isExclude = changeMenu.isExclude ? false : true;
    await this.menuRepository.save(changeMenu);
  }

  async insert(menu: Menu) {
    return this.menuRepository.save(menu);
  }

  async delete(id: number) {
    await this.menuRepository.delete(id);
  }
}
