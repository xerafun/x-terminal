// Terminal configuration
// Customize this file with your personal information


export const terminalConfig = {
    // Personal information
    name: "xerafun",
    email: "1138006034@qq.com",
    github: "xerafun",
    parentSite: {
        name: "XeraFun",
        url: "https://xerafun.com",
    },
    url: "https://terminal.xerafun.com",
    sites: [
        {
            name: "xerafun(main)",
            url: "https://xerafun.com"
        }, {
            name: "blog",
            url: "https://xerafun.github.io"
        }, {
            name: "x-texas-holdem",
            url: "https://x-texas-holdem.pages.dev"
        }
    ],
    // Terminal PS1 prompt settings
    ps1: {
        username: "you",
        hostname: "x-terminal",
    },

    // Social links
    social: [
        {
            name: "𝕏 (Twitter)",
            url: "https://x.com/XERA_AI"
        },
        // {
        //     name: "GitHub",
        //     url: "https://github.com/xerafun"
        // }
    ],

    repo: {
        github: "https://github.com/xerafun/x-terminal",
    },

    // Site title
    title: "X-Terminal | XeraFun Web Terminal",
} as const;
export type TerminalConfig = typeof terminalConfig;
