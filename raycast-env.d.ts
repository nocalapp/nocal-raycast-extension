/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Base URL - Override the nocal API base URL (leave blank to use the default). */
  "apiBaseUrl": string,
  /** Auth Base URL - Override the nocal OAuth server URL (leave blank to use the default). */
  "authBaseUrl": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-notes` command */
  export type SearchNotes = ExtensionPreferences & {}
  /** Preferences accessible in the `create-note` command */
  export type CreateNote = ExtensionPreferences & {}
  /** Preferences accessible in the `needs-rsvp` command */
  export type NeedsRsvp = ExtensionPreferences & {}
  /** Preferences accessible in the `upcoming-meetings` command */
  export type UpcomingMeetings = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-notes` command */
  export type SearchNotes = {}
  /** Arguments passed to the `create-note` command */
  export type CreateNote = {}
  /** Arguments passed to the `needs-rsvp` command */
  export type NeedsRsvp = {}
  /** Arguments passed to the `upcoming-meetings` command */
  export type UpcomingMeetings = {}
}

