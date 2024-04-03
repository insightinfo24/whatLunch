import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/menu.entity';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'whatlunch',
      entities: [Menu],
      synchronize: true,
    }),
    MenuModule,
  ],
})
export class AppModule {}
