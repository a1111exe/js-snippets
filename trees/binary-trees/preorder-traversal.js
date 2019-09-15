/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let traversal = [];
    
    let stack = [ [ root, false, false ] ];
    
    while (stack.length) {
        const node = stack[0][0];
        
        if (node === null) {
            // The node is null, ascending
            stack.shift();
            continue;
        }
        
        const lvisited = stack[0][1];
        const rvisited = stack[0][2];
        
        if (node.val !== null && !(lvisited || rvisited)) {
            // 1st time visited: traversing value
            traversal.push(node.val);
        }
        
        if (!lvisited) {
            // Left node now visited, mark so
            stack[0][1] = true;
            
            if (node.left !== null) {
                // Descending into the left node
                stack.unshift([ node.left, false, false ]);
            } else {
                // Going to descent into the right node on the next iteration
                continue;
            }
        } else if (!rvisited) {
            // Right node now visited, mark so
            stack[0][2] = true;
            
            if (node.right !== null) {
                // Descending into the right node
                stack.unshift([ node.right, false, false ]);
            } else {
                // Ascending
                stack.shift();
                continue;
            }
        } else {
            // Both visited, ascending
            stack.shift();
        }
    }
    
    return traversal;
};
