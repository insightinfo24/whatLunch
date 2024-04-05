import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/menu.entity';
import { MenuModule } from './menu/menu.module';
import { HistoryModule } from './menu/history.module';
import { History } from './menu/history.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'whatlunch',
      entities: [Menu, History],
      synchronize: true,
    }),
    MenuModule,
    HistoryModule,
  ],
})
export class AppModule {}
