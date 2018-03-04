window.customElements.define('capacitor-plugin-device-demo', class extends HTMLElement {
  constructor() {
    super();

    async function getDeviceInfo() {
        const deviceInfo = await Capacitor.Plugins.Device.getInfo();
        var deviceInfoString = JSON.stringify(deviceInfo, null, 2);
        root.getElementById("deviceInfo").innerHTML = deviceInfoString;
    }

    const root = this.attachShadow({ mode: 'closed' });

    root.innerHTML = `
    <div>
        <h2>Capacitor.Plugins.Device</h2>
        <pre id="deviceInfo"></pre>
    </div>
    `

    getDeviceInfo();

  }
});