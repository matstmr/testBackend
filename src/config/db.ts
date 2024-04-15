import { DataSource } from "typeorm";
import { Pays } from "../entities/pays";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./test_backend_typeorm.sqlite",
    entities: [Pays],
    logging: true,
    synchronize: true,
})