import { Optional } from 'sequelize';
import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import Product from './product';

interface CategoryAttributes {
    id: number;
    name: string;
    status: boolean;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> { }

@Table({
    modelName: 'Category',
    timestamps: true,
    tableName: 'categories',
})
class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
    })
    public id!: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    public name!: string;

    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    public status!: boolean;

    @HasMany(() => Product, 'categoryId')
    public product!: Product[];
}

export default Category;
