import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {

  state = {images : [] } ;

   onSearchSubmit = async (term) => {
      const response = await unsplash
      .get('/search/photos',{
         params: { query: term},
         headers: { Authorization: 'Client-ID 4f94aa382275712c364fde91ffa51ca5d06d57139a224435343d40cadd3e5621'}
     });

     this.setState({images:response.data.results});

    }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
