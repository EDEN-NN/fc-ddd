import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";



export default class OrderRepository implements OrderRepositoryInterface{

  async create(entity: Order): Promise<void> {
    await OrderModel.create({
      id: entity.id,
      customer_id: entity.customerId,
      total: entity.total(),
      items: entity.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        product_id: item.productId,
        quantity: item.quantity,
      })),
    },
    {
      include: [{ model: OrderItemModel }],
    }
  );
  }

  async update(entity: Order): Promise<void> {

      await OrderModel.update({
        total: entity.total,
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          productId: item.productId,
          quantity: item.quantity,
        })),
      }, {
        where: { id: entity.id },
      });
  }


  async find(id: string): Promise<Order> {
    const order = await OrderModel.findOne({ where: {id}});

    return new Order(
      order.id,
      order.customer_id,
      order.items.map((item) => new OrderItem(item.id, item.product_id, item.name, item.total, item.quantity)),
    );
  }

  async findAll(): Promise<Order[]> {
    const orders = await OrderModel.findAll();

    return orders.map((order) => new Order(order.id, order.customer_id, order.items.map(
      (item) => new OrderItem(item.id, item.product_id, item.name, item.total, item.quantity))));
  }
}