module.exports = {
    meta: {
        fixable: "code",
        messages: {
            avoidName: "Do not use camel case. Use snake case instead."
        }
    },
    create(context) {
        return {
            Identifier(node) {
                if (
                    node.name.includes('_') && 
                    node.parent.type === 'FunctionDeclaration'
                    ) {
                    context.report({
                        node,
                        messageId: "avoidName",
                        fix(fixer) {
                            return fixer.replaceText(
                                node, 
                                node.name.replace(/_(\w)/g, (match, p1) => p1.toUpperCase()));
                        }
                    });
                }
            }
        }
    }
}