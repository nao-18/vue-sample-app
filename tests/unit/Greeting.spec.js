import { mount } from "@vue/test-utils";
import Greeting from "@/components/Greeting";

//describe テストの概要説明文
describe("Greeting.vue", () => {
  //it テストの目的
  it("renders a greeting", () => {
    //Greetingをマウント
    const wrapper = mount(Greeting);
    //マウントされたHTMLをログ出力
    // console.log(wrapper.html());
    // exports(wrapper.html().includes("Vue and TDD")).toBe(true);
    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
