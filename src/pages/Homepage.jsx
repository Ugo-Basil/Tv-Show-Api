import { useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";

const Homepage = () => {
  const showsContext = useContext(ShowsContext)

  const {loading, shows} = showsContext
  return (
    <div className='homepage'>
      <Searchbar />
      {loading ? <h2>loading...</h2> : <div className="homepage__list">{shows.map(item => (<ListItem key={item.show.id} id={item.show.id } image={item.show.image? item.show.image.medium : "https://jobs.ficsi.in/assets/front_end/images/no-image-found.jpg"} name={item.show.name} rating={item.show.rating.average ? item.show.rating.average : 'No rating'} />) )} </div>}
   </div>
  )
}

export default Homepage