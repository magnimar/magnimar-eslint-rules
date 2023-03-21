import {test} from 'vitest';
import rule from "./no-console-log";
import { RuleTester } from "eslint";

test("no console log", () => {

    var ruleTester = new RuleTester();
    ruleTester.run("no-console-log", rule, {
        valid: ["console.error", "console.warn"],
        invalid: [
            {
                code: "console.log()",
                errors: [
                    {
                        message: "Do not use console.log. Use console.error instead.",
                    }
                ]
            },
            {
                code: "console.log('Hello world')",
                errors: [
                    {
                        message: "Do not use console.log. Use console.error instead.",
                    }
                ]
            },
            {
                code: "console.log('Hello world', 'Hello world')",
                errors: [
                    {
                        message: "Do not use console.log. Use console.error instead.",
                    }
                ]
            },
            {
                code: "console.log('Hello world', 'Hello world', 'Hello world')",
                errors: [
                    {
                        message: "Do not use console.log. Use console.error instead.",
                    }
                ]
            }
        ]
    });
});
