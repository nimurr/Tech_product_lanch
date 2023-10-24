import ClineReview from "../components/ClineReview";
import EventGallery from "../components/EventGallery";
import Hero from "../components/Hero";
import LocationMap from "../components/LocationMap";
import Services from "../components/Services";

 
export default function Home() {
  
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <ClineReview></ClineReview>
      <EventGallery></EventGallery>
      <LocationMap></LocationMap>
    </div>
  )
}
