import React, { useState, useEffect } from 'react';
import web3 from 'web3';
let Web3;
let contract ="";
let ABI;


function Web3Ui(){

    useEffect(()=>{
   Web3 = new web3('http://localhost:7545');
   contract ="0x295634E47E74234e3ECBa1AE390DA7c4000f9e52";
   ABI =[{
				"inputs": [],
				"name": "retrieve",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "num",
						"type": "uint256"
					}
				],
				"name": "store",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
            }];
            let storage = new Web3.eth.Contract(ABI,contract);
            storage.methods.store(100).send({from:"0x6b2784309530AAda5c32AaB76E2C3F8438854137"}).then((res)=>{
                console.log(res);
            })
             storage.methods.retrieve().call().then((response)=>{
               console.log(response);
           })


   
   
    },[])

    return "abi page"

}

export default Web3Ui;