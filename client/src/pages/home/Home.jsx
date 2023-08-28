import Featured from "../../components/featured/Featured";
import Try from "../../components/featured/try";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import HighRatedHotels from "../../components/Ratedhotels/RatedHotels";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Unique from "../../components/Unique/unique";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Metadata from '../../components/Metadata'

const Home = () => {
  return (
    <div>
      <Metadata title="Home | Booking.com"/>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Try />
        <h1 className="homeTitle">Discover the Perfect Space</h1>
        <h3 className="homeTitles">Every Kind of Property for Your Unique Journey
        </h3>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>        
        <h3 className="homeTitles">Travellers with similar searches booked these properties
        </h3>
        <FeaturedProperties/>
        <h1 className="homeTitle">High Rated Hotels</h1>
         <h3 className="homeTitles">Indulge in Excellence: Discover Our High-Rated Hotels
        </h3>
        <HighRatedHotels/>
        <h1 className="homeTitle">Stay at our top unique properties</h1>
        <h3 className="homeTitles">From castles and villas to boats and igloos, we've got it all</h3>
        <Unique/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
