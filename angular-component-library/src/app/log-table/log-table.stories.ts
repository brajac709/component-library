
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LogTableComponent  } from './log-table.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'MyApp/LogTable',
  component: LogTableComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<LogTableComponent> = (args: LogTableComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  data: [
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    },
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    },
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    }
  ]
};

export const LongText = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
LongText.args = {
  data: [
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    },
    {
      data1: "data 1", 
      data2: "Lorem ipsum dolor est Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      data3: "data 3",
    },
    {
      data1: "data 1", 
      data2: "data 2",
      data3: "data 3",
    }
  ]
};

/*

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
