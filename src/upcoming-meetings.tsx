import { Action, ActionPanel, List } from '@raycast/api'

export default function UpcomingMeetingsCommand() {
  return (
    <List>
      <List.EmptyView
        title="Upcoming Meetings scaffolded"
        description="This command will show upcoming meetings from nocal once the API integration lands."
        actions={
          <ActionPanel>
            <Action.Open title="Open nocal" target="nocal://raycast/today" />
          </ActionPanel>
        }
      />
    </List>
  )
}

