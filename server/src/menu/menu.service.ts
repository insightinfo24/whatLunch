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

  async changeExclude(id: number): Promise<Menu> {
    const changeMenu = await this.menuRepository.findOneBy({ id });
    changeMenu.isExclude = changeMenu.isExclude ? false : true;
    await this.menuRepository.save(changeMenu);
    return changeMenu;
  }

  async insert(menu: Menu) {
    return this.menuRepository.save(menu);
  }

  async update(id: number, contents: string) {
    const changeContents = await this.menuRepository.findOneBy({ id });
    changeContents.contents = contents;
    await this.menuRepository.save(changeContents);
  }

  async delete(id: number) {
    await this.menuRepository.delete(id);
  }
}
