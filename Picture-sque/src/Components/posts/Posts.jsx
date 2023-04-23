import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://static.saltinourhair.com/wp-content/uploads/2018/10/23125631/komodo-islands-flores-1862x1440.jpg" title="Komodo Islands" desc= "One of the best-untouched treasures of Indonesia is the Komodo Islands. Komodo National Park is part of Flores, a group of 29 small and big quite white-sanded islands."/>
      {/* <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
      <Post img="https://wildnaturephotoexpeditions.com/wp-content/uploads/Eastern-Spinebill-4-980x654.jpg" title= "Lamington National Park" desc="World Heritage Listed Lamington National Park, in Queensland, Australia, is an approximate two hour drive from Brisbane or a one hour fifteen minute drive from the Gold Coast. "/>
      <Post img="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/06/satay-4546w-1024x683.webp" title="Chicken Satay" desc="Gorgeously grilled chicken satay skewers are perfect with a sweet-and-tangy peanut sauce It is made from sliced marinated chicken meat, and served with a sauce made of peanuts and chili sauce"/>
      {/* <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </div>
  );
}