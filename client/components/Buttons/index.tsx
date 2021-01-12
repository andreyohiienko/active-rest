import { DeleteOutlined, SaveFilled } from '@ant-design/icons'
import { Button, Tooltip, Switch } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import { SwitchProps } from 'antd/lib/switch'
import React from 'react'

const ButtonSave = (props: ButtonProps) => {
  return (
    <Tooltip title="Save">
      <Button {...props} type="primary" shape="circle">
        <SaveFilled />
      </Button>
    </Tooltip>
  )
}

const ButtonDelete = (props: ButtonProps) => (
  <Tooltip title="Delete">
    <Button {...props} type="primary" shape="circle">
      <DeleteOutlined />
    </Button>
  </Tooltip>
)

const SwitchVisibility = (props: SwitchProps) => (
  <Tooltip title={`Make section ${props.checked ? 'invisible' : 'visible'}`}>
    <Switch {...props} />
  </Tooltip>
)

export { ButtonSave, ButtonDelete, SwitchVisibility }
