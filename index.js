const {ipcRenderer} = require('electron')
var opener = require("opener");

      function testytest() {
        opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/.hide/bin/Installer.app")
      }

      function Start() {
        opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/.hide/bin/Start.app")
      }

      function Stop() {
        opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/.hide/bin/Stop.app")
      }

      function Uninstall() {
        opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/.hide/bin/Uninstall.app")
      }
//opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/Uninstall.app")
//opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/Start.app")
//opener ("/Users/michaeldimmitt/new_h/temp/Aerial_Desktop/Stop.app")

document.addEventListener('DOMContentLoaded', () => {
  let n = new Notification('You did it!', {
    body: 'Nice work.'
  })

  // Tell the notification to show the menubar popup window on click
  n.onclick = () => { ipcRenderer.send('show-window') }

})
