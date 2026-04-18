import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input, type InputSize } from "./input";

const sizes: InputSize[] = ["default", "small"];

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizes,
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: "default",
    error: false,
    placeholder: "Search…",
  },
};

export const StateMatrix: Story = {
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-8 text-foreground">
      {sizes.map((size) => (
        <section key={size} className="flex flex-col gap-4">
          <h3 className="text-title-small leading-title-small tracking-title-small capitalize">
            {size}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-x-3 border-spacing-y-2">
              <thead>
                <tr className="text-left text-label-small leading-label-small tracking-label-small">
                  <th className="px-2 py-1">State</th>
                  <th className="px-2 py-1">Normal</th>
                  <th className="px-2 py-1">Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-1 text-label-small leading-label-small tracking-label-small">
                    Empty
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} />
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} error />
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-label-small leading-label-small tracking-label-small">
                    Placeholder
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} placeholder="Placeholder" />
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} placeholder="Placeholder" error />
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-label-small leading-label-small tracking-label-small">
                    Value
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} defaultValue="Value" />
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} defaultValue="Value" error />
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-label-small leading-label-small tracking-label-small">
                    Disabled
                  </td>
                  <td className="px-2 py-1">
                    <Input size={size} defaultValue="Value" disabled />
                  </td>
                  <td className="px-2 py-1">
                    <span className="text-muted-foreground text-label-small leading-label-small tracking-label-small">
                      —
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="flex flex-col gap-4">
        <h3 className="text-title-small leading-title-small tracking-title-small capitalize">
          File Input
        </h3>
        <div className="flex flex-col gap-3">
          {sizes.map((size) => (
            <div key={size} className="flex items-center gap-4">
              <span className="w-16 text-label-small leading-label-small tracking-label-small">
                {size}
              </span>
              <Input type="file" size={size} />
              <Input type="file" size={size} error />
              <Input type="file" size={size} disabled />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
