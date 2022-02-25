import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateValidateColumnsIntoUser1645807274803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            "users",
            [
                new TableColumn({
                    name: 'is_validated',
                    type:'boolean',
                    isNullable: false,
                })
            ]
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('users', ['is_validated'])
    }

}
