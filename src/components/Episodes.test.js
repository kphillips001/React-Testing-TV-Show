import React from "react";
import Episodes from "./Episodes";
import { render } from "@testing-library/react";

const ep = [
  { id: 578664,
    url:
      "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
    name: "Chapter Three: Holly, Jolly",
    season: 1,
    number: 3,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
    },
    summary:
      "<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/578664"
      }}
    }
];

test("it displays without crashing", () => {
  const { getAllByTestId, rerender } = render(<Episodes episodes={ep} />);


  expect(getAllByTestId("episode"));


  rerender(<Episodes episodes={ep} />);
  expect(getAllByTestId("episode")).toHaveLength(2);
  expect(getAllByTestId("episodes-list")).toHaveLength(1);
});