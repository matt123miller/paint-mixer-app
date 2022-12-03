import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { PaintDescription } from "./PaintDescription";
import Paints from "../../../server/trpc/data";

import type { PaintDescriptionProps } from "./PaintDescription";
import type { PaintRecord } from "types";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Paint Description",
  component: PaintDescription,
} as ComponentMeta<typeof PaintDescription>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PaintDescription> = (args) => (
  <PaintDescription {...args}></PaintDescription>
);

export const DefaultPaintDescription = Template.bind({});

const randomPaint = Paints[Math.floor(Math.random() * (Paints.length - 1))];

DefaultPaintDescription.args = {
  paint: randomPaint,
  className: "bg-gray-100",
};
