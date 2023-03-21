import {test} from 'vitest';
import rule from "./no-snake-case";
import { RuleTester } from "eslint";


test("no snake case", () => {

    var ruleTester = new RuleTester();
    ruleTester.run("no-snake-case", rule, {
    
        valid: [
            "function camelCase(){}"
        ],
        
        invalid: [
            {
                code: "function snake_case(){}",
                errors: [
                    {
                        message: "Do not use camel case. Use snake case instead.",
                    }
                ],
                output: "function snakeCase(){}"
            }
        ]
    });
});


