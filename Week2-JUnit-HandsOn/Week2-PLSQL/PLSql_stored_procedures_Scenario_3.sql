BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE BankAccounts';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE BankAccounts (
  AccountID NUMBER PRIMARY KEY,
  AccountHolder VARCHAR2(50),
  Balance NUMBER
);


INSERT INTO BankAccounts VALUES (1, 'Mohan', 5000);
INSERT INTO BankAccounts VALUES (2, 'Sundar', 3000);

CREATE OR REPLACE PROCEDURE TransferFunds (
  fromAccID IN NUMBER,
  toAccID IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_balance EXCEPTION;
BEGIN

  DECLARE
    from_balance NUMBER;
  BEGIN
    SELECT Balance INTO from_balance FROM BankAccounts WHERE AccountID = fromAccID;
    IF from_balance < amount THEN
      RAISE insufficient_balance;
    END IF;
  END;


  UPDATE BankAccounts
  SET Balance = Balance - amount
  WHERE AccountID = fromAccID;

  UPDATE BankAccounts
  SET Balance = Balance + amount
  WHERE AccountID = toAccID;

  DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' successfully.');
EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in source account.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed due to an error: ' || SQLERRM);
END;
/


BEGIN
  TransferFunds(1, 2, 2000);
END;
/

SELECT * FROM BankAccounts;
