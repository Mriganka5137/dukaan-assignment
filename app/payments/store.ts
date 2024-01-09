import { orders } from "@/lib/constants";
import { create } from "zustand";

interface Order {
  orderId: string;
  orderDate: string;
  orderAmount: string;
  transactionFees: string;
}

interface OrderStore {
  Orders: Order[];
  searchOrder: (orderId: string) => void;
  sortedList: () => void;
}

const useOrderStore = create<OrderStore>((set) => ({
  Orders: orders,
  searchOrder: (orderId: string) => {
    if (!orderId) return set({ Orders: orders });
    const newOrders = orders.filter((order) => order.orderId === orderId);
    set({ Orders: newOrders });
  },
  sortedList: () => {
    const newOrders = orders.sort((a, b) => {
      return new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime();
    });
    set({ Orders: newOrders });
  },
}));

export default useOrderStore;
