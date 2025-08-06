import { Global, Module, Logger } from '@nestjs/common';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('DatabseModule');
        const uri = configService.get<string>('dbUri');
        if (!uri) {
          throw new Error('Database Uri is not defined in the env file ');
        }
        try {
          await mongoose.connect(uri);
          logger.log('Databse connected successfully');
        } catch (error) {
          logger.error('Failed to connect to database', error);
        }
        mongoose.connection.once('disconnected', () => {
          logger.warn('Database disconnected');
        });
        return { uri };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabseModule {}
