import { render, screen } from "@testing-library/react";
import { Post } from "./Post";

describe("Post", () => {
  it("renders the title correctly", () => {
    const title = "Hallo Welt";

    render(<Post title={title} />);
    const heading = screen.getByRole("heading", { name: title });

    expect(heading).toBeInTheDocument();
  });
});
