import React from "react"
import ReactImage from "../assets/react.png"
import TailwindCSSImage from "../assets/tailwindcsss.png"
import BoostrapImage from "../assets/bootstrap.png"
import JavascriptImage from "../assets/javascript.png"
import CsharpImage from "../assets/csharp.png"
import VbImage from "../assets/vb.png"
import PythonImage from "../assets/python.png"
import GoImage from "../assets/go.png"
import JavaImage from "../assets/java.png"
import MSSQLImage from "../assets/sql.png"
import MySQLImage from "../assets/mysql.png"
import PostgresSQLImage from "../assets/postgres.png"
import MSAccessImage from "../assets/msaccess.png"
import SqliteImage from "../assets/sqlite.png"
import HTMLImage from "../assets/html.png"
import CSSImage from "../assets/css.png"
import JWTImage from "../assets/jwt.png"
import IdentityImage from "../assets/identity.png"
import VSImage from "../assets/vs.png"
import VSCodeImage from "../assets/vscode.png"
import NetbeansImage from "../assets/netbeans.png"
import FigmaImage from "../assets/figma.png"
import SwaggerImage from "../assets/swagger.png"
import OpenApiImage from "../assets/openapi.png"
import PostmanImage from "../assets/postman.png"
import ClaudeImage from "../assets/claude.png"
import ChatGptImage from "../assets/chatgpt.png"
import GeminiImage from "../assets/gemini.png"
import PatternImage from "../assets/pattern.png"

const stacks = {
    frontend: [
        { name: "HTML", image: HTMLImage },
        { name: "CSS", image: CSSImage },
        { name: "TailwindCSS", image: TailwindCSSImage },
        { name: "Boostrap", image: BoostrapImage },
        { name: "JavaScript", image: JavascriptImage },
        { name: "React", image: ReactImage },
    ],
    backend: [
        { name: "C#", image: CsharpImage },
        { name: "VB.NET", image: VbImage },
        { name: "GO", image: GoImage },
        { name: "Python", image: PythonImage },
        { name: "Java", image: JavaImage },
        { name: "MSSQL", image: MSSQLImage },
        { name: "MySQL", image: MySQLImage },
        { name: "PostgresSQL", image: PostgresSQLImage },
        { name: "MSACCESS", image: MSAccessImage },
        { name: "SQLite", image: SqliteImage },
        { name: "JWT", image: JWTImage },
        { name: "Identity Server", image: IdentityImage },
    ],
    tools: [
        { name: "Visual Studio", image: VSImage },
        { name: "VsCode", image: VSCodeImage },
        { name: "Netbeans", image: NetbeansImage },
        { name: "Figma", image: FigmaImage },
        { name: "Swagger", image: SwaggerImage },
        { name: "OpenApi", image: OpenApiImage },
        { name: "Postman", image: PostmanImage },
    ],
    ai: [
        { name: "Claude", image: ClaudeImage },
        { name: "ChatGpt", image: ChatGptImage },
        { name: "Gemini", image: GeminiImage },
        { name: "Repository Pattern", image: PatternImage },
        { name: "UnitOfWork Pattern", image: PatternImage },
        { name: "Clean Architecture", image: PatternImage },
    ],
};

const TechItem = React.memo(function TechItem({ tech }) {
    return (
        <div className="flex justify-center p-3 md:p-2 items-center min-w-0">
            <img
                src={tech.image}
                className="h-5 w-5 object-contain shrink-0"
                alt={tech.name}
                loading="lazy"
                decoding="async"
            />
            <p className="text-xs md:text-sm text-gray-400">{tech.name}</p>
        </div>
    );
});

const TechItemCompact = React.memo(function TechItemCompact({ tech }) {
    return (
        <div className="p-2 flex justify-center items-center gap-0.5">
            <img
                src={tech.image}
                className="h-5 w-5 object-contain"
                alt={tech.name}
                loading="lazy"
                decoding="async"
            />
            <p className="text-xs md:text-sm text-gray-400">{tech.name}</p>
        </div>
    );
});

function StackComponent() {
    return (
        <div className="px-2 mt-4 min-h-[80vh]">
            <div className="p-2 text-center h-">
                <h3 className="text-2xl font-semibold inline-block border-b-4 border-gray-400 pb-1">
                    TECH STACK
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                    Technologies and tools I use to build desktop and web applications.
                </p>
            </div>

            {/* FrontEnd */}
            <div className="p-2 rounded-2xl">
                <h6 className="text-gray-500 text-sm">FRONTEND</h6>
                <div className="grid grid-cols-2 gap-2 border-b border-gray-100  md:grid-cols-6">
                    {stacks.frontend.map((tech) => (
                        <TechItem key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>

            {/* BackEnd */}
            <div className="p-2">
                <h6 className="text-gray-500 text-sm">BACKEND</h6>
                <div className="grid grid-cols-2 gap-2 border-b border-gray-100  md:grid-cols-6">
                    {stacks.backend.map((tech) => (
                        <TechItem key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className="p-2">
                <h6 className="text-gray-500 text-sm">IDE & API TESTING TOOLS</h6>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 border-b border-gray-100">
                    {stacks.tools.map((tech) => (
                        <TechItemCompact key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>

            {/* AI & Architecture */}
            <div className="p-2">
                <h6 className="text-gray-500 text-sm">AI & ARCHITECTURE</h6>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 border-b border-gray-100">
                    {stacks.ai.map((tech) => (
                        <TechItemCompact key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}


export const Stack = React.memo(StackComponent);