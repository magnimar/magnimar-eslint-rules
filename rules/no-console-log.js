module.exports = {
    meta: {
        messages: {
            avoidName: "Do not use console.log. Use console.error instead."
        }
    },
    create(context) {
        return {
            CallExpression(node) {
                if (
                    node.callee.type == 'MemberExpression' &&
                    node.callee.object.name == 'console' &&
                    node.callee.property.name == 'log'
                    ) {
                    context.report({
                        node,
                        messageId: "avoidName"
                    });
                }
            }
        }
    }
}