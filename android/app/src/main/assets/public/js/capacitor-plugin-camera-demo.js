


window.customElements.define('capacitor-plugin-camera-demo', class extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });

    root.innerHTML = `
    <div>
        <h2>Capacitor.Plugins.Camera</h2>
        <button id="button">Take Photo</button><br>
        <img id="photo" style="max-width:100%; margin-top:15px;"/>
    </div>
    `

    this.addEventListener('click', this.takePicture);

  }

async takePicture() {
    const image = await Capacitor.Plugins.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: 'base64'
    });
    var imageUrl = image.base64_data;
    console.log(this.shadowRoot);
    this.shadowRoot.getElementById("photo").src = imageUrl;
}
  
});