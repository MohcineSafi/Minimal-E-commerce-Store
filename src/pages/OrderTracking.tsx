
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Package, Truck, CheckCircle } from 'lucide-react';

interface OrderStatus {
  id: string;
  status: 'processing' | 'shipped' | 'delivered';
  date: string;
  items: number;
  total: number;
}

const OrderTracking = () => {
  const [orders, setOrders] = useState<OrderStatus[]>([]);

  useEffect(() => {
    // Check for recent order
    const lastOrderId = localStorage.getItem('lastOrderId');
    if (lastOrderId) {
      const newOrder: OrderStatus = {
        id: lastOrderId,
        status: 'processing',
        date: new Date().toISOString().split('T')[0],
        items: 1,
        total: 129.99,
      };
      setOrders([newOrder]);
      
      // Simulate status updates
      setTimeout(() => {
        setOrders(prev => prev.map(order => 
          order.id === lastOrderId 
            ? { ...order, status: 'shipped' as const }
            : order
        ));
      }, 3000);
    } else {
      // Demo orders
      setOrders([
        {
          id: 'ORD-ABC123',
          status: 'delivered',
          date: '2024-05-20',
          items: 2,
          total: 189.98,
        },
        {
          id: 'ORD-DEF456',
          status: 'shipped',
          date: '2024-05-28',
          items: 1,
          total: 39.99,
        },
      ]);
    }
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-yellow-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-yellow-100 text-yellow-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const trackingSteps = [
    { id: 1, name: 'Order Placed', icon: Check },
    { id: 2, name: 'Processing', icon: Package },
    { id: 3, name: 'Shipped', icon: Truck },
    { id: 4, name: 'Delivered', icon: CheckCircle },
  ];

  const getStepStatus = (stepId: number, orderStatus: string) => {
    const statusMap = {
      'processing': 2,
      'shipped': 3,
      'delivered': 4,
    };
    return stepId <= statusMap[orderStatus as keyof typeof statusMap];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Tracking</h1>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">You haven't placed any orders yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2">Order {order.id}</span>
                    </CardTitle>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.date).toLocaleDateString()} • 
                    {order.items} item{order.items !== 1 ? 's' : ''} • 
                    ${order.total.toFixed(2)}
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Progress Timeline */}
                  <div className="flex items-center justify-between mb-8">
                    {trackingSteps.map((step, index) => (
                      <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            getStepStatus(step.id, order.status)
                              ? 'bg-black text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            <step.icon className="h-5 w-5" />
                          </div>
                          <span className={`mt-2 text-xs text-center ${
                            getStepStatus(step.id, order.status)
                              ? 'text-black font-medium'
                              : 'text-gray-500'
                          }`}>
                            {step.name}
                          </span>
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-4 ${
                            getStepStatus(step.id + 1, order.status)
                              ? 'bg-black'
                              : 'bg-gray-200'
                          }`} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Status Updates */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Tracking Updates</h4>
                    <div className="space-y-3">
                      {order.status === 'delivered' && (
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Package delivered</p>
                            <p className="text-xs text-gray-500">Left at front door</p>
                          </div>
                        </div>
                      )}
                      
                      {(order.status === 'shipped' || order.status === 'delivered') && (
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Package shipped</p>
                            <p className="text-xs text-gray-500">In transit to your address</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Order confirmed</p>
                          <p className="text-xs text-gray-500">We've received your order and are processing it</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
