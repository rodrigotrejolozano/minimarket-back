import { Optional } from 'sequelize';
import { Model, Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Category from './category';

interface ProductAttributes {
    id: number;
    categoryId: number;
    name: string;
    status: boolean;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

@Table({
    modelName: 'Product',
    timestamps: true,
    tableName: 'products',
})
class Product extends Model<ProductAttributes, ProductCreationAttributes> {
    @Column({
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
    })
    public id!: number;

    @ForeignKey(() => Category)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    public categoryId!: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    public name!: string;


    @Column({
        allowNull: false,
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    public status!: boolean;

    @Column({
        allowNull: false,
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    public createdAt!: Date;

    @Column({
        allowNull: false,
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    public updatedAt!: Date;

    @BelongsTo(() => Category, 'categoryId')
    public category!: Category;
}

export default Product;
