// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    if (matrix.length > 1) {
        let result = [];
        if (Array.isArray(matrix[0])) {
            for (let i = 0; i < matrix.length; i++) {
                if (i % 2 === 0) {
                    for (let w = 0; w < matrix[i].length; w++) {
                        result.push(matrix[i][w]);
                    }
                } else {
                    for (let w = matrix[i].length - 1; w > -1; w--) {
                        result.push(matrix[i][w]);
                    }
                }
            }
        } else {
            for (let i = 0; i < matrix.length; i++) {
                result.push(matrix[i]);
            }
        }

        return result;
    } else {
        return [];
    }
}
