import { Product, Button } from "./Product";

const LoginButton = () => {
  return <Button variant="primary">Login</Button>;
};

const FollowButton = () => {
  return <Button variant="secondary">Follow</Button>;
};

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <FollowButton></FollowButton>
      <LoginButton></LoginButton>
    </div>
  );
}

