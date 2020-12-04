// N皇后问题
function solveNQueens(n) {
  const result = []
  const baseBoard = Array.from(Array(n), () => '.'.repeat(n))

  function isValid(board, row, col) {
    // 纵向判断
    if (board.map((item) => item[col]).indexOf('Q') > -1) return false
    // 45°方向判断
    for (let i = 1; col + i < n && row - i > -1; i++) {
      if (board[row - i][col + i] === 'Q') return false
    }
    // 135°方向判断
    for (let j = 1; col - j > -1 && row - j > -1; j++) {
      if (board[row - j][col - j] === 'Q') return false
    }

    return true
  }

  function backtrack(board, row) {
    if (row === n) {
      result.push([...board])
      return
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) continue

      const arr = board[row].split('')
      arr[col] = 'Q'

      board[row] = arr.join('')
      backtrack(board, row + 1)
      board[row] = '.'.repeat(n)
    }
  }

  backtrack(baseBoard, 0)

  return result
}
