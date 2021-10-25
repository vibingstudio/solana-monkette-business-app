export interface MemberData {
  monkettes: number[];
  description: string;
  social: { network: string; url: string }[];
  image: string;
}

export const HallOfFame: { [k: string]: MemberData } = {
  test_info: {
    monkettes: [3195],
    description:
      "Founder https://frequencmedia.com/ , full time builder for the Solana Ecosystem",
    social: [{ network: "twitter", url: "https://twitter.com/jules_dudko" }],
    image: "/monkettes/1.png",
  }
};
