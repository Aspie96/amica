import { BasicPage, FormRow } from './common';
import { TextInput } from "@/components/textInput";
import { SecretTextInput } from "@/components/secretTextInput";
import { updateConfig } from "@/utils/config";

export function ElevenLabsSettingsPage({
  elevenlabsApiKey,
  setElevenlabsApiKey,
  elevenlabsVoiceId,
  setElevenlabsVoiceId,
  setSettingsUpdated,
}: {
  elevenlabsApiKey: string;
  setElevenlabsApiKey: (key: string) => void;
  elevenlabsVoiceId: string;
  setElevenlabsVoiceId: (id: string) => void;
  setSettingsUpdated: (updated: boolean) => void;
}) {
  return (
    <BasicPage
      title="ElevenLabs Settings"
      description="Configure ElevenLabs"
    >
      <ul role="list" className="divide-y divide-gray-100 max-w-xs">
        <li className="py-4">
          <FormRow label="API Key">
            <SecretTextInput
              value={elevenlabsApiKey}
              onChange={(event: React.ChangeEvent<any>) => {
                setElevenlabsApiKey(event.target.value);
                updateConfig("elevenlabs_apikey", event.target.value);
                setSettingsUpdated(true);
              }}
            />
          </FormRow>
        </li>
        <li className="py-4">
          <FormRow label="Voice ID">
            <TextInput
              value={elevenlabsVoiceId}
              onChange={(event: React.ChangeEvent<any>) => {
                setElevenlabsVoiceId(event.target.value);
                updateConfig("elevenlabs_voiceid", event.target.value);
                setSettingsUpdated(true);
              }}
            />
          </FormRow>
        </li>
      </ul>
    </BasicPage>
  );
}