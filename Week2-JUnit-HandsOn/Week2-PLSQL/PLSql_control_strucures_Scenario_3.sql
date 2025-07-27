
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE Loans (
  LoanID NUMBER,
  CustomerName VARCHAR2(50),
  DueDate DATE
);

INSERT INTO Loans VALUES (101, 'John', SYSDATE + 10);
INSERT INTO Loans VALUES (102, 'Alice', SYSDATE + 40);
INSERT INTO Loans VALUES (103, 'Bob', SYSDATE + 5);

BEGIN
  FOR loan_rec IN (
    SELECT * FROM Loans
    WHERE DueDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID || 
                         ' for ' || loan_rec.CustomerName || 
                         ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/
