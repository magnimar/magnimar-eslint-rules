module.exports = {
    meta: {
        messages: {
            avoidName: "Avoid using moment.js. Use date-fns instead."
        }
    },
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === "moment") {
                    context.report({
                        node,
                        messageId: "avoidName"
                    });
                }
            }
        }
    }
}