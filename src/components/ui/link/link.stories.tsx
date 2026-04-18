import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Link, type LinkState } from "./link";

const states: LinkState[] = ["default", "hover", "active", "focus", "disabled"];

const meta = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: { type: "select" },
      options: states,
      description:
        "Forced presentation for Storybook (Default / Hover / Active from Figma; Focus / Disabled for docs).",
    },
    children: {
      control: "text",
      description: "Link label",
    },
    href: {
      control: "text",
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    href: "#",
    state: "default",
    children: "Label Text",
  },
};

/** Figma `Link` (10871:16916): Default / Hover / Active; plus Focus (same ring as `focus-visible`) and Disabled in the matrix. */
export const StateMatrix: Story = {
  args: {
    href: "#",
    children: "Label Text",
  },
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-8 text-foreground">
      <section className="flex flex-col gap-4">
        <h3 className="text-title-small leading-title-small tracking-title-small capitalize">
          States
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full max-w-xl border-separate border-spacing-x-3 border-spacing-y-2">
            <thead>
              <tr className="text-left text-label-small leading-label-small tracking-label-small">
                <th className="px-2 py-1">State</th>
                <th className="px-2 py-1">Preview</th>
              </tr>
            </thead>
            <tbody>
              {states.map((state) => (
                <tr key={state}>
                  <td className="px-2 py-1 text-label-small leading-label-small tracking-label-small capitalize">
                    {state}
                  </td>
                  <td className="px-2 py-1">
                    <Link href="#" state={state}>
                      Label Text
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};
