import { Terminal } from "@/components/terminal";
import { GithubIcon } from "@/components/icons/github-icon";
import { terminalConfig } from "@/terminal.config";
import { MOVIE_QUOTES } from "@/lib/data/quotes";

// Select quote at build time — keeps quotes out of client JS bundle and satisfies react-hooks/purity
const randomQuote = MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
const quoteLines = [randomQuote.english];

export default function Home() {
    return (
        <main className="relative h-screen p-4 sm:p-8 font-mono bg-[#181818] text-terminal-foreground">
            {/* Semantic context for search engines and accessibility */}
            <div className="sr-only">
                <header>
                    <h1>X-Terminal | XeraFun Web Terminal</h1>
                    <p>
                        X-Terminal (<a href="https://terminal.xerafun.com">terminal.xerafun.com</a>) is an interactive developer terminal sub-site of <a href="https://xerafun.com">XeraFun</a>.
                    </p>
                </header>

                <nav aria-label="Ecosystem Sites">
                    <ul>
                        <li><a href="https://xerafun.com">XeraFun (Main Site)</a></li>
                        <li><a href="https://terminal.xerafun.com">X-Terminal</a></li>
                        <li><a href="https://xerafun.github.io">Blog</a></li>
                        <li><a href="https://x-texas-holdem.pages.dev">X-Texas-Holdem</a></li>
                        <li><a href="https://github.com/xerafun/x-terminal">GitHub</a></li>
                    </ul>
                </nav>

                <section>
                    <h2>Available Commands</h2>
                    <p>
                        Type or tab-complete commands:
                        <code>help</code>, <code>about</code>, <code>xerafun</code>, <code>projects</code>, <code>weather</code>, <code>quote</code>, <code>banner</code>, <code>clear</code>.
                    </p>
                </section>
            </div>

            {/* Repo Link */}
            <a
                href={terminalConfig.repo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-7 right-10 sm:top-11 sm:right-14 text-terminal-foreground z-50"
                aria-label="GitHub Repository"
            >
                <GithubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>

            <Terminal quoteLines={quoteLines} />
        </main>
    );
}
