import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Package, CheckCircle2, XCircle } from "lucide-react";

interface Order {
  id: string;
  status: "active" | "completed" | "cancelled";
  customerName: string;
  deliveryAddress: string;
  items: string[];
  total: number;
  timestamp: string;
}

interface OrdersListProps {
  orders?: Order[];
  userRole?: "customer" | "rider" | "vendor" | "admin";
  onOrderAction?: (orderId: string, action: string) => void;
}

const defaultOrders: Order[] = [
  {
    id: "1",
    status: "active",
    customerName: "John Doe",
    deliveryAddress: "123 Green Street, Eco City",
    items: ["Organic Vegetables", "Reusable Bags"],
    total: 45.99,
    timestamp: "2024-03-20T10:30:00Z",
  },
  {
    id: "2",
    status: "completed",
    customerName: "Jane Smith",
    deliveryAddress: "456 Solar Avenue, Eco City",
    items: ["Electric Scooter Parts", "Solar Charger"],
    total: 159.99,
    timestamp: "2024-03-19T15:45:00Z",
  },
  {
    id: "3",
    status: "cancelled",
    customerName: "Mike Johnson",
    deliveryAddress: "789 Wind Lane, Eco City",
    items: ["Bamboo Utensils"],
    total: 25.99,
    timestamp: "2024-03-18T09:15:00Z",
  },
];

const OrderCard: React.FC<{
  order: Order;
  userRole?: string;
  onAction?: (orderId: string, action: string) => void;
}> = ({ order, userRole = "customer", onAction = () => {} }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold">Order #{order.id}</h3>
          <p className="text-sm text-gray-600">{order.customerName}</p>
        </div>
        <Badge className={getStatusColor(order.status)}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </Badge>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-600">Delivery Address:</p>
        <p className="text-sm">{order.deliveryAddress}</p>
      </div>

      <div className="mb-3">
        <p className="text-sm text-gray-600">Items:</p>
        <ul className="text-sm list-disc list-inside">
          {order.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Total: ${order.total.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(order.timestamp).toLocaleString()}
          </p>
        </div>

        {userRole === "rider" && order.status === "active" && (
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onAction(order.id, "complete")}
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Complete
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onAction(order.id, "cancel")}
            >
              <XCircle className="w-4 h-4 mr-1" />
              Cancel
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

const OrdersList: React.FC<OrdersListProps> = ({
  orders = defaultOrders,
  userRole = "customer",
  onOrderAction = () => {},
}) => {
  return (
    <div className="w-full h-full bg-white p-4">
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="active">
            <Clock className="w-4 h-4 mr-2" />
            Active
          </TabsTrigger>
          <TabsTrigger value="completed">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Completed
          </TabsTrigger>
          <TabsTrigger value="cancelled">
            <XCircle className="w-4 h-4 mr-2" />
            Cancelled
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[calc(100vh-200px)]">
          {["active", "completed", "cancelled"].map((status) => (
            <TabsContent key={status} value={status} className="mt-0">
              {orders
                .filter((order) => order.status === status)
                .map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    userRole={userRole}
                    onAction={onOrderAction}
                  />
                ))}
              {orders.filter((order) => order.status === status).length ===
                0 && (
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No {status} orders found</p>
                </div>
              )}
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default OrdersList;
