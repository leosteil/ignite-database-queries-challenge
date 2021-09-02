import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1630550299789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "value",
              type: "integer",
            },
            {
              name: "user_id",
              type: "uuid",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders");
    }

}
