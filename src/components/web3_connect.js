import React, { useState, useEffect } from 'react';
import web3 from 'web3';
let Web3;

function Web3Con() {
  const [accounts, getAccounts] = useState([]);
  //   const updatedList = accounts.map((listItems) => {
  //     return <li>{listItems}</li>;
  //   });
  //   const getBalance=()=>{
  //       let balance
  //      accounts.map((listItems)=>{

  //      })

  useEffect(() => {
    newAccounts();
    //   getAccounts(getall);
  }, []);

  const newAccounts = async () => {
    Web3 = new web3('http://localhost:7545');
    const accountDetails = await Web3.eth.getAccounts();
    let accountsummary = [];

    for (let i in accountDetails) {
      //   let newAccount = {
      //     address: account,
      //     balance: 0,
      //     txnCount: 0,
      //   };
      let balance = await Web3.eth.getBalance(accountDetails[i]);
      balance = Web3.utils.fromWei(balance, 'ether');
      let txnCount = await Web3.eth.getTransactionCount(accountDetails[i]);
      let newAccount = {
        address: accountDetails[i],
        balance,
        txnCount,
      };
      accountsummary.push(newAccount);
    }
    getAccounts(accountsummary);
  };

  return (
    <>
      <h1>ETHERIUM accounts a{accounts.length}</h1>

      <table style={{ border: '1px solid black' }}>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>account address</th>
          <th style={{ border: '1px solid black' }}>balance</th>
          <th style={{ border: '1px solid black' }}>transaction count</th>
        </tr>
        {accounts.map((acc) => {
          return (
            <tr style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black' }}>{acc.address}</td>
              <td style={{ border: '1px solid black' }}>{acc.balance}</td>
              <td style={{ border: '1px solid black' }}>{acc.txnCount}</td>
            </tr>
          );
        })}
      </table>
      {/* <input type = "button" onClick={getBalance} /> */}
    </>
  );
}
export default Web3Con;
