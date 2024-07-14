import { mount } from "@vue/test-utils";
import castComponent from "@/components/cast-component.vue";

describe("cast-component.vue", () => {
  it("renders correctly with given props", () => {
    // Given
    const cast = {
      name: "Mahtab Kianinian",
      image: "Example URL",
    };

    // When
    const wrapper = mount(castComponent, {
      propsData: { cast },
    });

    // Then
    // Check if the image source is correct
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe(cast.image);
    expect(img.attributes("alt")).toBe(cast.name);

    // Check if the name is rendered correctly
    const nameSpan = wrapper.find(".cast-name");
    expect(nameSpan.text()).toBe(cast.name);
  });
});
