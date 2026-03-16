import { Action, ActionPanel, Form, showToast, Toast } from '@raycast/api'
import { useState } from 'react'

export default function CreateNoteCommand() {
  const [title, setTitle] = useState('')

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Create Note"
            onSubmit={async () => {
              await showToast({
                style: Toast.Style.Animated,
                title: 'Create Note scaffolded',
                message: `Next step: wire "${title || 'Untitled'}" to the nocal API`
              })
            }}
          />
        </ActionPanel>
      }
    >
      <Form.Description text="This command is scaffolded and will be wired to the nocal API next." />
      <Form.TextField id="title" title="Title" value={title} onChange={setTitle} />
    </Form>
  )
}
