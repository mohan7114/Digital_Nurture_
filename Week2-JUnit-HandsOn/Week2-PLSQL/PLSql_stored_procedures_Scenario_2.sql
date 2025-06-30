
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE Employees (
  EmpID NUMBER PRIMARY KEY,
  EmpName VARCHAR2(50),
  Department VARCHAR2(30),
  Salary NUMBER
);

INSERT INTO Employees VALUES (1, 'Amit', 'IT', 50000);
INSERT INTO Employees VALUES (2, 'Neha', 'HR', 45000);
INSERT INTO Employees VALUES (3, 'Ravi', 'IT', 60000);

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  deptName IN VARCHAR2,
  bonusPercent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonusPercent / 100)
  WHERE Department = deptName;
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

SELECT * FROM Employees;
