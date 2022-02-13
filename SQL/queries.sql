-- fetch some values
-- 1. Pieces of týpe knight and and of color black
SELECT * FROM Pieces WHERE color='B' and type="N";
-- 2. The number of pieces in a specific game
 SELECT COUNT(*) FROM Game_contains_Pieces WHERE Game_ID=1 and Position NOT NULL;
 -- 3. The number of moves in a specific Opening
-- SELECT COUNT(*) FROM  STRING_SPLIT(Openings.Sequence_moves, " ") WHERE Openings.name_m="Sicilian Defense";
-- 4. The number of openings that start with a specific move
-- SELECT COUNT(*) FROM  Openings WHERE PARSENAME(REPLACE(Openings.Sequence_moves, ' ', '.'), 2) = "e4";
-- 5. The username of the players with more than n wins
SELECT Users.username FROM  Users WHERE Users.wins>10;
-- 6.The average of wins for users
SELECT avg(wins) FROM Users;
-- 7.The Openings starting with a knight move
-- SELECT * FROM Openings WHERE SUBSTR(Openings.Sequence_moves, 3, 3)='N';
-- 8.Game IDs of games with only users playing
SELECT p.Game_ID
FROM Full_Game p
    INNER JOIN Player_play_full_game g ON NOT ( (g.Username = "easy_bot") AND NOT (g.Username = "med_bot") AND NOT (g.Username = "hard_bot") )
    AND p.Game_ID = g.Game_ID;
-- 9.Sequence of moves of a color in simulation (group by)
 SELECT   COUNT(B.Username)
 FROM Bot B
 GROUP BY B.Difficulty;
 -- 10 end game moves in simulated games
SELECT O.Piece_ID,O.Sequence_moves,G.Piece_ID
FROM  SUBSTRING (PARSENAME((Replace(PARSENAME(Opening.Sequence_moves),2)," ", "."), 1)) O
    INNER JOIN Game_contains_Pieces G ON G.Position = O.Sequence_moves