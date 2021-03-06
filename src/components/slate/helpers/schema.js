import { Block } from 'slate';

const schema = {
    document: {
        nodes: [
            { match: { type: 'title' }, min: 1, max: 1 },
            { match: { type: 'paragraph' }, min: 1 },
        ],
        normalize: (editor, { code, node, child, index }) => {
            switch (code) {
                case 'child_type_invalid': {
                    const type = index === 0 ? 'title' : 'paragraph'
                    return editor.setNodeByKey(child.key, type)
                }
                case 'child_min_invalid': {
                    const block = Block.create(index === 0 ? 'title' : 'paragraph')
                    return editor.insertNodeByKey(node.key, index, block)
                }
            }
        },
    },
}

export default schema;