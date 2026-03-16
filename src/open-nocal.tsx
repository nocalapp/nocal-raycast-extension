import { closeMainWindow, open } from '@raycast/api'

export default async function OpenNocalCommand() {
  await closeMainWindow()
  await open('nocal://raycast/today')
}

