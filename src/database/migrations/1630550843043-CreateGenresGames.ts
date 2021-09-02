import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenresGames1630550843043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "genres_games",
          columns: [
            {
              name: "game_id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "genre_id",
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
                columnNames: ['genre_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'genres',
            },
        ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres_games");
    }

}
