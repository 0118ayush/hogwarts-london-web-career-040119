import React, { Component } from "react";
import Hog from "./Hog.js";

class Hoglist extends Component {
  getHogImages = hog =>
    hog.name
      .split(" ")
      .join("_")
      .toLowerCase();

  filterGreasedHogs = (hogs, greasedFilter) => {
    return greasedFilter ? hogs.filter(hog => hog.greased) : hogs;
  };

  filterBySearch = hogs => {
    return hogs.filter(hog =>
      hog.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );
  };

  sortHogs = (hogs, sortByOption) => {
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

    const hogsCopy = hogs.slice();

    if (sortByOption === "name") {
      hogsCopy.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (sortByOption === "weight") {
      hogsCopy.sort((a, b) => {
        return a[weight] - b[weight];
      });
    }
    return hogsCopy;
  };

  render() {
    const greaseAndSearchFilteredHogs = this.filterBySearch(
      this.filterGreasedHogs(this.props.allHogs, this.props.greasedFilter)
    );

    // const sortFilteredHogs = this.sortHogs(greaseAndSearchFilteredHogs, this.props.sortBy)

    return (
      <ul>
        {this.sortHogs(greaseAndSearchFilteredHogs, this.props.sortBy).map(
          hog => (
            <Hog
              key={hog.name}
              hog={hog}
              image={this.getHogImages(hog)}
              handleClick={this.props.selectHog}
            />
          )
        )}
      </ul>
    );
  }
}

export default Hoglist;

/*fillter via weight:
 
button event listener top page 
re-render list sorted via first letter of name 



*/
