
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Accounts';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE Accounts (
  CustomerID NUMBER,
  Name VARCHAR2(50),
  Balance NUMBER,
  IsVIP VARCHAR2(5)
);

INSERT INTO Accounts VALUES (1, 'John', 9500, 'FALSE');
INSERT INTO Accounts VALUES (2, 'Alice', 12000, 'FALSE');
INSERT INTO Accounts VALUES (3, 'Mark', 15000, 'FALSE');

BEGIN
  FOR acc IN (SELECT * FROM Accounts) LOOP
    IF acc.Balance > 10000 THEN
      UPDATE Accounts
      SET IsVIP = 'TRUE'
      WHERE CustomerID = acc.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

SELECT * FROM Accounts;
