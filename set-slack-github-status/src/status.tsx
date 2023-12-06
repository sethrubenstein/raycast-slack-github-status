/**
 * External Dependencies
 */
import { useState } from "react";

/**
 * Raycast Dependencies
 */
import { Action, ActionPanel, Form, getPreferenceValues } from "@raycast/api";
import { useFetch } from "@raycast/utils";

/**
 * Internal Dependencies
 */
import handleSubmit from "./submit-handler";

const GITHUB_TOKEN = null;
const SLACK_TOKEN = null;

interface Preferences {
  SLACK_TOKEN: string;
  GITHUB_TOKEN: string;
}

export default function Command() {
    const preferences = getPreferenceValues<Preferences>();
    const [status, setStatus] = useState<string>("");
    return (
        <Form
        actions={
            <ActionPanel>
              <Action.SubmitForm title="Set Status" onSubmit={() => handleSubmit(status, GITHUB_TOKEN, SLACK_TOKEN).then(() => console.log('done'))} />
            </ActionPanel>
        }
        >
            <Form.TextArea id="status" title="Add Status" placeholder="Working on..." value={status} onChange={setStatus}/>
        </Form>
    );
}