import {test} from 'vitest';
import rule from "./no-moment";
import { RuleTester } from "eslint";

test("no moment", () => {

    var ruleTester = new RuleTester();
    ruleTester.run("no-moment", rule, {
        valid: ["dateFns, date-fns"],
        invalid: [
            {
                code: "moment()",
                errors: [
                    {
                        message: "Avoid using moment.js. Use date-fns instead.",
                    }
                ]
            },
            {
                code: "moment('20111031', 'YYYYMMDD').fromNow()",
                errors: [
                    {
                        message: "Avoid using moment.js. Use date-fns instead.",
                    }
                ]
            }
        ]
    });
});
