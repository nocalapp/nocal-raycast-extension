import { Action, ActionPanel, List } from '@raycast/api'

const placeholderItems = [
  {
    id: 'scaffold-search',
    title: 'Search Notes scaffolded',
    subtitle: 'Implement API-backed search in the next step'
  }
]

export default function SearchNotesCommand() {
  return (
    <List searchBarPlaceholder="Search your nocal notes...">
      {placeholderItems.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          actions={
            <ActionPanel>
              <Action.Open title="Open nocal" target="nocal://raycast/notes" />
            </ActionPanel>
          }
        />
      ))}
    </List>
  )
}

