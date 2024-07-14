import { mount, RouterLinkStub, shallowMount } from "@vue/test-utils";
import showComponent from "@/components/show-component.vue";
import { RouterLink } from "vue-router";

describe("show-component.vue", () => {
  it("renders correctly with given props", () => {
    // Given
    const movie = {
      id: "1",
      name: "Inception",
      image: "Example URL",
      rating: 10.0,
      genre: "Sci-Fi",
    };

    const wrapper = shallowMount(showComponent, {
      propsData: { movie },
    });

    // Then
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe(movie.image);
    expect(img.attributes("alt")).toBe(movie.name);

    const nameText = wrapper.find(".card-text").text();
    expect(nameText).toContain(movie.name);

    const ratingText = wrapper.find(".rating").text();
    expect(ratingText).toBe(movie.rating.toFixed(1));
  });
});
