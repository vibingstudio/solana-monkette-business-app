export interface MemberData {
  monkettes: number[];
  description: string;
  social: { network: string; url: string }[];
  image: string;
}

export const HallOfFame: { [k: string]: MemberData } = {
  test_info: {
    monkettes: [123, 124, 125, 126],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: [{ network: "twitter", url: "https://twitter.com/test_info" }],
    image: "/monkettes/1.png",
  },
};
