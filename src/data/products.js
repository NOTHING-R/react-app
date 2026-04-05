const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },

  {
    id: 9,
    name: "KabuDachu",
    price: 999.99,
    image:"https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-1/612993883_1429643935235754_8357191871471628500_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHijB-sNNc_abERKuKMjllRy95AC7eyVtXL3kALt7JW1SOV4D6lISlbPsZ8GuM9QpgNiUGC3kB1yxvv8JbrQ7fX&_nc_ohc=gvcq4VC3LCQQ7kNvwEsRV0h&_nc_oc=AdqBhuBItn1xIU638fr-nONHvBsYPGYbgPDN3-D5_aRGwRJvINRQrWmRmP9KtCCwFB4&_nc_zt=24&_nc_ht=scontent.fjsr6-1.fna&_nc_gid=Pd_o2oZmSZhA7LQ5zwksLw&_nc_ss=7a3a8&oh=00_Af2XnmsBPlzrsdB9SZgO73utcvBlV4L5VGsEkKRljjw1OA&oe=69D87407" ,
    description:
      "Ay bokasoda kotha kom koi kaj besi kore...sudhu aktai smossa o norte pare na...aktu norle e or bici te betha kore....kintu product valo caile e use korte pare",
  },
];

export function getProducts() {
  return products;
}

export function getProductsById(id){
  return products.find(p => p.id === Number(id))
}

