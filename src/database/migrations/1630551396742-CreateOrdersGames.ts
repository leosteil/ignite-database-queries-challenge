import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdersGames1630551396742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders_games",
          columns: [
            {
              name: "game_id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "order_id",
              type: "uuid",
              isPrimary: true,
            },
          ],
          foreignKeys: [
            {
                columnNames: ['game_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'games',
            },
            {
                columnNames: ['order_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'order',
            },
        ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres_games");
    }

}
