
var qrcode = $('#qrcode');

App = {
  loading: false,
  contracts: {},

  load: async () => {
    // Load app...
    // console.log("app loading...")
    await App.loadWeb3()
    await App.loadAccount()
    await App.loadContract()

    await App.render()
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  loadWeb3: async () => {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      window.alert("Please connect to Metamask.")
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum)
      try {
        // Request account access if needed
        await ethereum.enable()
        // Acccounts now exposed
        web3.eth.sendTransaction({/* ... */})
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  loadAccount: async () => {
    // Set the current blockchain account
    // App.account = web3.eth.accounts[0]
    App.account = (await web3.eth.getAccounts())[0];
    // console.log(App.account)
  },

  loadContract: async () => {
    // Create a JavaScript version of the smart contract
    const demo = await $.getJSON('Demo.json');
    App.contracts.Demo = TruffleContract(demo);
    App.contracts.Demo.setProvider(App.web3Provider)

    // Hydrate the smart contract with values from the blockchain
    App.demo = await App.contracts.Demo.deployed();
    
  },

  render: async () => {
    // $('#account').html(App.account)
    // Prevent double render
    if (App.loading) {
      return
    }

    // Update app loading state
    App.setLoading(true)

    // Render Account
    $('#account').html(App.account)

    // Render Tasks
    await App.renderData()

    // Update loading state
    App.setLoading(false)
  },

  renderData: async () => {
    // Load the total task count from the blockchain
    const dataCount = await App.demo.dataCount();
    const $datumTemplate = $('.datumTemplate')

    // Render out each task with a new task template
    for (var i = 1; i <= dataCount; i++) {
      // Fetch the task data from the blockchain
      const datum = await App.demo.data(i)
      const datumID = datum[0].toNumber()
      const datumContent = datum[1]

      // Create the html for the datum
      const $newDatumTemplate = $datumTemplate.clone()
      $newDatumTemplate.find('.content').html(datumContent)

      // Put the task in the correct list
      $('#dataList').append($newDatumTemplate)

      if (localStorage.getItem('qr') && dataCount > 1){
          qrcode.prop('src',localStorage.getItem('qr') );
          qrcode.show();
      }

      // Show the task
      $newDatumTemplate.show()
    }
  },

  createDatum: async () => {
    App.setLoading(true)
    const content = $('#newDatum').val()
    // https://stackoverflow.com/questions/67273763/blockchain-tutorial-error-the-send-transactions-from-field-must-be-defined
    // await App.demo.createTask(content)
    await App.demo.createDatum(content, {from: App.account})

    var response = await fetch('http://localhost:5000/qr', {
      method: 'POST',
      body: JSON.stringify({
        datum:content
      }), // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    localStorage.setItem('qr', response.qr);
    // refresh the page to refetch the tasks
    window.location.reload()
  },



  setLoading: (boolean) => {
    App.loading = boolean
    const loader = $('#loader')
    const content = $('#content')
    if (boolean) {
      loader.show()
      content.hide()
    } else {
      loader.hide()
      content.show()
    }
  }
}

$(() => {
  $(window).load(() => {
    App.load()
  })
})