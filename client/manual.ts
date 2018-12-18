import {
  DEFAULT_BACKGROUND_ENTRY,
  DEFAULT_CONFIG,
  DEFAULT_CONTENT_SCRIPT_ENTRY,
  DEFAULT_PORT
} from "../src/constants/options.constants";

export default () => `
Usage:
    wcer [--config <config_path>] [--port <port_number>] [--no-page-reload] [--content-script <content_script_paths>] [--background <bg_script_path>] 

Complete API:
+------------------------------------------------------------------------------------------------------------+
|        name        |    default        |                               description                         |
|--------------------|-------------------|-------------------------------------------------------------------|
| --help             |                   | Show this help
| --config           | ${
  DEFAULT_CONFIG
} | The webpack configuration file path                               |
| --port             | ${
  DEFAULT_PORT
}              | The port to run the server                                        |
| --content-script   | ${
  DEFAULT_CONTENT_SCRIPT_ENTRY
}    | The **entry/entries** name(s) for the content script(s)           |
| --background       | ${
  DEFAULT_BACKGROUND_ENTRY
}        | The **entry** name for the background script                      |
| --no-page-reload   |                   | Disable the auto reloading of all **pages** which runs the plugin |
+------------------------------------------------------------------------------------------------------------+
`;
