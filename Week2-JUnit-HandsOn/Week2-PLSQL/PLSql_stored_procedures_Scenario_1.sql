BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE SavingsAccounts';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE SavingsAccounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(50),
  Balance NUMBER
);

INSERT INTO SavingsAccounts VALUES (101, 'John', 1000);
INSERT INTO SavingsAccounts VALUES (102, 'Alice', 1500);
INSERT INTO SavingsAccounts VALUES (103, 'Bob', 2000);

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT * FROM SavingsAccounts) LOOP
    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
END;
/

BEGIN
  ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccounts;
