import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderHistory = ({ onReorder }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orderHistory = [
  {
    id: 'ORD-2024-001',
    date: '2024-11-10',
    product: 'Custom T-Shirt',
    design: 'Company Logo',
    quantity: 5,
    total: 1745,
    status: 'delivered',
    image: "https://images.unsplash.com/photo-1716952029045-feb119b58583",
    alt: 'White cotton t-shirt with custom company logo print',
    details: {
      color: 'White',
      size: 'L',
      designType: 'Logo Print'
    }
  },
  {
    id: 'ORD-2024-002',
    date: '2024-11-05',
    product: 'Custom Mug',
    design: 'Birthday Message',
    quantity: 2,
    total: 498,
    status: 'delivered',
    image: "https://images.unsplash.com/photo-1714928829549-b6d9964e7459",
    alt: 'White ceramic mug with personalized birthday message and colorful design',
    details: {
      color: 'White',
      size: '11oz',
      designType: 'Text & Graphics'
    }
  },
  {
    id: 'ORD-2024-003',
    date: '2024-10-28',
    product: 'Custom Hoodie',
    design: 'Team Logo',
    quantity: 3,
    total: 2547,
    status: 'delivered',
    image: "https://images.unsplash.com/photo-1715917555581-820d9c710dcd",
    alt: 'Gray pullover hoodie with custom team logo embroidered on front',
    details: {
      color: 'Gray',
      size: 'XL',
      designType: 'Embroidery'
    }
  },
  {
    id: 'ORD-2024-004',
    date: '2024-10-15',
    product: 'Custom Cap',
    design: 'Sports Team',
    quantity: 1,
    total: 449,
    status: 'delivered',
    image: "https://images.unsplash.com/photo-1604532057336-2c4a09f71330",
    alt: 'Black baseball cap with sports team logo embroidered on front panel',
    details: {
      color: 'Black',
      size: 'One Size',
      designType: 'Embroidered Logo'
    }
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'text-success bg-success/10';
      case 'processing':
        return 'text-warning bg-warning/10';
      case 'shipped':
        return 'text-professional bg-professional/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return 'CheckCircle';
      case 'processing':
        return 'Clock';
      case 'shipped':
        return 'Truck';
      default:
        return 'Package';
    }
  };

  const handleReorder = (order) => {
    onReorder({
      product: {
        id: order?.id,
        name: order?.product,
        price: Math.floor(order?.total / order?.quantity),
        image: order?.image,
        alt: order?.alt
      },
      design: {
        type: 'previous',
        name: order?.design,
        preview: order?.image
      },
      quantity: order?.quantity,
      selectedColor: order?.details?.color,
      selectedSize: order?.details?.size
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-headline font-semibold text-foreground">
          Order History
        </h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="History" size={16} />
          <span>{orderHistory?.length} orders</span>
        </div>
      </div>
      {orderHistory?.length === 0 ?
      <div className="text-center py-12">
          <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
            No Previous Orders
          </h4>
          <p className="text-muted-foreground font-body">
            Your order history will appear here once you place your first order
          </p>
        </div> :

      <div className="space-y-4">
          {orderHistory?.map((order) =>
        <div
          key={order?.id}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-neutral transition-shadow duration-300">

              <div className="flex items-start space-x-4">
                <img
              src={order?.image}
              alt={order?.alt}
              className="w-16 h-16 object-cover rounded-lg" />

                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-headline font-semibold text-foreground">
                        {order?.product}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Order #{order?.id}
                      </p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(order?.status)}`}>
                      <Icon name={getStatusIcon(order?.status)} size={12} />
                      <span className="capitalize">{order?.status}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-muted-foreground">Design:</span>
                      <p className="font-medium text-foreground">{order?.design}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Quantity:</span>
                      <p className="font-medium text-foreground">{order?.quantity}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <p className="font-medium text-foreground">
                        {new Date(order.date)?.toLocaleDateString('en-IN')}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total:</span>
                      <p className="font-medium text-brand-energy">₹{order?.total}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Color: {order?.details?.color}</span>
                      <span>Size: {order?.details?.size}</span>
                      <span>Type: {order?.details?.designType}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedOrder(selectedOrder === order?.id ? null : order?.id)}
                    iconName={selectedOrder === order?.id ? "ChevronUp" : "ChevronDown"}
                    iconPosition="right">

                        Details
                      </Button>
                      <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleReorder(order)}
                    iconName="RotateCcw"
                    iconPosition="left">

                        Reorder
                      </Button>
                    </div>
                  </div>
                  
                  {selectedOrder === order?.id &&
              <div className="mt-4 pt-4 border-t border-border">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Order Details</h5>
                          <div className="space-y-1 text-muted-foreground">
                            <p>Product: {order?.product}</p>
                            <p>Design: {order?.design}</p>
                            <p>Quantity: {order?.quantity} pieces</p>
                            <p>Unit Price: ₹{Math.floor(order?.total / order?.quantity)}</p>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2">Specifications</h5>
                          <div className="space-y-1 text-muted-foreground">
                            <p>Color: {order?.details?.color}</p>
                            <p>Size: {order?.details?.size}</p>
                            <p>Design Type: {order?.details?.designType}</p>
                            <p>Status: <span className="capitalize">{order?.status}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
              }
                </div>
              </div>
            </div>
        )}
        </div>
      }
    </div>);

};

export default OrderHistory;