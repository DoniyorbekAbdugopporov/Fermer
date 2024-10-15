import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { AuthModule } from './auth/auth.module';
import { WorkersModule } from './workers/workers.module';
import { Worker } from './workers/entities/worker.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { WorkerRoleModule } from './worker_role/worker_role.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Admin, Worker, Role],
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
    }),
    AdminModule,
    AuthModule,
    WorkersModule,
    RolesModule,
    WorkerRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
