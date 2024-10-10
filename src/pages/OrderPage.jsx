import React, { useState, useEffect } from "react";
import useCart from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import Navbar from "@/services/Navbar";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const getCart = useCart((state) => state.cart);
  useEffect(() => {
    const items = getCart;
    setCartItems(items);
  }, [getCart]);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
  });
  const handleOrder = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      mobile: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      state: "",
      landmark: "",
      alternatePhone: "",
    });
    navigate("/cart");
  };
  return (
    <>
      <Navbar />
      <div className="w-full max-w-3xl mx-auto p-4 ] rounded-lg shadow">
        <h2 className="text-xl font-bold text-blue-600 mb-4">
          ADD A NEW ADDRESS
        </h2>
        <Button className="mb-4 bg-blue-500 hover:bg-blue-600 text-white">
          <MapPin className="mr-2 h-4 w-4" /> Use my current location
        </Button>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">10-digit mobile number</Label>
              <Input
                id="mobile"
                placeholder="10-digit mobile number"
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input
                id="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="locality">Locality</Label>
              <Input
                id="locality"
                placeholder="Locality"
                value={formData.locality}
                onChange={(e) =>
                  setFormData({ ...formData, locality: e.target.value })
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address (Area and Street)</Label>
            <Input
              id="address"
              placeholder="Address (Area and Street)"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City/District/Town</Label>
              <Input
                id="city"
                placeholder="City/District/Town"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                placeholder="State"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="landmark">Landmark (Optional)</Label>
              <Input
                id="landmark"
                placeholder="Landmark (Optional)"
                value={formData.landmark}
                onChange={(e) =>
                  setFormData({ ...formData, landmark: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alternate-phone">
                Alternate Phone (Optional)
              </Label>
              <Input
                id="alternate-phone"
                placeholder="Alternate Phone (Optional)"
                type="tel"
                value={formData.alternatePhone}
                onChange={(e) =>
                  setFormData({ ...formData, alternatePhone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleOrder}
            >
              PLACE ORDER
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              CANCEL
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}