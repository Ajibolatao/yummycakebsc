"use strict";
const
    ycakeAddress = "0x6b031B57ebB82F22a3804a79463ed31230EE3C39", //contract address
    Web3Modal = window.Web3Modal.default,
    WalletConnectProvider = window.WalletConnectProvider.default,
    Fortmatic = window.Fortmatic,
    evmChains = window.evmChains;
let web3Modal, provider, selectedAccount;
let ycaketoken = "0xa62cdd8e357Bb4407671f329dd3Dab975120c7F3"; //mainnet 0xa62cdd8e357Bb4407671f329dd3Dab975120c7F3

function init() {
    hidePurchase();
    if (
        (console.log("Initializing example"),
            console.log("WalletConnectProvider is", WalletConnectProvider),
            console.log("Fortmatic is", Fortmatic),
            console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum),
        "https:" !== location.protocol)
    ) {
    }
    (web3Modal = new Web3Modal({ cacheProvider: !1, providerOptions: {
            walletconnect:
                { package: WalletConnectProvider,
                    options: { rpc: { 56: "https://bsc-dataseed.binance.org/" },
                    //options: { rpc: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
                        network: "binance" } }
        } })),//, disableInjectedProvider: !1

        console.log("Web3Modal instance is", web3Modal);
}

function refreshWinInfo(ycakeContract) {
    ycakeContract.methods.lastWinner().call().then(function(result) {
        if (result) {
            console.log(selectedAccount)
            if (result.toLowerCase() == selectedAccount.toLowerCase()) {

            }
            document.querySelector("#owner").textContent = result;
        }
    });
}

function soldTickets(ycakeContract) {
    ycakeContract.methods.ticketSold().call().then(function(resultSoldTickets) {
        if (resultSoldTickets) {
            console.log("Ticket Buy: " + resultSoldTickets);
                    if (resultSoldTickets == 0) {
                    console.log("The round will start " + resultSoldTickets);
                    } else {
                    alert("the round will end in " + resultSoldTickets + " users");
                    console.log("The round will end in " + resultSoldTickets + " users");
                    }
            }
    });
}

function soldTicketsCheck(ycakeContract) {
    var newWinner = document.querySelector("#owner").textContent;
    console.log("Actual Winner is: " + newWinner);
    ycakeContract.methods.ticketSold().call().then(function(resultSoldTickets) {
        if (resultSoldTickets) {
            console.log("Ticket Buy: " + resultSoldTickets);
                    if (resultSoldTickets == 0) {
                    console.log("The round is finished " + resultSoldTickets);
                        if (newWinner == selectedAccount) {
                        alert("The round is finished. You Won! Congratulations!!") } else {
                        alert("The round is finished. You lost...")
                        }
                    } else {
                    alert("the round will end in " + resultSoldTickets + " users");
                    console.log("The round will end in " + resultSoldTickets + " users");
                    }
            }
    });
}

async function showConnected() {
    showPurchase();
    const web3 = new Web3(provider);
    var minbuy = 0.006
    console.log("Web3 instance is", web3);
    const t = await web3.eth.getChainId();
    const n = await web3.eth.getAccounts();
    console.log("Got accounts", n), (selectedAccount = n[0]);
    let ycakeContract = new web3.eth.Contract(ycake, ycakeAddress);
    refreshWinInfo(ycakeContract);
    soldTickets(ycakeContract);
    document.querySelector("#refresh").addEventListener("click", (click) => {
    showPurchase();
    });
    document.querySelector("#buy").addEventListener("click", (click) => {
        click.preventDefault();
        buyprocess();
        if (0.006 == minbuy) {
        web3.eth
          .sendTransaction({
            from: selectedAccount,
            to: ycakeAddress,
            value: "6000000000000000000",
          })
          .then(function (resultSoldTickets) {
            if (resultSoldTickets) {
              soldTicketsCheck(ycakeContract);
              refreshWinInfo(ycakeContract);
              showPurchase();
            }
          });
                } else {
            alert("The ticket cost 0.006 BNB.");
            rejectbuyprocess();
        }
    })
}

function hidePurchase() {
    document.querySelector("#connect").style.display = "block";
    document.querySelector("#buy").style.display = "none";
    document.querySelector("#showprice").style.display = "none";
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#res3").style.display = "none";
}

function showPurchase() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#connect").style.display = "none";
    document.querySelector("#buy").style.display = "block";
    document.querySelector("#showprice").style.display = "block";
    document.querySelector("#refresh").style.display = "none";
    document.querySelector("#res3").style.display = "block";
}

function buyprocess() {
    document.querySelector("#loader").style.display = "block";
    document.querySelector("#buy").style.display = "none";
    document.querySelector("#showprice").style.display = "none";
    document.querySelector("#refresh").style.display = "block";
    document.querySelector("#res3").style.display = "block";
}

function rejectbuyprocess() {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#buy").style.display = "block";
    document.querySelector("#showprice").style.display = "block";
    document.querySelector("#refresh").style.display = "none";
    document.querySelector("#res3").style.display = "block";
}

async function onConnect(e) {
    console.log("Opening a dialog", web3Modal);
    try {
        e.preventDefault();
        provider = await web3Modal.connect();
    } catch (e) {
        return void console.log("Could not get a wallet connection", e);
    }
    provider.on("accountsChanged", (e) => {
        showConnected()
    }),
        provider.on("chainChanged", (e) => {
            showConnected()
        }),
        provider.on("networkChanged", (e) => {
            showConnected()
        }),
        await         showConnected()
    ;
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);
    if(provider != undefined) {
        provider.close && (await provider.close(), await web3Modal.clearCachedProvider(), (provider = null))
    }
    selectedAccount = null;
}

window.addEventListener("load", async () => {
    init(), document.querySelector("#connect").addEventListener("click", e => onConnect(e));
});