import { Comment } from './entities/comment.entity';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Task } from './entities/task.entity';
import { config } from 'dotenv';

config({ path: '.env' });

export const AppDataSource = new DataSource({
  type: 'mysql', // MySQL の場合
  host: process.env.DB_HOST, // docker-compose.yml で指定したコンテナの service 名
  port: 3306, // ポート番号
  username: process.env.DB_USERNAME, // docker-compose.yml の MYSQL_USER
  password: process.env.DB_PASSWORD, // docker-compose.yml の MYSQL_PASSWORD
  database: process.env.DB_DATABASE, // docker-compose.yml の MYSQL_DATABASE
  logging: true, // コンソール画面に実行したSQLが表示される
  synchronize: false, // true にすると migration が自動で実行されます。
  entities: [Comment, User, Task], // エンティティクラスを指定する（複数の場合はカンマで区切る）
  migrations: ['dist/migration/*.js'], // dist ディレクトリ内の js ファイルを指定する
});
