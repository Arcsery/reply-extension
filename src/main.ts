import commands from "functions/commands";
import reply from "functions/reply";
import {loadCss} from "./css/css";
import {settingsPage} from "./settings/settingsPage";
import {settings} from "./settings/settings";
import {waitFor} from "./functions/utils";
import constants from "./utils/constants";


BCRStart().catch(
    (error) => {
        console.log(error)
    }
)

async function BCRStart() {

    // @ts-ignore
    await waitFor(() => ServerIsConnected && ServerSocket);

    await waitFor(() => !!!!Player?.AccountName);

    // @ts-ignore
    if (!window.BCR_VERSION) {
        settings();
        await settingsPage()
        loadCss();
        commands();
        reply();
        console.log("BCR " + constants.MOD_VERSION + " loaded!")
    } else {
        console.log("BCR is already loaded!")
    }
}