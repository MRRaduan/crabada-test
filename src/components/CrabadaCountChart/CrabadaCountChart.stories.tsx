import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CrabadaCountChart from './index'

export default {
  title: 'Example/CrabadaChart',
  component: CrabadaCountChart,
} as ComponentMeta<typeof CrabadaCountChart>

const Template: ComponentStory<typeof CrabadaCountChart> = (args) => (
  <CrabadaCountChart />
)

export const Primary = Template.bind({})
