import { fireEvent, render } from "@testing-library/react"
import React from "react"
import Snowman from './Snowman'

it("should not show image after max wrong guess", function (){
  const { container } = render(<Snowman />);
  fireEvent.click(container.querySelector("#b"));
  fireEvent.click(container.querySelector("#c"));
  fireEvent.click(container.querySelector("#d"));
  fireEvent.click(container.querySelector("#f"));
  fireEvent.click(container.querySelector("#g"));
  fireEvent.click(container.querySelector("#h"));

  expect(container).not.toContainHTML('alt="6"')
})