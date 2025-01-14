import { BasicPage, FormRow, basename } from "./common";
import { animationList } from "@/paths";
import { updateConfig } from "@/utils/config";
import { loadMixamoAnimation } from "@/lib/VRMAnimation/loadMixamoAnimation";

export function CharacterAnimationPage({
  viewer,
  animationUrl,
  setAnimationUrl,
  setSettingsUpdated,
}: {
  viewer: any; // TODO
  animationUrl: string;
  setAnimationUrl: (url: string) => void;
  setSettingsUpdated: (updated: boolean) => void;
}) {
  return (
    <BasicPage
      title="Character Animation"
      description="Select the animation to play"
    >
      <ul role="list" className="divide-y divide-gray-100 max-w-xs">
        <li className="py-4">
          <FormRow label="Animation">
            <select
              value={animationUrl}
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={async (event: React.ChangeEvent<any>) => {
                event.preventDefault();
                const url = event.target.value;
                setAnimationUrl(url);
                updateConfig("animation_url", url);
                setSettingsUpdated(true);
                // @ts-ignore
                const vrma = await loadMixamoAnimation(url, viewer.model!.vrm);

                // @ts-ignore
                viewer.model!.loadAnimation(vrma);
              }}
            >
              {animationList.map((url) =>
                <option
                  key={url}
                  value={url}
                >
                  {basename(url)}
                </option>
              )}
            </select>
          </FormRow>
        </li>
      </ul>
    </BasicPage>
  );
}
