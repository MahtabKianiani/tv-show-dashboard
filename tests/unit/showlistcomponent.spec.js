import { mount } from "@vue/test-utils";
import ShowListComponent from "@/components/show-list-component.vue";
import showComponent from "@/components/show-component";

describe("show-list-component.vue", () => {
  it("renders the genre correctly", () => {
    const genre = "Action";
    const shows = [];

    const wrapper = mount(ShowListComponent, {
      propsData: { genre, shows },
    });

    const genreHeader = wrapper.find("h3");
    expect(genreHeader.exists()).toBe(true);
    expect(genreHeader.text()).toBe(genre);
  });

  it("filters and sorts shows correctly", () => {
    const genre = "Action";
    const shows = [
      { id: 1, name: "Show A", genres: ["Action"], rating: 4.5 },
      { id: 2, name: "Show B", genres: ["Action", "Drama"], rating: 3.5 },
      { id: 3, name: "Show C", genres: ["Comedy"], rating: 4.0 },
      { id: 4, name: "Show D", genres: ["Action"], rating: 5.0 },
    ];

    const wrapper = mount(ShowListComponent, {
      propsData: { genre, shows },
    });

    const movieListItems = wrapper.findAllComponents(showComponent);
    expect(movieListItems).toHaveLength(3);

    const sortedShows = [
      { id: 4, name: "Show D", genres: ["Action"], rating: 5.0 },
      { id: 1, name: "Show A", genres: ["Action"], rating: 4.5 },
      { id: 2, name: "Show B", genres: ["Action", "Drama"], rating: 3.5 },
    ];

    movieListItems.forEach((itemWrapper, index) => {
      expect(itemWrapper.props("movie")).toEqual(sortedShows[index]);
    });
  });

  it("renders showComponent correctly with the right props", () => {
    const genre = "Action";
    const shows = [
      { id: 1, name: "Show A", genres: ["Action"], rating: 4.5 },
      { id: 2, name: "Show B", genres: ["Action", "Drama"], rating: 3.5 },
    ];

    const wrapper = mount(ShowListComponent, {
      propsData: { genre, shows },
    });

    const movieListItems = wrapper.findAllComponents(showComponent);
    expect(movieListItems).toHaveLength(2);

    shows.forEach((show, index) => {
      const showComp = movieListItems.at(index);
      expect(showComp.props("movie")).toEqual(show);
    });
  });
});
