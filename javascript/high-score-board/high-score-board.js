export function createScoreBoard(pontuacao) {
  pontuacao = {"The Best Ever": 1000000};
  return pontuacao;
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
 for (const bonus in scoreBoard){
   scoreBoard[bonus] += 100;
 }
  return scoreBoard;
}

export function normalizeScore(params) {
 return params.normalizeFunction(params.score);
}
