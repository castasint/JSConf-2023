
SELECT std.id, std."name", SUM(std_mrk.mark)
FROM STUDENTS std JOIN student_marks std_mrk 
ON std_mrk.student_id = std.id
GROUP BY std.id
ORDER BY SUM(std_mrk.mark) DESC