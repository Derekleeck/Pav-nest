import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get(process.env.DB_HOST),
      port: this.configService.get<number>(process.env.DB_PORT),
      username: this.configService.get(process.env.DB_USERNAME),
      password: this.configService.get(process.env.DB_PASSWORD),
      database: this.configService.get(process.env.DB_DATABASE),
      entities: [User], // Include the User entity class here
      synchronize: true,
    };
  }
}
